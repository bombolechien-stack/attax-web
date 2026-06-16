import Image from "next/image";

export default function ArenaSection() {
  return (
    <section style={{
      position: "relative",
      backgroundColor: "#050505",
      minHeight: "110vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    }}>
      {/* Photo background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/photo-race.jpg"
          alt="Athletes"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 40%",
            filter: "grayscale(70%) contrast(1.1) brightness(0.28)",
          }}
        />
      </div>

      {/* Gradients */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.65) 55%, rgba(5,5,5,0.3) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0) 30%, rgba(5,5,5,0) 70%, rgba(5,5,5,0.9) 100%)" }} />

      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat", backgroundSize: "300px 300px",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3, padding: "8rem clamp(2rem, 10vw, 10rem)", width: "100%", maxWidth: "900px" }}>
        <p style={{
          fontSize: "clamp(3.5rem, 9vw, 10rem)",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.06em",
          lineHeight: 0.87,
          margin: "0 0 4rem",
        }}>
          The arena<br />never stops.
        </p>
        <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.125rem)", color: "rgba(255,255,255,0.32)", lineHeight: 1.75, margin: "0 0 3.5rem", maxWidth: "360px" }}>
          Every rep. Every step. Every sprint.<br />All of it counts. All of it battles.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem",
            padding: "14px 28px", borderRadius: "999px", textDecoration: "none",
          }}>
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.72)", fontWeight: 600, fontSize: "0.9375rem",
            padding: "14px 28px", borderRadius: "999px", textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
