import VideoCard from "./components/VideoCard";

const narrativeCards = [
  {
    embed: "https://player.vimeo.com/video/349462517",
    title: "Save Our Shirt",
    summary: "A fake outrage stunt that flipped into a pro-fan reveal.",
    context:
      "A hoax football kit with a huge sponsor sash provoked outrage before revealing the real campaign was to unsponsor the shirt.",
    lens: "Provoke attention first, then reframe it.",
    takeaway: "Controversy can be used to build trust when resolved correctly.",
    enhanced: "The category needs reframing, not explaining.",
  },
  {
    embed: "https://player.vimeo.com/video/332046704",
    title: "Rhodri Giggs — Loyalty's Dead",
    summary: "A story-led ad that never directly sells the product.",
    context:
      "Rhodri Giggs fronts a campaign about rewards vs loyalty without mentioning betting.",
    lens: "Let personality and narrative carry the message.",
    takeaway: "You don't always need to sell directly to sell effectively.",
    enhanced: "Story can reduce resistance better than explanation.",
  },
  {
    embed: "https://player.vimeo.com/video/1137747617",
    title: "Danny Dyer Euros",
    summary: "A culturally tuned ad that speaks with the audience, not at them.",
    context:
      "Danny Dyer explores England's relationship with Europe in a relatable tone.",
    lens: "Talk to people like they already understand.",
    takeaway:
      "Familiar voices make complex or controversial topics accessible.",
    enhanced: "Tone will determine whether people lean in or reject it.",
  },
];

const conversionCards = [
  {
    embed: "https://player.vimeo.com/video/132840149",
    title: "Paddy Power App Film",
    summary: "A product film disguised as entertainment.",
    context:
      "A cinematic film introducing the Paddy Power app and its features.",
    lens: "Make product education feel like content.",
    takeaway: "Utility can be presented in a way that still feels engaging.",
    enhanced: "Complex ideas need to feel watchable, not instructional.",
  },
  {
    embed: "https://player.vimeo.com/video/674099053",
    title: "Paddy Power Games — Mum",
    summary: "Product features explained through a relatable moment.",
    context:
      "A scenario-driven ad showing how game features give players another chance.",
    lens: "Show benefits through situations people understand.",
    takeaway: "Clarity doesn't need to be boring.",
    enhanced: "The more relatable the framing, the easier the adoption.",
  },
  {
    embed: "https://www.youtube.com/embed/GCe9t_cguQ",
    title: "Super Sub",
    summary: "A product mechanic turned into a fan-friendly moment.",
    context:
      "A campaign showing how bets carry over to substitute players.",
    lens: "Turn functional improvements into emotional wins.",
    takeaway: "People care about what improves their experience.",
    enhanced: "Benefits should feel personal, not technical.",
  },
];

const thinkingPoints = [
  "Attention first",
  "Narrative lowers resistance",
  "Repurpose everything",
  "Tension is a tool",
  "People carry belief better than brands",
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
    execution: "Serialized short-form content",
    why: "Builds anticipation and investment",
  },
];

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        color: "#e8e8e8",
      }}
    >
      {/* Hero */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "120px 24px 96px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#f5f5f5",
            marginBottom: "2rem",
          }}
        >
          Turning Skepticism Into Curiosity — and Curiosity Into Action
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: "#9ca3af",
            maxWidth: "560px",
          }}
        >
          I've worked in one of the least trusted categories in sport and
          entertainment. My job has been to make people stop, watch, laugh,
          reconsider — and then act.
          <br />
          <br />
          This is a selection of work that shows how that approach translates.
        </p>
      </section>

      {/* Relevant Work Intro */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px 80px",
          borderTop: "1px solid #2a2a2a",
          paddingTop: "64px",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#9ca3af",
            maxWidth: "520px",
          }}
        >
          I've spent years working in a category few people trust. By telling
          stories, embracing humour and repurposing footage, I've helped turn
          scepticism into curiosity — and curiosity into action.
        </p>
      </section>

      {/* Narrative / Cultural */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px 96px",
        }}
      >
        <SectionLabel>Narrative / Cultural</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {narrativeCards.map((card) => (
            <VideoCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* Paid / CTA / Conversion */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px 96px",
        }}
      >
        <SectionLabel>Paid / CTA / Conversion</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {conversionCards.map((card) => (
            <VideoCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* How I Think */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px 96px",
          borderTop: "1px solid #2a2a2a",
          paddingTop: "64px",
        }}
      >
        <SectionLabel>How I Think</SectionLabel>
        <ul style={{ marginTop: "2rem", listStyle: "none", padding: 0 }}>
          {thinkingPoints.map((point, i) => (
            <li
              key={i}
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                fontWeight: 600,
                color: "#e8e8e8",
                padding: "1rem 0",
                borderBottom: "1px solid #2a2a2a",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#4ade80",
                  fontWeight: 400,
                  width: "1.5rem",
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Why This Matters for Enhanced */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px 96px",
        }}
      >
        <SectionLabel accent>Why This Matters for Enhanced</SectionLabel>
        <div style={{ marginTop: "2rem", maxWidth: "580px" }}>
          <p
            style={{
              fontSize: "1.1875rem",
              fontWeight: 600,
              color: "#e8e8e8",
              lineHeight: 1.55,
              marginBottom: "1.25rem",
            }}
          >
            Enhanced doesn't have an awareness problem first — it has a framing
            problem.
          </p>
          <p
            style={{ fontSize: "1rem", color: "#9ca3af", lineHeight: 1.8 }}
          >
            Most people will encounter it with skepticism. The opportunity is to
            shift how it's understood before trying to explain it.
            <br />
            <br />
            That means making the category feel human, watchable and culturally
            relevant — not technical or defensive.
          </p>
        </div>
      </section>

      {/* A Few Directions I'd Explore */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px 120px",
          borderTop: "1px solid #2a2a2a",
          paddingTop: "64px",
        }}
      >
        <SectionLabel>A Few Directions I'd Explore</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          {directions.map((d) => (
            <div
              key={d.title}
              style={{
                backgroundColor: "#111111",
                border: "1px solid #2a2a2a",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#e8e8e8",
                  marginBottom: "1rem",
                }}
              >
                {d.title}
              </h3>
              <SmallField label="Hook" value={d.hook} />
              <SmallField label="Execution" value={d.execution} />
              <SmallField label="Why it works" value={d.why} accent />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function SectionLabel({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <p
      style={{
        fontSize: "0.6875rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: accent ? "#4ade80" : "#6b7280",
      }}
    >
      {children}
    </p>
  );
}

function SmallField({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div style={{ marginBottom: "0.75rem" }}>
      <p
        style={{
          fontSize: "0.625rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: accent ? "#4ade80" : "#6b7280",
          marginBottom: "0.2rem",
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: "0.875rem", color: "#d1d5db", lineHeight: 1.55 }}>
        {value}
      </p>
    </div>
  );
}
