import type { Preferences } from "../../types";
"use client";

import { EvilSankeyChart } from "@/registry/charts/recharts-sankey-chart";
import type { SankeyData } from "recharts";
import { type ChartConfig } from "@/registry/ui/recharts-chart";

// Sales report data with solid colors
const data: SankeyData = {
  nodes: [
    { name: "CRT_L" }, // Left CRT
    { name: "PPT_L" }, // Left PPT
    { name: "DMG_L" }, // Left DMG
    { name: "PPT_M" }, // Middle PPT
    { name: "DMG_M" }, // Middle DMG
    { name: "CRT_R" }, // Right CRT
    { name: "PPT_R" }, // Right PPT
    { name: "DMG_R" }, // Right DMG
  ],
  links: [
    // From left CRT to middle nodes
    { source: 0, target: 3, value: 800 },
    { source: 0, target: 4, value: 502 },

    // From left PPT to middle nodes
    { source: 1, target: 3, value: 1500 },
    { source: 1, target: 4, value: 1498 },

    // From left DMG to middle nodes
    { source: 2, target: 3, value: 3931 },
    { source: 2, target: 4, value: 1612 },

    // From middle PPT to right nodes
    { source: 3, target: 5, value: 2000 },
    { source: 3, target: 6, value: 2091 },
    { source: 3, target: 7, value: 1840 },

    // From middle DMG to right nodes
    { source: 4, target: 5, value: 1991 },
    { source: 4, target: 7, value: 1158 },
  ],
};



export function EvilExampleSolidLabeledNodesSankeyChart({prefs}: {prefs: Preferences}) {
const chartConfig = {
  CRT_L: {
    label: "CRT",
    colors: {
      light: [prefs.accent], // lighter than #525252
      dark: [prefs.active],
    },
  },
  PPT_L: {
    label: "PPT",
    colors: {
      light: [prefs.success], // lighter than #8b5cf6
      dark: [prefs.warning],
    },
  },
  DMG_L: {
    label: "DMG",
    colors: {
      light: [prefs.muted], // lighter than #404040
      dark: [prefs.accent],
    },
  },
  PPT_M: {
    label: "PPT",
    colors: {
      light: [prefs.active], // lighter than #7c3aed
      dark: [prefs.success],
    },
  },
  DMG_M: {
    label: "DMG",
    colors: {
      light: [prefs.warning], // lighter than #06b6d4
      dark: [prefs.muted],
    },
  },
  CRT_R: {
    label: "CRT",
    colors: {
      light: [prefs.accent], // lighter than #10b981
      dark: [prefs.active],
    },
  },
  PPT_R: {
    label: "PPT",
    colors: {
      light: [prefs.success], // lighter than #525252
      dark: [prefs.warning],
    },
  },
  DMG_R: {
    label: "DMG",
    colors: {
      light: [prefs.muted], // lighter than #404040
      dark: [prefs.accent],
    },
  },
} satisfies ChartConfig;
  return (
    <EvilSankeyChart
      className="h-full w-full p-4"
      data={data}
      config={chartConfig}
      nodeWidth={80}
      nodePadding={24}
    >
      <EvilSankeyChart.Node isClickable radius={4}>
        <EvilSankeyChart.NodeLabel
          position="inside" // [!code highlight]
          valueFormatter={(value) => value.toLocaleString()}
        />
      </EvilSankeyChart.Node>
      <EvilSankeyChart.Link variant="source" verticalPadding={8} />
      <EvilSankeyChart.Tooltip />
    </EvilSankeyChart>
  );
}

