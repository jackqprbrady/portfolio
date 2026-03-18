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
  const [open, setOpen] = useState(true);

  return (
    <div className="video-card">
      <div className="video-wrapper">
        {embed.includes(".mp4") ? (
          <video src={embed} controls playsInline preload="metadata" />
        ) : (
          <iframe src={embed} title={title} allowFullScreen allow="fullscreen; picture-in-picture" />
        )}
        <span className="video-tag">{category}</span>
      </div>

      <div style={{ padding: "14px 16px 16px" }}>
        <p style={{
          fontFamily: "var(--font-condensed), sans-serif",
          fontWeight: 800,
          fontSize: "0.875rem",
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          color: "#ebebeb",
          lineHeight: 1.15,
          marginBottom: "6px",
        }}>
          {title}
        </p>
        <p style={{
          fontSize: "0.8125rem",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.55,
        }}>
          {summary}
        </p>

        <button
          onClick={() => setOpen(v => !v)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            marginTop: "12px",
            padding: "5px 12px",
            borderRadius: "1600px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.5625rem",
            letterSpacing: "0.14em",
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
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.45)";
          }}
        >
          Behind this
          <ChevronDown
            size={9}
            style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
          />
        </button>

        {open && (
          <div style={{
            marginTop: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "14px",
          }}>
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
        fontSize: "0.5rem",
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        color: "rgba(255,255,255,0.3)",
        marginBottom: "4px",
      }}>
        {label}
      </p>
      <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.55 }}>
        {value}
      </p>
    </div>
  );
}
