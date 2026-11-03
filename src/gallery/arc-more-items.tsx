import {useState} from 'react';
import {ActionSwap} from '../vendor/arc/action-swap/action-swap';
import {ChipGroup} from '../vendor/arc/chip-group/chip-group';
import {Rating} from '../vendor/arc/rating/rating';
import {Stepper} from '../vendor/arc/stepper/stepper';
import {Timeline} from '../vendor/arc/timeline/timeline';
import {MetricCard} from '../vendor/arc/metric-card/metric-card';
import {Pagination} from '../vendor/arc/pagination/pagination';
import {CopyButton} from '../vendor/arc/copy-button/copy-button';
import {Accordion} from '../vendor/arc/accordion/accordion';
import type {GalleryItem} from './items';
function Chips(){const [v,set]=useState<string[]>(['design']);return <ChipGroup label="Topics" value={v} onValueChange={set} options={[{value:'design',label:'Design'},{value:'research',label:'Research'},{value:'build',label:'Build'}]}/>}
function Pages(){const [page,setPage]=useState(1);return <Pagination page={page} pageCount={8} onPageChange={setPage}/>}
const now=Date.now();
export const arcMoreItems:GalleryItem[]=[
 {id:'arc-action-swap',name:'Action swap',category:'Buttons',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/action-swap',render:()=> <ActionSwap states={[{id:'save',label:'Save'},{id:'saved',label:'Saved',tone:'success',holdFor:1200}]}/>},
 {id:'arc-copy-button',name:'Copy button',category:'Buttons',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/copy-button',render:()=> <CopyButton value="Hello from Virela"/>},
 {id:'arc-chip-group',name:'Chip group',category:'Controls',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/chip-group',render:()=> <Chips/>},
 {id:'arc-rating',name:'Rating',category:'Controls',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/rating',render:()=> <Rating label="Rate your experience" defaultValue={3}/>},
 {id:'arc-stepper',name:'Stepper',category:'Controls',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/stepper',render:()=> <Stepper current={1} steps={[{id:'one',label:'Create'},{id:'two',label:'Review'},{id:'three',label:'Finish'}]}/>},
 {id:'arc-timeline',name:'Timeline',category:'Controls',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/timeline',render:()=> <Timeline label="Activity" now={now} events={[{id:'a',at:now-3600000,actor:'Alex',title:'updated the workflow',detail:'The latest version is ready.'},{id:'b',at:now-7200000,title:'Workflow created',tone:'success'}]}/>},
 {id:'arc-metric-card',name:'Metric card',category:'Charts',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/metric-card',render:()=> <MetricCard label="Completed" value={128} context="This month" change="+12%"/>},
 {id:'arc-pagination',name:'Pagination',category:'Controls',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/pagination',render:()=> <Pages/>},
 {id:'arc-accordion',name:'Accordion',category:'Controls',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/accordion',render:()=> <Accordion items={[{title:'How does it work?',content:'Choose the settings that suit you.'},{title:'Can I change it later?',content:'Yes, update your settings any time.'}]}/>},
];
