import type {GalleryItem} from "../items";
import { EvilMonospaceBarChart as Demo0 } from "./bar-0";
import { EvilHoverTraceBarChart as Demo1 } from "./bar-1";
import { EvilGridBarChart as Demo2 } from "./bar-2";
import { EvilIsometricBarChart as Demo3 } from "./bar-3";
import { EvilContributionsHeatmapChart as Demo4 } from "./heatmap-4";
import { EvilSalesHeatmapChart as Demo5 } from "./heatmap-5";
import { EvilWorkoutsHeatmapChart as Demo6 } from "./heatmap-6";
export const evilBlockItems:GalleryItem[]=[
 {id:"evil-block-bar-0",name:"Monospace Bar Chart",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/bar-chart/blocks",render:p=> <div className="evil-chart"><Demo0 prefs={p}/></div>},
 {id:"evil-block-bar-1",name:"Hover Trace Bar Chart",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/bar-chart/blocks",render:p=> <div className="evil-chart"><Demo1 prefs={p}/></div>},
 {id:"evil-block-bar-2",name:"Grid Bar Chart",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/bar-chart/blocks",render:p=> <div className="evil-chart"><Demo2 prefs={p}/></div>},
 {id:"evil-block-bar-3",name:"Isometric Bar Chart",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/bar-chart/blocks",render:p=> <div className="evil-chart"><Demo3 prefs={p}/></div>},
 {id:"evil-block-heatmap-4",name:"Contributions",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/heatmap-chart/blocks",render:p=> <div className="evil-chart"><Demo4 prefs={p}/></div>},
 {id:"evil-block-heatmap-5",name:"Store Sales",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/heatmap-chart/blocks",render:p=> <div className="evil-chart"><Demo5 prefs={p}/></div>},
 {id:"evil-block-heatmap-6",name:"Workout Tracker",category:"Charts",source:"Evil Charts",sourceUrl:"https://evilcharts.com/docs/recharts/heatmap-chart/blocks",render:p=> <div className="evil-chart"><Demo6 prefs={p}/></div>},
];
