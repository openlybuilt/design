import { useState } from "react";
import { Select } from "@/vendor/arc/select/select";

export function RegionSelect() {
  const [region, setRegion] = useState("eu");
  return (
    <Select
      label="Region"
      value={region}
      onValueChange={setRegion}
      options={[
        { value: "us", label: "United States" },
        { value: "eu", label: "Europe" },
        { value: "ap", label: "Asia Pacific", disabled: true },
      ]}
    />
  );
}
