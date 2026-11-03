import { useState } from "react";
import { RichTextEditor, type RichTextValue } from "@/vendor/arc/rich-text-editor/rich-text-editor";

export function PostEditor() {
  const [doc, setDoc] = useState<RichTextValue | null>(null);
  return (
    <>
      <RichTextEditor
        aria-label="Post body"
        placeholder="Write your update"
        defaultMarkdown={"# Release notes\n\n- Faster search\n- New **dark** theme"}
        onChange={setDoc}
      />
      <button type="button" disabled={!doc || doc.empty} onClick={() => void doc!.markdown}>
        Publish
      </button>
    </>
  );
}


