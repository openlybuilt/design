import type { Preferences } from "../../types";
"use client";

import { EvilRadarChart } from "@/registry/charts/recharts-radar-chart";
import { type ChartConfig } from "@/registry/ui/recharts-chart";

const data = [
  { skill: "JavaScript", desktop: 186, mobile: 80 },
  { skill: "TypeScript", desktop: 305, mobile: 200 },
  { skill: "React", desktop: 237, mobile: 120 },
  { skill: "Node.js", desktop: 173, mobile: 190 },
  { skill: "CSS", desktop: 209, mobile: 130 },
  { skill: "Python", desktop: 214, mobile: 140 },
];



export function EvilExampleRadarChart({prefs}: {prefs: Preferences}) {
  const chartConfig = {
  desktop: {
    label: "Desktop",
    colors: {
      light: [prefs.accent],
      dark: [prefs.active],
    },
  },
  mobile: {
    label: "Mobile",
    colors: {
      light: [prefs.success],
      dark: [prefs.warning],
    },
  },
} satisfies ChartConfig;
  return (
    <EvilRadarChart data={data} config={chartConfig} className="h-full w-full p-4">
      <EvilRadarChart.PolarGrid />
      <EvilRadarChart.PolarAngleAxis dataKey="skill" />
      <EvilRadarChart.Legend isClickable />
      <EvilRadarChart.Tooltip />
      <EvilRadarChart.Radar
        dataKey="desktop"
        variant="filled" // [!code highlight]
        isClickable
      >
        <EvilRadarChart.Dot variant="colored-border" />
        <EvilRadarChart.ActiveDot variant="default" />
      </EvilRadarChart.Radar>
      <EvilRadarChart.Radar dataKey="mobile" variant="filled" isClickable>
        <EvilRadarChart.Dot variant="colored-border" />
        <EvilRadarChart.ActiveDot variant="default" />
      </EvilRadarChart.Radar>
    </EvilRadarChart>
  );
}

