import React from "react";
import type { Segment } from "../_data/site";

const emStyle: Record<NonNullable<Segment["em"]>, React.CSSProperties> = {
  b: { color: "var(--fg)", fontWeight: 600 },
  dim: { color: "var(--fg-dim)" },
  accent: { color: "var(--accent)" },
  muted: { color: "var(--fg-dim)" },
};

/** Rend une suite de fragments de texte avec emphase inline (placeholder). */
export default function RichText({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((s, i) =>
        s.em ? (
          <span key={i} style={emStyle[s.em]}>
            {s.text}
          </span>
        ) : (
          <React.Fragment key={i}>{s.text}</React.Fragment>
        ),
      )}
    </>
  );
}
