import { FaqSection } from "@/vendor/arc/blocks/faq-section/faq-section";

export function PricingFaq() {
  return (
    <FaqSection
      variant="search"
      title="Questions about billing"
      items={[
        { question: "Can I cancel anytime?", answer: "Yes. Your plan stays active until the end of the billing period." },
        { question: "Do you offer refunds?", answer: "We refund annual plans within 14 days of purchase." },
      ]}
      
    />
  );
}
