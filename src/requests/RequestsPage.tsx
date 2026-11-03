import { useEffect, useState, type FormEvent } from 'react';

type RequestEntry = { id: string; text: string; createdAt: string };

export function RequestsPage() {
  const [entries, setEntries] = useState<RequestEntry[]>([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/requests', { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error(); return response.json(); })
      .then((data: RequestEntry[]) => { setEntries(data); setLoading(false); })
      .catch(() => { if (!controller.signal.aborted) { setError('Could not load requests. Refresh to try again.'); setLoading(false); } });
    return () => controller.abort();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const request = text.trim();
    if (!request || saving) return;
    setSaving(true); setError(''); setNotice('');
    try {
      const response = await fetch('/api/requests', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: request }) });
      if (!response.ok) throw new Error();
      const entry: RequestEntry = await response.json();
      setEntries(previous => [entry, ...previous]);
      setText(''); setNotice('Request submitted.');
    } catch { setError('Could not submit your request. Please try again.'); }
    finally { setSaving(false); }
  }

  return <section className="requests-page">
    <h1>Requests</h1>
    <p>What would you like to see added or improved?</p>
    <form className="request-form" onSubmit={submit}>
      <label htmlFor="request-text">Your request <span aria-hidden="true">*</span></label>
      <textarea id="request-text" required maxLength={2000} rows={5} value={text} onChange={event => { setText(event.target.value); setNotice(''); }} placeholder="Tell us what you have in mind" />
      <button className="request-submit" type="submit" disabled={saving || !text.trim()}>{saving ? 'Submitting…' : 'Submit request'}</button>
    </form>
    {error && <p className="request-error" role="alert">{error}</p>}
    {notice && <p className="request-notice" role="status">{notice}</p>}
    <div className="request-history">
      <h2>Requests</h2>
      {loading ? <p>Loading requests…</p> : entries.length === 0 ? <p>No requests yet.</p> : <ul>{entries.map(entry => <li key={entry.id}><p>{entry.text}</p><time dateTime={entry.createdAt}>{new Date(entry.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</time></li>)}</ul>}
    </div>
  </section>;
}
