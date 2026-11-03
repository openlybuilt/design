import {Component, useState, type ReactNode} from 'react';
import {Liquid} from 'liquid-gooey';
import {VoiceBeam} from 'voice-glow';
import {MetalFx,MetalText,MetalBadge} from 'metal-fx';
import type {GalleryItem} from './items';
function GooeyDemo(){const [open,set]=useState(false);return <div className="liquid-demo"><Liquid className="liquid-stage" fill="var(--foreground)" filterPadding={100}><Liquid.Item x={open?-45:0} y={open?-32:0} transition="bouncy"><span className="liquid-dot">1</span></Liquid.Item><Liquid.Item x={open?45:0} y={open?-32:0} transition="bouncy"><span className="liquid-dot">2</span></Liquid.Item></Liquid><button className="save" onClick={()=>set(!open)} aria-expanded={open}>Toggle</button></div>}
function VoiceGlowDemo(){const [level,setLevel]=useState(.6);return <div className="voice-glow-preview"><VoiceBeam type="pill" theme="dark" level={level}><div className="voice-glow-demo">Listening</div></VoiceBeam><label>Voice level <input type="range" min="0" max="1" step="0.05" value={level} onChange={e=>setLevel(Number(e.target.value))}/></label></div>}
class MetalPreviewBoundary extends Component<{children:ReactNode; label:string},{failed:boolean}>{
 state={failed:false};
 static getDerivedStateFromError(){return {failed:true};}
 render(){return this.state.failed?<div className="metal-unavailable"><span>{this.props.label}</span><small>Metal animation unavailable</small></div>:this.props.children;}
}
function MetalPreview({children,label,kind}:{children:ReactNode;label:string;kind:string}){return <div className={`metal-preview metal-preview-${kind}`}><MetalPreviewBoundary label={label}>{children}</MetalPreviewBoundary></div>}
export const librariesExtraItems:GalleryItem[]=[
 {id:'libraries-liquid-gooey',name:'Liquid gooey menu',category:'Effects',source:'Libraries.dev',sourceUrl:'https://libraries.dev/gooey',render:()=> <GooeyDemo/>},
 {id:'libraries-voice-glow',name:'Voice glow',category:'Voice',source:'Libraries.dev',sourceUrl:'https://libraries.dev/voice',render:()=> <VoiceGlowDemo/>},
 {id:'libraries-metal-button',name:'Metal button',category:'Effects',source:'Libraries.dev',sourceUrl:'https://libraries.dev/metal',render:()=> <MetalPreview kind="button" label="Continue"><MetalFx variant="button" preset="silver" theme="dark"><button className="metal-demo">Continue</button></MetalFx></MetalPreview>},
 {id:'libraries-metal-text',name:'Metal text',category:'Effects',source:'Libraries.dev',sourceUrl:'https://libraries.dev/metal',render:()=> <MetalPreview kind="text" label="Metal"><MetalText theme="dark" font="600 36px Manrope, sans-serif" color="#ffffff">Metal</MetalText></MetalPreview>},
 {id:'libraries-metal-badge',name:'Metal badge',category:'Effects',source:'Libraries.dev',sourceUrl:'https://libraries.dev/metal',render:()=> <MetalPreview kind="badge" label="New"><MetalBadge theme="dark">New</MetalBadge></MetalPreview>},
];
