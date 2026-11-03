import { SplitButton } from "@/vendor/arc/split-button/split-button";

export function MergeButton() {
  return (
    <SplitButton
      label="Merge pull request"
      onClick={() => {}}
      actions={[
        { label: "Squash and merge", onSelect: () => {} },
        { label: "Rebase and merge", onSelect: () => {} },
        { label: "Close pull request", onSelect: () => {}, destructive: true },
      ]}
    />
  );
}
