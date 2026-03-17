import VideoCarousel from "./components/VideoCarousel";

const narrativeCards = [
  {
    embed: "https://player.vimeo.com/video/349462517",
    title: "Save Our Shirt",
    summary: "A fake outrage stunt that flipped into a pro-fan reveal.",
    context: "A hoax football kit with a huge sponsor sash provoked outrage before revealing the real campaign was to unsponsor the shirt.",
    lens: "Provoke attention first, then reframe it.",
  },
  {
    embed: "https://player.vimeo.com/video/332046704",
    title: "Rhodri Giggs — Loyalty's Dead",
    summary: "A story-led ad that never directly sells the product.",
    context: "Rhodri Giggs fronts a campaign about rewards vs loyalty without mentioning betting.",
    lens: "Let personality and narrative carry the message.",
  },
  {
    embed: "https://player.vimeo.com/video/1137747617",
    title: "Danny Dyer Euros",
    summary: "A culturally tuned ad that speaks with the audience, not at them.",
    context: "Danny Dyer explores England's relationship with Europe in a relatable tone.",
    lens: "Talk to people like they already understand.",
  },
];

const conversionCards = [
  {
    embed: "https://player.vimeo.com/video/132840149",
    title: "Paddy Power App Film",
    summary: "A product film disguised as entertainment.",
    context: "A cinematic film introducing the Paddy Power app and its features.",
    lens: "Make product education feel like content.",
  },
  {
    embed: "https://player.vimeo.com/video/674099053",
    title: "Paddy Power Games — Mum",
    summary: "Product features explained through a relatable moment.",
    context: "A scenario-driven ad showing how game features give players another chance.",
    lens: "Show benefits through situations people understand.",
  },
  {
    embed: "https://www.youtube.com/embed/GCe9t_cguQ",
    title: "Super Sub",
    summary: "A product mechanic turned into a fan-friendly moment.",
    context: "A campaign showing how bets carry over to substitute players.",
    lens: "Turn functional improvements into emotional wins.",
  },
];

const directions = [
  {
    title: "What People Think vs Reality",
    idea: "Fast contrast cuts. \"This is cheating\" vs \"This is regulated science\". Reframes the category in seconds.",
  },
  {
    title: "Engineered Athlete",
    idea: "Treat the athlete like a system. Data, performance visuals, premium science. Makes the product feel inevitable.",
  },
  {
    title: "Road to May",
    idea: "Follow athletes preparing. Short-form and serialised. Builds the kind of investment that makes the product feel personal.",
  },
];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "64px 40px 48px",
        borderBottom: "1px solid var(--border)",
      }}>
        <p style={{
          fontSize: "0.6875rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#444",
          marginBottom: "28px",
        }}>
          Jack Brady · Creative Strategy & Film
        </p>

        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--fg)",
          maxWidth: "680px",
          marginBottom: "24px",
        }}>
          Turning Skepticism Into Curiosity — and Curiosity Into Action.
        </h1>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", flexWrap: "wrap" }}>
          <div style={{ width: "28px", height: "1px", background: "var(--accent)", marginTop: "11px", flexShrink: 0, opacity: 0.8 }} />
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#666", maxWidth: "460px", flex: 1 }}>
            I've spent years in a category few people trust — making work that earns attention
            rather than demanding it. This is a selection of that work.
          </p>
        </div>
      </section>

      {/* ── NARRATIVE CAROUSEL ── */}
      <VideoCarousel cards={narrativeCards} label="Narrative / Cultural" index="01" />

      {/* ── CONVERSION CAROUSEL ── */}
      <VideoCarousel cards={conversionCards} label="Paid / CTA / Conversion" index="02" />

      {/* ── ENHANCED NOTE ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "48px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: "600px" }}>
            <p style={{
              fontSize: "0.625rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--accent)",
              marginBottom: "16px",
              opacity: 0.8,
            }}>
              On Enhanced
            </p>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              lineHeight: 1.4,
              color: "var(--fg)",
              marginBottom: "16px",
              fontWeight: 400,
            }}>
              The category has a framing problem, not an awareness one.
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#666" }}>
              Most people arrive skeptical. The work I find most interesting is what shifts
              that before anyone's tried to explain the product. A few things I'd look at:
            </p>
          </div>

          {/* Directions — casual, not structured */}
          <div style={{
            marginTop: "32px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            overflow: "hidden",
          }}>
            {directions.map((d) => (
              <div key={d.title} style={{
                background: "var(--card-bg)",
                padding: "1.25rem 1.5rem",
              }}>
                <p style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--fg)",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}>
                  {d.title}
                </p>
                <p style={{ fontSize: "0.8125rem", color: "#666", lineHeight: 1.6 }}>
                  {d.idea}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div style={{
        borderTop: "1px solid var(--border)",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "24px 40px",
      }}>
        <p style={{ fontSize: "0.6875rem", color: "#333", letterSpacing: "0.05em" }}>
          Jack Brady · 2025
        </p>
      </div>

    </main>
  );
}
