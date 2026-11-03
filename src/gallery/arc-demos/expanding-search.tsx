import { ExpandingSearch } from "@/vendor/arc/expanding-search/expanding-search";

export function HeaderSearch() {

  return (
    <ExpandingSearch
      label="Search projects and docs"
      items={[
        { id: "p1", title: "Arc website", group: "Projects", meta: "Updated today" },
        { id: "d1", title: "Motion tokens", group: "Docs", keywords: ["spring"] },
      ]}
      onSelect={() => {}}
    />
  );
}
