import InView from "@/components/InView";
import Image from "next/image";

const steps = [
  { n: "01", title: "Do your sport", desc: "Walk, run, climb, lift — whatever your training, attax supports you in your activity.", img: "/images/sport-shoe.png" },
  { n: "02", title: "Move regularly", desc: "Your daily activity keeps you motivated to stay active and push yourself at your own pace.", img: "/images/sport-running-group.png" },
  { n: "03", title: "Stay consistent", desc: "Plan your sessions, keep your rhythm, and move forward a little more each week.", img: "/images/sport-weights.png" },
  { n: "04", title: "Stay on track", desc: "Each week, track your progress and keep moving toward your goals.", img: "/images/sport-cycling.png" },
  { n: "05", title: "Become the best version of yourself", desc: "Week after week, make progress and stay proud of your journey.", img: "/images/sport-basketball.png" },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <InView style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#FC5F2B", textTransform: "uppercase", margin: "0 0 1rem" }}>
            The activity begins
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.035em", margin: "0 0 1rem", lineHeight: 1.1 }}>
            Start your workout.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#777", maxWidth: "440px", margin: "0 auto", lineHeight: 1.65 }}>
            Five simple steps that turn daily effort into lasting progress.
          </p>
        </InView>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
          {steps.map((s, i) => (
            <InView key={s.n} delay={i * 60} className="premium-card">
              <div style={{
                borderRadius: "20px", overflow: "hidden",
                height: "100%", minHeight: "320px",
                position: "relative",
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
              }}>
                <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%)",
                }} />
                <div style={{
                  position: "absolute", top: "1rem", right: "1rem",
                  fontSize: "3.5rem", fontWeight: 900, lineHeight: 1,
                  color: "rgba(255,255,255,0.07)", letterSpacing: "-0.04em",
                  userSelect: "none",
                }}>{s.n}</div>
                <div style={{ position: "relative", zIndex: 1, padding: "1.5rem 1.5rem 1.75rem" }}>
                  <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FC5F2B", marginBottom: "0.4rem" }}>Step {s.n}</div>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "-0.015em", color: "#ffffff", margin: "0 0 0.4rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.8125rem", lineHeight: 1.55, margin: 0, color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
