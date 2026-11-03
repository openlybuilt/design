import LoadingState from '../vendor/beautiful/loading-state';
import ThinkingState from '../vendor/beautiful/thinking';
import StreamingText from '../vendor/beautiful/streaming-text';
import ApprovalCard from '../vendor/beautiful/approval-card';
import ToolChips from '../vendor/beautiful/tool-chips';
import TaskRows from '../vendor/beautiful/task-rows';
import Chat from '../vendor/beautiful/chat';
import PromptBar from '../vendor/beautiful/prompt-bar';
import RecommendationCard from '../vendor/beautiful/recommendation-card';
import ContextCards from '../vendor/beautiful/context-cards';
import DiffTable from '../vendor/beautiful/diff-table';
import RecordsTable from '../vendor/beautiful/records-table';
import FilterTable from '../vendor/beautiful/filter-table';
import SidebarNav from '../vendor/beautiful/sidebar-nav';
import Search from '../vendor/beautiful/search';
import InsightCards from '../vendor/beautiful/insight-cards';
import CodeBlock from '../vendor/beautiful/code-block';
import FineTuneCard from '../vendor/beautiful/fine-tune-card';
import SelectionActions from '../vendor/beautiful/selection-actions';
import AgentScreen from '../vendor/beautiful/agent-screen';
import Flowchart from '../vendor/beautiful/flowchart';
import type { GalleryItem } from './items';
export const beautifulItems:GalleryItem[]=[
 {id:'beautiful-loading',name:'Loading state',category:'AI',source:'Beautiful UI',render:()=> <LoadingState/>},
 {id:'beautiful-thinking',name:'Thinking steps',category:'AI',source:'Beautiful UI',render:()=> <ThinkingState/>},
 {id:'beautiful-streaming',name:'Streaming answer',category:'Chat',source:'Beautiful UI',render:()=> <StreamingText/>},
 {id:'beautiful-approval',name:'Approval card',category:'AI',source:'Beautiful UI',render:()=> <ApprovalCard/>},
 {id:'beautiful-tool-chips',name:'Tool chips',category:'AI',source:'Beautiful UI',render:()=> <ToolChips/>},
 {id:'beautiful-task-rows',name:'Task rows',category:'AI',source:'Beautiful UI',render:()=> <TaskRows/>},
 {id:'beautiful-chat',name:'Chat panel',category:'Chat',source:'Beautiful UI',render:()=> <Chat/>},
 {id:'beautiful-prompt',name:'Prompt bar',category:'Chat',source:'Beautiful UI',render:()=> <PromptBar/>},
 {id:'beautiful-recommendation',name:'Recommendation card',category:'AI',source:'Beautiful UI',render:()=> <RecommendationCard/>},
 {id:'beautiful-context',name:'Context cards',category:'AI',source:'Beautiful UI',render:()=> <ContextCards/>},
 {id:'beautiful-diff',name:'Diff table',category:'Tables',source:'Beautiful UI',render:()=> <DiffTable/>},
 {id:'beautiful-records',name:'Records table',category:'Tables',source:'Beautiful UI',render:()=> <RecordsTable/>},
 {id:'beautiful-filter-table',name:'Filter table',category:'Tables',source:'Beautiful UI',render:()=> <FilterTable/>},
 {id:'beautiful-sidebar',name:'Sidebar navigation',category:'Controls',source:'Beautiful UI',render:()=> <SidebarNav/>},
 {id:'beautiful-search',name:'Search menu',category:'Controls',source:'Beautiful UI',render:()=> <Search/>},
 {id:'beautiful-insights',name:'Insight cards',category:'Charts',source:'Beautiful UI',render:()=> <InsightCards/>},
 {id:'beautiful-code',name:'Code block',category:'Chat',source:'Beautiful UI',render:()=> <CodeBlock/>},
 {id:'beautiful-fine-tune',name:'Fine-tune card',category:'Controls',source:'Beautiful UI',render:()=> <FineTuneCard/>},
 {id:'beautiful-selection',name:'Selection actions',category:'Chat',source:'Beautiful UI',render:()=> <SelectionActions/>},
 {id:'beautiful-agent-screen',name:'Agent screen',category:'AI',source:'Beautiful UI',render:()=> <AgentScreen/>},
 {id:'beautiful-agent-screen-loading',name:'Agent screen: loading',category:'AI',source:'Beautiful UI',render:()=> <AgentScreen variant="Loading"/>},
 {id:'beautiful-flowchart',name:'Flowchart',category:'Charts',source:'Beautiful UI',render:()=> <Flowchart/>},
];
