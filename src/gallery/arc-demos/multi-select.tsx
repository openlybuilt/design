import { useState } from "react";
import { MultiSelect } from "@/vendor/arc/multi-select/multi-select";

export function LabelPicker() {
  const [labels, setLabels] = useState<string[]>(["bug"]);
  return (
    <MultiSelect
      label="Labels"
      value={labels}
      onValueChange={setLabels}
      options={[
        { value: "bug", label: "Bug" },
        { value: "feature", label: "Feature" },
        { value: "docs", label: "Docs" },
      ]}
    />
  );
}
