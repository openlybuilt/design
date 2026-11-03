import { useState } from "react";
import { BrushChart } from "@/vendor/arc/brush-chart/brush-chart";

export function ActiveUsers() {
  const days = Array.from({length: 100}, (_, i) => ({date: Date.UTC(2026, 0, i + 1), value: 50 + Math.sin(i / 8) * 20 + i}));
  const [range, setRange] = useState<[number, number]>([days[days.length - 90].date, days[days.length - 1].date]);
  return <BrushChart data={days} label="Daily active users" unit="users" range={range} onRangeChange={setRange}
    annotations={[{ date: Date.UTC(2026, 2, 24), label: "v2", description: "Offline mode and shared spaces" }]} />;
}
