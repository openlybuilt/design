import { useState } from "react";
import { SignaturePad, signatureToSvg } from "@/vendor/arc/signature-pad/signature-pad";
import type { InkStroke } from "@/vendor/arc/signature-pad/signature-pad";

export function SignContract() {
  const [strokes, setStrokes] = useState<InkStroke[]>([]);

  return (
    <form onSubmit={event => { event.preventDefault(); signatureToSvg(strokes); }}>
      <SignaturePad signer="Ada Lovelace" fileName="ada-signature" onChange={setStrokes} />
      <button type="submit" disabled={!strokes.length}>Sign</button>
    </form>
  );
}
