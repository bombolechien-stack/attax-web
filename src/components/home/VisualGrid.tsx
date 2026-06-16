import Image from "next/image";

const PHONES = [
  {
    src: "/screens/screenmatch.png",
    label: "Battle",
    caption: "Daily 1v1 duels. Results drop at 21:30 every night.",
    offset: 60,
    scale: 0.9,
  },
  {
    src: "/screens/screenactivity.png",
    label: "Train",
    caption: "Every workout syncs automatically via Apple Health or Health Connect.",
    offset: 0,
    scale: 1,
  },
  {
    src: "/screens/screencards.png",
    label: "Strategize",
    caption: "12 combat cards. Play them at the right moment.",
    offset: 60,
    scale: 0.9,
  },
];

function IPhone({ src, offset, scale }: { src: string; offset: number; scale: number }) {
  const W = 240 * scale;
  const H = 510 * scale;
  const R = 42 * scale;
  const B = 9 * scale;

  return (
    <div style={{
      width: W,
      height: H,
      borderRadius: R,
      border: `${B}px solid #1e1e1e`,
      backgroundColor: "#000",
      boxShadow: `0 ${40 * scale}px ${100 * scale}px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.07)`,
      overflow: "hidden",
      position: "relative",
      transform: `translateY(${offset}px)`,
      flexShrink: 0,
    }}>
      {/* Dynamic island */}
      <div style={{
        position: "absolute", top: 12 * scale, left: "50%",
        transform: "translateX(-50%)",
        width: 90 * scale, height: 26 * scale,
        backgroundColor: "#000",
        borderRadius: 20 * scale,
        zIndex: 10,
      }} />
      <Image src={src} alt="" fill style={{ objectFit: "cover", objectPosition: "top center" }} />
    </div>
  );
}

export default function VisualGrid() {
  return (
    <section style={{
      backgroundColor: "#070707",
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
        background: "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Label */}
      <p style={{
        textAlign: "center",
        fontSize: "0.75rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.28)",
        margin: "0 0 1.25rem",
      }}>
        The App
      </p>

      {/* Headline */}
      <h2 style={{
        textAlign: "center",
        fontSize: "clamp(2rem, 4vw, 3.5rem)",
        fontWeight: 800,
        color: "#ffffff",
        letterSpacing: "-0.05em",
        lineHeight: 1.0,
        margin: "0 0 5rem",
      }}>
        Everything in one place.
      </h2>

      {/* 3 iPhones */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "clamp(1.5rem, 3vw, 3rem)",
        marginBottom: "4rem",
      }}>
        {PHONES.map(p => <IPhone key={p.src} src={p.src} offset={p.offset} scale={p.scale} />)}
      </div>

      {/* Captions */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "clamp(1.5rem, 3vw, 3rem)",
        maxWidth: "860px",
        margin: "0 auto",
      }}>
        {PHONES.map(p => (
          <div key={p.src} style={{ width: 240 * p.scale, flexShrink: 0, textAlign: "center" }}>
            <span style={{
              display: "inline-block",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "0.5rem",
            }}>
              {p.label}
            </span>
            <p style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.65,
              margin: 0,
            }}>
              {p.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
