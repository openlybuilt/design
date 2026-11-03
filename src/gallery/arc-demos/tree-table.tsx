import { TreeTable } from "@/vendor/arc/tree-table/tree-table";
import type { TreeTableColumn, TreeTableRow } from "@/vendor/arc/tree-table/tree-table";

type Item = { name: string; size: number; owner: string };

const columns: TreeTableColumn<Item>[] = [
  { id: "name", header: "Name", cell: item => item.name, sortValue: item => item.name, width: "minmax(0, 2fr)" },
  { id: "size", header: "Size", cell: item => `${item.size} MB`, sortValue: item => item.size, align: "end", width: "96px" },
  { id: "owner", header: "Owner", cell: item => item.owner, hideBelow: 520 },
];

export function Files() {
  return (
    <TreeTable
      label="Files"
      rows={[{id: "design", data: {name: "Design", size: 8, owner: "Alex"}, children: [{id: "a", data: {name: "Layout", size: 2, owner: "Sam"}}]}]}
      columns={columns}
      selectable
      rowLabel={item => item.name}
      defaultExpanded={["design"]}
      
      maxHeight={480}
    />
  );
}
