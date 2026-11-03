import { useState } from "react";
import { Archive, Check, CopyPlus, Link, Pin, Trash2 } from "lucide-react";
import { ButtonGroup } from "@/vendor/arc/button-group/button-group";

export function DocumentActions() {
  const [copied, setCopied] = useState(false);
  return (
    <ButtonGroup
      label="Document actions"
      items={[
        {
          id: "share",
          label: copied ? "Copied" : "Share",
          reserve: ["Share", "Copied"],
          icon: copied ? <Check /> : <Link />,
          onSelect: async () => {
            await navigator.clipboard.writeText("https://example.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          },
        },
        { id: "duplicate", label: "Duplicate", icon: <CopyPlus />, onSelect: () => {} },
        { id: "archive", label: "Archive", icon: <Archive />, onSelect: () => {} },
      ]}
      menu={{
        label: "More actions",
        items: [
          { id: "pin", label: "Pin to sidebar", icon: <Pin />, onSelect: () => {} },
          { id: "delete", label: "Delete", icon: <Trash2 />, destructive: true, onSelect: () => {} },
        ],
      }}
    />
  );
}
