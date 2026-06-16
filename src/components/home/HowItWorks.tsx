import InView from "@/components/InView";
import Image from "next/image";

const steps = [
  {
    n: "01", title: "Do your sport",
    desc: "Walk, run, cycle, lift — any activity counts. Attax connects to Apple Health & Google Health Connect automatically.",
    img: "/images/cycling-portrait.jpg",
  },
  {
    n: "02", title: "Move regularly",
    desc: "Track your activity day after day. Every session recorded, every effort counted — build the habit that changes everything.",
    img: "/images/warmup.jpg",
  },
  {
    n: "03", title: "Stay consistent",
    desc: "Forget the pressure of perfection — focus on progress. Attax celebrates showing up, week after week.",
    img: "/images/strength-portrait.jpg",
  },
  {
    n: "04", title: "Become the best version of yourself",
    desc: "Weekly progress, milestones unlocked, community energy. Every step brings you closer to who you want to be.",
    img: "/images/hero-boxing-3.jpg",
    dark: true,
  },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <InView style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>
            How it works
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1rem", lineHeight: 1.1 }}>
            It starts with your first workout,<br />then so much more.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#777", maxWidth: "440px", margin: "0 auto", lineHeight: 1.65 }}>
            Four simple steps that turn daily effort into lasting progress.
          </p>
        </InView>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "10px" }}>
          {steps.map((s, i) => (
            <InView key={s.n} delay={i * 80} className="premium-card">
              <div style={{
                borderRadius: "20px", overflow: "hidden",
                height: "100%", minHeight: "340px",
                position: "relative",
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
              }}>
                {/* Background photo */}
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                {/* Dark overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
                }} />
                {/* Step number watermark */}
                <div style={{
                  position: "absolute", top: "1rem", right: "1.25rem",
                  fontSize: "5rem", fontWeight: 900, lineHeight: 1,
                  color: "rgba(255,255,255,0.08)", letterSpacing: "-0.04em",
                  userSelect: "none", pointerEvents: "none",
                }}>{s.n}</div>

                {/* Content */}
                <div style={{ position: "relative", zIndex: 1, padding: "1.75rem 1.75rem 2rem" }}>
                  <div style={{
                    fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "#FC5F2B", marginBottom: "0.5rem",
                  }}>Step {s.n}</div>
                  <h3 style={{
                    fontSize: "1.125rem", fontWeight: 700, letterSpacing: "-0.02em",
                    color: "#ffffff", margin: "0 0 0.6rem",
                  }}>{s.title}</h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.6, margin: 0, color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
