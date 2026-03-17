"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface VideoCardProps {
  embed: string;
  title: string;
  summary: string;
  context: string;
  lens: string;
  takeaway: string;
  enhanced: string;
}

export default function VideoCard({ embed, title, summary, context, lens, takeaway, enhanced }: VideoCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: "var(--card-bg)",
      border: "1px solid var(--border)",
      borderRadius: "12px",
      overflow: "hidden",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Green accent line */}
      <div style={{ height: "2px", background: "var(--accent)", opacity: 0.6 }} />

      {/* Video */}
      <div className="video-wrapper">
        <iframe
          src={embed}
          title={title}
          allowFullScreen
          allow="fullscreen; picture-in-picture"
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem 1.25rem 1rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "var(--fg)",
          letterSpacing: "-0.01em",
          marginBottom: "0.4rem",
          lineHeight: 1.3,
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: "0.8125rem",
          color: "var(--muted)",
          lineHeight: 1.6,
          flex: 1,
        }}>
          {summary}
        </p>

        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            marginTop: "0.875rem",
            paddingTop: "0.875rem",
            borderTop: "1px solid var(--border)",
            background: "none",
            cursor: "pointer",
            color: open ? "var(--fg)" : "var(--muted)",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
            padding: "0.875rem 0 0",
            width: "100%",
            textAlign: "left",
            transition: "color 0.15s",
          }}
        >
          <span style={{ flex: 1 }}>{open ? "Close" : "Unpack this"}</span>
          <ChevronDown
            size={13}
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
              flexShrink: 0,
            }}
          />
        </button>

        {open && (
          <div style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
          }}>
            <Field label="Context" value={context} />
            <Field label="My Lens" value={lens} />
            <Field label="What I Take From This" value={takeaway} />
            <Field label="Why Enhanced" value={enhanced} accent />
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p style={{
        fontSize: "0.625rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: accent ? "var(--accent)" : "#444",
        marginBottom: "0.25rem",
      }}>
        {label}
      </p>
      <p style={{ fontSize: "0.8125rem", color: "#aaa", lineHeight: 1.65 }}>{value}</p>
    </div>
  );
}
