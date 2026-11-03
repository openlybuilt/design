import { ScrollArea } from "@/vendor/arc/scroll-area/scroll-area";

export function ActivityPanel() {
  return (
    <ScrollArea maxHeight={320} label="Recent activity">
      <ul>{["Workflow created", "Details added", "Review requested", "Feedback received", "Changes applied", "Review completed", "Ready to publish", "Schedule confirmed", "Published", "Team notified", "Results reviewed", "Workflow archived"].map(item => <li key={item}>{item}</li>)}</ul>
    </ScrollArea>
  );
}
