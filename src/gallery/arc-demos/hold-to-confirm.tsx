import { HoldToConfirm } from "@/vendor/arc/hold-to-confirm/hold-to-confirm";

export function DeleteProject() {
  return (
    <HoldToConfirm
      label="Hold to delete project"
      confirmedLabel="Deleted"
      duration={1500}
      onConfirm={() => {}}
    />
  );
}
