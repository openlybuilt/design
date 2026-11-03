import React from "react";
// Transitions.dev — Toast open / close (React, self-contained)
// Drop into any React project — no extra CSS file needed.

import { useState } from "react";

// ── Styles ──────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --toast-open: 350ms;
  --toast-close: 250ms;
  --toast-distance: 16px;
  --toast-blur: 2px;
  --toast-scale: 0.97;
  --toast-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-toast {
  opacity: 0;
  transform: translateY(var(--toast-distance)) scale(var(--toast-scale));
  filter: blur(var(--toast-blur));
  will-change: transform, opacity, filter;
  transition:
    opacity var(--toast-close) var(--toast-ease),
    transform var(--toast-close) var(--toast-ease),
    filter var(--toast-close) var(--toast-ease);
}
.t-toast.is-open {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  transition:
    opacity var(--toast-open) var(--toast-ease),
    transform var(--toast-open) var(--toast-ease),
    filter var(--toast-open) var(--toast-ease);
}

@media (prefers-reduced-motion: reduce) {
  .t-toast { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p22")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p22";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab. Toggle `.is-open` on the toast —
// opening uses the slower clock, the resting (closed) transition uses the
// faster one, so a single class gives the open/close asymmetry.
export function Toast({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen((v) => !v)}>Animate</button>
      <div
        className={"t-toast" + (open ? " is-open" : "")}
        role="status"
        aria-hidden={!open}
      >
        {children}
      </div>
    </>
  );
}
