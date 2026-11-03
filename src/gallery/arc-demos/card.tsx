import { Card } from "@/vendor/arc/card/card";
import { Avatar } from "@/vendor/arc/avatar/avatar";

export function ProjectCard() {
  return (
    <Card
      title="Harbour redesign"
      description="New booking flow and room pages."
      media={<img src="/assets/preview-landscape.svg" alt="" />}
      avatar={<Avatar name="Maya Chen" size="sm" />}
      meta="Maya Chen"
      status="Updated 2 hours ago"
      details={<p>Scope, milestones, and open questions.</p>}
    />
  );
}
