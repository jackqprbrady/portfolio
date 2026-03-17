"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import VideoCard from "./VideoCard";

interface Card {
  embed: string;
  title: string;
  summary: string;
  context: string;
  lens: string;
  takeaway: string;
  enhanced: string;
}

export default function VideoCarousel({ cards, label, index }: { cards: Card[]; label: string; index: string }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section style={{ padding: "0 0 80px" }}>
      {/* Section header */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 40px 28px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--border)",
        marginBottom: "32px",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
          <span style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.8125rem",
            color: "var(--accent)",
            opacity: 0.8,
          }}>
            {index}
          </span>
          <h2 style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#555",
          }}>
            {label}
          </h2>
        </div>

        {/* Arrow buttons */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {[{ dir: -1, Icon: ArrowLeft }, { dir: 1, Icon: ArrowRight }].map(({ dir, Icon }) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#555",
                transition: "all 0.15s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.color = "#555";
              }}
            >
              <Icon size={14} />
            </button>
          ))}
        </div>
      </div>

      {/* Carousel track with left padding to align with content */}
      <div style={{ paddingLeft: "clamp(24px, 5vw, 40px)" }}>
        <div className="carousel-track" ref={trackRef}>
          {cards.map((card) => (
            <div key={card.title} className="carousel-item">
              <VideoCard {...card} />
            </div>
          ))}
          {/* Spacer at end */}
          <div style={{ flex: "0 0 40px" }} />
        </div>
      </div>
    </section>
  );
}
