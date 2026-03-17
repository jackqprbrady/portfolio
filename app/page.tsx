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
    <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div className="container" style={{ paddingTop: "72px", paddingBottom: "56px" }}>
        <p style={{
          fontFamily: "var(--font-condensed), sans-serif",
          fontWeight: 700,
          fontSize: "0.6875rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#333",
          marginBottom: "28px",
        }}>
          Jack Brady · Creative Strategy & Film
        </p>

        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 3.2vw, 2.875rem)",
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "#e8e8e8",
          maxWidth: "600px",
          marginBottom: "24px",
        }}>
          Turning Skepticism Into Curiosity — and Curiosity Into Action.
        </h1>

        <p style={{
          fontSize: "0.9375rem",
          lineHeight: 1.75,
          color: "#4a4a4a",
          maxWidth: "440px",
        }}>
          I've spent years in a category few people trust — making work that earns
          attention rather than demanding it.
        </p>
      </div>

      <hr className="divider" />

      {/* ── NARRATIVE / CULTURAL ── */}
      <div className="container" style={{ paddingTop: "36px", paddingBottom: "48px" }}>
        <p className="section-label" style={{ marginBottom: "20px" }}>
          <span className="num">01</span>Narrative / Cultural
        </p>
        <div className="video-grid">
          {narrativeCards.map(c => <VideoCard key={c.title} {...c} />)}
        </div>
      </div>

      <hr className="divider" />

      {/* ── PAID / CTA / CONVERSION ── */}
      <div className="container" style={{ paddingTop: "36px", paddingBottom: "48px" }}>
        <p className="section-label" style={{ marginBottom: "20px" }}>
          <span className="num">02</span>Paid / CTA / Conversion
        </p>
        <div className="video-grid">
          {conversionCards.map(c => <VideoCard key={c.title} {...c} />)}
        </div>
      </div>

      <hr className="divider" />

      {/* ── ON ENHANCED ── */}
      <div className="container" style={{ paddingTop: "48px", paddingBottom: "80px" }}>

        {/* ≡+ ENHANCED — styled like their nav logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
          <EnhancedMark />
          <span style={{
            fontFamily: "var(--font-condensed), sans-serif",
            fontWeight: 800,
            fontSize: "0.875rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--blue)",
          }}>
            Enhanced
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

          {/* Left — text */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.375rem, 2vw, 1.75rem)",
              fontWeight: 400,
              lineHeight: 1.35,
              letterSpacing: "-0.015em",
              color: "#e0e0e0",
              marginBottom: "16px",
            }}>
              The category has a framing problem, not an awareness one.
            </h2>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#4a4a4a" }}>
              Most people arrive skeptical. The interesting work shifts that before anyone's
              tried to explain the product. A few things I'd look at:
            </p>
          </div>

          {/* Right — idea table, Enhanced data-block style */}
          <div>
            {ideas.map((idea, i) => (
              <div key={idea.label} style={{
                paddingTop: i === 0 ? 0 : "20px",
                paddingBottom: "20px",
                borderBottom: i < ideas.length - 1 ? "1px solid #1a1a1a" : "none",
              }}>
                <p style={{
                  fontFamily: "var(--font-condensed), sans-serif",
                  fontWeight: 700,
                  fontSize: "0.5625rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "var(--blue)",
                  opacity: 0.6,
                  marginBottom: "6px",
                }}>
                  {idea.label}
                </p>
                <p style={{
                  fontFamily: "var(--font-condensed), sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#c0c0c0",
                  marginBottom: "6px",
                  lineHeight: 1.2,
                }}>
                  {idea.title}
                </p>
                <p style={{ fontSize: "0.8125rem", color: "#4a4a4a", lineHeight: 1.6 }}>
                  {idea.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── FOOTER ── */}
      <hr className="divider" />
      <div className="container" style={{ paddingTop: "20px", paddingBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontFamily: "var(--font-condensed), sans-serif", fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#2a2a2a" }}>
          Jack Brady · 2025
        </p>
        <p style={{ fontFamily: "var(--font-condensed), sans-serif", fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#2a2a2a" }}>
          ≡+ Enhanced Games · Las Vegas · May 2026
        </p>
      </div>

    </main>
  );
}

/* The ≡+ Enhanced logo mark — rendered to match their nav exactly */
function EnhancedMark() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0" width="10" height="2" fill="#3B4BFF"/>
      <rect y="6" width="10" height="2" fill="#3B4BFF"/>
      <rect y="12" width="10" height="2" fill="#3B4BFF"/>
      <rect x="13" y="4" width="2" height="6" fill="#3B4BFF"/>
      <rect x="10" y="7" width="8" height="2" fill="#3B4BFF"/>
    </svg>
  );
}
