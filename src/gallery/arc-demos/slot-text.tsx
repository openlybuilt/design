import { SlotText } from "@/vendor/arc/slot-text/slot-text";
import { useState } from "react";
export function SlotDemo(){ const [value,setValue]=useState(128); return <div className="slot-text-demo"><SlotText value={value} announce /><button type="button" className="save" onClick={()=>setValue(v=>v+17)}>Change value</button></div>; }
