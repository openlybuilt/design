import { useState } from "react";
import { IconMorph } from "@/vendor/arc/icon-morph/icon-morph";

export function MenuToggle() {
  const [open, setOpen] = useState(false);
  return (
    <button className="save" type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(value => !value)}>
      <IconMorph name="menu" state={open} size={20} />
    </button>
  );
}
