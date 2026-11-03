import {useState} from 'react';
import {Checkbox} from '../vendor/boardui/upstream/components/base/checkbox/checkbox';
import {CheckboxCard} from '../vendor/boardui/upstream/components/base/checkbox/checkbox-card';
import {RadioGroup,Radio} from '../vendor/boardui/upstream/components/base/radio/radio';
import {RadioCard} from '../vendor/boardui/upstream/components/base/radio/radio-card';
import {Switch} from '../vendor/boardui/upstream/components/base/switch/switch';
import {SwitchCard} from '../vendor/boardui/upstream/components/base/switch/switch-card';
import {Input} from '../vendor/boardui/upstream/components/base/input/input';
import {Textarea} from '../vendor/boardui/upstream/components/base/textarea/textarea';
import {InputOtp} from '../vendor/boardui/upstream/components/base/input-otp/input-otp';
import {Slider,RangeSlider} from '../vendor/boardui/upstream/components/base/slider/slider';
import {Select,SelectItem} from '../vendor/boardui/upstream/components/base/select/select';
import {Pagination} from '../vendor/boardui/upstream/components/base/pagination/pagination';
import {Tabs,TabList,Tab,TabPanel} from '../vendor/boardui/upstream/components/base/tabs/tabs';
import {Notification} from '../vendor/boardui/upstream/components/base/notification/notification';
import {Announcement} from '../vendor/boardui/upstream/components/base/announcement/announcement';
import {Carousel,CarouselItem} from '../vendor/boardui/upstream/components/base/carousel/carousel';
import {FileUpload} from '../vendor/boardui/upstream/components/base/file-upload/file-upload';
import {SocialButton} from '../vendor/boardui/upstream/components/base/social-button/social-button';
import {SegmentedControl,SegmentedControlItem} from '../vendor/boardui/upstream/components/base/segmented-control/segmented-control';
import {Tooltip,TooltipTrigger} from '../vendor/boardui/upstream/components/base/tooltip/tooltip';
import type {GalleryItem} from './items';
function Pages(){const [page,set]=useState(1);return <Pagination page={page} totalPages={6} onChange={set}/>}
const base='https://www.boardui.com/components/';const source='BoardUI';
export const boarduiMoreItems:GalleryItem[]=[
 {id:'boardui-checkbox',name:'Checkbox',category:'Controls',source,sourceUrl:base+'checkbox',render:()=> <Checkbox>Send updates</Checkbox>},
 {id:'boardui-checkbox-card',name:'Checkbox card',category:'Controls',source,sourceUrl:base+'checkbox',render:()=> <CheckboxCard title="Updates" description="Receive notifications"/>},
 {id:'boardui-radio',name:'Radio group',category:'Controls',source,sourceUrl:base+'radio',render:()=> <RadioGroup aria-label="Plan" defaultValue="one"><Radio value="one">Basic</Radio><Radio value="two">Team</Radio></RadioGroup>},
 {id:'boardui-radio-card',name:'Radio card',category:'Controls',source,sourceUrl:base+'radio',render:()=> <RadioGroup aria-label="Plan" defaultValue="one"><RadioCard value="one" title="Basic" description="For one person"/><RadioCard value="two" title="Team" description="For everyone"/></RadioGroup>},
 {id:'boardui-switch',name:'Switch',category:'Controls',source,sourceUrl:base+'switch',render:()=> <Switch>Notifications</Switch>},
 {id:'boardui-switch-card',name:'Switch card',category:'Controls',source,sourceUrl:base+'switch',render:()=> <SwitchCard title="Notifications" description="Keep me informed"/>},
 {id:'boardui-input',name:'Text input',category:'Inputs',source,sourceUrl:base+'input',render:()=> <Input label="Name" isRequired placeholder="Enter a name"/>},
 {id:'boardui-textarea',name:'Text area',category:'Inputs',source,sourceUrl:base+'textarea',render:()=> <Textarea label="Description" placeholder="Add a description"/>},
 {id:'boardui-input-otp',name:'Verification code',category:'Inputs',source,sourceUrl:base+'input-otp',render:()=> <InputOtp aria-label="Verification code"/>},
 {id:'boardui-slider',name:'Slider',category:'Inputs',source,sourceUrl:base+'slider',render:()=> <Slider label="Volume" defaultValue={50}/>},
 {id:'boardui-range-slider',name:'Range slider',category:'Inputs',source,sourceUrl:base+'slider',render:()=> <RangeSlider label="Range" defaultValue={[25,75]}/>},
 {id:'boardui-select',name:'Select',category:'Inputs',source,sourceUrl:base+'select',render:()=> <Select aria-label="Choose a region" placeholder="Choose a region"><SelectItem id="us">United States</SelectItem><SelectItem id="eu">Europe</SelectItem></Select>},
 {id:'boardui-pagination',name:'Pagination',category:'Controls',source,sourceUrl:base+'pagination',render:()=> <Pages/>},
 {id:'boardui-tabs',name:'Tabs',category:'Controls',source,sourceUrl:base+'tabs',render:()=> <Tabs defaultSelectedKey="overview"><TabList aria-label="View"><Tab id="overview">Overview</Tab><Tab id="activity">Activity</Tab></TabList><TabPanel id="overview">Summary</TabPanel><TabPanel id="activity">Recent activity</TabPanel></Tabs>},
 {id:'boardui-notification',name:'Notification',category:'Controls',source,sourceUrl:base+'notification',render:()=> <Notification title="Workflow ready" description="Your changes are ready to review." status="success"/>},
 {id:'boardui-announcement',name:'Announcement',category:'Controls',source,sourceUrl:base+'announcement',render:()=> <Announcement title="New update" description="A new version is ready to explore."/>},
 {id:'boardui-carousel',name:'Carousel',category:'Effects',source,sourceUrl:base+'carousel',render:()=> <Carousel aria-label="Preview slides" showArrows showDots><CarouselItem><div className="canvas-effect-content">First slide</div></CarouselItem><CarouselItem><div className="canvas-effect-content">Second slide</div></CarouselItem></Carousel>},
 {id:'boardui-file-upload',name:'File upload',category:'Inputs',source,sourceUrl:base+'file-upload',render:()=> <FileUpload/>},
 {id:'boardui-social-button',name:'Social button',category:'Buttons',source,sourceUrl:base+'social-button',render:()=> <SocialButton brand="google" appearance="white">Continue with Google</SocialButton>},
 {id:'boardui-segmented-control',name:'Segmented control',category:'Controls',source,sourceUrl:base+'segmented-control',render:()=> <SegmentedControl aria-label="Period" defaultSelectedKeys={['week']}><SegmentedControlItem id="week">Week</SegmentedControlItem><SegmentedControlItem id="month">Month</SegmentedControlItem></SegmentedControl>},
 {id:'boardui-tooltip',name:'Tooltip',category:'Controls',source,sourceUrl:base+'tooltip',render:()=> <TooltipTrigger><button className="save">Hover me</button><Tooltip>Helpful information</Tooltip></TooltipTrigger>},
];
