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
    <section style={{ backgroundColor: "#f7f7f7", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header row */}
        <InView style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", marginBottom: "4rem" }}>
          <div>
            <p className="section-label" style={{ margin: "0 0 1.25rem" }}>The activity begins</p>
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0,
            }}>
              Start your<br />workout.
            </h2>
          </div>
          <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
            Five simple steps that turn daily effort into lasting progress — wherever you are, whatever your rhythm.
          </p>
        </InView>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "8px" }}>
          {steps.map((s, i) => (
            <InView key={s.n} delay={i * 60} className="img-zoom">
              <div style={{
                borderRadius: "20px",
                overflow: "hidden",
                height: "400px",
                position: "relative",
                cursor: "pointer",
              }}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
                />
                {/* Gradient */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%)",
                }} />
                {/* Step number watermark */}
                <div style={{
                  position: "absolute", top: "1rem", left: "1.25rem",
                  fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.16em",
                  color: "rgba(255,255,255,0.35)", textTransform: "uppercase",
                }}>Step {s.n}</div>
                {/* Content */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem 1.5rem 2rem", zIndex: 1 }}>
                  <div style={{ fontSize: "3rem", fontWeight: 900, color: "rgba(255,255,255,0.06)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.75rem" }}>{s.n}</div>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#fff", margin: "0 0 0.5rem", letterSpacing: "-0.015em", lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
