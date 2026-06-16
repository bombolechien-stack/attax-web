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
  { icon: "⚡", title: "Your Effort", description: "Every step, every session, every drop of sweat counts. Attax captures your activity automatically through your phone's health data — no manual logging needed." },
  { icon: "🧠", title: "The Mindset", description: "No more emotionless fitness apps. Choose your approach, method, and rhythm without pressure. Attax is built around long-term sustainability, not short-term bursts." },
  { icon: "📅", title: "Day by Day", description: "Consistent movement builds extraordinary results. Each day is an opportunity. We celebrate showing up three times a week just as much as daily training." },
  { icon: "🚀", title: "Growth", description: "Progress week after week. Watch your numbers climb. Feel the compound effect of showing up, day after day — your efforts become your strength." },
];

const techFeatures = [
  { icon: "📈", title: "Your activity, intelligently analyzed", description: "Attax tracks your sessions, analyzes your data, and identifies your energy patterns and recovery times. No manual logging — it reads your Apple Health or Google Health Connect data automatically." },
  { icon: "💡", title: "Technology serving your wellbeing", description: "Advanced tracking, intuitive design, and accessible data visualization. Built for athletes who want powerful insights without the complexity." },
  { icon: "🎯", title: "Motivation reimagined", description: "Motivation isn't linear. Attax is designed around maintaining consistent movement rather than obsessing over peak performance. Every effort matters." },
  { icon: "🌍", title: "A community advancing together", description: "At Attax, motivation is collective. The app builds real connections between users, turning individual effort into shared energy. #gowithattax" },
  { icon: "🔒", title: "Privacy first", description: "Your health data stays on your device. Attax never sells your data or shares it with third parties." },
  { icon: "🔧", title: "Always improving", description: "Regular updates based on community feedback. Competitive leagues, global rankings, and athlete profiles are in development for V2." },
];

export default function DiscoverPage() {
  return (
    <>
      {/* Hero — with navbar embedded inside dark block */}
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
          {/* Background image */}
          <Image
            src="/images/strength.jpg"
            alt="Discover Attax"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
          />
          {/* Overlays */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.7) 55%, rgba(13,13,13,0.2) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 50%)",
          }} />
          {/* Grain */}
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
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1.25rem" }}>Discover Attax</p>
            <h1 style={{
              fontSize: "clamp(3rem, 5.5vw, 4.75rem)",
              fontWeight: 800, color: "#ffffff",
              lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.5rem",
            }}>
              A simple concept,<br />
              <em style={{ fontStyle: "normal", color: "#FC5F2B" }}>a unique experience.</em>
            </h1>
            <p style={{
              fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7, margin: "0 0 2.5rem", maxWidth: "420px",
            }}>
              attax is more than a simple activity tracking app. Move, progress, and stay motivated every day. Every step counts.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#FC5F2B", color: "#ffffff",
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
                backgroundColor: "rgba(255,255,255,0.08)", color: "#ffffff",
                fontWeight: 600, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px",
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)",
              }}>Our Story →</Link>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div style={{ position: "relative", zIndex: 3, display: "flex", padding: "0 4rem 3.5rem" }}>
            {[
              { title: "1 community", sub: "United around sport" },
              { title: "Thousands of athletes", sub: "Moving every day" },
              { title: "1 shared energy", sub: "#gowithattax", accent: true },
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

      {/* Four pillars */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>Our approach</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1rem", lineHeight: 1.1 }}>Move, progress, continue.</h2>
            <p style={{ fontSize: "1.0625rem", color: "#777", maxWidth: "460px", margin: "0 auto", lineHeight: 1.65 }}>A new way to approach sport — built on four simple pillars that transform daily effort into lasting results.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {pillars.map((p) => (
              <div key={p.title} className="premium-card" style={{ padding: "2.5rem", borderRadius: "20px", backgroundColor: "#f7f7f7" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  backgroundColor: "#fff5eb", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "22px", marginBottom: "1.25rem",
                }}>{p.icon}</div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>{p.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App screenshots */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>The App</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1.25rem", lineHeight: 1.1 }}>
                Everything you need<br />in one place.
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "#777", lineHeight: 1.65, margin: "0 0 2rem" }}>
                Track your sessions, follow your progress, stay motivated every day. A simple concept, a unique experience.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: "#0d0d0d", color: "#ffffff", fontWeight: 700, fontSize: "0.9375rem",
                  padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
                }}>
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on iOS
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center",
                  backgroundColor: "transparent", color: "#0d0d0d", fontWeight: 600, fontSize: "0.9375rem",
                  padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
                  border: "1px solid #e0e0e0",
                }}>Google Play</a>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/images/app-screenshots.png"
                alt="Attax app screenshots"
                width={560}
                height={440}
                style={{ objectFit: "contain", maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech features */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>Technology</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1rem", lineHeight: 1.1 }}>Not just an app,<br />a source of motivation.</h2>
            <p style={{ fontSize: "1.0625rem", color: "#777", maxWidth: "440px", margin: "0 auto", lineHeight: 1.65 }}>
              Intelligent tracking, human-first design, and a community that lifts you up.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: "10px" }}>
            {techFeatures.map((f) => (
              <div key={f.title} className="premium-card" style={{ padding: "2rem", borderRadius: "20px", backgroundColor: "#f7f7f7" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  backgroundColor: "#fff5eb", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "20px", marginBottom: "1.25rem",
                }}>{f.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem", letterSpacing: "-0.015em" }}>{f.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{
            position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px",
            overflow: "hidden", padding: "5rem 4rem", textAlign: "center",
          }}>
            <Image src="/images/sport-running-group.png" alt="" fill style={{ objectFit: "cover", opacity: 0.12 }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(252,95,43,0.18) 0%, transparent 65%)" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", margin: "0 0 1rem", lineHeight: 1.05 }}>Your new challenge starts here.</h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", maxWidth: "380px", margin: "0 auto 2.5rem", lineHeight: 1.65 }}>Ready to exceed yourself? Download Attax and start your journey today.</p>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#FC5F2B", color: "#ffffff", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>Download on iOS</a>
                <Link href="/adventure" style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#ffffff", fontWeight: 600, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}>Our Story →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
