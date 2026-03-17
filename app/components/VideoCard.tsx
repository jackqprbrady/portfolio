"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  embed: string;
  title: string;
  summary: string;
  context: string;
  lens: string;
}

export default function VideoCard({ embed, title, summary, context, lens }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: "#0f0f0f",
      border: "1px solid #1c1c1c",
      borderRadius: "8px",
      overflow: "hidden",
    }}>
      <div className="video-wrapper">
        <iframe src={embed} title={title} allowFullScreen allow="fullscreen; picture-in-picture" />
      </div>

      <div style={{ padding: "14px 16px 16px" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#e0e0e0", lineHeight: 1.3, marginBottom: "4px" }}>
          {title}
        </p>
        <p style={{ fontSize: "0.8125rem", color: "#555", lineHeight: 1.5 }}>
          {summary}
        </p>

        <button
          onClick={() => setOpen(v => !v)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "1px solid #1c1c1c",
            background: "none",
            cursor: "pointer",
            color: "#444",
            fontSize: "0.6875rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "12px 0 0",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#888")}
          onMouseLeave={e => (e.currentTarget.style.color = "#444")}
        >
          <span>Behind this</span>
          <ChevronDown size={11} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
        </button>

        {open && (
          <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <p style={{ fontSize: "0.5625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#333", marginBottom: "3px" }}>Context</p>
              <p style={{ fontSize: "0.8125rem", color: "#666", lineHeight: 1.55 }}>{context}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.5625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#333", marginBottom: "3px" }}>My lens</p>
              <p style={{ fontSize: "0.8125rem", color: "#666", lineHeight: 1.55 }}>{lens}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
