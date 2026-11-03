import { Background, ReactFlow, type Edge, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { GalleryItem } from './items';

const diagrams: { id:string; name:string; nodes:Node[]; edges:Edge[] }[] = [
 {id:'react-flow-process',name:'Process flowchart',nodes:[{id:'start',position:{x:0,y:80},data:{label:'Start'},type:'input'},{id:'review',position:{x:190,y:80},data:{label:'Review request'}},{id:'done',position:{x:380,y:80},data:{label:'Complete'},type:'output'}],edges:[{id:'a',source:'start',target:'review',animated:true},{id:'b',source:'review',target:'done'}]},
 {id:'react-flow-branch',name:'Branching flowchart',nodes:[{id:'start',position:{x:0,y:100},data:{label:'New request'},type:'input'},{id:'decision',position:{x:190,y:100},data:{label:'Needs review?'}},{id:'yes',position:{x:400,y:20},data:{label:'Review'},type:'output'},{id:'no',position:{x:400,y:180},data:{label:'Approve'},type:'output'}],edges:[{id:'a',source:'start',target:'decision'},{id:'b',source:'decision',target:'yes',label:'Yes'},{id:'c',source:'decision',target:'no',label:'No'}]},
 {id:'react-flow-pipeline',name:'Pipeline flowchart',nodes:[{id:'input',position:{x:0,y:70},data:{label:'Collect'},type:'input'},{id:'prepare',position:{x:180,y:70},data:{label:'Prepare'}},{id:'process',position:{x:360,y:70},data:{label:'Process'}},{id:'output',position:{x:540,y:70},data:{label:'Publish'},type:'output'}],edges:[{id:'a',source:'input',target:'prepare',type:'smoothstep'},{id:'b',source:'prepare',target:'process',type:'smoothstep'},{id:'c',source:'process',target:'output',type:'smoothstep'}]},
];
export const flowItems:GalleryItem[]=diagrams.map(({id,name,nodes,edges})=>({id,name,category:'Charts',source:'React Flow',render:()=> <div className="flow-demo"><ReactFlow defaultNodes={nodes} defaultEdges={edges} fitView panOnScroll={false} zoomOnScroll={false} proOptions={{hideAttribution:false}}><Background/></ReactFlow></div>}));
