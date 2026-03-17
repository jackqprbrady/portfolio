import VideoCard from "./components/VideoCard";

const narrativeCards = [
  {
    embed: "https://player.vimeo.com/video/349462517",
    title: "Save Our Shirt",
    summary: "A fake outrage stunt that flipped into a pro-fan reveal.",
    context: "A hoax football kit with a huge sponsor sash provoked outrage before revealing the real campaign was to unsponsor the shirt.",
    lens: "Provoke attention first, then reframe it.",
    category: "Narrative",
  },
  {
    embed: "https://player.vimeo.com/video/332046704",
    title: "Rhodri Giggs — Loyalty's Dead",
    summary: "A story-led ad that never directly sells the product.",
    context: "Rhodri Giggs fronts a campaign about rewards vs loyalty without mentioning betting.",
    lens: "Let personality and narrative carry the message.",
    category: "Narrative",
  },
  {
    embed: "https://player.vimeo.com/video/1137747617",
    title: "Danny Dyer Euros",
    summary: "A culturally tuned ad that speaks with the audience, not at them.",
    context: "Danny Dyer explores England's relationship with Europe in a relatable tone.",
    lens: "Talk to people like they already understand.",
    category: "Cultural",
  },
];

const conversionCards = [
  {
    embed: "https://player.vimeo.com/video/132840149",
    title: "Paddy Power App Film",
    summary: "A product film disguised as entertainment.",
    context: "A cinematic film introducing the Paddy Power app and its features.",
    lens: "Make product education feel like content.",
    category: "Product",
  },
  {
    embed: "https://player.vimeo.com/video/674099053",
    title: "Paddy Power Games — Mum",
    summary: "Product features explained through a relatable moment.",
    context: "A scenario-driven ad showing how game features give players another chance.",
    lens: "Show benefits through situations people understand.",
    category: "Conversion",
  },
  {
    embed: "https://www.youtube.com/embed/GCe9t_cguQ",
    title: "Super Sub",
    summary: "A product mechanic turned into a fan-friendly moment.",
    context: "A campaign showing how bets carry over to substitute players.",
    lens: "Turn functional improvements into emotional wins.",
    category: "Product",
  },
];

const ideas = [
  {
    label: "Idea 01",
    title: "What People Think vs Reality",
    body: "Fast contrast cuts. \"This is cheating\" vs \"This is regulated science\". Reframes the category in seconds.",
  },
  {
    label: "Idea 02",
    title: "Engineered Athlete",
    body: "Treat the athlete like a system. Data, performance visuals, premium science. Makes the product feel inevitable.",
  },
  {
    label: "Idea 03",
    title: "Road to May",
    body: "Follow athletes preparing. Short-form, serialised. Builds the kind of investment that makes the product feel personal.",
  },
];

export default function Home() {
  return (
    <main>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-logo">
          <EnhancedMark color="rgba(255,255,255,0.7)" />
          Jack Brady
        </div>
        <div className="nav-links">
          <a href="#narrative" className="nav-link">Work</a>
          <a href="#enhanced" className="nav-link">Ideas</a>
          <a href="mailto:jackqprbrady@gmail.com" className="nav-link">Contact</a>
        </div>
        <a href="mailto:jackqprbrady@gmail.com" className="nav-cta">
          Get in touch
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: "var(--black)",
        paddingTop: "108px",
        paddingBottom: "60px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div className="container">

          <p style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 700,
            fontSize: "0.5625rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "28px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <span style={{ display: "block", width: "18px", height: "1px", background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
            Betting &amp; Sports · 10+ Years
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "64px",
            alignItems: "center",
          }}>
            <h1 style={{
              fontFamily: "var(--font-condensed), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.92,
              color: "#fff",
            }}>
              Turning Skepticism Into Curiosity — And Curiosity Into Action.
            </h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {/* Stats */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0",
                paddingBottom: "28px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                marginBottom: "28px",
              }}>
                {[
                  { num: "10+", label: "Years in category" },
                  { num: "6", label: "Campaigns featured" },
                  { num: "£m", label: "Media managed" },
                ].map(s => (
                  <div key={s.num}>
                    <p style={{
                      fontFamily: "var(--font-condensed), sans-serif",
                      fontWeight: 800,
                      fontSize: "2.5rem",
                      letterSpacing: "-0.04em",
                      color: "#fff",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}>{s.num}</p>
                    <p style={{
                      fontFamily: "var(--font-condensed), sans-serif",
                      fontWeight: 600,
                      fontSize: "0.5rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                    }}>{s.label}</p>
                  </div>
                ))}
              </div>
              {/* Body */}
              <p style={{
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.6)",
              }}>
                I&apos;ve spent years in a category few people trust — making work
                that earns attention rather than demanding it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── NARRATIVE / CULTURAL ── */}
      <section id="narrative" style={{
        background: "var(--black)",
        paddingTop: "40px",
        paddingBottom: "52px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div className="container">
          <p className="section-label">Narrative / Cultural</p>
          <div className="video-grid">
            {narrativeCards.map(c => <VideoCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── PAID / CTA / CONVERSION ── */}
      <section id="conversion" style={{
        background: "#080808",
        paddingTop: "40px",
        paddingBottom: "52px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div className="container">
          <p className="section-label">Paid / CTA / Conversion</p>
          <div className="video-grid">
            {conversionCards.map(c => <VideoCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── ON ENHANCED ── */}
      <section id="enhanced" style={{ background: "var(--blue)", paddingTop: "96px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>

        {/* Background watermark */}
        <div style={{
          position: "absolute",
          bottom: "-60px",
          right: "-40px",
          fontFamily: "var(--font-condensed), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(8rem, 20vw, 22rem)",
          textTransform: "uppercase",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
          userSelect: "none",
        }}>
          Enhanced
        </div>

        <div className="container" style={{ position: "relative" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "48px" }}>
            <EnhancedMark color="rgba(255,255,255,0.5)" size={26} />
            <span style={{
              fontFamily: "var(--font-condensed), sans-serif",
              fontWeight: 800,
              fontSize: "0.625rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}>
              Enhanced
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "72px",
            alignItems: "start",
          }}>

            <div>
              <h2 style={{
                fontFamily: "var(--font-condensed), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 3.8vw, 3.75rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                lineHeight: 0.92,
                color: "#fff",
                marginBottom: "28px",
              }}>
                The Category Has A Framing Problem, Not An Awareness One.
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.7)" }}>
                Most people arrive skeptical. The interesting work shifts that before
                anyone&apos;s tried to explain the product. A few directions I&apos;d look at:
              </p>
            </div>

            <div>
              {ideas.map((idea, i) => (
                <div key={idea.label} style={{
                  paddingTop: i === 0 ? 0 : "24px",
                  paddingBottom: "24px",
                  borderBottom: i < ideas.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}>
                  <p style={{
                    fontFamily: "var(--font-condensed), sans-serif",
                    fontWeight: 700,
                    fontSize: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "8px",
                  }}>{idea.label}</p>
                  <p style={{
                    fontFamily: "var(--font-condensed), sans-serif",
                    fontWeight: 800,
                    fontSize: "1.125rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.05,
                    color: "#fff",
                    marginBottom: "8px",
                  }}>{idea.title}</p>
                  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                    {idea.body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "var(--black)" }}>
        {/* Giant wordmark */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}>
          <span className="footer-wordmark">Jack Brady</span>
        </div>

        {/* Copyright bar */}
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 56px",
        }}>
          <p style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 700,
            fontSize: "0.5rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.18)",
          }}>
            Jack Brady · 2025
          </p>
          <p style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 700,
            fontSize: "0.5rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.18)",
          }}>
            ≡+ Enhanced Games · Las Vegas · May 2026
          </p>
        </div>
      </footer>

    </main>
  );
}

function EnhancedMark({ color = "#1A04FF", size = 18 }: { color?: string; size?: number }) {
  const h = Math.round(size * 14 / 18);
  return (
    <svg width={size} height={h} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect y="0" width="10" height="2" fill={color} />
      <rect y="6" width="10" height="2" fill={color} />
      <rect y="12" width="10" height="2" fill={color} />
      <rect x="13" y="4" width="2" height="6" fill={color} />
      <rect x="10" y="7" width="8" height="2" fill={color} />
    </svg>
  );
}
