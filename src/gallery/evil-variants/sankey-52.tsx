import type { Preferences } from "../../types";
"use client";

import { EvilSankeyChart } from "@/registry/charts/recharts-sankey-chart";
import type { SankeyData } from "recharts";
import { type ChartConfig } from "@/registry/ui/recharts-chart";

// Marketing funnel data
const data: SankeyData = {
  nodes: [
    { name: "Organic" },
    { name: "PaidAds" },
    { name: "Social" },
    { name: "Landing" },
    { name: "Product" },
    { name: "Cart" },
    { name: "Purchase" },
    { name: "Bounced" },
  ],
  links: [
    { source: 0, target: 3, value: 42000 },
    { source: 1, target: 3, value: 28000 },
    { source: 2, target: 3, value: 18000 },
    { source: 3, target: 4, value: 52000 },
    { source: 3, target: 7, value: 36000 },
    { source: 4, target: 5, value: 31000 },
    { source: 4, target: 7, value: 21000 },
    { source: 5, target: 6, value: 24000 },
    { source: 5, target: 7, value: 7000 },
  ],
};



export function EvilExampleOutsideLabelsSankeyChart({prefs}: {prefs: Preferences}) {
const chartConfig = {
  Organic: {
    label: "Organic Search",
    colors: {
      light: [prefs.accent],
      dark: [prefs.active],
    },
  },
  PaidAds: {
    label: "Paid Ads",
    colors: {
      light: [prefs.success],
      dark: [prefs.warning],
    },
  },
  Social: {
    label: "Social Media",
    colors: {
      light: [prefs.muted],
      dark: [prefs.accent],
    },
  },
  Landing: {
    label: "Landing Page",
    colors: {
      light: [prefs.active],
      dark: [prefs.success],
    },
  },
  Product: {
    label: "Product Page",
    colors: {
      light: [prefs.warning],
      dark: [prefs.muted],
    },
  },
  Cart: {
    label: "Cart",
    colors: {
      light: [prefs.accent],
      dark: [prefs.active],
    },
  },
  Purchase: {
    label: "Purchase",
    colors: {
      light: [prefs.success],
      dark: [prefs.warning],
    },
  },
  Bounced: {
    label: "Bounced",
    colors: {
      light: [prefs.muted],
      dark: [prefs.accent],
    },
  },
} satisfies ChartConfig;
  return (
    <EvilSankeyChart
      className="h-full w-full p-4"
      data={data}
      config={chartConfig}
      nodeWidth={8}
      nodePadding={20}
    >
      <EvilSankeyChart.Node isClickable radius={4}>
        <EvilSankeyChart.NodeLabel
          position="outside" // [!code highlight]
          showValues // [!code highlight]
          valueFormatter={(value) => value.toLocaleString()}
        />
      </EvilSankeyChart.Node>
      <EvilSankeyChart.Link variant="source" />
      <EvilSankeyChart.Tooltip />
    </EvilSankeyChart>
  );
}

