import {useState} from 'react';
import {Avatar} from '../vendor/boardui/base/avatar-avatar';
import {Kbd} from '../vendor/boardui/base/kbd-kbd';
import {Divider} from '../vendor/boardui/base/divider-divider';
import {Button} from '../vendor/boardui/base/buttons-button';
import {ButtonGroup,ButtonGroupItem} from '../vendor/boardui/base/buttons-button-group';
import {IconButton} from '../vendor/boardui/base/buttons-icon-button';
import {LinkButton} from '../vendor/boardui/base/buttons-link-button';
import {CloseButton} from '../vendor/boardui/base/buttons-close-button';
import {StatusDot} from '../vendor/boardui/base/badges-status-dot';
import {Chip} from '../vendor/boardui/chip';
import {Plus} from 'lucide-react';
import type {GalleryItem} from './items';
function Group(){const [value,set]=useState('Day');return <ButtonGroup aria-label="Time range">{['Day','Week','Month'].map(label=><ButtonGroupItem key={label} selected={value===label} onClick={()=>set(label)}>{label}</ButtonGroupItem>)}</ButtonGroup>}
function Closable(){const [shown,set]=useState(true);return shown?<div>Message <CloseButton aria-label="Close message" onClick={()=>set(false)}/></div>:<button className="save" onClick={()=>set(true)}>Show message</button>}
const source='BoardUI';
export const boarduiBaseItems:GalleryItem[]=[
 {id:'boardui-avatar',name:'Avatar',category:'Avatars',source,sourceUrl:'https://www.boardui.com/components/avatar',render:()=> <Avatar initials="AM" size="lg"/>},
 {id:'boardui-kbd',name:'Keyboard shortcut',category:'Controls',source,sourceUrl:'https://www.boardui.com/components/badge',render:()=> <Kbd>⌘ K</Kbd>},
 {id:'boardui-divider',name:'Divider',category:'Controls',source,sourceUrl:'https://www.boardui.com/components/divider',render:()=> <Divider>or</Divider>},
 {id:'boardui-button',name:'Button',category:'Buttons',source,sourceUrl:'https://www.boardui.com/components/button',render:()=> <Button variant="secondary">Continue</Button>},
 {id:'boardui-button-group',name:'Button group',category:'Buttons',source,sourceUrl:'https://www.boardui.com/components/button-group',render:()=> <Group/>},
 {id:'boardui-icon-button',name:'Icon button',category:'Buttons',source,sourceUrl:'https://www.boardui.com/components/icon-button',render:()=> <IconButton icon={Plus} aria-label="Add"/>},
 {id:'boardui-link-button',name:'Link button',category:'Buttons',source,sourceUrl:'https://www.boardui.com/components/link-button',render:()=> <LinkButton>Learn more</LinkButton>},
 {id:'boardui-close-button',name:'Close button',category:'Buttons',source,sourceUrl:'https://www.boardui.com/components/close-button',render:()=> <Closable/>},
 {id:'boardui-status-dot',name:'Status dot',category:'Controls',source,sourceUrl:'https://www.boardui.com/components/chip',render:()=> <StatusDot aria-label="Available"/>},
 {id:'boardui-chip',name:'Chip',category:'Controls',source,sourceUrl:'https://www.boardui.com/components/chip',render:()=> <Chip color="lime">Complete</Chip>},
];
