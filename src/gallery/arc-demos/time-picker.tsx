import { useState } from "react";
import { TimePicker } from "@/vendor/arc/time-picker/time-picker";

export function MeetingTime() {
  const [time, setTime] = useState("14:30");
  return <TimePicker label="Start time" value={time} onChange={setTime} minuteStep={30} />;
}
