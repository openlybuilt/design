import {AgentThinking, type AgentThinkingVariant} from '../vendor/boardui/agent-thinking';
import {RevenueChartCard} from '../vendor/boardui/revenue-chart-card';
import {OrdersChartCard} from '../vendor/boardui/orders-chart-card';
import {ComposerLoader} from '../vendor/boardui/composer-loader';
import type {GalleryItem} from './items';
const variants:AgentThinkingVariant[]=['wave','spin','stars','infinity'];
export const boarduiItems:GalleryItem[]=[
 {id:'boardui-revenue-chart',name:'Revenue chart card',category:'Charts',source:'BoardUI',sourceUrl:'https://www.boardui.com/components/revenue-chart-card',render:()=> <RevenueChartCard/>},
 {id:'boardui-orders-chart',name:'Orders chart card',category:'Charts',source:'BoardUI',sourceUrl:'https://www.boardui.com/components/orders-chart-card',render:()=> <OrdersChartCard/>},
 ...variants.map(variant=>({id:`boardui-thinking-${variant}`,name:`Agent thinking: ${variant}`,category:'AI' as const,source:'BoardUI',sourceUrl:'https://www.boardui.com/components/agent-thinking',render:()=> <AgentThinking variant={variant} label="Thinking"/>})),
 {id:'boardui-composer-loader',name:'Composer loader',category:'AI',source:'BoardUI',sourceUrl:'https://www.boardui.com/components/composer-loader',render:()=> <ComposerLoader active><div className="boardui-composer">Ask anything…</div></ComposerLoader>},
];
