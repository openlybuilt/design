import { useState, type ReactNode } from 'react';
import { SortableDataTable } from '../vendor/arc/sortable-data-table/sortable-data-table';
import { Sparkline } from '../vendor/arc/sparkline/sparkline';
import { Gauge } from '../vendor/arc/gauge/gauge';
import { NumberField } from '../vendor/arc/number-field/number-field';
import { OtpInput } from '../vendor/arc/otp-input/otp-input';
import { EmptyState } from '../vendor/arc/empty-state/empty-state';
import { AnimatedCounter } from '../vendor/arc/animated-counter/animated-counter';
import { PasswordStrength } from '../vendor/arc/password-strength/password-strength';
import { DropdownMenu } from '../vendor/arc/dropdown-menu/dropdown-menu';
import { Button as AffectButton } from '../vendor/affectui/button';
import { Button } from '../vendor/arc/button/button';
import { Input } from '../vendor/arc/input/input';
import { Textarea } from '../vendor/arc/textarea/textarea';
import { Badge } from '../vendor/arc/badge/badge';
import { Alert } from '../vendor/arc/alert/alert';
import { Progress } from '../vendor/arc/progress/progress';
import { Skeleton } from '../vendor/arc/skeleton/skeleton';
import { Switch } from '../vendor/arc/switch/switch';
import { Checkbox } from '../vendor/arc/checkbox/checkbox';
import { DonutChart } from '../vendor/arc/donut-chart/donut-chart';
import { LineChart } from '../vendor/arc/line-chart/line-chart';
import { BarChart } from '../vendor/arc/bar-chart/bar-chart';
import type { Category, Preferences } from '../types';
import { aiItems } from './ai-items';
import { iconItems } from './icon-items';
import { affectItems } from './affect-items';
import { affectExtraItems } from './affect-extra-items';
import { beautifulItems } from './beautiful-items';
import { evilItems } from './evil-items';
import { evilExtraItems } from './evil-demos';
import { evilVariantItems } from './evil-variants';
import { evilBlockItems } from './evil-blocks';
import { flowItems } from './flow-items';
import { arcExtraItems } from './arc-extra-items';
import { arcMoreItems } from './arc-more-items';
import { arcThemeItems } from './arc-theme-items';
import { arcBlockItems } from './arc-block-items';
import { arcDocumentedItems } from './arc-demos';
import { boarduiItems } from './boardui-items';
import { boarduiBaseItems } from './boardui-base-items';
import { boarduiMoreItems } from './boardui-more-items';
import { boarduiDataItems } from './boardui-data-items';
import { boarduiApplicationItems } from './boardui-application-items';
import { boarduiExtraItems } from './boardui-extra-items';
import { boarduiChatItems } from './boardui-chat-items';
import { kobraItems } from './kobra-items';
import { kobraMoreItems } from './kobra-more-items';
import { kobraAdaptedItems } from './kobra-adapted-items';
import { canvasExtraItems } from './canvas-extra-items';
import { canvasObjectItems } from './canvas-object-items';
import { librariesExtraItems } from './libraries-extra-items';
import { transitionItems } from './transition-items';
import { benchoItems } from './bencho-items';
export type GalleryItem = {id:string; name:string; category:Category; source:string; sourceUrl?:string; render:(prefs:Preferences)=>ReactNode};
const points=[24,38,32,55,45,68,61];
const dates=points.map((value,i)=>({key:String(i),label:`Day ${i+1}`,axisLabel:String(i+1),value,values:{runs:value}}));
function OtpDemo(){const [value,setValue]=useState('');return <OtpInput label="Verification code" value={value} onChange={setValue}/>;}
function DropdownDemo(){const [choice,setChoice]=useState('');return <div className="dropdown-demo"><DropdownMenu label="Actions" items={['Edit','Duplicate','Archive'].map(label=>({label,onSelect:()=>setChoice(label)}))}/><span aria-live="polite">{choice && `${choice} selected`}</span></div>;}
const tableColumns = [{key:'name',label:'Workflow',sortable:true},{key:'status',label:'Status',sortable:true}];
const tableRows = [{id:'1',name:'Intake',status:'Ready'},{id:'2',name:'Follow-up',status:'Draft'},{id:'3',name:'Review',status:'Ready'}];
export const items:GalleryItem[] = [
 ...benchoItems,
 ...aiItems,
 ...affectItems,
 ...affectExtraItems,
 ...beautifulItems,
 ...evilItems,
 ...evilExtraItems,
 ...evilVariantItems,
 ...evilBlockItems,
 ...flowItems,
 ...arcExtraItems,
 ...arcMoreItems,
 ...arcThemeItems,
 ...arcBlockItems,
 ...arcDocumentedItems,
 ...boarduiItems,
 ...boarduiBaseItems,
 ...boarduiMoreItems,
 ...boarduiDataItems,
 ...boarduiApplicationItems,
 ...boarduiExtraItems,
 ...boarduiChatItems,
 ...kobraItems,
 ...kobraMoreItems,
 ...kobraAdaptedItems,
 ...canvasExtraItems,
 ...canvasObjectItems,
 ...librariesExtraItems,
 ...transitionItems,
 ...iconItems,
 {id:'arc-sortable-table',name:'Sortable table',category:'Tables',source:'Arc Library',render:()=> <SortableDataTable caption="Workflows" rows={tableRows} columns={tableColumns} rowKey="id"/>},
 {id:'arc-selectable-table',name:'Selectable table',category:'Tables',source:'Arc Library',render:()=> <SortableDataTable caption="Workflows" rows={tableRows} columns={tableColumns} rowKey="id" selectable/>},
 {id:'arc-otp',name:'Verification code',category:'Inputs',source:'Arc Library',render:()=> <OtpDemo/>},
 {id:'arc-number',name:'Number field',category:'Inputs',source:'Arc Library',render:()=> <NumberField label="Items" defaultValue={3} max={20}/>},
 {id:'arc-password',name:'Password strength',category:'Inputs',source:'Arc Library',render:()=> <PasswordStrength label="Password"/>},
 {id:'arc-empty',name:'Empty state',category:'Controls',source:'Arc Library',render:()=> <EmptyState title="No workflows yet" description="Create a workflow to get started."/>},
 {id:'arc-counter',name:'Animated counter',category:'Charts',source:'Arc Library',render:()=> <AnimatedCounter label="Completed" value={128}/>},
 {id:'arc-sparkline',name:'Sparkline',category:'Charts',source:'Arc Library',render:()=> <Sparkline label="Runs" data={points} value="61"/>},
 {id:'arc-gauge',name:'Gauge',category:'Charts',source:'Arc Library',render:()=> <Gauge label="Capacity" value={68}/>},
 {id:'affect-button-primary',name:'Animated button',category:'Buttons',source:'AffectUI',render:()=> <AffectButton variant="secondary">Continue</AffectButton>},
 {id:'affect-button-ghost',name:'Animated text button',category:'Buttons',source:'AffectUI',render:()=> <AffectButton variant="ghost">Cancel</AffectButton>},
 {id:'affect-button-loading',name:'Animated loading button',category:'Buttons',source:'AffectUI',render:()=> <AffectButton variant="secondary" loading>Loading</AffectButton>},
 {id:'arc-button-primary',name:'Primary button',category:'Buttons',source:'Arc Library',render:()=> <Button variant="secondary">Continue</Button>},
 {id:'arc-button-secondary',name:'Text button',category:'Buttons',source:'Arc Library',render:()=> <Button variant="ghost">Cancel</Button>},
 {id:'arc-button-disabled',name:'Disabled button',category:'Buttons',source:'Arc Library',render:()=> <Button variant="secondary" disabled>Unavailable</Button>},
 {id:'arc-button-loading',name:'Loading button',category:'Buttons',source:'Arc Library',render:()=> <Button variant="secondary" loading>Creating</Button>},
 {id:'arc-input',name:'Text input',category:'Inputs',source:'Arc Library',render:()=> <Input label="Workflow name *" required placeholder="Enter a name"/>},
 {id:'arc-input-error',name:'Input with error',category:'Inputs',source:'Arc Library',render:()=> <Input label="Workflow name *" required error="Enter a workflow name." placeholder="Enter a name"/>},
 {id:'arc-textarea',name:'Text area',category:'Inputs',source:'Arc Library',render:()=> <Textarea label="Description" placeholder="Add a description"/>},
 {id:'arc-switch',name:'Switch',category:'Controls',source:'Arc Library',render:()=> <Switch label="Enable notifications"/>},
 {id:'arc-dropdown',name:'Dropdown menu',category:'Controls',source:'Arc Library',render:()=> <DropdownDemo/>},
 {id:'arc-checkbox',name:'Checkbox',category:'Controls',source:'Arc Library',render:()=> <Checkbox label="Send a confirmation"/>},
 {id:'arc-badge-neutral',name:'Neutral badge',category:'Controls',source:'Arc Library',render:()=> <Badge>Draft</Badge>},
 {id:'arc-badge-success',name:'Success badge',category:'Controls',source:'Arc Library',render:()=> <Badge tone="success" dot>Complete</Badge>},
 {id:'arc-badge-warning',name:'Warning badge',category:'Controls',source:'Arc Library',render:()=> <Badge tone="warning" dot>Attention</Badge>},
 {id:'arc-badge-error',name:'Error badge',category:'Controls',source:'Arc Library',render:()=> <Badge tone="danger" dot>Failed</Badge>},
 {id:'arc-alert-info',name:'Information alert',category:'Controls',source:'Arc Library',render:()=> <Alert tone="info" title="In progress">Your workflow is running.</Alert>},
 {id:'arc-alert-success',name:'Success alert',category:'Controls',source:'Arc Library',render:()=> <Alert tone="success" title="Completed">Your workflow is ready.</Alert>},
 {id:'arc-alert-error',name:'Error alert',category:'Controls',source:'Arc Library',render:()=> <Alert tone="danger" title="Could not continue">Check the details and try again.</Alert>},
 {id:'arc-alert-warning',name:'Warning alert',category:'Controls',source:'Arc Library',render:()=> <Alert tone="warning" title="Needs attention">Review before continuing.</Alert>},
 {id:'arc-progress',name:'Progress bar',category:'Controls',source:'Arc Library',render:()=> <Progress value={65} label="Progress" showValue/>},
 {id:'arc-skeleton',name:'Loading skeleton',category:'Controls',source:'Arc Library',render:()=> <Skeleton lines={3}/>},
 {id:'arc-line',name:'Line chart',category:'Charts',source:'Arc Library',render:()=> <LineChart label="Workflow runs" data={dates} series={[{key:'runs',label:'Runs'}]} height={145}/>},
 {id:'arc-bar',name:'Bar chart',category:'Charts',source:'Arc Library',render:()=> <BarChart label="Workflow runs" period="Last 7 days" data={dates} height={130}/>},
 {id:'arc-donut',name:'Donut chart',category:'Charts',source:'Arc Library',render:()=> <DonutChart label="Workflow outcomes" data={[{key:'complete',label:'Complete',value:64},{key:'running',label:'Running',value:22},{key:'failed',label:'Failed',value:14}]} size={150} thickness={18}/>},
];
