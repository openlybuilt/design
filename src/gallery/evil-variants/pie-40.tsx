import type { Preferences } from "../../types";
"use client";

import { EvilPieChart } from "@/registry/charts/recharts-pie-chart";
import { type ChartConfig } from "@/registry/ui/recharts-chart";

const data = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 187 },
  { browser: "edge", visitors: 173 },
  { browser: "other", visitors: 90 },
];



export function EvilExamplePieChart({prefs}: {prefs: Preferences}) {
const chartConfig = {
  chrome: {
    label: "Chrome",
    colors: {
      light: [prefs.accent],
      dark: [prefs.active],
    },
  },
  safari: {
    label: "Safari",
    colors: {
      light: [prefs.success],
      dark: [prefs.warning],
    },
  },
  firefox: {
    label: "Firefox",
    colors: {
      light: [prefs.muted],
      dark: [prefs.accent],
    },
  },
  edge: {
    label: "Edge",
    colors: {
      light: [prefs.active],
      dark: [prefs.success],
    },
  },
  other: {
    label: "Other",
    colors: {
      light: [prefs.warning],
      dark: [prefs.muted],
    },
  },
} satisfies ChartConfig;
  return (
    <EvilPieChart
      className="h-full w-full p-4"
      data={data}
      dataKey="visitors"
      nameKey="browser"
      config={chartConfig}
    >
      <EvilPieChart.Legend isClickable />
      <EvilPieChart.Tooltip />
      <EvilPieChart.Pie innerRadius="40%" paddingAngle={-25} cornerRadius={99} />
    </EvilPieChart>
  );
}

