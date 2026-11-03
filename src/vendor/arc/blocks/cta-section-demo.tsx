import { CtaSection } from "@/vendor/arc/blocks/cta-section/cta-section";

export function Closing() {
  return (
    <CtaSection
      variant="split"
      title="Your team, set up before lunch"
      primaryAction={{ label: "Create a workspace", href: "#" }}
      secondaryAction={{ label: "Book a demo", href: "#" }}
      points={["Import from any tracker", "SSO included", "Cancel anytime"]}
    />
  );
}
