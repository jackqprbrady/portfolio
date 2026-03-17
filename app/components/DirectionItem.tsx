"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  label: string;
  title: string;
}

export default function DirectionItem({ label, title }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderBottom: "1px solid rgba(255,255,255,0.12)",
    }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "18px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
          <span style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 700,
            fontSize: "0.5rem",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.4)",
            flexShrink: 0,
          }}>{label}</span>
          <span style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            color: "#fff",
          }}>{title}</span>
        </div>
        <ChevronDown
          size={13}
          color="rgba(255,255,255,0.45)"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        />
      </button>

      {open && (
        <p style={{
          fontSize: "0.875rem",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.7,
          paddingBottom: "18px",
          paddingRight: "32px",
        }}>
          {title === "Flip the exclusion" && "Open where people already are — \"this isn't for you\", \"this looks like cheating\" — then flip it. Collapse the assumption before they've had a chance to dig in."}
          {title === "You vs You" && "Not elite vs amateur. Same person, same life — just functioning better. The comparison that hits hardest is the one people can actually see themselves in."}
          {title === "Everyday friction" && "Energy, recovery, consistency. Not transformation. Removing what's slowing people down and showing the gap between how they feel now and how they could feel."}
          {title === "Looks like cheating" && "Lean into the discomfort before breaking it. The \"cheating\" frame is already in the room — own it, then dissolve it with what it actually is."}
          {title === "Humour as contrast" && "Show the gap between current state and potential state with a light touch. The distance between how people are functioning now and how they could be is the joke and the sell."}
        </p>
      )}
    </div>
  );
}
