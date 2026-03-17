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
}

export default function VideoCarousel({ cards, label, index }: { cards: Card[]; label: string; index: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => trackRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });

  return (
    <section style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px 40px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "0.625rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.1em" }}>{index}</span>
          <h2 style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#555" }}>
            {label}
          </h2>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {[{ dir: -1, Icon: ArrowLeft }, { dir: 1, Icon: ArrowRight }].map(({ dir, Icon }) => (
            <button key={dir} onClick={() => scroll(dir)} style={{
              width: "30px", height: "30px", borderRadius: "50%",
              border: "1px solid var(--border)", background: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#444", transition: "all 0.15s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLButtonElement).style.color = "#444"; }}
            >
              <Icon size={12} />
            </button>
          ))}
        </div>
      </div>
      <div style={{ paddingLeft: "clamp(20px, 3.6vw, 40px)", paddingBottom: "32px" }}>
        <div className="carousel-track" ref={trackRef}>
          {cards.map((card) => (
            <div key={card.title} className="carousel-item">
              <VideoCard {...card} />
            </div>
          ))}
          <div style={{ flex: "0 0 40px" }} />
        </div>
      </div>
    </section>
  );
}
