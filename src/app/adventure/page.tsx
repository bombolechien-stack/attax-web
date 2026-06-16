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
  { n: "01", year: "The Problem", title: "Emotionless fitness apps", description: "We looked around at fitness apps and found they all felt the same: cold trackers, step counters, and calorie logs. Nothing that made you feel anything. Nothing that made Monday exciting." },
  { n: "02", year: "The Insight", title: "Consistency is the superpower", description: "The best athletes aren't the most talented — they're the most consistent. We wanted to build an app that celebrates showing up, day after day, rather than obsessing over peak performance." },
  { n: "03", year: "The Vision", title: "Sport as social competition", description: "What if your 5K run could earn you points in a global league? What if your consistency score made you known among your peers? We wanted to create the social layer amateur sport was missing." },
  { n: "04", year: "Today", title: "Attax is born", description: "Attax is now live in beta, tracking workouts for athletes across dozens of countries. The ranking system, global leaderboards, and competitive leagues are coming in V2." },
];

const values = [
  { n: "01", title: "Consistency over intensity", description: "We believe showing up regularly beats working out perfectly occasionally. Small steps compound into extraordinary results." },
  { n: "02", title: "Progress at your pace", description: "Fitness is for everyone. We don't care if you run a 4-minute mile or a 14-minute one. Your effort is what counts." },
  { n: "03", title: "Competition as motivation", description: "Healthy competition is one of the most powerful motivators in human psychology. We're harnessing that for fitness." },
  { n: "04", title: "Community first", description: "Athletes should lift each other up. Attax is built on the idea that sport is more fun when you share it." },
];

export default function AdventurePage() {
  return (
    <>
      {/* Hero */}
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
          <Image
            src="/images/cycling-race.jpg"
            alt="Cycling is Attax"
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.72) 55%, rgba(10,10,10,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 2, opacity: 0.2, pointerEvents: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")" }} />

          {/* Navbar */}
          <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", height: "68px", flexShrink: 0 }}>
            <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center", flex: 1 }}>
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{l.label}</Link>
              ))}
            </nav>
            <Link href="/" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textDecoration: "none" }}>
              <span style={{ fontSize: "1.375rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>attax</span>
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1, justifyContent: "flex-end" }}>
              <a href="#" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Log in</a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.8125rem", padding: "8px 18px", borderRadius: "999px", textDecoration: "none" }}>Download App</a>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,5px)", gap: "3px" }}>
                {Array.from({ length: 9 }).map((_, i) => (<div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.7)" }} />))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 4rem 3rem", maxWidth: "620px" }}>
            <div style={{ marginBottom: "1.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>The Adventure</span>
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 5.5vw, 4.75rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 1.5rem" }}>
              Why we built<br />
              <em style={{ fontStyle: "normal", color: "#ffffff" }}>Attax.</em>
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: "0 0 2.5rem", maxWidth: "420px" }}>
              We were tired of emotionless fitness apps that tracked everything but inspired nothing. So we built something different.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none" }}>
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download Attax
              </a>
              <Link href="/contact" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>Get in touch</Link>
            </div>
          </div>

          {/* Stats */}
          <div style={{ position: "relative", zIndex: 3, display: "flex", padding: "0 4rem 3.5rem" }}>
            {[
              { title: "Born in 2024", sub: "Built from the ground up" },
              { title: "50+ countries", sub: "Athletes worldwide" },
              { title: "V2 incoming", sub: "Leagues & global ranking" },
            ].map((s, i) => (
              <div key={s.title} style={{ paddingLeft: i > 0 ? "2.5rem" : 0, marginLeft: i > 0 ? "2.5rem" : 0, borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>{s.title}</div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline — editorial list */}
      <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", marginBottom: "4rem" }}>
            <div>
              <p className="section-label" style={{ margin: "0 0 1.25rem" }}>Our story</p>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0 }}>
                How it all<br />started.
              </h2>
            </div>
            <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
              A simple frustration. An obsession with consistency. A mission to make sport feel alive again.
            </p>
          </div>
          <hr className="rule" />
          {timeline.map((t) => (
            <div key={t.n} style={{ display: "grid", gridTemplateColumns: "80px 180px 1fr", gap: "2rem", alignItems: "start", padding: "2.5rem 0", borderBottom: "1px solid #f0f0f0" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", paddingTop: "4px" }}>{t.n}</div>
              <div>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", color: "#ffffff", textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.year}</div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.3 }}>{t.title}</h3>
              </div>
              <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.8, margin: 0 }}>{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values + image */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            {/* Left: image */}
            <div style={{ borderRadius: "24px", overflow: "hidden", height: "600px", position: "relative" }}>
              <Image src="/images/sport-weights.png" alt="Strength training" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
            </div>
            {/* Right: values list */}
            <div>
              <p className="section-label" style={{ margin: "0 0 1.25rem" }}>What we believe</p>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "0 0 3rem" }}>
                Built on<br />real values.
              </h2>
              <hr className="rule" />
              {values.map((v) => (
                <div key={v.n} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "1.5rem", alignItems: "start", padding: "2rem 0", borderBottom: "1px solid #eaeaea" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#ccc", paddingTop: "3px" }}>{v.n}</div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>{v.title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "0 2rem 7rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ backgroundColor: "#0d0d0d", borderRadius: "28px", overflow: "hidden", padding: "5rem", position: "relative", textAlign: "center" }}>
            <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.25, pointerEvents: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <p className="section-label-light" style={{ margin: "0 0 1.5rem" }}>Join the adventure</p>
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", margin: "0 0 1.25rem", lineHeight: 1.05 }}>
                We&apos;re just<br />getting started.
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", maxWidth: "380px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                V2 brings global rankings, competitive leagues, and public athlete profiles.
              </p>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>Download Attax</a>
                <Link href="/contact" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>Get in touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
