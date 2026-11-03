import { Breadcrumb } from "@/vendor/arc/breadcrumb/breadcrumb";

export function SettingsPath() {
  return (
    <Breadcrumb
      items={[
        { label: "Workspace", href: "/" },
        { label: "Settings", href: "/settings" },
        { label: "Billing" },
      ]}
    />
  );
}
