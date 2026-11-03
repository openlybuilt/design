import { useRef, type MouseEvent, type PointerEvent } from 'react';
import { Preview } from './Preview';
import type { GalleryItem } from './items';
import type { Preferences } from '../types';

export function ComponentCard({ item, prefs, sourceUrl }: { item: GalleryItem; prefs: Preferences; sourceUrl?: string }) {
  const link = useRef<HTMLAnchorElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  function rememberPointer(event: PointerEvent<HTMLElement>) {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  }
  function openSource(event: MouseEvent<HTMLElement>) {
    if (!sourceUrl || event.defaultPrevented || event.button !== 0) return;
    if (pointerStart.current && Math.hypot(event.clientX - pointerStart.current.x, event.clientY - pointerStart.current.y) > 5) return;
    const target = event.target;
    if (target instanceof Element && target.closest('a,button,input,textarea,select,option,canvas,video,[contenteditable="true"],[draggable="true"],[role="button"],[role="slider"],[role="checkbox"],[role="switch"],[role="tab"],[role="menuitem"]')) return;
    if (window.getSelection()?.toString()) return;
    link.current?.click();
  }
  return <article className={`component category-${item.category}`} data-has-source={sourceUrl ? 'true' : undefined} onPointerDown={rememberPointer} onClick={openSource}>
    <Preview item={item} prefs={prefs}/>
    <div className="component-footer"><div>
      {sourceUrl ? <a ref={link} className="component-name-link" href={sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.name} from ${item.source} (opens in a new tab)`}>{item.name}</a> : <div>{item.name}</div>}
      {sourceUrl ? <a className="component-source-link" href={sourceUrl} target="_blank" rel="noopener noreferrer">{item.source}</a> : <span className="component-source-label">{item.source}</span>}
    </div></div>
  </article>;
}
