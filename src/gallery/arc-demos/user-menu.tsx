import { UserMenu } from "@/vendor/arc/user-menu/user-menu";
import { CreditCard, Settings, UserRound } from "lucide-react";

export function TopBarAccount() {
  return (
    <UserMenu
      user={{ name: "Alex Morgan", email: "alex@example.com" }}
      showName
      
      items={[
        { label: "Profile", icon: <UserRound size={16} />, onSelect: () => {} },
        { label: "Settings", icon: <Settings size={16} />, keys: ["⌘", ","], onSelect: () => {} },
        { label: "Billing", icon: <CreditCard size={16} />, onSelect: () => {} },
      ]}
      onSignOut={() => {}}
    />
  );
}
