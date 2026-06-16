import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageNavbar from "@/components/PageNavbar";

export const metadata: Metadata = {
  title: "Discover Attax — Features & How It Works",
  description: "Every workout becomes a 1v1 duel. Discover how attax turns your health data into Activity Points, daily fights, and a competitive ranking — 8 players, 7 days, 12 cards.",
};

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
          <PageNavbar />

          {/* ── Hero Content ── */}
          <div style={{
            position: "relative", zIndex: 3,
            flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "2rem 4rem 2rem",
            maxWidth: "600px",
          }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Discover Attax</span>
            </div>
            <h1 style={{
              fontSize: "clamp(3rem, 5.5vw, 4.75rem)",
              fontWeight: 800, color: "#ffffff",
              lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.25rem",
            }}>
              Your workouts.<br />
              <em style={{ fontStyle: "normal", color: "#ffffff" }}>A real fight.</em>
            </h1>
            <p style={{
              fontSize: "1rem", color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75, margin: "0 0 2rem", maxWidth: "400px",
            }}>
              Turn your training into Activity Points. Face a real opponent every day. Play a card. Win the night.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
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
              <Link href="/adventure" style={{
                display: "inline-flex", alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)",
                fontWeight: 600, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px",
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)",
              }}>Our Story →</Link>
            </div>
          </div>

          {/* ── Bottom stats ── */}
          <div style={{ position: "relative", zIndex: 3, display: "flex", padding: "0 4rem 3rem", gap: 0 }}>
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
              src="/images/fencing.jpg"
              alt="Fencer in action"
              fill
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "3.5rem 4rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>The Duel</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1.05, margin: 0 }}>
                Every evening,<br />a winner is decided.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── Daily schedule — editorial list ── */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "7rem 2rem 9rem" }}>
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
    </>
  );
}
