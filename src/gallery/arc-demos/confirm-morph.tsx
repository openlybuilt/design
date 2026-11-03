import { Trash2 } from "lucide-react";
import { ConfirmMorph } from "@/vendor/arc/confirm-morph/confirm-morph";

export function DeleteSelection() {
  return (
    <ConfirmMorph
      label="Delete files"
      icon={<Trash2 size={16} strokeWidth={1.75} />}
      prompt={"Delete 2 files?"}
      confirmMode="hold"
      onConfirm={() => {}}
      onUndo={() => {}}
    />
  );
}
