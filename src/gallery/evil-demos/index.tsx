import type {GalleryItem} from "../items";
import { EvilExampleComposedChart as Demo0 } from "./composed";
import { EvilExampleRadarChart as Demo1 } from "./radar";
import { EvilExampleRadialChart as Demo2 } from "./radial";
import { ConfigurableSankey, ConfigurableHeatmap } from "../configurable-charts";
export const evilExtraItems:GalleryItem[]=[
 {id:"evil-composed",name:"Composed chart",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/composed-chart/static",render:p=> <div className="evil-chart"><Demo0 prefs={p}/></div>},
 {id:"evil-radar",name:"Radar chart",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/radar-chart/static",render:p=> <div className="evil-chart"><Demo1 prefs={p}/></div>},
 {id:"evil-radial",name:"Radial chart",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/radial-chart/static",render:p=> <div className="evil-chart"><Demo2 prefs={p}/></div>},
 {id:"evil-sankey",name:"Sankey chart",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/sankey-chart/static",render:p=> <ConfigurableSankey prefs={p}/>},
 {id:"evil-heatmap",name:"Heatmap chart",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/heatmap-chart/static",render:p=> <ConfigurableHeatmap prefs={p}/>},
];
