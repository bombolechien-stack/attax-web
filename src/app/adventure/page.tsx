import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Adventure — Attax Story",
  description: "The story behind Attax: why we built a competitive fitness app, what drives us, and where we're going.",
};

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

const timeline = [
  { year: "The Problem", title: "Emotionless fitness apps", description: "We looked around at fitness apps and found they all felt the same: cold trackers, step counters, and calorie logs. Nothing that made you feel anything. Nothing that made Monday exciting." },
  { year: "The Insight", title: "Consistency is the superpower", description: "The best athletes aren't the most talented — they're the most consistent. We wanted to build an app that celebrates showing up, day after day, rather than obsessing over peak performance." },
  { year: "The Vision", title: "Sport as social competition", description: "What if your 5K run could earn you points in a global league? What if your consistency score made you known among your peers? We wanted to create the social layer amateur sport was missing." },
  { year: "Today", title: "Attax is born", description: "Attax is now live in beta, tracking workouts for athletes across dozens of countries. The ranking system, global leaderboards, and competitive leagues are coming in V2." },
];

const values = [
  { title: "Consistency over intensity", description: "We believe showing up regularly beats working out perfectly occasionally. Small steps compound into extraordinary results.", icon: "🔁" },
  { title: "Progress at your pace", description: "Fitness is for everyone. We don't care if you run a 4-minute mile or a 14-minute one. Your effort is what counts.", icon: "🌱" },
  { title: "Competition as motivation", description: "Healthy competition is one of the most powerful motivators in human psychology. We're harnessing that for fitness.", icon: "🏆" },
  { title: "Community first", description: "Athletes should lift each other up. Attax is built on the idea that sport is more fun when you share it.", icon: "🤝" },
];

export default function AdventurePage() {
  return (
    <>
      {/* Hero — Cycling is Budy.jpg, with navbar embedded */}
      <div style={{ backgroundColor: "#ffffff", padding: "12px" }}>
        <div style={{
          position: "relative",
          backgroundColor: "#0d0d0d",
          borderRadius: "24px",
          minHeight: "calc(100vh - 24px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          <Image
            src="/images/cycling-race.jpg"
            alt="Cycling is Attax"
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            priority
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.7) 50%, rgba(13,13,13,0.15) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 50%)",
          }} />
          <div style={{
            position: "absolute", inset: 0, zIndex: 2, opacity: 0.15, pointerEvents: "none",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
          }} />

          {/* ── Navbar ── */}
          <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", height: "68px" }}>
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
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
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
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1.25rem" }}>The Adventure</p>
            <h1 style={{
              fontSize: "clamp(3rem, 5.5vw, 4.75rem)",
              fontWeight: 800, color: "#ffffff",
              lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.5rem",
            }}>
              Why we built<br />
              <em style={{ fontStyle: "normal", color: "#FC5F2B" }}>Attax.</em>
            </h1>
            <p style={{
              fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7, margin: "0 0 2.5rem", maxWidth: "420px",
            }}>
              We were tired of emotionless fitness apps that tracked everything but inspired nothing. So we built something different.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#FC5F2B", color: "#ffffff",
                fontWeight: 700, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
              }}>Download Attax</a>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.08)", color: "#ffffff",
                fontWeight: 600, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px",
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)",
              }}>Get in touch</Link>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div style={{ position: "relative", zIndex: 3, display: "flex", padding: "0 4rem 3.5rem" }}>
            {[
              { title: "Born in 2024", sub: "Built from the ground up" },
              { title: "50+ countries", sub: "Athletes worldwide" },
              { title: "V2 incoming", sub: "Leagues & global ranking", accent: true },
            ].map((s, i) => (
              <div key={s.title} style={{
                paddingLeft: i > 0 ? "2.5rem" : 0,
                marginLeft: i > 0 ? "2.5rem" : 0,
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: s.accent ? "#FC5F2B" : "#ffffff", marginBottom: "3px" }}>{s.title}</div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>Our story</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: 0, lineHeight: 1.1 }}>How it all started.</h2>
          </div>
          {timeline.map((item, i) => (
            <div key={item.year} style={{ display: "flex", gap: "2.5rem", position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  backgroundColor: "#fff5eb", border: "2px solid #FC5F2B",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FC5F2B" }} />
                </div>
                {i < timeline.length - 1 && (
                  <div style={{ width: "2px", flex: 1, backgroundColor: "#f0f0f0", marginTop: "8px", minHeight: "60px" }} />
                )}
              </div>
              <div style={{ paddingTop: "8px", paddingBottom: i < timeline.length - 1 ? "3rem" : 0 }}>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", color: "#FC5F2B", textTransform: "uppercase" }}>{item.year}</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0.4rem 0 0.75rem", letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.7, margin: 0 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values + strength photo */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", alignItems: "stretch" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", minHeight: "500px", position: "relative" }}>
              <Image src="/images/sport-weights.png" alt="Strength training" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ padding: "2rem", backgroundColor: "#ffffff", borderRadius: "20px" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>What we believe</p>
                <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: 0, lineHeight: 1.1 }}>Built on real values.</h2>
              </div>
              {values.map((v) => (
                <div key={v.title} style={{ padding: "1.5rem 2rem", backgroundColor: "#ffffff", borderRadius: "20px", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    backgroundColor: "#fff5eb", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "18px", flexShrink: 0,
                  }}>{v.icon}</div>
                  <div>
                    <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.3rem", letterSpacing: "-0.01em" }}>{v.title}</h3>
                    <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{
            position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px",
            overflow: "hidden", padding: "5rem 4rem", textAlign: "center",
          }}>
            <Image src="/images/cycling-portrait.jpg" alt="" fill style={{ objectFit: "cover", opacity: 0.2 }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(252,95,43,0.15) 0%, transparent 65%)" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", margin: "0 0 1rem", lineHeight: 1.05 }}>Join the adventure</h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", maxWidth: "420px", margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
                We&apos;re just getting started. V2 brings global rankings, competitive leagues, and public athlete profiles.
              </p>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#FC5F2B", color: "#ffffff", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>Download Attax</a>
                <Link href="/contact" style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#ffffff", fontWeight: 600, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}>Get in touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
