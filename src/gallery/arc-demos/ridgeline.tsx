import { Ridgeline } from "@/vendor/arc/ridgeline/ridgeline";

export function Latency() {
  return <Ridgeline series={[{id: "east", label: "East", values: [12, 20, 32, 25, 10]}, {id: "west", label: "West", values: [8, 16, 25, 19, 12]}]} label="API latency by region" unit=" ms" />;
}
