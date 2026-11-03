import {useState} from 'react';
import {NavigationMenu,NavigationMenuList,NavigationMenuItem,NavigationMenuTrigger,NavigationMenuContent} from '../vendor/kobra/navigation-menu';
import {Conversation,ConversationBubble,ConversationContent} from '../vendor/kobra/conversation';
import {HalftoneDots} from '../vendor/kobra/halftone-dots';
import {MenuIcon,PlayPauseIcon} from '../vendor/kobra/morphing-icons';
import {SoundEffects,SoundToggle} from '../vendor/kobra/sound';
import {Video} from '../vendor/kobra/video';
import {CommandMenu,openCommandMenu} from '../vendor/kobra/command-menu';
import type {GalleryItem} from './items';
function Menu(){return <NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Explore</NavigationMenuTrigger><NavigationMenuContent><div className="kobra-nav-content">Overview<br/>Components<br/>Updates</div></NavigationMenuContent></NavigationMenuItem></NavigationMenuList></NavigationMenu>}
function Morph(){const [open,set]=useState(false);return <div className="kobra-morph"><button aria-label="Toggle icon" aria-pressed={open} onClick={()=>set(!open)}><MenuIcon open={open}/></button><button aria-label="Toggle playback icon" aria-pressed={open} onClick={()=>set(!open)}><PlayPauseIcon playing={open}/></button></div>}
function Commands(){const [choice,set]=useState('');return <div><button className="save" onClick={()=>openCommandMenu()}>Open commands</button><span>{choice}</span><CommandMenu actions={[{id:'search',label:'Search',action:()=>set('Search')},{id:'settings',label:'Settings',action:()=>set('Settings')}]}/></div>}
export const kobraMoreItems:GalleryItem[]=[
 {id:'kobra-navigation-menu',name:'Navigation menu',category:'Controls',source:'Kobra',sourceUrl:'https://kobra.systems/components/navigation-menu',render:()=> <Menu/>},
 {id:'kobra-conversation',name:'Conversation',category:'Chat',source:'Kobra',sourceUrl:'https://kobra.systems/components/conversation',render:()=> <Conversation><ConversationBubble align="start"><ConversationContent>Hello! How can I help?</ConversationContent></ConversationBubble><ConversationBubble align="end"><ConversationContent>Let’s get started.</ConversationContent></ConversationBubble></Conversation>},
 {id:'kobra-halftone-dots',name:'Halftone dots',category:'Effects',source:'Kobra',sourceUrl:'https://kobra.systems/components/halftone-dots',render:p=> <HalftoneDots src="/assets/preview-landscape.svg" accent={p.accent} style={{height:150,width:220}}/>},
 {id:'kobra-morphing-icons',name:'Morphing icons',category:'Icons',source:'Kobra',sourceUrl:'https://kobra.systems/components/morphing-icons',render:()=> <Morph/>},
 {id:'kobra-sound',name:'Sound control',category:'Controls',source:'Kobra',sourceUrl:'https://kobra.systems/components/sound',render:()=> <SoundEffects><div className="sound-preview"><SoundToggle className="save"/><button type="button" className="save" data-sound="swoosh">Try a sound</button></div></SoundEffects>},
 {id:'kobra-video',name:'Video player',category:'Effects',source:'Kobra',sourceUrl:'https://kobra.systems/components/video',render:()=> <Video src="/assets/video/liquid.webm" title="Liquid preview" glass="blur"/>},
 {id:'kobra-command-menu',name:'Command menu',category:'Controls',source:'Kobra',sourceUrl:'https://kobra.systems/components/command-menu',render:()=> <Commands/>},
];
