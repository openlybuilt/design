import React from "react";
// Transitions.dev — Tooltip open/close (React, self-contained)
// Drop into any React project — no extra CSS file needed.

// ── Styles ───────────────────────────────────────────────
// Auto-injected on first import. Idempotent (guarded by
// the element id) and SSR-safe (no-ops without document).
const __TRANSITION_STYLES = `
:root {
  --tt-in-dur: 150ms;
  --tt-out-dur: 50ms;
  --tt-scale: 0.98;
  --tt-delay: 80ms;
  --tt-in-ease: ease-out;
  --tt-out-ease: ease-out;
  --tt-move-dur: 160ms;
  --tt-move-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tt-bg: #ffffff;
  --tt-fg: #2f2f2f;
}

.t-tt-group {
  position: relative;
  display: inline-flex;
}
.t-tt {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0;                 /* the JS writes the measured width */
  overflow: hidden;
  /* Individual transform properties: the travel (translate) and the
     appear (scale) run on their own clocks. */
  translate: var(--tt-x, 0px) 0;
  scale: var(--tt-scale);
  transform-origin: 50% 100%;
  padding: 8px 12px;
  border-radius: 8px;
  background: var(--tt-bg);
  color: var(--tt-fg);
  white-space: nowrap;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 2px 6px 0 rgba(0, 0, 0, 0.05),
    0 4px 42px 0 rgba(0, 0, 0, 0.06);
  opacity: 0;
  pointer-events: none;
  /* Default rule controls the LEAVE state: no delay, so hiding plays
     immediately. The move lanes are always live. */
  transition:
    opacity   var(--tt-out-dur) var(--tt-out-ease),
    scale     var(--tt-out-dur) var(--tt-out-ease),
    translate var(--tt-move-dur) var(--tt-move-ease),
    width     var(--tt-move-dur) var(--tt-move-ease);
}
/* The appear delay belongs ONLY to the show rule, so hiding snaps it
   back to 0. A retarget while showing carries no delay at all. */
.t-tt[data-show="true"] {
  opacity: 1;
  scale: 1;
  transition:
    opacity   var(--tt-in-dur) var(--tt-in-ease) var(--tt-delay),
    scale     var(--tt-in-dur) var(--tt-in-ease) var(--tt-delay),
    translate var(--tt-move-dur) var(--tt-move-ease),
    width     var(--tt-move-dur) var(--tt-move-ease);
}
.t-tt-text { white-space: nowrap; }

@media (prefers-reduced-motion: reduce) {
  .t-tt { transition: none !important; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("transitions-p17")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p17";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

// Pair with the CSS from the CSS tab.
// One tooltip per group, shared by every trigger. Hovering a trigger
// writes the bubble's x + width: when it is already showing the move
// tweens (it travels); when hidden the geometry snaps and only the
// appear plays. Bring your own trigger styling.
import { useRef } from "react";

export function TooltipGroup({ id, items }) {
  // items: [{ label: "Copy", tooltip: "Copy link", onClick }]
  const group = useRef(null);
  const tip = useRef(null);
  const text = useRef(null);

  const hide = () => {
    tip.current.setAttribute("data-show", "false");
    tip.current.setAttribute("aria-hidden", "true");
  };

  const place = (trigger, label) => {
    const t = tip.current;
    const showing = t.getAttribute("data-show") === "true";
    text.current.textContent = label;
    const cs = getComputedStyle(t);
    const width = Math.ceil(
      text.current.scrollWidth +
        parseFloat(cs.paddingLeft) +
        parseFloat(cs.paddingRight)
    );
    const g = group.current.getBoundingClientRect();
    const r = trigger.getBoundingClientRect();
    const x = r.left - g.left + r.width / 2 - width / 2;
    if (!showing) {
      // Snap the geometry while hidden so only the appear plays.
      t.style.transition = "none";
      t.style.width = `${width}px`;
      t.style.setProperty("--tt-x", `${x}px`);
      void t.offsetWidth;
      t.style.transition = "";
    } else {
      t.style.width = `${width}px`;
      t.style.setProperty("--tt-x", `${x}px`);
    }
    t.setAttribute("data-show", "true");
    t.setAttribute("aria-hidden", "false");
  };

  return (
    <span ref={group} className="t-tt-group" onPointerLeave={hide}>
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className="t-tt-trigger"
          aria-describedby={id}
          onPointerEnter={(e) => place(e.currentTarget, item.tooltip)}
          onFocus={(e) => place(e.currentTarget, item.tooltip)}
          onBlur={hide}
          onClick={item.onClick}
        >
          {item.label}
        </button>
      ))}
      <span
        ref={tip}
        id={id}
        className="t-tt"
        role="tooltip"
        aria-hidden="true"
        data-show="false"
      >
        <span ref={text} className="t-tt-text" />
      </span>
    </span>
  );
}
