import { useState } from "react";
import { ActivityHeatmap } from "@/vendor/arc/activity-heatmap/activity-heatmap";

export function Contributions() {
  const days = Array.from({length: 120}, (_, i) => ({date: new Date(Date.UTC(2026, 0, i + 1)).toISOString().slice(0,10), count: i % 7}));
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <ActivityHeatmap days={days} label="Contributions in 2026" period="2026" selectedDate={selected} onSelectDate={setSelected} />
  );
}
