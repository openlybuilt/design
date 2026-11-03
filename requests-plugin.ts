import { randomUUID } from 'node:crypto';
import { readFile, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Plugin } from 'vite';

type RequestEntry = { id: string; text: string; createdAt: string };

export function requestsPlugin(directory: string): Plugin {
  const file = join(directory, 'requests.json');
  let queue: Promise<unknown> = Promise.resolve();
  async function readRequests(): Promise<RequestEntry[]> {
    try {
      const value: unknown = JSON.parse(await readFile(file, 'utf8'));
      if (!Array.isArray(value)) throw new Error('Invalid requests file');
      return value as RequestEntry[];
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
      throw error;
    }
  }
  return { name: 'local-requests', configureServer(server) {
    server.middlewares.use('/api/requests', async (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-store');
      if (req.method === 'GET') {
        try { await queue; res.end(JSON.stringify(await readRequests())); }
        catch { res.statusCode = 500; res.end(JSON.stringify({ error: 'Could not read requests' })); }
        return;
      }
      if (req.method !== 'POST') { res.statusCode = 405; res.end('{}'); return; }
      if (req.headers.origin && req.headers.origin !== `http://${req.headers.host}`) { res.statusCode = 403; res.end('{}'); return; }
      let text: string;
      try {
        let body = '';
        for await (const chunk of req) { body += chunk; if (body.length > 12000) throw new Error('Too large'); }
        const value: unknown = JSON.parse(body);
        if (!value || typeof value !== 'object' || !('text' in value) || typeof value.text !== 'string') throw new Error('Invalid request');
        text = value.text.trim();
        if (!text || text.length > 2000) throw new Error('Invalid request');
      } catch { res.statusCode = 400; res.end(JSON.stringify({ error: 'Invalid request' })); return; }
      const entry: RequestEntry = { id: randomUUID(), text, createdAt: new Date().toISOString() };
      const save = queue.catch(() => {}).then(async () => {
        const entries = await readRequests();
        const temp = `${file}.${entry.id}.tmp`;
        await writeFile(temp, JSON.stringify([entry, ...entries], null, 2) + '\n', 'utf8');
        await rename(temp, file);
      });
      queue = save.catch(() => {});
      try { await save; res.statusCode = 201; res.end(JSON.stringify(entry)); }
      catch { res.statusCode = 500; res.end(JSON.stringify({ error: 'Could not save request' })); }
    });
  } };
}
