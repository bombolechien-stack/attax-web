import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#111111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(252,95,43,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 40% 40% at 20% 70%, rgba(252,95,43,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "8rem 2rem 5rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            padding: "6px 14px",
            marginBottom: "2rem",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#FC5F2B" strokeWidth="1.5"/>
            <path d="M4.5 7L6.5 9L9.5 5" stroke="#FC5F2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "0.01em",
            }}
          >
            Free to download · iOS &amp; Android
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.75rem, 7vw, 5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: "0 0 1.5rem",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Move, progress,
          <br />
          <span style={{ color: "#FC5F2B" }}>and stay motivated.</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "1.125rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.65,
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
            fontWeight: 400,
          }}
        >
          Every step counts. Every effort brings you closer to your goals.
          <br />
          Attax transforms your daily workouts into a competitive sport.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
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
              boxShadow: "0 0 40px rgba(252,95,43,0.35)",
              letterSpacing: "-0.01em",
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on iOS
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
            Get on Android
          </a>
          <Link
            href="/discover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "rgba(255,255,255,0.55)",
              fontWeight: 500,
              fontSize: "0.9375rem",
              padding: "14px 16px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            See what we offer →
          </Link>
        </div>

        {/* Bottom stats */}
        <div
          style={{
            display: "flex",
            gap: "0",
            justifyContent: "center",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "Whole body tracking", sub: "Automatic via HealthKit" },
            { value: "Accessible", sub: "Free to download" },
            { value: "Trusted", sub: "10K+ athletes" },
          ].map((s, i) => (
            <div
              key={s.value}
              style={{
                textAlign: "left",
                padding: "0 2.5rem",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "2px",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 400,
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #ffffff)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
