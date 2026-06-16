export default function ArenaSection() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "0 2rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{
          position: "relative",
          borderRadius: "24px",
          overflow: "hidden",
          minHeight: "560px",
          display: "flex", alignItems: "flex-end",
          backgroundColor: "#080808",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.018) 3px, rgba(255,255,255,0.018) 4px)",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.5) 50%, rgba(8,8,8,0.2) 100%)",
          }} />
          <div style={{ position: "relative", zIndex: 2, padding: "4rem 4.5rem", maxWidth: "640px" }}>
            <p className="section-label-light" style={{ margin: "0 0 1.5rem" }}>The arena</p>
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800,
              color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 0.98, margin: "0 0 1.5rem",
            }}>
              The arena<br />never stops.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: "0 0 2.5rem", maxWidth: "440px" }}>
              Every workout changes tomorrow&apos;s battles. Every step counts. Every effort matters.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
              }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: "0.9375rem",
                padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
