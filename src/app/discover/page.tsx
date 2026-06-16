import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Discover Attax — Features & How It Works",
  description: "Every workout becomes a 1v1 duel. Discover how attax turns your health data into Activity Points, daily fights, and a competitive ranking — 8 players, 7 days, 12 cards.",
};

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

const pillars = [
  {
    n: "01",
    title: "Activity Points",
    description: "Your workouts are scored by heart rate zone. Moderate effort, sustained effort, intense effort, maximum effort — each zone earns more points per minute. Steps add to the total. The result: a daily score that reflects how hard you actually trained, not just how long you moved.",
  },
  {
    n: "02",
    title: "The Daily Duel",
    description: "Every day you face one opponent. Your weapon: your 7-day rolling Activity Score — the sum of today's effort and the past six days. Duels open at 10 AM, resolve at 9:30 PM. Cards must be played before 1 PM. The duel result is revealed as a cinematic victory or defeat.",
  },
  {
    n: "03",
    title: "Strategic Cards",
    description: "Each morning you choose one card from a rotating deck of 12. Spike your next session by +30%. Freeze your opponent's best day. Ghost hides your score. Scan reveals their heart rate curve. Blackout blinds both players. Cards transform pure effort into a game of information and timing.",
  },
  {
    n: "04",
    title: "Leagues & Rank",
    description: "Eight players. Seven days. One winner per league. At the end, standings determine who climbs the competitive ladder. Five divisions — Rookie, Challenger, Pro, Elite, Legend — with a hidden MMR for fair matchmaking. A cinematic rank reveal awaits every first promotion.",
  },
];

const cards = [
  { n: "01", name: "SPIKE",     cat: "BOOST",    icon: "/cards/spike.png",     effect: "+30% AP", sub: "30 MIN WINDOW",     desc: "Targeted intensity spike.",          grad: ["#0c1a3a","#1e3a8a","#2563eb"], tc: "#93c5fd" },
  { n: "02", name: "OVERDRIVE", cat: "BOOST",    icon: "/cards/overdrive.png", effect: "×2 AP",   sub: "BEST 20 MIN",       desc: "All or nothing. This is the moment.", grad: ["#2d1500","#92400e","#d97706"], tc: "#fcd34d" },
  { n: "03", name: "RECOVER",   cat: "BOOST",    icon: "/cards/recover.png",   effect: "+15% AP", sub: "NEXT SESSION",      desc: "Recover better. Come back stronger.", grad: ["#3b0a2a","#9d174d","#ec4899"], tc: "#f9a8d4" },
  { n: "04", name: "SHIELD",    cat: "DEFENSE",  icon: "/cards/shield.png",    effect: "−15%",    sub: "OPP. SESSION",      desc: "Block their momentum.",              grad: ["#1a0a00","#7f1d1d","#dc2626"], tc: "#fca5a5" },
  { n: "05", name: "FREEZE",    cat: "SABOTAGE", icon: "/cards/freeze.png",    effect: "−8%",     sub: "OPP. BEST DAY",     desc: "Erase their peak performance.",      grad: ["#031c2d","#164e63","#0891b2"], tc: "#67e8f9" },
  { n: "06", name: "PRESSURE",  cat: "SABOTAGE", icon: "/cards/pressure.png",  effect: "+15%",    sub: "IF THEY TRAIN",     desc: "Turn their effort against them.",    grad: ["#0f0f0f","#1c1c1c","#374151"], tc: "#d1d5db" },
  { n: "07", name: "PARASITE",  cat: "SABOTAGE", icon: "/cards/parasite.png",  effect: "STEAL 7%",sub: "OF THEIR PTS",      desc: "What they build, you take.",         grad: ["#1c1000","#78350f","#b45309"], tc: "#fde68a" },
  { n: "08", name: "SCAN",      cat: "INTEL",    icon: "/cards/scan.png",      effect: "REVEAL",  sub: "HR CURVE",          desc: "See their full session data.",       grad: ["#051e10","#14532d","#16a34a"], tc: "#86efac" },
  { n: "09", name: "GHOST",     cat: "MASQUE",   icon: "/cards/ghost.png",     effect: "HIDE",    sub: "YOUR SCORE",        desc: "Your activity looks flat to them.",  grad: ["#1a0a3a","#4c1d95","#7c3aed"], tc: "#c4b5fd" },
  { n: "10", name: "MIRAGE",    cat: "MASQUE",   icon: "/cards/mirage.png",    effect: "FAKE ±15%",sub: "YOUR DISPLAY",     desc: "Let them react to a lie.",           grad: ["#1f1000","#7c2d12","#ea580c"], tc: "#fdba74" },
  { n: "11", name: "BLACKOUT",  cat: "MASQUE",   icon: "/cards/blackout.png",  effect: "NO INFO", sub: "UNTIL 19:00",       desc: "Blind both sides. Who dares?",       grad: ["#000000","#0a0a0a","#111827"], tc: "#9ca3af" },
  { n: "12", name: "COUNTER",   cat: "MOMENTUM", icon: "/cards/counter.png",   effect: "+25%",    sub: "AFTER 18:00",       desc: "If losing at 18:00, strike back.",   grad: ["#001f1a","#134e4a","#0d9488"], tc: "#5eead4" },
];


export default function DiscoverPage() {
  return (
    <>
      {/* Hero — navbar embedded inside dark block */}
      <div style={{ backgroundColor: "#ffffff", padding: "12px" }}>
        <div style={{
          position: "relative",
          backgroundColor: "#0d0d0d",
          borderRadius: "24px",
          height: "calc(100vh - 24px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          {/* Background image */}
          <Image
            src="/images/discover-hero.png"
            alt="Discover Attax"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
          />
          {/* Dark overlays */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.75) 55%, rgba(10,10,10,0.25) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 50%)",
          }} />
          {/* Grain */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 2, opacity: 0.2, pointerEvents: "none",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
          }} />

          {/* ── Navbar ── */}
          <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", height: "68px", flexShrink: 0 }}>
            <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center", flex: 1 }}>
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} className="nav-link" style={{
                  fontSize: "0.875rem", fontWeight: 500,
                  color: "rgba(255,255,255,0.7)", textDecoration: "none",
                }}>{l.label}</Link>
              ))}
            </nav>
            <Link href="/" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textDecoration: "none" }}>
              <span style={{ fontSize: "1.375rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>attax</span>
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1, justifyContent: "flex-end" }}>
              <a href="#" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Log in</a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
                display: "inline-flex", alignItems: "center",
                backgroundColor: "#ffffff", color: "#0d0d0d",
                fontWeight: 700, fontSize: "0.8125rem",
                padding: "8px 18px", borderRadius: "999px", textDecoration: "none",
              }}>Download App</a>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,5px)", gap: "3px" }}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.7)" }} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Hero Content ── */}
          <div style={{
            position: "relative", zIndex: 3,
            flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "4rem 4rem 3rem",
            maxWidth: "620px",
          }}>
            <div style={{ marginBottom: "1.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Discover Attax</span>
            </div>
            <h1 style={{
              fontSize: "clamp(3rem, 5.5vw, 4.75rem)",
              fontWeight: 800, color: "#ffffff",
              lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.5rem",
            }}>
              Your workouts.<br />
              <em style={{ fontStyle: "normal", color: "#ffffff" }}>A real fight.</em>
            </h1>
            <p style={{
              fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75, margin: "0 0 2.5rem", maxWidth: "420px",
            }}>
              attax turns your activity data into Activity Points. Every day you face a real opponent in a 1v1 duel. Play a card. Win the evening. Climb the rank.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#ffffff", color: "#0d0d0d",
                fontWeight: 700, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
              }}>
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <Link href="/adventure" className="btn-ghost" style={{
                display: "inline-flex", alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)",
                fontWeight: 600, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px",
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)",
              }}>Our Story →</Link>
            </div>
          </div>

          {/* ── Bottom stats ── */}
          <div style={{ position: "relative", zIndex: 3, display: "flex", padding: "0 4rem 3.5rem", gap: 0 }}>
            {[
              { title: "8 players", sub: "Per league" },
              { title: "12 cards", sub: "Strategic powers" },
              { title: "9:30 PM", sub: "Daily duel resolution" },
            ].map((s, i) => (
              <div key={s.title} style={{
                paddingLeft: i > 0 ? "2.5rem" : 0,
                marginLeft: i > 0 ? "2.5rem" : 0,
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>{s.title}</div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Four pillars — editorial list ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", marginBottom: "4rem" }}>
            <div>
              <p className="section-label" style={{ margin: "0 0 1.25rem" }}>The mechanics</p>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0 }}>
                Four systems.<br />One game.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
              Activity Points, daily duels, strategic cards, and competitive divisions — each layer adds depth to your daily training.
            </p>
          </div>
          <hr className="rule" style={{ marginBottom: "0" }} />
          <div>
            {pillars.map((p) => (
              <div key={p.n} style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 2fr",
                gap: "2rem",
                alignItems: "start",
                padding: "2.5rem 0",
                borderBottom: "1px solid #f0f0f0",
              }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", paddingTop: "4px" }}>{p.n}</div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.8, margin: 0 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cards grid ── */}
      <section style={{ backgroundColor: "#0d0d0d", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", marginBottom: "4rem" }}>
            <div>
              <p className="section-label-light" style={{ margin: "0 0 1.25rem" }}>The card deck</p>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0 }}>
                12 cards.<br />Infinite tactics.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
              Every morning you pick one card from three offered. Your card choice is final at 1 PM. Choose wisely — the right card at the right moment changes everything.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {cards.map((c) => (
              <div key={c.name} className="app-card" style={{
                position: "relative", borderRadius: "14px", overflow: "hidden",
                height: "160px",
                background: `linear-gradient(135deg, ${c.grad[0]} 0%, ${c.grad[1]} 50%, ${c.grad[2]} 100%)`,
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px)",
                  pointerEvents: "none",
                }} />
                <div style={{ position: "relative", zIndex: 2, flex: 1, padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "0.625rem", fontWeight: 800, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em" }}>Attax</span>
                      <span style={{ fontSize: "0.5625rem", fontWeight: 700, color: c.tc, letterSpacing: "0.12em", textTransform: "uppercase" }}>{c.cat}</span>
                    </div>
                    <div style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "0.375rem" }}>{c.name}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 800, color: c.tc }}>{c.effect}</span>
                      <span style={{ fontSize: "0.5625rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.sub}</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.4, marginBottom: "0.25rem" }}>{c.desc}</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", letterSpacing: "-0.02em" }}>{c.n}</div>
                  </div>
                </div>
                <div style={{ position: "relative", zIndex: 2, width: "130px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.75rem 1rem 0.75rem 0" }}>
                  <div style={{ width: "100px", height: "100px", position: "relative" }}>
                    <Image src={c.icon} alt={c.name} fill style={{ objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed dark image block ── */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "0 2rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{
            position: "relative",
            borderRadius: "28px",
            overflow: "hidden",
            height: "520px",
          }}>
            <Image
              src="/images/sport-running-group.png"
              alt="Athletes in motion"
              fill
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "3.5rem 4rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>The Duel</p>
                <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1.05, margin: 0 }}>
                  Every evening,<br />a winner is decided.
                </h2>
              </div>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
                display: "inline-flex", alignItems: "center", gap: "8px", flexShrink: 0,
                backgroundColor: "#ffffff", color: "#0d0d0d",
                fontWeight: 700, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
              }}>Download free</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Daily schedule — editorial list ── */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", marginBottom: "4rem" }}>
            <div>
              <p className="section-label" style={{ margin: "0 0 1.25rem" }}>The daily schedule</p>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0 }}>
                Structure drives<br />consistency.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
              Every duel day follows the same rhythm. Predictability creates habits. Habits build results.
            </p>
          </div>
          <hr className="rule" style={{ marginBottom: "0" }} />
          <div>
            {[
              { n: "10:00", title: "Match opens", description: "The duel kicks off. Past rounds are progressively revealed over the course of the day." },
              { n: "13:00", title: "Card deadline", description: "Your card selection is locked. Choose your power before 1 PM or lose the strategic edge for the day." },
              { n: "19:00", title: "Live round opens", description: "Today's activity becomes visible. Watch the score update in real time as both players train." },
              { n: "21:30", title: "Duel resolved", description: "The winner is determined. Rankings update. A cinematic reveal shows your result — Victory, Defeat, or Draw." },
            ].map((f) => (
              <div key={f.n} style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 2fr",
                gap: "2rem",
                alignItems: "start",
                padding: "2.5rem 0",
                borderBottom: "1px solid #eaeaea",
              }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", paddingTop: "4px" }}>{f.n}</div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.3 }}>{f.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.8, margin: 0 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA finale ── */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "0 2rem 7rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{
            backgroundColor: "#0d0d0d",
            borderRadius: "28px",
            overflow: "hidden",
            padding: "5rem 5rem",
            position: "relative",
            textAlign: "center",
          }}>
            {/* Grain */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 1, opacity: 0.25, pointerEvents: "none",
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
            }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <p className="section-label-light" style={{ margin: "0 0 1.5rem" }}>Start now</p>
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", margin: "0 0 1.25rem", lineHeight: 1.05 }}>
                Ready to fight<br />for your fitness?
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", maxWidth: "380px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                Join attax, sync your activity, and face your first opponent tonight.
              </p>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem",
                  padding: "14px 28px", borderRadius: "999px", textDecoration: "none",
                }}>
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on iOS
                </a>
                <Link href="/adventure" className="btn-ghost" style={{
                  display: "inline-flex", alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "0.9375rem",
                  padding: "14px 28px", borderRadius: "999px", textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}>Our Story →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
