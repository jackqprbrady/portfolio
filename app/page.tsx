import VideoCard from "./components/VideoCard";
import DirectionItem from "./components/DirectionItem";
import WorkInfo from "./components/WorkInfo";

const narrativeCards = [
  {
    embed: "https://player.vimeo.com/video/349462517",
    title: "Save Our Shirt",
    summary: "A fake outrage stunt that flipped into a pro-fan reveal.",
    context: "A hoax football kit with a huge sponsor provoked outrage before revealing the real campaign was to unsponsor the shirt.",
    lens: "Provoke attention first, then reframe it.",
    category: "Narrative",
  },
  {
    embed: "https://player.vimeo.com/video/332046704",
    title: "Rhodri Giggs: Loyalty's Dead",
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
    title: "Paddy Power Games: Mum",
    summary: "Product features explained through a relatable moment.",
    context: "A scenario-driven ad showing how game features give players another chance.",
    lens: "Show benefits through situations people understand.",
    category: "Conversion",
  },
  {
    embed: "https://www.youtube.com/embed/ECplp93J270",
    title: "Super Sub",
    summary: "A product mechanic turned into a fan-friendly moment.",
    context: "A campaign showing how bets carry over to substitute players.",
    lens: "Turn functional improvements into emotional wins.",
    category: "Product",
  },
];

const directions = [
  { label: "01", title: "Flip the exclusion" },
  { label: "02", title: "You vs You" },
  { label: "03", title: "Everyday friction" },
  { label: "04", title: "Looks like cheating" },
  { label: "05", title: "Humour as contrast" },
];

export default function Home() {
  return (
    <main>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-logo">
          <EnhancedMark color="rgba(255,255,255,0.75)" />
          Jack Brady
        </div>
        <div className="nav-links">
          <a href="#narrative" className="nav-link">Work</a>
          <a href="#enhanced" className="nav-link">Ideas</a>
          <a href="mailto:jack@jackbradyfilm.co.uk" className="nav-link">Contact</a>
        </div>
        <a href="mailto:jack@jackbradyfilm.co.uk" className="nav-cta">
          Get in touch
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: "var(--black)",
        paddingTop: "80px",
        paddingBottom: "44px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div className="container">

          <p style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 700,
            fontSize: "0.5625rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <span style={{ display: "block", width: "18px", height: "1px", background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
            Enhanced Profile · Enhanced Marketing Design
          </p>

          {/* Name — full width */}
          <h1 style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(4.5rem, 10vw, 10rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
            color: "#fff",
            marginBottom: "40px",
          }}>
            Jack Brady
          </h1>

          {/* Tagline + stats */}
          <div className="hero-grid">

            {/* Animated tagline */}
            <p className="tagline-animate" style={{
              fontFamily: "var(--font-condensed), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.2vw, 2rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "rgba(255,255,255,0.75)",
            }}>
              Turning Skepticism Into Curiosity. And Curiosity Into Action.
            </p>

            {/* Stats + body */}
            <div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                paddingBottom: "24px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                marginBottom: "24px",
              }}>
                {[
                  { num: "6+", label: "Years" },
                  { num: "100k+", label: "Video/imagery assets" },
                  { num: "200M+", label: "Views across social" },
                ].map(s => (
                  <div key={s.num}>
                    <p style={{
                      fontFamily: "var(--font-condensed), sans-serif",
                      fontWeight: 800,
                      fontSize: "2.25rem",
                      letterSpacing: "-0.04em",
                      color: "#fff",
                      lineHeight: 1,
                      marginBottom: "5px",
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
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)" }}>
                Years in a category few people trust, making work
                that earns attention rather than demanding it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── NARRATIVE / CULTURAL — white bg ── */}
      <section id="narrative" style={{
        background: "#FAF9F5",
        paddingTop: "44px",
        paddingBottom: "56px",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}>
        <div className="container">
          <WorkInfo />
          <div className="video-grid">
            {narrativeCards.map(c => <VideoCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── PAID / CTA / CONVERSION — white bg ── */}
      <section id="conversion" style={{
        background: "#ffffff",
        paddingTop: "44px",
        paddingBottom: "56px",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}>
        <div className="container">
          <p className="section-label-light">Paid / CTA / Conversion</p>
          <div className="video-grid">
            {conversionCards.map(c => <VideoCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── ON ENHANCED ── */}
      <section id="enhanced" style={{ background: "var(--blue)", paddingTop: "56px", paddingBottom: "56px", position: "relative", overflow: "hidden" }}>

        {/* Ghost watermark */}
        <div style={{
          position: "absolute",
          bottom: "-80px",
          right: "-40px",
          fontFamily: "var(--font-condensed), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(8rem, 22vw, 24rem)",
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

          {/* Label row */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
            <EnhancedMark color="rgba(255,255,255,0.5)" size={26} />
            <span style={{
              fontFamily: "var(--font-condensed), sans-serif",
              fontWeight: 800,
              fontSize: "0.625rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}>Enhanced</span>
          </div>

          {/* Section title */}
          <h2 style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.75rem, 5vw, 5rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            color: "#fff",
            marginBottom: "16px",
          }}>
            Early Thoughts
          </h2>
          <p style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 700,
            fontSize: "0.875rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "56px",
          }}>
            How this could be framed for the everyday person
          </p>

          {/* Body copy + directions */}
          <div className="section-two-col">

            {/* Body copy */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.72)" }}>
                There&apos;s already a reaction when people first encounter Enhanced. It feels extreme, not for them, maybe even a bit uncomfortable. So instead of trying to soften that, I think you lean straight into it. Open where they already are, &ldquo;this isn&apos;t for you&rdquo;, &ldquo;this looks like cheating&rdquo;, and then flip it quickly. Show what it actually looks like before they&apos;ve had time to settle into that assumption. Not elite performance or lab environments, but normal routines, a consult, bloodwork being reviewed, someone using Enhanced as part of their day, sleeping better, feeling more consistent. Same person, same life, just functioning better.
              </p>
<p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.72)" }}>
                Some directions this could go in: starting with exclusion and flipping it back into relevance, doing &ldquo;you vs you&rdquo; instead of athlete comparisons, focusing on everyday friction and what&apos;s actually holding people back, leaning into the idea that it &ldquo;looks like cheating&rdquo; before breaking that, and using a bit of humour to show the gap between how people are functioning now vs how they could be.
              </p>
            </div>

            {/* Directions — accordion */}
            <div style={{ paddingTop: "4px" }}>
              <p style={{
                fontFamily: "var(--font-condensed), sans-serif",
                fontWeight: 700,
                fontSize: "0.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "4px",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                paddingTop: "18px",
              }}>Directions</p>
              {directions.map(d => (
                <DirectionItem key={d.label} label={d.label} title={d.title} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#FAF9F5" }}>
        <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
          <span style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(5rem, 17vw, 18rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
            color: "#000",
            display: "block",
            padding: "48px 40px 16px",
            overflow: "hidden",
          }}>Jack Brady</span>
        </div>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 56px" }}>
          <p style={{ fontFamily: "var(--font-condensed), sans-serif", fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }}>
            Jack Brady · 2026
          </p>
          <p style={{ fontFamily: "var(--font-condensed), sans-serif", fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }}>
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
