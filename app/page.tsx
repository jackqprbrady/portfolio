import VideoCard from "./components/VideoCard";

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

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>

      {/* HERO */}
      <div className="container" style={{ paddingTop: "72px", paddingBottom: "56px" }}>
        <p style={{
          fontSize: "0.6875rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#3a3a3a",
          marginBottom: "32px",
        }}>
          Jack Brady · Creative Strategy & Film
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "#e8e8e8",
          maxWidth: "640px",
          marginBottom: "24px",
        }}>
          Turning Skepticism Into Curiosity — and Curiosity Into Action.
        </h1>
        <p style={{
          fontSize: "0.9375rem",
          lineHeight: 1.75,
          color: "#555",
          maxWidth: "480px",
        }}>
          I've spent years in a category few people trust — making work that earns
          attention rather than demanding it.
        </p>
      </div>

      <hr className="divider" />

      {/* NARRATIVE */}
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "48px" }}>
        <p style={{
          fontSize: "0.625rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "#3a3a3a",
          marginBottom: "20px",
        }}>
          <span style={{ color: "#4ade80", marginRight: "10px", opacity: 0.7 }}>01</span>
          Narrative / Cultural
        </p>
        <div className="video-grid">
          {narrativeCards.map(c => <VideoCard key={c.title} {...c} />)}
        </div>
      </div>

      <hr className="divider" />

      {/* CONVERSION */}
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "48px" }}>
        <p style={{
          fontSize: "0.625rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "#3a3a3a",
          marginBottom: "20px",
        }}>
          <span style={{ color: "#4ade80", marginRight: "10px", opacity: 0.7 }}>02</span>
          Paid / CTA / Conversion
        </p>
        <div className="video-grid">
          {conversionCards.map(c => <VideoCard key={c.title} {...c} />)}
        </div>
      </div>

      <hr className="divider" />

      {/* ENHANCED NOTE */}
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "72px" }}>
        <div style={{ maxWidth: "560px" }}>
          <p style={{
            fontSize: "0.625rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#4ade80",
            opacity: 0.7,
            marginBottom: "20px",
          }}>
            On Enhanced
          </p>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
            lineHeight: 1.4,
            color: "#e0e0e0",
            marginBottom: "16px",
            fontWeight: 400,
          }}>
            The category has a framing problem, not an awareness one.
          </p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#555", marginBottom: "32px" }}>
            Most people arrive skeptical. The interesting work shifts that before anyone's
            tried to explain the product. A few things I'd look at:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "What People Think vs Reality", body: "Fast contrast cuts. Reframes the category in seconds." },
              { title: "Engineered Athlete", body: "Data, performance visuals, premium science. Makes the product feel inevitable." },
              { title: "Road to May", body: "Follow athletes preparing. Short-form, serialised. Builds personal investment." },
            ].map(d => (
              <div key={d.title} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#4ade80", opacity: 0.5, flexShrink: 0, marginTop: "8px" }} />
                <div>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#aaa" }}>{d.title} — </span>
                  <span style={{ fontSize: "0.875rem", color: "#555" }}>{d.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="container" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <p style={{ fontSize: "0.6875rem", color: "#2a2a2a" }}>Jack Brady · 2025</p>
      </div>

    </main>
  );
}
