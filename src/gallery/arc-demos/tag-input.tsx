import { useState } from "react";
import { TagInput } from "@/vendor/arc/tag-input/tag-input";

export function TopicsField() {
  const [topics, setTopics] = useState(["design", "motion"]);
  return (
    <TagInput
      label="Topics"
      value={topics}
      onValueChange={setTopics}
      description="Press Enter or comma to add."
    />
  );
}
