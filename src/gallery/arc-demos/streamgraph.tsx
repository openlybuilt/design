import { Streamgraph } from "@/vendor/arc/streamgraph/streamgraph";

const series = [{ key: "bugs", label: "Bugs" }, { key: "billing", label: "Billing" }, { key: "onboarding", label: "Onboarding" }];
const data = Array.from({length: 6}, (_, i) => ({key: String(i), label: `Week ${i+1}`, values: {bugs: 4+i, billing: 3+i*2, onboarding: 6-i}}));

export function TicketsByTopic() {
  return <Streamgraph data={data} series={series} label="Support tickets by topic" unit="tickets" categoryLabel="Week" />;
}
