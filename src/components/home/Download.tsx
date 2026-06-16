export default function Download() {
  return (
    <section style={{ backgroundColor: "#fafafa", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#111111",
            borderRadius: "24px",
            padding: "5rem 3rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(252,95,43,0.2) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                margin: "0 0 1rem",
                lineHeight: 1.05,
              }}
            >
              Sport begins now.
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "420px",
                margin: "0 auto 2.5rem",
                lineHeight: 1.6,
              }}
            >
              Every step counts. Become the best version of yourself.
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#FC5F2B",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  boxShadow: "0 0 40px rgba(252,95,43,0.4)",
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.15)",
                  letterSpacing: "-0.01em",
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.76-11.67L13 8.4 3.18 23.76zm16.56-9.29L16.6 12l3.14-2.47L5.27.28C4.98.1 4.65.03 4.33.06L16.98 12l2.76 2.47zM21.4 10.6L18.96 12l2.44 1.4c.68.39.68 1.02 0 1.41l-1.97 1.13-2.76-2.47-2.91 2.66 2.76 2.47-1.65.95c-.68.39-1.78.39-2.46 0l-12.7-7.34C.02 12 0 11.52 0 11.52s.02-.48.35-.67l2.83-1.63L16.6 12l2.84-2.47 1.97 1.13c.68.39.68 1.02 0 1.41l-.01-.07z" />
                </svg>
                Google Play
              </a>
            </div>

            <p style={{ marginTop: "1.5rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)" }}>
              Free to download · iOS 15+ · Android 8.0+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
