import { ConfigurableArea } from './configurable-charts';
import { EvilLineChart } from '../registry/charts/recharts-line-chart';
import { EvilBarChart } from '../registry/charts/recharts-bar-chart';
import { EvilPieChart } from '../registry/charts/recharts-pie-chart';
import type { GalleryItem } from './items';
const series=[{day:'Mon',runs:24},{day:'Tue',runs:38},{day:'Wed',runs:32},{day:'Thu',runs:55},{day:'Fri',runs:45},{day:'Sat',runs:68},{day:'Sun',runs:61}];
const segments=[{type:'complete',count:64},{type:'running',count:22},{type:'failed',count:14}];
export const evilItems:GalleryItem[]=[
 {id:'evil-area',name:'Area chart',category:'Charts',source:'Evil Charts',sourceUrl:'https://evilcharts.com/docs/recharts/area-chart',render:p=> <ConfigurableArea prefs={p}/>},
 {id:'evil-line',name:'Animated line chart',category:'Charts',source:'Evil Charts',render:p=>{const config={runs:{label:'Runs',colors:{light:[p.accent],dark:[p.accent]}}};return <div className="evil-chart"><EvilLineChart data={series} config={config}><EvilLineChart.Grid/><EvilLineChart.XAxis dataKey="day"/><EvilLineChart.Tooltip/><EvilLineChart.Line dataKey="runs"/></EvilLineChart></div>}},
 {id:'evil-bar',name:'Animated bar chart',category:'Charts',source:'Evil Charts',render:p=>{const config={runs:{label:'Runs',colors:{light:[p.accent],dark:[p.accent]}}};return <div className="evil-chart"><EvilBarChart data={series} config={config}><EvilBarChart.Grid/><EvilBarChart.XAxis dataKey="day"/><EvilBarChart.Tooltip/><EvilBarChart.Bar dataKey="runs" variant="default"/></EvilBarChart></div>}},
 {id:'evil-pie',name:'Animated pie chart',category:'Charts',source:'Evil Charts',render:p=>{const config={complete:{label:'Complete',colors:{light:[p.success],dark:[p.success]}},running:{label:'Running',colors:{light:[p.active],dark:[p.active]}},failed:{label:'Failed',colors:{light:[p.error],dark:[p.error]}}};return <div className="evil-chart"><EvilPieChart data={segments} dataKey="count" nameKey="type" config={config}><EvilPieChart.Legend/><EvilPieChart.Tooltip/><EvilPieChart.Pie/></EvilPieChart></div>}},
];
