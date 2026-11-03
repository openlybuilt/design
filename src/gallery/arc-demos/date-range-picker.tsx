import { useState } from "react";
import { DateRangePicker } from "@/vendor/arc/date-range-picker/date-range-picker";
import type { DateRange } from "@/vendor/arc/date-range-picker/date-range-picker";

export function ReportRange() {
  const [range, setRange] = useState<DateRange | null>(null);
  return (
    <DateRangePicker
      label="Report period"
      value={range}
      onChange={setRange}
      weekStartsOn={1}
      maxDate={new Date()}
    />
  );
}
