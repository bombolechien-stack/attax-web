import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "calc(100vh - 100px)",
        backgroundColor: "#0d0d0d",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Full-width background: orange glow on right side */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 80% at 72% 48%, rgba(210,100,20,0.75) 0%, rgba(180,70,0,0.45) 30%, rgba(100,30,0,0.15) 60%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle dark vignette on left to make text readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.7) 35%, rgba(13,13,13,0.1) 60%, transparent 80%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Athlete silhouette placeholder — right side */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
        }}
      >
        {/* Circular spotlight glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,140,40,0.6) 0%, rgba(200,80,0,0.3) 40%, transparent 70%)",
            top: "50%",
            right: "5%",
            transform: "translateY(-50%)",
          }}
        />
        {/* Placeholder image */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "12rem",
            opacity: 0.15,
            userSelect: "none",
            marginRight: "4rem",
          }}
        >
          🏃
        </div>
      </div>

      {/* Text content — left aligned, padded */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "5rem 2rem 3rem 4rem",
          maxWidth: "580px",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          flex: 1,
          justifyContent: "center",
          minHeight: "calc(100vh - 200px)",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "rgba(255,255,255,0.85)",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <path
              d="M4.5 7L6.5 9L9.5 5"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Free to download · iOS &amp; Android
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Move, progress,
          <br />
          <span style={{ color: "#FC5F2B" }}>stay motivated.</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.65,
            margin: 0,
            maxWidth: "420px",
          }}
        >
          Every step counts. Every effort brings you closer to your goals.
          Attax transforms your daily workouts into a competitive sport.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ffffff",
              color: "#0d0d0d",
              fontWeight: 700,
              fontSize: "0.9375rem",
              padding: "13px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Download App
          </a>
          <Link
            href="/discover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.9375rem",
              padding: "13px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            See what we offer
          </Link>
        </div>
      </div>

      {/* Bottom stats bar — exact superpower.com layout */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "stretch",
          padding: "0 4rem 3rem",
          gap: "0",
        }}
      >
        {[
          { title: "Whole body tracking", sub: "Detect 1,000+ activity patterns" },
          { title: "Accessible", sub: "Free to download" },
          { title: "Trusted", sub: "10K+ athletes worldwide" },
        ].map((s, i) => (
          <div
            key={s.title}
            style={{
              paddingLeft: i > 0 ? "2rem" : "0",
              marginLeft: i > 0 ? "2rem" : "0",
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}
          >
            <div
              style={{
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: i === 2 ? "#FC5F2B" : "#ffffff",
                marginBottom: "2px",
                letterSpacing: "-0.01em",
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
