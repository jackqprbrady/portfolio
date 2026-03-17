"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WorkInfo() {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <p className="section-label-light" style={{ marginBottom: 0 }}>Narrative / Cultural</p>

        <button
          onClick={() => setOpen(v => !v)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 12px",
            borderRadius: "1600px",
            border: "1px solid rgba(0,0,0,0.15)",
            background: "none",
            cursor: "pointer",
            color: "rgba(0,0,0,0.4)",
            fontSize: "0.5625rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 700,
            transition: "border-color 0.15s, color 0.15s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#1A04FF";
            (e.currentTarget as HTMLButtonElement).style.color = "#1A04FF";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.15)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(0,0,0,0.4)";
          }}
        >
          About this work
          <ChevronDown
            size={9}
            style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
          />
        </button>
      </div>

      {open && (
        <div style={{
          marginTop: "16px",
          padding: "20px 24px",
          background: "rgba(0,0,0,0.04)",
          borderRadius: "4px",
          borderLeft: "2px solid #1A04FF",
          marginBottom: "4px",
        }}>
          <p style={{
            fontSize: "0.875rem",
            lineHeight: 1.8,
            color: "rgba(0,0,0,0.6)",
            maxWidth: "680px",
          }}>
            A collection of work from six years at Paddy Power. Each video here is something I was involved in across the full pipeline: from the earliest briefing sessions and creative development, through production and into the edit. That meant pushing back on the safe routes early, shaping how ideas moved from concept to script to screen, managing relationships with directors and production companies, and staying hands-on in the edit suite to make sure the finished film actually landed the way it was supposed to. The work covers brand, cultural, and conversion territory. Different formats, different objectives, same standard of involvement throughout.
          </p>
        </div>
      )}
    </div>
  );
}
