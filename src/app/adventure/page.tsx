import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The Adventure — Attax Story",
  description: "The story behind Attax: why we built a competitive fitness app, what drives us, and where we're going.",
};

const timeline = [
  {
    year: "The Problem",
    title: "Emotionless fitness apps",
    description: "We looked around at fitness apps and found they all felt the same: cold trackers, step counters, and calorie logs. Nothing that made you feel anything. Nothing that made Monday exciting.",
  },
  {
    year: "The Insight",
    title: "Consistency is the superpower",
    description: "The best athletes aren't the most talented — they're the most consistent. We wanted to build an app that celebrates showing up, day after day, rather than obsessing over peak performance.",
  },
  {
    year: "The Vision",
    title: "Sport as social competition",
    description: "What if your 5K run could earn you points in a global league? What if your consistency score made you famous among your peers? We wanted to create the Transfermarkt of amateur sport.",
  },
  {
    year: "Today",
    title: "Attax is born",
    description: "Attax is now live in beta, tracking workouts for athletes across 50+ countries. The ranking system, global leaderboards, and competitive leagues are coming in V2.",
  },
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
      <Navbar />

      {/* Hero with Cycling is Budy image */}
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{
          position: "relative", borderRadius: "24px", overflow: "hidden",
          minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "flex-end",
          backgroundColor: "#0d0d0d",
        }}>
          <Image
            src="/images/cycling-race.jpg"
            alt="Cycling is Attax"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
          }} />
          <div style={{ position: "relative", zIndex: 1, padding: "4rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>
              The Adventure
            </p>
            <h1 style={{
              fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 800, color: "#ffffff",
              letterSpacing: "-0.035em", lineHeight: 1.02, margin: "0 0 1.25rem",
            }}>
              Why we built<br />
              <em style={{ fontStyle: "normal", color: "#FC5F2B" }}>Attax.</em>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.6)", maxWidth: "520px", lineHeight: 1.65 }}>
              We were tired of fitness apps that tracked everything but inspired nothing. So we built something different.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          {timeline.map((item, i) => (
            <div key={item.year} style={{ display: "flex", gap: "2.5rem", paddingBottom: i < timeline.length - 1 ? "3rem" : 0, position: "relative" }}>
              {/* Timeline line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  backgroundColor: "#fff5eb", border: "2px solid #FC5F2B",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FC5F2B" }} />
                </div>
                {i < timeline.length - 1 && (
                  <div style={{ width: "2px", flex: 1, backgroundColor: "#f0f0f0", marginTop: "8px" }} />
                )}
              </div>
              <div style={{ paddingTop: "8px", paddingBottom: i < timeline.length - 1 ? "2rem" : 0 }}>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", color: "#FC5F2B", textTransform: "uppercase" }}>
                  {item.year}
                </span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0.4rem 0 0.75rem", letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.7, margin: 0 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values with photo */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", alignItems: "stretch" }}>
            {/* Photo */}
            <div style={{ borderRadius: "20px", overflow: "hidden", minHeight: "500px", position: "relative" }}>
              <Image src="/images/strength.jpg" alt="Strength training" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Values */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ padding: "2rem", backgroundColor: "#ffffff", borderRadius: "20px" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>What we believe</p>
                <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: 0, lineHeight: 1.1 }}>
                  Built on real values.
                </h2>
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
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", margin: "0 0 1rem", lineHeight: 1.05 }}>
                Join the adventure
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", maxWidth: "420px", margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
                We&apos;re just getting started. V2 brings global rankings, competitive leagues, and public athlete profiles.
              </p>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                  backgroundColor: "#FC5F2B", color: "#ffffff", fontWeight: 700,
                  fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px",
                  textDecoration: "none",
                }}>Download Attax</a>
                <Link href="/contact" style={{
                  backgroundColor: "rgba(255,255,255,0.07)", color: "#ffffff", fontWeight: 600,
                  fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px",
                  textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)",
                }}>Get in touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
