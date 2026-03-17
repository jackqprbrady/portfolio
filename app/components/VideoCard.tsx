"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  embed: string;
  title: string;
  summary: string;
  context: string;
  lens: string;
  category: string;
}

export default function VideoCard({ embed, title, summary, context, lens, category }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: "#0d0d0d",
      border: "1px solid #1c1c1c",
      borderTop: "2px solid var(--blue)",
      borderRadius: "8px",
      overflow: "hidden",
    }}>
      {/* Video with category tag */}
      <div className="video-wrapper">
        <iframe src={embed} title={title} allowFullScreen allow="fullscreen; picture-in-picture" />
        <span className="video-tag">{category}</span>
      </div>

      <div style={{ padding: "12px 14px 14px" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#e0e0e0", lineHeight: 1.3, marginBottom: "4px" }}>
          {title}
        </p>
        <p style={{ fontSize: "0.8125rem", color: "#4a4a4a", lineHeight: 1.5 }}>
          {summary}
        </p>

        {/* Pill expand button — Enhanced style */}
        <button
          onClick={() => setOpen(v => !v)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "12px",
            padding: "5px 12px",
            borderRadius: "9999px",
            border: "1px solid #252525",
            background: "none",
            cursor: "pointer",
            color: "#4a4a4a",
            fontSize: "0.625rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 700,
            transition: "border-color 0.15s, color 0.15s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--blue)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--blue)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#252525";
            (e.currentTarget as HTMLButtonElement).style.color = "#4a4a4a";
          }}
        >
          Behind this
          <ChevronDown size={10} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
        </button>

        {open && (
          <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid #1a1a1a", paddingTop: "14px" }}>
            <InfoRow label="Context" value={context} />
            <InfoRow label="My lens" value={lens} />
          </div>
        )}
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{
        fontFamily: "var(--font-condensed), sans-serif",
        fontWeight: 700,
        fontSize: "0.5625rem",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        color: "#333",
        marginBottom: "4px",
      }}>
        {label}
      </p>
      <p style={{ fontSize: "0.8125rem", color: "#666", lineHeight: 1.55 }}>{value}</p>
    </div>
  );
}
