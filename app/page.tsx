import { LoopTile, ImageTile } from "./components/Media";

const designWork = [
  { src: "/design/crouchys-shouts.jpg", title: "Crouchy's Shouts, Premier League matchday" },
  { src: "/design/golden-boot.jpg", title: "World Cup Golden Boot" },
  { src: "/design/f1-monaco.jpg", title: "F1 Monaco Grand Prix" },
  { src: "/design/boxing-markets.jpg", title: "Boxing betting markets explainer" },
  { src: "/design/pl-new-rules.jpg", title: "Premier League new rules guide" },
  { src: "/design/efl-bet-builder.jpg", title: "EFL matchday" },
];

const roles = [
  {
    company: "Paddy Power News",
    title: "Digital Content Manager",
    period: "2020 to Present",
    description: "Sole video producer for the betting brand's editorial site, now past 1M monthly visitors.",
  },
  {
    company: "British Film Institute",
    title: "Contract Video Producer / Editor",
    period: "2022 to 2023",
    description: "Event capture and filmmaker interviews at BFI Southbank.",
  },
  {
    company: "British Library",
    title: "Freelance Video Producer / Editor",
    period: "2021 to 2022",
    description: "Curator-led films for the Moving Image collection.",
  },
  {
    company: "Moonbug Entertainment",
    title: "Video Editor (Contract)",
    period: "2021 to 2022",
    description: "Edited kids' programming for Netflix and Prime Video, reaching 100M+ households.",
  },
  {
    company: "TNT Sports (BT Sport)",
    title: "Live Sports Videographer & Editor",
    period: "2017 to 2019",
    description: "Live football for national broadcast. Helped launch the National League highlights show.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Jack Brady</div>
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#design" className="nav-link">Design</a>
          <a href="#experience" className="nav-link">Experience</a>
        </div>
        <a href="mailto:jack@jackbradyfilm.co.uk" className="nav-cta">Get in touch</a>
      </nav>

      {/* HERO: positioning + a wall of playing vertical video. No clicks to see moving work. */}
      <section className="hero-sec">
        <div className="container">
          <p className="kicker">Social video creative / New York</p>
          <h1 className="hero-h1">Jack Brady</h1>
          <p className="hero-sub">
            I run digital content at <b>Paddy Power News</b>, the betting brand&apos;s editorial site.
            Eight years making sport and entertainment video people actually stop for:
            planning it, cutting it, designing it, getting it seen.
          </p>
          <div className="logobar">
            <span>Paddy Power</span><span>BT Sport</span><span>BFI</span>
            <span>British Library</span><span>Moonbug / Netflix</span>
          </div>

          <div className="hero-wall">
            <LoopTile
              loop="/v/crouch-dyer-challenge-loop.mp4"
              full="/v/crouch-dyer-challenge.mp4"
              poster="/v/crouch-dyer-challenge-poster.jpg"
              title="Peter Crouch and Danny Dyer, Finish the Line"
              meta="TikTok challenge, shot and cut for vertical"
              badge="Talent"
            />
            <LoopTile
              loop="/v/fan-denial-loop.mp4"
              full="/v/fan-denial.mp4"
              poster="/v/fan-denial-poster.jpg"
              title="Fan Denial"
              meta="Vertical fan-format series"
              badge="Series"
            />
            <LoopTile
              loop="/v/prostate-campaign-loop.mp4"
              full="/v/prostate-campaign.mp4"
              poster="/v/prostate-campaign-poster.jpg"
              title="Check Your Risk"
              meta="Prostate cancer awareness, brand reach used for good"
              badge="Campaign"
            />
          </div>
          <p className="hero-note">Tap any tile for full video with sound.</p>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers-sec">
        <div className="container numbers">
          <div><b>1M+</b><span>monthly visitors, Paddy Power News</span></div>
          <div><b>100M+</b><span>households reached, Moonbug for Netflix</span></div>
          <div><b>8 yrs</b><span>broadcast to vertical, end to end</span></div>
        </div>
      </section>

      {/* CASE: TALENT */}
      <section id="work" className="case-sec">
        <div className="container">
          <p className="section-label">Talent-led social</p>
          <div className="case-grid">
            <div className="case-copy">
              <h2>Famous faces, cut for the feed</h2>
              <p>TikTok challenges and reactive moments with Peter Crouch, Danny Dyer
                and Piers Morgan. Directed on set, cut for the first two seconds,
                shipped inside gambling advertising rules.</p>
            </div>
            <div className="case-media">
              <LoopTile
                full="/v/piers-morgan-sausage-roll.mp4"
                poster="/v/piers-morgan-sausage-roll-poster.jpg"
                ratio="16/9"
                title="Piers Morgan vs the vegan sausage roll"
                meta="Reactive celebrity moment"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CASE: THE PUBLICATION */}
      <section className="case-sec alt">
        <div className="container">
          <p className="section-label">Running the publication</p>
          <div className="case-grid flip">
            <div className="case-copy">
              <h2>One producer, one million readers</h2>
              <p>Sole video producer for the site. Every video, thumbnail and title
                card across web and social, shipped on matchday deadlines.</p>
            </div>
            <div className="case-media">
              <ImageTile src="/design/ppnews-site.jpg" title="Paddy Power News, live homepage" />
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN GRID */}
      <section id="design" className="case-sec">
        <div className="container">
          <p className="section-label">Design for the feed</p>
          <p className="design-intro">Matchday graphics, briefed and live the same day.</p>
          <div className="design-grid">
            {designWork.map(d => <ImageTile key={d.src} {...d} />)}
          </div>
        </div>
      </section>

      {/* CASE: EVENT + BRANDED */}
      <section className="case-sec alt">
        <div className="container">
          <p className="section-label">Events and branded</p>
          <div className="branded-grid">
            <LoopTile
              loop="/v/comedy-festival-loop.mp4"
              full="/v/comedy-festival.mp4"
              poster="/v/comedy-festival-poster.jpg"
              ratio="16/9"
              title="Paddy Power Comedy Festival"
              meta="Multi-cam event capture, cut end to end"
            />
            <LoopTile
              full="/v/games-mum.mp4"
              poster="/v/games-mum-poster.jpg"
              ratio="16/9"
              title="Mum, 30 second TV spot"
              meta="Directed, edited, delivered"
            />
            <LoopTile
              full="/v/break-up.mp4"
              poster="/v/break-up-poster.jpg"
              ratio="16/9"
              title="Break Up"
              meta="Scenario short built around the turn"
            />
            <LoopTile
              full="/v/drag-it-out.mp4"
              poster="/v/drag-it-out-poster.jpg"
              ratio="16/9"
              title="Drag It Out"
              meta="Short-form editorial cut"
            />
          </div>
        </div>
      </section>

      {/* MORE WORK: institutional */}
      <section className="case-sec">
        <div className="container">
          <p className="section-label">Also in the locker</p>
          <p className="design-intro">
            Contract work for the BFI and the British Library: filmmaker talks,
            curator films, archive editing.
          </p>
          <div className="yt-grid">
            <div className="yt-wrap">
              <iframe src="https://www.youtube.com/embed/joUKN8ezVio" title="BFI Screen Talk, Greta Gerwig" loading="lazy" allowFullScreen allow="fullscreen; picture-in-picture" />
            </div>
            <div className="yt-wrap">
              <iframe src="https://www.youtube.com/embed/6FvtC6crmhU" title="British Library, Curators on Camera" loading="lazy" allowFullScreen allow="fullscreen; picture-in-picture" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="case-sec alt">
        <div className="container">
          <p className="section-label">Experience</p>
          <div className="roles">
            {roles.map(r => (
              <div key={r.company} className="role">
                <div className="role-head">
                  <p className="role-co">{r.company}</p>
                  <p className="role-period">{r.period}</p>
                </div>
                <p className="role-title">{r.title}</p>
                <p className="role-desc">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + CONTACT */}
      <section id="contact" className="contact-sec">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="contact-h2">Let&apos;s make things people watch</h2>
          <p className="contact-sub">Based in New York.</p>
          <div className="contact-row">
            <a href="mailto:jack@jackbradyfilm.co.uk" className="btn-solid">jack@jackbradyfilm.co.uk</a>
            <a href="https://www.linkedin.com/in/jack-b-66a983105/" target="_blank" rel="noopener" className="btn-line">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="site-foot">
        <div className="container foot-in">
          <p>Jack Brady / 2026</p>
          <p>New York, NY</p>
        </div>
      </footer>
    </main>
  );
}
