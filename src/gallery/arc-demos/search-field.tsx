import { useState } from "react";
import { SearchField } from "@/vendor/arc/search-field/search-field";

export function MemberFilter() {
  const [query, setQuery] = useState("");
  return (
    <SearchField
      label="Search members"
      placeholder="Name or email"
      value={query}
      onValueChange={setQuery}
    />
  );
}
