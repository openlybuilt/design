import { HoverCard, HoverCardProfile } from "@/vendor/arc/hover-card/hover-card";

export function Mention() {
  return (
    <HoverCard
      content={<HoverCardProfile name="Maya Chen" role="Product designer, Payments" stats={[{ label: "Projects", value: 12 }]} />}
    >
      <button className="save" type="button">@maya</button>
    </HoverCard>
  );
}
