import { ContextMenu } from "@/vendor/arc/context-menu/context-menu";
import { Copy, Trash2 } from "lucide-react";

export function FileTile() {
  return (
    <ContextMenu
      label={"File actions"}
      items={[
        { id: "copy", label: "Copy link", icon: <Copy size={15} />, onSelect: () => {} },
        { id: "delete", label: "Delete file", icon: <Trash2 size={15} />, destructive: true, onSelect: () => {} },
      ]}
    >
      <div className="canvas-effect-content">File</div>
    </ContextMenu>
  );
}
