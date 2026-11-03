import { Tooltip } from "@/vendor/arc/tooltip/tooltip";

export function ArchiveButton() {
  return (
    <Tooltip content="Archive">
      <button className="save" type="button" aria-label="Archive">
        Archive
      </button>
    </Tooltip>
  );
}
