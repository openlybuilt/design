import { useState } from "react";
import { InlineEdit } from "@/vendor/arc/inline-edit/inline-edit";

export function ProjectTitle() {
  const [name, setName] = useState("Project name");
  return (
    <InlineEdit
      as="h1"
      label="Project name"
      value={name}
      validate={(next) => (next.trim() ? null : "Name can’t be empty")}
      onSave={setName}
    />
  );
}
