"use client";

import { useEffect, useRef, useState } from "react";

interface TileProps {
  loop?: string;        // short muted preview loop (autoplays)
  full: string;         // full video, plays in lightbox with sound
  poster: string;
  ratio?: "9/16" | "16/9";
  title: string;
  meta?: string;
  badge?: string;
}

export function LoopTile({ loop, full, poster, ratio = "9/16", title, meta, badge }: TileProps) {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  // pause preview loops when offscreen; battery and CPU sanity
  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={`tile ${ratio === "9/16" ? "tile-v" : "tile-h"}`}
        role="button"
        tabIndex={0}
        aria-label={`Play: ${title}`}
        onClick={() => setOpen(true)}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true); } }}
      >
        {loop ? (
          <video ref={vidRef} src={loop} poster={poster} muted loop playsInline autoPlay preload="metadata" />
        ) : (
          // poster-only tile: full video loads on click
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt={title} loading="lazy" />
        )}
        {badge && <span className="tile-badge">{badge}</span>}
        <div className="tile-foot">
          <span className="tile-play">&#9654;</span>
          <div>
            <p className="tile-title">{title}</p>
            {meta && <p className="tile-meta">{meta}</p>}
          </div>
        </div>
      </div>

      {open && (
        <div className="lightbox" onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
          <button className="lightbox-x" onClick={() => setOpen(false)} aria-label="Close">&#10005;</button>
          <div className={`lightbox-stage ${ratio === "9/16" ? "stage-v" : "stage-h"}`}>
            <video src={full} poster={poster} controls autoPlay playsInline />
            <p className="lightbox-cap">{title}{meta ? ` / ${meta}` : ""}</p>
          </div>
        </div>
      )}
    </>
  );
}

export function ImageTile({ src, title }: { src: string; title: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <div className="imgtile" role="button" tabIndex={0} aria-label={`View: ${title}`}
        onClick={() => setOpen(true)}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true); } }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={title} loading="lazy" />
      </div>
      {open && (
        <div className="lightbox" onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
          <button className="lightbox-x" onClick={() => setOpen(false)} aria-label="Close">&#10005;</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lightbox-img" src={src} alt={title} />
        </div>
      )}
    </>
  );
}
