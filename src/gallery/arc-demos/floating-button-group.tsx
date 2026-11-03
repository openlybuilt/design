import { Link2, MessageCircle, Play, Redo2, Undo2 } from "lucide-react";
import { FloatingButtonGroup } from "@/vendor/arc/floating-button-group/floating-button-group";

export function BoardToolbar() {
  return (
    <FloatingButtonGroup
      label="Board actions"
      variant="floating"
      items={[
        { id: "undo", label: "Undo", icon: <Undo2 />, iconOnly: true, shortcut: "⌘Z", disabled: false, onSelect: () => {} },
        { id: "redo", label: "Redo", icon: <Redo2 />, iconOnly: true, shortcut: "⇧⌘Z", disabled: false, onSelect: () => {} },
        { type: "separator" },
        { id: "comment", label: "Comment", icon: <MessageCircle />, shortcut: "C" },
        { id: "share", label: "Share", reserveLabels: ["Share", "Copied"], icon: <Link2 />, onSelect: () => {} },
        { type: "separator" },
        { id: "present", label: "Present", reserveLabels: ["Present", "Stop"], icon: <Play />, pressed: false, onSelect: () => {} },
      ]}
      
    />
  );
}
