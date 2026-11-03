import type { Preferences } from "../../types";
"use client";

import { EvilSankeyChart } from "@/registry/charts/recharts-sankey-chart";
import type { SankeyData } from "recharts";
import { type ChartConfig } from "@/registry/ui/recharts-chart";

// Sales report data - similar to the design with CRT, PPT, DMG categories
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
    { source: 0, target: 3, value: 750 },
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



export function EvilExampleLabeledNodesSankeyChart({prefs}: {prefs: Preferences}) {
const chartConfig = {
  CRT_L: {
    label: "CRT",
    colors: {
      light: [prefs.accent],
      dark: [prefs.active],
    },
  },
  PPT_L: {
    label: "PPT",
    colors: {
      light: [prefs.success],
      dark: [prefs.warning],
    },
  },
  DMG_L: {
    label: "DMG",
    colors: {
      light: [prefs.muted, prefs.accent],
      dark: [prefs.active, prefs.success],
    },
  },
  PPT_M: {
    label: "PPT",
    colors: {
      light: [prefs.warning],
      dark: [prefs.muted],
    },
  },
  DMG_M: {
    label: "DMG",
    colors: {
      light: [prefs.accent, prefs.active],
      dark: [prefs.success, prefs.warning],
    },
  },
  CRT_R: {
    label: "CRT",
    colors: {
      light: [prefs.muted],
      dark: [prefs.accent],
    },
  },
  PPT_R: {
    label: "PPT",
    colors: {
      light: [prefs.active, prefs.success],
      dark: [prefs.warning, prefs.muted],
    },
  },
  DMG_R: {
    label: "DMG",
    colors: {
      light: [prefs.accent, prefs.active],
      dark: [prefs.success, prefs.warning],
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
          showValues // [!code highlight]
          valueFormatter={(value) => value.toLocaleString()}
        />
      </EvilSankeyChart.Node>
      <EvilSankeyChart.Link variant="gradient" verticalPadding={8} />
      <EvilSankeyChart.Tooltip />
    </EvilSankeyChart>
  );
}

