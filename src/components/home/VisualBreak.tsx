export default function VisualBreak() {
  return (
    <section style={{
      position: "relative",
      height: "70vh",
      minHeight: "480px",
      backgroundColor: "#060606",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
    }}>
      {/* Video background */}
      <video autoPlay muted loop playsInline preload="metadata" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center 25%", zIndex: 0,
      }}>
        <source src="/videos/boxingonring.mp4" type="video/mp4" />
      </video>

      {/* Heavy overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundColor: "rgba(6,6,6,0.55)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(6,6,6,0) 0%, rgba(6,6,6,0.98) 100%)" }} />

      {/* Text */}
      <div style={{ position: "relative", zIndex: 2, padding: "4rem clamp(2rem,8vw,9rem)", width: "100%" }}>
        <p style={{
          fontSize: "clamp(2rem,5vw,4.5rem)", fontWeight: 800,
          color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 0.98,
          margin: 0, maxWidth: "700px",
        }}>
          Every workout changes<br />tomorrow&apos;s battle.
        </p>
      </div>
    </section>
  );
}
