import { defineConfig, type Connect, type Plugin } from 'vite';
import { fontzzFonts } from './src/fontzz';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { readFile, writeFile, rename } from 'node:fs/promises';
import { join, dirname } from 'node:path';
const here = dirname(fileURLToPath(import.meta.url));
const stateFile = join(here, 'preferences.json');
function siteRoutes(): Plugin {
  const rewrite: Connect.NextHandleFunction = (req, _res, next) => {
    const [path, query] = (req.url ?? '/').split('?');
    if (path === '/components' || path === '/components/') req.url = '/components.html' + (query ? `?${query}` : '');
    next();
  };
  return { name: 'site-routes', configureServer(server) { server.middlewares.use(rewrite); }, configurePreviewServer(server) { server.middlewares.use(rewrite); } };
}
const defaults = { page:'#000000', surface:'#111111', input:'#252525', text:'#f5f5f5', muted:'#b8b8b8', accent:'#c6c6c6', success:'#8ddab0', error:'#ffaaaa', warning:'#f2d078', active:'#a5c8ff', font:'Manrope', weight:300, heading:30, body:16, radius:0, spacing:20, speed:140, mainButton:'outlined', secondaryButton:'text', saved:[] as string[] };
function persistence(): Plugin { return { name:'local-preferences', configureServer(server) { server.middlewares.use('/api/preferences', async (req,res) => {
  res.setHeader('Content-Type','application/json'); res.setHeader('Cache-Control','no-store');
  if (req.method === 'GET') { try { const state=JSON.parse(await readFile(stateFile,'utf8')); res.end(JSON.stringify({...defaults,...state})); } catch(e) { if ((e as NodeJS.ErrnoException).code !== 'ENOENT') { res.statusCode=500; res.end(JSON.stringify({error:'Could not read saved preferences'})); return; } res.end(JSON.stringify(defaults)); } return; }
  if (req.method !== 'PUT') {res.statusCode=405;res.end('{}');return;}
  const origin=req.headers.origin; if (origin && origin !== `http://${req.headers.host}`) { res.statusCode=403;res.end('{}');return; }
  try { let body=''; for await (const chunk of req) { body+=chunk; if(body.length>30000) throw Error('Too large'); } const obj=JSON.parse(body); const colors=['page','surface','input','text','muted','accent','success','error','warning','active']; const numeric=['weight','heading','body','radius','spacing','speed']; if(!obj || typeof obj!=='object' || colors.some(k=>!/^#[0-9a-fA-F]{6}$/.test(obj[k])) || numeric.some(k=>typeof obj[k]!=='number'||!Number.isFinite(obj[k])) || !['Manrope','system-ui','Georgia',...fontzzFonts].includes(obj.font) || !['outlined','solid','soft'].includes(obj.mainButton) || !['text','outlined','soft'].includes(obj.secondaryButton) || !Array.isArray(obj.saved) || obj.saved.some((s:unknown)=>typeof s!=='string'||s.length>100)) throw Error('Invalid preferences'); const tmp=stateFile+'.tmp'; await writeFile(tmp,JSON.stringify(obj,null,2)+'\n','utf8'); await rename(tmp,stateFile); res.end(JSON.stringify({ok:true})); } catch { res.statusCode=400; res.end(JSON.stringify({error:'Could not save preferences'})); }
 }); } }; }
export default defineConfig(({ command }) => ({base: command === 'build' ? '/design/' : '/',esbuild:{jsx:'automatic'},optimizeDeps:{esbuildOptions:{jsx:'automatic'}},plugins:[tailwindcss(),siteRoutes(),persistence()],resolve:{alias:{'@':join(here,'src')}},build:{rollupOptions:{input:{design:join(here,'index.html'),components:join(here,'components.html')}}},server:{host:'127.0.0.1',port:4176,strictPort:true,watch:{ignored:[stateFile,`${stateFile}.tmp`]}}}));
