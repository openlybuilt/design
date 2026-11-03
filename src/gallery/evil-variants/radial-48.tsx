import type { Preferences } from "../../types";
"use client";

import { EvilRadialChart } from "@/registry/charts/recharts-radial-chart";
import { type ChartConfig } from "@/registry/ui/recharts-chart";

const data = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 187 },
  { browser: "edge", visitors: 173 },
  { browser: "other", visitors: 90 },
];



export function EvilExampleRadialChart({prefs}: {prefs: Preferences}) {
const chartConfig = {
  chrome: {
    label: "Chrome",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success], // Coral -> Gold -> Electric Blue // [!code highlight]
      dark: [prefs.warning, prefs.muted, prefs.accent], // [!code highlight]
    },
  },
  safari: {
    label: "Safari",
    colors: {
      light: [prefs.active, prefs.success, prefs.warning], // Lavender -> Pink -> Sunflower // [!code highlight]
      dark: [prefs.muted, prefs.accent, prefs.active], // [!code highlight]
    },
  },
  firefox: {
    label: "Firefox",
    colors: {
      light: [prefs.success, prefs.warning, prefs.muted], // Turquoise -> Blue -> Purple // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success], // [!code highlight]
    },
  },
  edge: {
    label: "Edge",
    colors: {
      light: [prefs.warning, prefs.muted, prefs.accent], // Tangerine -> Vermillion -> Wine // [!code highlight]
      dark: [prefs.active, prefs.success, prefs.warning], // [!code highlight]
    },
  },
  other: {
    label: "Other",
    colors: {
      light: [prefs.muted, prefs.accent, prefs.active], // Mint -> Jungle -> Teal // [!code highlight]
      dark: [prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
} satisfies ChartConfig;
  return (
    <EvilRadialChart className="h-full w-full p-4" data={data} nameKey="browser" config={chartConfig}>
      <EvilRadialChart.Legend />
      <EvilRadialChart.Tooltip />
      <EvilRadialChart.RadialBar dataKey="visitors" />
    </EvilRadialChart>
  );
}

