"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface VideoCardProps {
  embed: string;
  title: string;
  summary: string;
  context: string;
  lens: string;
}

export default function VideoCard({ embed, title, summary, context, lens }: VideoCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: "var(--card-bg)",
      border: "1px solid var(--border)",
      borderRadius: "10px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      <div className="video-wrapper">
        <iframe src={embed} title={title} allowFullScreen allow="fullscreen; picture-in-picture" />
      </div>

      <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "var(--fg)",
          letterSpacing: "-0.01em",
          marginBottom: "4px",
          lineHeight: 1.3,
        }}>
          {title}
        </h3>
        <p style={{ fontSize: "0.8125rem", color: "#555", lineHeight: 1.55 }}>
          {summary}
        </p>

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            marginTop: "10px",
            paddingTop: "10px",
            borderTop: "1px solid var(--border)",
            background: "none",
            cursor: "pointer",
            color: "#444",
            fontSize: "0.6875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
            padding: "10px 0 0",
            width: "100%",
            textAlign: "left",
            transition: "color 0.15s",
            border: "none",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={e => (e.currentTarget.style.color = "#444")}
        >
          <span style={{ flex: 1 }}>Behind this</span>
          <ChevronDown size={12} style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }} />
        </button>

        {open && (
          <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Field label="Context" value={context} />
            <Field label="My lens" value={lens} />
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{
        fontSize: "0.5625rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "#3a3a3a",
        marginBottom: "3px",
      }}>
        {label}
      </p>
      <p style={{ fontSize: "0.8125rem", color: "#777", lineHeight: 1.55 }}>{value}</p>
    </div>
  );
}
