import {useState} from 'react';
import {Table,TableHeader,TableColumn,TableBody,TableRow,TableCell} from '../vendor/boardui/upstream/components/base/table/table';
import {TreeView,TreeViewItem} from '../vendor/boardui/upstream/components/base/tree-view/tree-view';
import {DataGrid,type DataGridColumn} from '../vendor/boardui/upstream/components/application/data-grid/data-grid';
import {DataTableExample} from '../vendor/boardui/upstream/components/application/data-table/data-table';
import {NotificationCenter} from '../vendor/boardui/upstream/components/application/notification-center/notification-center';
import type {GalleryItem} from './items';
type Row={id:string;name:string;status:string};
function Grid(){const [data,set]=useState<Row[]>([{id:'1',name:'First workflow',status:'Ready'},{id:'2',name:'Second workflow',status:'Draft'}]);const columns:DataGridColumn<Row>[]=[{key:'name',header:'Name',editable:true},{key:'status',header:'Status',editable:true}];return <DataGrid aria-label="Workflows" data={data} columns={columns} getRowId={r=>r.id} onDataChange={set} height={220}/>}
const source='BoardUI';const base='https://www.boardui.com/components/';
export const boarduiDataItems:GalleryItem[]=[
 {id:'boardui-table',name:'Table',category:'Tables',source,sourceUrl:base+'table',render:()=> <Table aria-label="Workflows"><TableHeader><TableColumn isRowHeader>Name</TableColumn><TableColumn>Status</TableColumn></TableHeader><TableBody><TableRow><TableCell>First workflow</TableCell><TableCell>Ready</TableCell></TableRow><TableRow><TableCell>Second workflow</TableCell><TableCell>Draft</TableCell></TableRow></TableBody></Table>},
 {id:'boardui-tree-view',name:'Tree view',category:'Controls',source,sourceUrl:base+'tree-view',render:()=> <TreeView aria-label="Files" defaultExpandedKeys={['folder']}><TreeViewItem id="folder" label="Documents"><TreeViewItem id="file" label="Notes"/></TreeViewItem><TreeViewItem id="second" label="Project"/></TreeView>},
 {id:'boardui-data-grid',name:'Data grid',category:'Tables',source,sourceUrl:base+'data-grid',render:()=> <Grid/>},
 {id:'boardui-data-table',name:'Data table',category:'Tables',source,sourceUrl:base+'data-table',render:()=> <DataTableExample pageSize={3}/>},
 {id:'boardui-notification-center',name:'Notification center',category:'Controls',source,sourceUrl:base+'notification-center',render:()=> <NotificationCenter notifications={[{id:'1',category:'system',group:'Today',title:'Workflow ready',description:'Your changes are ready to review.',timestamp:'Now',unread:true,status:'success'}]}/>},
];
