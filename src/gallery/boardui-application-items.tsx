import {DatePicker} from '../vendor/boardui/upstream/components/base/date-picker/date-picker';
import {DateRangePicker} from '../vendor/boardui/upstream/components/base/date-picker/date-range-picker';
import {Dropdown,DropdownTrigger,DropdownPopover,DropdownItem} from '../vendor/boardui/upstream/components/base/dropdown/dropdown';
import {ImportantAlertsCard} from '../vendor/boardui/upstream/components/application/medical/important-alerts-card';
import {PatientInfoCard} from '../vendor/boardui/upstream/components/application/medical/patient-info-card';
import {AuthCard} from '../vendor/boardui/upstream/components/application/auth/auth-card';
import {StatCards} from '../vendor/boardui/upstream/components/application/dashboard/stat-cards';
import type {GalleryItem} from './items';
const source='BoardUI';const base='https://www.boardui.com/components/';
export const boarduiApplicationItems:GalleryItem[]=[
 {id:'boardui-date-picker',name:'Date picker',category:'Inputs',source,sourceUrl:base+'date-picker',render:()=> <DatePicker/>},
 {id:'boardui-date-range-picker',name:'Date range picker',category:'Inputs',source,sourceUrl:base+'date-picker',render:()=> <DateRangePicker/>},
 {id:'boardui-dropdown',name:'Dropdown menu',category:'Controls',source,sourceUrl:base+'dropdown',render:()=> <Dropdown><DropdownTrigger className="save">Actions</DropdownTrigger><DropdownPopover aria-label="Actions"><DropdownItem onSelect={()=>{}}>Edit</DropdownItem><DropdownItem onSelect={()=>{}}>Archive</DropdownItem></DropdownPopover></Dropdown>},
 {id:'boardui-important-alerts-card',name:'Important alerts card',category:'Controls',source,sourceUrl:base+'medical-profile',render:()=> <ImportantAlertsCard/>},
 {id:'boardui-patient-info-card',name:'Patient info card',category:'Controls',source,sourceUrl:base+'medical-profile',render:()=> <PatientInfoCard/>},
 {id:'boardui-auth-card',name:'Sign-in card',category:'Inputs',source,sourceUrl:base+'auth-card',render:()=> <AuthCard mode="signin" providers={[]}/>},
 {id:'boardui-stat-cards',name:'Stat cards',category:'Charts',source,sourceUrl:base+'stat-cards',render:()=> <StatCards count={2} columns={1}/>},
];
