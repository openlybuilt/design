import { useState } from "react";
import { BillingPrice, BillingToggle } from "@/vendor/arc/billing-toggle/billing-toggle";

export function ProPrice() {
  const [period, setPeriod] = useState("monthly");
  const yearly = period === "yearly";
  return (
    <div className="billing-preview">
      <BillingToggle
        value={period}
        onValueChange={setPeriod}
        options={[
          { value: "monthly", label: "Monthly" },
          { value: "yearly", label: "Yearly", badge: "Save 20%", activeBadge: "You save $48" },
        ]}
      />
      <BillingPrice amount={yearly ? 16 : 20} was={yearly ? 20 : undefined} period={yearly ? "per month, billed yearly" : "per month"} />
    </div>
  );
}
