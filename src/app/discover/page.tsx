import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Discover Attax — Features & How It Works",
  description: "Explore every feature of Attax: automatic activity sync, performance analytics, competitive leagues, and a global ranking system.",
};

const features = [
  { icon: "🎯", title: "Precision-driven tracking", description: "Attax reads your Apple Health or Google Health Connect data the moment you complete a workout. No manual logging." },
  { icon: "📊", title: "Personalized insights", description: "Trend analysis, recovery patterns, and performance benchmarks tailored to your sport and activity level." },
  { icon: "✨", title: "Clean, fluid design", description: "An intuitive interface built for athletes, not engineers. Everything you need, nothing you don't." },
  { icon: "🔒", title: "Privacy first", description: "Your health data stays on your device. Attax never sells your data or shares it with third parties." },
  { icon: "🌍", title: "Multilingual", description: "Available in English and French, with more languages coming as the community grows." },
  { icon: "🔧", title: "Always improving", description: "Regular updates based on community feedback. The ranking system, leagues, and global leaderboard are already in development." },
];

export default function DiscoverPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{
          position: "relative", borderRadius: "24px", overflow: "hidden",
          minHeight: "75vh", display: "flex", flexDirection: "column", justifyContent: "flex-end",
          backgroundColor: "#0d0d0d",
        }}>
          <Image
            src="/images/warmup.jpg"
            alt="Discover Attax"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.05) 100%)",
          }} />
          <div style={{ position: "relative", zIndex: 1, padding: "4rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>
              Discover Attax
            </p>
            <h1 style={{
              fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 800, color: "#ffffff",
              letterSpacing: "-0.035em", lineHeight: 1.02, margin: "0 0 1.25rem",
            }}>
              Sport begins<br />
              <em style={{ fontStyle: "normal", color: "#FC5F2B" }}>here.</em>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.6)", maxWidth: "500px", lineHeight: 1.65 }}>
              Every step counts. Every session matters. Attax transforms your daily effort into visible, meaningful progress.
            </p>
          </div>
        </div>
      </div>

      {/* Four pillars */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>Our approach</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: 0, lineHeight: 1.1 }}>
              Built on four pillars
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {[
              { icon: "⚡", title: "Your Effort", description: "Steps and minutes build toward meaningful goals. Every session creates new energy — physical and mental. Attax captures it all automatically through your phone's health data." },
              { icon: "🧠", title: "The Mindset", description: "Users choose their approach, method, and rhythm without pressure. There's no shame in rest days. Attax is built around long-term sustainability, not short-term bursts." },
              { icon: "📅", title: "Day by Day", description: "Progress builds at your own individual pace through consistent movement. We celebrate showing up three times a week just as much as daily training." },
              { icon: "🚀", title: "Growth", description: "Weekly improvements in consistency, energy, and motivation. Watch your numbers climb. Feel the compound effect of showing up, day after day." },
            ].map((p) => (
              <div key={p.title} className="premium-card" style={{
                padding: "2.5rem", borderRadius: "20px",
                backgroundColor: "#f7f7f7", border: "1px solid #ebebeb",
              }}>
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

      {/* Photo banner */}
      <section style={{ padding: "0 2rem 6rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", height: "300px", position: "relative" }}>
              <Image src="/images/cycling-race.jpg" alt="Cycling" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: "20px", overflow: "hidden", height: "300px", position: "relative" }}>
              <Image src="/images/hero-boxing-1.jpg" alt="Combat sport" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Technology features */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>Technology</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1rem", lineHeight: 1.1 }}>
              Precision-driven technology
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#777", maxWidth: "440px", margin: "0 auto", lineHeight: 1.65 }}>
              Personalized insights, clean design, and powerful tracking — built for athletes who take performance seriously.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: "10px" }}>
            {features.map((f) => (
              <div key={f.title} className="premium-card" style={{
                padding: "2rem", borderRadius: "20px",
                backgroundColor: "#ffffff", border: "1px solid #ebebeb",
              }}>
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
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{
            position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px",
            overflow: "hidden", padding: "5rem 4rem", textAlign: "center",
          }}>
            <Image src="/images/strength.jpg" alt="" fill style={{ objectFit: "cover", opacity: 0.15 }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(252,95,43,0.15) 0%, transparent 65%)" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", margin: "0 0 1rem", lineHeight: 1.05 }}>
                Ready to move?
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", maxWidth: "360px", margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
                Download Attax and start your journey today.
              </p>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                  backgroundColor: "#FC5F2B", color: "#ffffff", fontWeight: 700,
                  fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none",
                }}>Download on iOS</a>
                <Link href="/adventure" style={{
                  backgroundColor: "rgba(255,255,255,0.07)", color: "#ffffff", fontWeight: 600,
                  fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px",
                  textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)",
                }}>Our Story →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
