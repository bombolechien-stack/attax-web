import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Discover Attax — Features & How It Works",
  description: "Explore every feature of Attax: automatic activity sync, performance analytics, competitive leagues, and a global ranking system.",
};

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

const pillars = [
  {
    n: "01",
    title: "Your Effort",
    description: "Every step, every session, every drop of sweat counts. Attax captures your activity automatically through your phone's health data — no manual logging needed.",
  },
  {
    n: "02",
    title: "The Mindset",
    description: "No more emotionless fitness apps. Choose your approach, method, and rhythm without pressure. Attax is built around long-term sustainability, not short-term bursts.",
  },
  {
    n: "03",
    title: "Day by Day",
    description: "Consistent movement builds extraordinary results. Each day is an opportunity. We celebrate showing up three times a week just as much as daily training.",
  },
  {
    n: "04",
    title: "Growth",
    description: "Progress week after week. Watch your numbers climb. Feel the compound effect of showing up, day after day — your efforts become your strength.",
  },
];

const techFeatures = [
  { n: "01", title: "Your activity, intelligently analyzed", description: "Attax tracks your sessions, analyzes your data, and identifies your energy patterns and recovery times. No manual logging — it reads your Apple Health or Google Health Connect data automatically." },
  { n: "02", title: "Technology serving your wellbeing", description: "Advanced tracking, intuitive design, and accessible data visualization. Built for athletes who want powerful insights without the complexity." },
  { n: "03", title: "Motivation reimagined", description: "Motivation isn't linear. Attax is designed around maintaining consistent movement rather than obsessing over peak performance. Every effort matters." },
  { n: "04", title: "A community advancing together", description: "At Attax, motivation is collective. The app builds real connections between users, turning individual effort into shared energy. #gowithattax" },
  { n: "05", title: "Privacy first", description: "Your health data stays on your device. Attax never sells your data or shares it with third parties." },
  { n: "06", title: "Always improving", description: "Regular updates based on community feedback. Competitive leagues, global rankings, and athlete profiles are in development for V2." },
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
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.75rem" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#FC5F2B" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Discover Attax</span>
            </div>
            <h1 style={{
              fontSize: "clamp(3rem, 5.5vw, 4.75rem)",
              fontWeight: 800, color: "#ffffff",
              lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.5rem",
            }}>
              A simple concept,<br />
              <em style={{ fontStyle: "normal", color: "#FC5F2B" }}>a unique experience.</em>
            </h1>
            <p style={{
              fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75, margin: "0 0 2.5rem", maxWidth: "420px",
            }}>
              attax is more than a simple activity tracking app. Move, progress, and stay motivated every day. Every step counts.
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
              { title: "1 community", sub: "United around sport" },
              { title: "Thousands of athletes", sub: "Moving every day" },
              { title: "#gowithattax", sub: "1 shared energy" },
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
              <p className="section-label" style={{ margin: "0 0 1.25rem" }}>Our approach</p>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0 }}>
                Move, progress,<br />continue.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
              A new way to approach sport — built on four simple pillars that transform daily effort into lasting results.
            </p>
          </div>
          <hr className="rule" style={{ marginBottom: "0" }} />
          <div>
            {pillars.map((p, i) => (
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
              src="/images/sport-running-group.png"
              alt="Athletes in motion"
              fill
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "3.5rem 4rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 0.75rem" }}>The App</p>
                <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1.05, margin: 0 }}>
                  Everything you need<br />in one place.
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

      {/* ── Tech features — editorial list ── */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", marginBottom: "4rem" }}>
            <div>
              <p className="section-label" style={{ margin: "0 0 1.25rem" }}>Technology</p>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0 }}>
                Not just an app,<br />
                <em style={{ fontStyle: "normal", color: "#FC5F2B" }}>a source of motivation.</em>
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
              Intelligent tracking, human-first design, and a community that lifts you up.
            </p>
          </div>
          <hr className="rule" style={{ marginBottom: "0" }} />
          <div>
            {techFeatures.map((f) => (
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
                Your new challenge<br />starts here.
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", maxWidth: "380px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                Ready to exceed yourself? Download Attax and start your journey today.
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
