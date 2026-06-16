import Image from "next/image";

const steps = [
  { n: "1", title: "Do your sport", desc: "Walk, run, climb, lift — whatever your training, attax supports you in your activity.", img: "/images/sport-shoe.png" },
  { n: "2", title: "Move regularly", desc: "Your daily activity keeps you motivated to stay active and push yourself at your own pace.", img: "/images/sport-running-group.png" },
  { n: "3", title: "Stay consistent", desc: "Plan your sessions, keep your rhythm, and move forward a little more each week.", img: "/images/sport-weights.png" },
  { n: "4", title: "Stay on track", desc: "Each week, track your progress and keep moving toward your goals.", img: "/images/sport-cycling.png" },
  { n: "5", title: "Become the best version of yourself", desc: "Week after week, make progress and stay proud of your journey.", img: "/images/sport-basketball.png" },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header — centered like superpower.com */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "0 0 0.875rem",
          }}>
            How it works
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#888", lineHeight: 1.65, margin: 0 }}>
            Five simple steps that turn daily effort into lasting progress.
          </p>
        </div>

        {/* Cards — text BELOW image, like superpower.com */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
          {steps.map((s) => (
            <div key={s.n} className="img-zoom" style={{ display: "flex", flexDirection: "column" }}>
              {/* Image card */}
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                height: "320px",
                position: "relative",
                backgroundColor: "#f0f0f0",
                marginBottom: "1rem",
              }}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Number badge — top left, like superpower.com */}
                <div style={{
                  position: "absolute", top: "0.875rem", left: "0.875rem",
                  width: "24px", height: "24px", borderRadius: "6px",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", fontWeight: 700, color: "#0d0d0d",
                }}>
                  {s.n}
                </div>
              </div>
              {/* Text below card */}
              <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.375rem", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ fontSize: "0.8125rem", color: "#888", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
