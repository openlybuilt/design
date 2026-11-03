import { TextShimmer } from '../vendor/arc/text-shimmer/text-shimmer';
import { TextMorph } from '../vendor/arc/text-morph/text-morph';
import { TextReveal } from '../vendor/arc/text-reveal/text-reveal';
import { InViewTitle } from '../vendor/arc/in-view-title/in-view-title';
import { ActionButton } from '../vendor/arc/action-button/action-button';
import { UsageMeter } from '../vendor/arc/usage-meter/usage-meter';
import { Countdown } from '../vendor/arc/countdown/countdown';
import type { GalleryItem } from './items';
export const arcExtraItems:GalleryItem[]=[
 {id:'arc-action-button',name:'Action button',category:'Buttons',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/action-button',render:()=> <ActionButton label="Save" onAction={()=>{}}/>},
 {id:'arc-text-shimmer',name:'Text shimmer',category:'AI',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/text-shimmer',render:()=> <TextShimmer>Thinking through the details</TextShimmer>},
 {id:'arc-text-morph',name:'Text morph',category:'Effects',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/text-morph',render:()=> <TextMorph>Ready to begin</TextMorph>},
 {id:'arc-text-reveal',name:'Text reveal',category:'Effects',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/text-reveal',render:()=> <TextReveal text="Everything in its place"/>},
 {id:'arc-in-view-title',name:'In-view title',category:'Effects',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/in-view-title',render:()=> <InViewTitle text="A little more clarity"/>},
 {id:'arc-usage-meter',name:'Usage meter',category:'Charts',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/usage-meter',render:()=> <UsageMeter label="Storage" limit={100} unit="GB" segments={[{id:'files',label:'Files',value:38},{id:'media',label:'Media',value:22}]}/>},
 {id:'arc-countdown',name:'Countdown',category:'Controls',source:'Arc Library',sourceUrl:'https://uiarc.dev/components/countdown',render:()=> <Countdown target="2030-01-01T00:00:00Z" label="Time remaining"/>},
];
