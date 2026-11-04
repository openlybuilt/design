import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { PreviewBoundary } from './PreviewBoundary';
import type { GalleryItem } from './items';
import type { Preferences } from '../types';
export function Preview({item,prefs}:{item:GalleryItem;prefs:Preferences}){
 const ref=useRef<HTMLDivElement>(null); const lastHeight=useRef(180); const [visible,setVisible]=useState(false);
 useEffect(()=>{const node=ref.current;if(!node)return; if(!('IntersectionObserver' in window)){setVisible(true);return;} const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting && node.firstElementChild?.hasChildNodes()) lastHeight.current=node.getBoundingClientRect().height;setVisible(entry.isIntersecting)},{rootMargin:'250px'});observer.observe(node);return()=>observer.disconnect();},[]);
 const preventPreviewNavigation=(event:MouseEvent<HTMLDivElement>)=>{if(event.target instanceof Element && event.target.closest('a[href]'))event.preventDefault()};
 return <div ref={ref} className={'component-preview '+(item.id==='arc-button-primary'?'primary-preview':item.id==='arc-button-secondary'?'secondary-preview':'')} style={!visible?{minHeight:lastHeight.current}:undefined} data-item={item.id} data-primary={prefs.mainButton} data-secondary={prefs.secondaryButton} onClickCapture={preventPreviewNavigation}><div className="demo-content">{visible?<PreviewBoundary>{item.render(prefs)}</PreviewBoundary>:null}</div></div>;
}
