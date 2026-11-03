import { AnnouncementBar } from "@/vendor/arc/announcement-bar/announcement-bar";

export function SiteBanner() {
  return (
    <AnnouncementBar
      id="fall-sale-2026"
      tone="inverted"
      messages={[
        { id: "sale", message: "Fall sale: 30% off annual plans.", countdown: { to: "2030-10-01T00:00:00Z", label: "Ends in" }, action: { label: "See plans", href: "#" } },
        { id: "launch", message: "Workflows are now in beta.", action: { label: "Read more", href: "#" } },
      ]}
    />
  );
}
