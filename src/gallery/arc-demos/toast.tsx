import { useState } from "react";
import Toast from "@/vendor/arc/toast/toast";

export function SavedToast() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="save" type="button" onClick={() => setOpen(true)}>Save</button>
      <Toast open={open} onOpenChange={setOpen} title="Changes saved" description="Synced to all devices." />
    </>
  );
}
