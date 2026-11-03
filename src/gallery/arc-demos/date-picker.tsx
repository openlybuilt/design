import { useState } from "react";
import { DatePicker } from "@/vendor/arc/date-picker/date-picker";

export function StartDateField() {
  const [start, setStart] = useState<Date>();
  return (
    <DatePicker
      label="Start date"
      value={start}
      onChange={setStart}
      minDate={new Date()}
      showToday
    />
  );
}
