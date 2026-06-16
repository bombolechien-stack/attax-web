import Image from "next/image";

const PHONES = [
  {
    src: "/screens/screenactivity.png",
    label: "Train",
    caption: "Every workout syncs automatically. Your score updates in real time.",
    scale: 0.82,
  },
  {
    src: "/screens/screenmatch.png",
    label: "Battle",
    caption: "Daily 1v1 duels. Results drop at 21:30 every night.",
    scale: 1,
  },
  {
    src: "/screens/screencards.png",
    label: "Strategize",
    caption: "12 combat cards. Play them at the right moment to swing the duel.",
    scale: 0.82,
  },
];

export default function VisualGrid() {
  return (
    <section style={{
      backgroundColor: "#e8ecf0",
      padding: "9rem 2rem 10rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px", height: "400px",
        background: "radial-gradient(ellipse at center, rgba(0,0,0,0.03) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <p style={{
        textAlign: "center",
        fontSize: "0.75rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(0,0,0,0.3)",
        margin: "0 0 1.25rem",
      }}>
        The App
      </p>

      <h2 style={{
        textAlign: "center",
        fontSize: "clamp(2rem, 4vw, 3.5rem)",
        fontWeight: 800,
        color: "#0d0d0d",
        letterSpacing: "-0.05em",
        lineHeight: 1.0,
        margin: "0 0 5rem",
      }}>
        Everything in one place.
      </h2>

      {/* 3 mockups — images already include the iPhone frame */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "0",
        marginBottom: "2.5rem",
      }}>
        {PHONES.map(p => {
          const W = 500 * p.scale;
          const H = W * (873 / 760); // approximate aspect ratio of the mockup images
          return (
            <div key={p.src} style={{
              width: W,
              height: H,
              position: "relative",
              flexShrink: 0,
              filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
            }}>
              <Image
                src={p.src}
                alt={p.label}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          );
        })}
      </div>

      {/* Captions */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "0",
        margin: "0 auto",
      }}>
        {PHONES.map(p => {
          const W = 240 * p.scale;
          return (
            <div key={p.src} style={{ width: 500 * p.scale, flexShrink: 0, textAlign: "center", padding: "0 1.5rem" }}>
              <h3 style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "#0d0d0d",
                margin: "0 0 0.5rem",
              }}>
                {p.label}
              </h3>
              <p style={{
                fontSize: "0.9375rem",
                color: "#666",
                lineHeight: 1.7,
                margin: 0,
              }}>
                {p.caption}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
