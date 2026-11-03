import { useState } from "react";
import { MentionInput, serializeMentions, type MentionValue } from "@/vendor/arc/mention-input/mention-input";

const people = [
  { id: "u1", name: "Maya Chen", role: "Design lead" },
  { id: "u2", name: "Theo Park", role: "Engineer" },
];
const channels = [{ id: "c1", name: "launch", description: "Release planning", members: 14 }];

export function CommentBox() {
  const [value, setValue] = useState<MentionValue>({ text: "", mentions: [] });
  return (
    <MentionInput
      aria-label="Comment"
      placeholder="Write a comment, @ to mention"
      people={people}
      channels={channels}
      value={value}
      onChange={setValue}
      submitOnEnter
      onSubmit={next => {
        serializeMentions(next);
        setValue({ text: "", mentions: [] });
      }}
    />
  );
}
