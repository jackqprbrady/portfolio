import VideoCard from "./components/VideoCard";
import DirectionItem from "./components/DirectionItem";
import WorkInfo from "./components/WorkInfo";

const narrativeCard = {
  embed: "https://player.vimeo.com/video/1137747617",
  title: "Danny Dyer Euros",
  summary: "A culturally tuned ad that speaks with the audience, not at them.",
  context: "Danny Dyer explores England's relationship with Europe in a relatable tone.",
  lens: "Talk to people like they already understand.",
  category: "Cultural",
};

const productCards = [
  {
    embed: "https://player.vimeo.com/video/674099053",
    title: "Paddy Power Games: Mum",
    summary: "Product features explained through a relatable moment.",
    context: "A scenario-driven ad showing how game features give players another chance. The lead character is a mum. The sell is reassurance, not excitement.",
    lens: "When the audience is a parent, the emotional register changes. This does that.",
    category: "Conversion",
  },
  {
    embed: "https://news.paddypower.com/assets/uploads/2023/12/Paddy-Power_Product-Video_uk-B-Version-MBT.mp4",
    title: "Money Back Tokens",
    summary: "Step-by-step product walkthrough built for retention.",
    context: "App UI simulation, on-screen captions, clear action steps. The same format as supplement onboarding, app tutorials, and lifecycle email sequences.",
    lens: "This is lifecycle content. The category just happens to be betting.",
    category: "Lifecycle",
  },
  {
    embed: "https://news.paddypower.com/assets/uploads/2021/10/PP-games-edit-600s-400-221021.mp4",
    title: "Games: Favourites",
    summary: "An app feature demo in the style of a wellness tutorial.",
    context: "Bright text, hand-on-phone footage, routine-first framing. The visual language mirrors how lifestyle and DTC brands explain a new habit.",
    lens: "The format is already DTC. The audience is the only thing that changes.",
    category: "App Demo",
  },
  {
    embed: "https://news.paddypower.com/assets/uploads/2024/02/PP-Supersub-16x9-23s.mp4",
    title: "Super Sub",
    summary: "A product mechanic built around pre-empting the objection.",
    context: "23-second vertical video that addresses the 'what if my player gets subbed off' anxiety before users raise it. Mobile-first, caption-led, no wasted seconds.",
    lens: "Pre-empting the objection is a lifecycle skill, not a sports one.",
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
        paddingTop: "100px",
        paddingBottom: "64px",
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

          {/* Two-col: animated tagline left, stats + body right */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "64px",
            alignItems: "center",
          }}>

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
                Years in a category few people trust, making work that earns attention rather than demanding it. Product education, trust-building, objection handling. The creative mechanics transfer.
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
          <div className="video-grid-featured">
            <VideoCard {...narrativeCard} />
          </div>
        </div>
      </section>

      {/* ── PRODUCT / SOCIAL ── */}
      <section id="product" style={{
        background: "#0a0a0a",
        paddingTop: "44px",
        paddingBottom: "56px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div className="container">
          <p className="section-label">Product / Social</p>
          <div className="video-grid-two">
            {productCards.map(c => <VideoCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── ON ENHANCED ── */}
      <section id="enhanced" style={{ background: "var(--blue)", paddingTop: "96px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>

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

          {/* Two-col: body copy left, directions right */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }}>

            {/* Body copy */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.72)" }}>
                The product section above is the bridge. Money Back Tokens is a retention sequence. Favourites is an app onboarding tutorial. Super Sub is objection-handling creative. Same formats, same psychology as DTC lifecycle. The category is just different.
              </p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.72)" }}>
                For supplements, moms, everyday users: I&apos;d start with exclusion and flip it. &ldquo;This isn&apos;t for you&rdquo; before showing what it actually looks like in a normal routine. Not lab environments or elite athletes, but a consult, bloodwork reviewed, someone sleeping better. Same person, same life, functioning better. Some directions: &ldquo;you vs you&rdquo; instead of athlete comparisons, everyday friction and what&apos;s holding people back, &ldquo;looks like cheating&rdquo; before breaking that, humour to show the gap between now and could-be.
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
