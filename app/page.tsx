import VideoCarousel from "./components/VideoCarousel";

const narrativeCards = [
  {
    embed: "https://player.vimeo.com/video/349462517",
    title: "Save Our Shirt",
    summary: "A fake outrage stunt that flipped into a pro-fan reveal.",
    context: "A hoax football kit with a huge sponsor sash provoked outrage before revealing the real campaign was to unsponsor the shirt.",
    lens: "Provoke attention first, then reframe it.",
    takeaway: "Controversy can be used to build trust when resolved correctly.",
    enhanced: "The category needs reframing, not explaining.",
  },
  {
    embed: "https://player.vimeo.com/video/332046704",
    title: "Rhodri Giggs — Loyalty's Dead",
    summary: "A story-led ad that never directly sells the product.",
    context: "Rhodri Giggs fronts a campaign about rewards vs loyalty without mentioning betting.",
    lens: "Let personality and narrative carry the message.",
    takeaway: "You don't always need to sell directly to sell effectively.",
    enhanced: "Story can reduce resistance better than explanation.",
  },
  {
    embed: "https://player.vimeo.com/video/1137747617",
    title: "Danny Dyer Euros",
    summary: "A culturally tuned ad that speaks with the audience, not at them.",
    context: "Danny Dyer explores England's relationship with Europe in a relatable tone.",
    lens: "Talk to people like they already understand.",
    takeaway: "Familiar voices make complex or controversial topics accessible.",
    enhanced: "Tone will determine whether people lean in or reject it.",
  },
];

const conversionCards = [
  {
    embed: "https://player.vimeo.com/video/132840149",
    title: "Paddy Power App Film",
    summary: "A product film disguised as entertainment.",
    context: "A cinematic film introducing the Paddy Power app and its features.",
    lens: "Make product education feel like content.",
    takeaway: "Utility can be presented in a way that still feels engaging.",
    enhanced: "Complex ideas need to feel watchable, not instructional.",
  },
  {
    embed: "https://player.vimeo.com/video/674099053",
    title: "Paddy Power Games — Mum",
    summary: "Product features explained through a relatable moment.",
    context: "A scenario-driven ad showing how game features give players another chance.",
    lens: "Show benefits through situations people understand.",
    takeaway: "Clarity doesn't need to be boring.",
    enhanced: "The more relatable the framing, the easier the adoption.",
  },
  {
    embed: "https://www.youtube.com/embed/GCe9t_cguQ",
    title: "Super Sub",
    summary: "A product mechanic turned into a fan-friendly moment.",
    context: "A campaign showing how bets carry over to substitute players.",
    lens: "Turn functional improvements into emotional wins.",
    takeaway: "People care about what improves their experience.",
    enhanced: "Benefits should feel personal, not technical.",
  },
];

const thinkingPoints = [
  { n: "01", text: "Attention first" },
  { n: "02", text: "Narrative lowers resistance" },
  { n: "03", text: "Repurpose everything" },
  { n: "04", text: "Tension is a tool" },
  { n: "05", text: "People carry belief better than brands" },
];

const directions = [
  {
    title: "What People Think vs Reality",
    hook: '"This is cheating" vs "This is regulated science"',
    execution: "Fast contrast edits",
    why: "Reframes instantly",
  },
  {
    title: "Engineered Athlete",
    hook: "Treat the athlete like a system",
    execution: "Data + performance visuals",
    why: "Makes science feel premium",
  },
  {
    title: "Road to May",
    hook: "Follow athletes preparing",
    execution: "Serialised short-form content",
    why: "Builds anticipation and investment",
  },
];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "clamp(64px, 12vw, 140px) 40px clamp(64px, 10vw, 120px)",
      }}>
        {/* Name tag */}
        <p style={{
          fontSize: "0.6875rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#444",
          marginBottom: "2.5rem",
        }}>
          Jack Brady · Creative Strategy & Film
        </p>

        {/* Main headline */}
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--fg)",
          maxWidth: "820px",
          marginBottom: "2.5rem",
        }}>
          Turning Skepticism<br />
          Into Curiosity —<br />
          and Curiosity<br />
          Into Action.
        </h1>

        {/* Divider */}
        <div style={{ width: "48px", height: "1px", background: "var(--accent)", marginBottom: "2rem", opacity: 0.7 }} />

        {/* Subtext */}
        <p style={{
          fontSize: "1rem",
          lineHeight: 1.8,
          color: "#777",
          maxWidth: "480px",
        }}>
          I've worked in one of the least trusted categories in sport and entertainment.
          My job has been to make people stop, watch, laugh, reconsider — and then act.
          This is a selection of work that shows how that approach translates.
        </p>
      </section>

      {/* ── DIVIDER + INTRO ── */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 40px 80px",
        }}>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            lineHeight: 1.6,
            color: "#888",
            maxWidth: "640px",
            fontStyle: "italic",
          }}>
            "I've spent years working in a category few people trust. By telling stories,
            embracing humour and repurposing footage, I've helped turn scepticism into
            curiosity — and curiosity into action."
          </p>
        </div>
      </div>

      {/* ── NARRATIVE CAROUSEL ── */}
      <VideoCarousel cards={narrativeCards} label="Narrative / Cultural" index="01" />

      {/* ── CONVERSION CAROUSEL ── */}
      <VideoCarousel cards={conversionCards} label="Paid / CTA / Conversion" index="02" />

      {/* ── HOW I THINK ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
          <p style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#444",
            marginBottom: "48px",
          }}>
            03 · How I Think
          </p>

          <div>
            {thinkingPoints.map(({ n, text }, i) => (
              <div
                key={n}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "2rem",
                  padding: "1.25rem 0",
                  borderBottom: i < thinkingPoints.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <span style={{
                  fontSize: "0.6875rem",
                  color: "var(--accent)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  flexShrink: 0,
                  opacity: 0.7,
                }}>
                  {n}
                </span>
                <p style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                  color: "var(--fg)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section style={{ padding: "0 0 80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{
            background: "#0d1a0d",
            border: "1px solid #1a2e1a",
            borderRadius: "16px",
            padding: "clamp(40px, 6vw, 72px)",
          }}>
            <p style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--accent)",
              opacity: 0.8,
              marginBottom: "2rem",
            }}>
              Why This Matters for Enhanced
            </p>

            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              marginBottom: "2rem",
              maxWidth: "680px",
            }}>
              Enhanced doesn't have an awareness problem — it has a framing problem.
            </h2>

            <div style={{ width: "40px", height: "1px", background: "var(--accent)", marginBottom: "2rem", opacity: 0.5 }} />

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#888", maxWidth: "540px" }}>
              Most people will encounter it with skepticism. The opportunity is to shift how it's
              understood before trying to explain it. That means making the category feel human,
              watchable and culturally relevant — not technical or defensive.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIRECTIONS ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
          <p style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#444",
            marginBottom: "48px",
          }}>
            04 · A Few Directions I'd Explore
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}>
            {directions.map((d, i) => (
              <div
                key={d.title}
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Number watermark */}
                <span style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.5rem",
                  fontFamily: "var(--font-serif)",
                  fontSize: "3rem",
                  color: "#1a1a1a",
                  lineHeight: 1,
                  userSelect: "none",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--fg)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.3,
                  maxWidth: "200px",
                }}>
                  {d.title}
                </h3>

                <dl style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  <DirectionField label="Hook" value={d.hook} />
                  <DirectionField label="Execution" value={d.execution} />
                  <DirectionField label="Why it works" value={d.why} accent />
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <p style={{ fontSize: "0.75rem", color: "#333", letterSpacing: "0.05em" }}>
          Jack Brady · 2025
        </p>
      </footer>
    </main>
  );
}

function DirectionField({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <dt style={{
        fontSize: "0.625rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: accent ? "var(--accent)" : "#333",
        marginBottom: "0.2rem",
      }}>
        {label}
      </dt>
      <dd style={{ fontSize: "0.875rem", color: "#888", lineHeight: 1.55 }}>{value}</dd>
    </div>
  );
}
