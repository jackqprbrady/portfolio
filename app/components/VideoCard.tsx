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
  performanceNote?: string;
}

export default function VideoCard({
  embed,
  title,
  summary,
  context,
  lens,
  takeaway,
  enhanced,
  performanceNote,
}: VideoCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#111111",
        border: "1px solid #2a2a2a",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <div className="video-wrapper">
        <iframe
          src={embed}
          title={title}
          allowFullScreen
          allow="autoplay; fullscreen; picture-in-picture"
        />
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "#e8e8e8",
            marginBottom: "0.375rem",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#9ca3af", lineHeight: 1.6 }}>
          {summary}
        </p>

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            marginTop: "1rem",
            fontSize: "0.8125rem",
            color: "#6b7280",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#e8e8e8")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#6b7280")
          }
        >
          <span>{open ? "Less" : "More"}</span>
          <ChevronDown
            size={14}
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </button>

        {open && (
          <div
            style={{
              marginTop: "1.25rem",
              borderTop: "1px solid #2a2a2a",
              paddingTop: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Field label="Context" value={context} />
            <Field label="My Lens" value={lens} />
            <Field label="What I Take From This" value={takeaway} />
            <Field label="Why This Matters for Enhanced" value={enhanced} accent />
            {performanceNote && (
              <Field label="Performance Note" value={performanceNote} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p
        style={{
          fontSize: "0.6875rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: accent ? "#4ade80" : "#6b7280",
          marginBottom: "0.25rem",
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: "0.875rem", color: "#d1d5db", lineHeight: 1.65 }}>
        {value}
      </p>
    </div>
  );
}
