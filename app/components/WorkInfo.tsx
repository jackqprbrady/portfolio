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
            Six years at Paddy Power, where I currently work across the full content pipeline, specifically focused on leading digital video and imagery content on{" "}
            <a
              href="https://www.paddypowernews.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1A04FF", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Paddy Power News
            </a>
            . Each video here is something I have been involved in from the earliest briefing sessions through to the finished cut: pushing back on the obvious routes, developing ideas from concept to script to screen. A big part of the role is also taking that content further. Repurposing and cutting it down for our own platforms so the same creative work can live across social, editorial, and owned channels in a way that actually suits each one.
          </p>
        </div>
      )}
    </div>
  );
}
