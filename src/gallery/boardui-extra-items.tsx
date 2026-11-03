import {useState} from 'react';
import {AppShell} from '../vendor/boardui/upstream/components/application/app-shell/app-shell';
import {DashboardSidebar} from '../vendor/boardui/upstream/components/application/dashboard/dashboard-sidebar';
import {WorkingRow} from '../vendor/boardui/upstream/components/application/agent-log/agent-log';
import {Home,FileText} from 'lucide-react';
import {Switch} from '../vendor/boardui/upstream/components/base/switch/switch';
import {Badge} from '../vendor/boardui/upstream/components/base/badges/badge';
import {MeetingScheduler} from '../vendor/boardui/upstream/components/base/date-picker/meeting-scheduler';
import {AgentComposer} from '../vendor/boardui/upstream/components/application/agent-chat/agent-composer';
import {AgentMessage} from '../vendor/boardui/upstream/components/application/agent-chat/agent-chat-message';
import {SettingsModal} from '../vendor/boardui/upstream/components/application/settings/settings-modal';
import type {GalleryItem} from './items';
function Composer(){const [value,set]=useState('');return <AgentComposer provider="Local preview" value={value} onValueChange={set} onSubmit={()=>set('')} onStop={()=>{}} busy={false} messageCount={0}/>}
function LocalTheme(){const [dark,setDark]=useState(true);return <div className="board-theme-preview" data-dark={dark}><Switch isSelected={dark} onChange={setDark}>Dark mode</Switch><span>{dark ? "Dark" : "Light"} preview</span></div>}
function Settings(){const [open,set]=useState(false);return <><button className="save" onClick={()=>set(true)}>Open settings</button><SettingsModal isOpen={open} onClose={()=>set(false)}/></>}
const source='BoardUI';const base='https://www.boardui.com/components/';
export const boarduiExtraItems:GalleryItem[]=[
 {id:'boardui-theme-toggle',name:'Theme toggle',category:'Controls',source,sourceUrl:base+'theme-toggle',render:()=> <LocalTheme/>},
 {id:'boardui-app-shell',name:'App shell',category:'Controls',source,sourceUrl:base+'chat-starter',render:()=> <div className="board-shell-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest('a'))e.preventDefault()}}><AppShell title="Workspace" actions={null}><div>Workspace content</div></AppShell></div>},
 {id:'boardui-sidebar',name:'Sidebar',category:'Controls',source,sourceUrl:base+'sidebar',render:()=> <DashboardSidebar fluid showThemeToggle={false} items={[{key:'home',label:'Home',icon:Home},{key:'files',label:'Files',icon:FileText}]} />},
 {id:'boardui-agent-log',name:'Agent log',category:'AI',source,sourceUrl:base+'agent-thinking',render:()=> <WorkingRow label="Reviewing the details" reduce={false}/>},
 {id:'boardui-badge',name:'Badge',category:'Controls',source,sourceUrl:base+'badge',render:()=> <Badge>3</Badge>},
 {id:'boardui-meeting-scheduler',name:'Meeting scheduler',category:'Inputs',source,sourceUrl:base+'date-picker',render:()=> <MeetingScheduler/>},
 {id:'boardui-agent-composer',name:'Agent composer',category:'Chat',source,sourceUrl:base+'chat-starter',render:()=> <Composer/>},
 {id:'boardui-agent-message',name:'Agent message',category:'Chat',source,sourceUrl:base+'chat-starter',render:()=> <AgentMessage role="assistant" text="Your workflow is ready to review."/>},
 {id:'boardui-settings-modal',name:'Settings modal',category:'Controls',source,sourceUrl:base+'settings-modal',render:()=> <Settings/>},
];
