import type { Preferences } from "../../types";
"use client";

import { EvilSankeyChart } from "@/registry/charts/recharts-sankey-chart";
import type { SankeyData } from "recharts";
import { type ChartConfig } from "@/registry/ui/recharts-chart";

// Budget allocation - revenue to expenses
const data: SankeyData = {
  nodes: [
    { name: "ProductSales" },
    { name: "Subscriptions" },
    { name: "Services" },
    { name: "TotalRevenue" },
    { name: "Research" },
    { name: "Marketing" },
    { name: "Operations" },
    { name: "Salaries" },
    { name: "Profit" },
  ],
  links: [
    { source: 0, target: 3, value: 450000 },
    { source: 1, target: 3, value: 320000 },
    { source: 2, target: 3, value: 180000 },
    { source: 3, target: 4, value: 185000 },
    { source: 3, target: 5, value: 142000 },
    { source: 3, target: 6, value: 198000 },
    { source: 3, target: 7, value: 285000 },
    { source: 3, target: 8, value: 140000 },
  ],
};



export function EvilExampleSankeyChart({prefs}: {prefs: Preferences}) {
const chartConfig = {
  ProductSales: {
    label: "Product Sales",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
  Subscriptions: {
    label: "Subscriptions",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
  Services: {
    label: "Services",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
  TotalRevenue: {
    label: "Total Revenue",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
  Research: {
    label: "R&D",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
  Marketing: {
    label: "Marketing",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
  Operations: {
    label: "Operations",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
  Salaries: {
    label: "Salaries",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
  Profit: {
    label: "Profit",
    colors: {
      light: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
      dark: [prefs.accent, prefs.active, prefs.success, prefs.warning, prefs.muted], // [!code highlight]
    },
  },
} satisfies ChartConfig;
  return (
    <EvilSankeyChart className="h-full w-full p-4" data={data} config={chartConfig}>
      <EvilSankeyChart.Node isClickable>
        <EvilSankeyChart.NodeLabel position="outside" showValues />
      </EvilSankeyChart.Node>
      <EvilSankeyChart.Link variant="gradient" />
      <EvilSankeyChart.Tooltip />
    </EvilSankeyChart>
  );
}

