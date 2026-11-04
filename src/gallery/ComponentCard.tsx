import { Preview } from './Preview';
import type { GalleryItem } from './items';
import type { Preferences } from '../types';

export function ComponentCard({ item, prefs, sourceUrl }: { item: GalleryItem; prefs: Preferences; sourceUrl?: string }) {
  return <article className={`component category-${item.category}`}>
    <Preview item={item} prefs={prefs}/>
    <div className="component-footer"><div>
      {sourceUrl ? <a className="component-name-link" href={sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.name} from ${item.source} (opens in a new tab)`}>{item.name}</a> : <div>{item.name}</div>}
      {sourceUrl ? <a className="component-source-link" href={sourceUrl} target="_blank" rel="noopener noreferrer">{item.source}</a> : <span className="component-source-label">{item.source}</span>}
    </div></div>
  </article>;
}
