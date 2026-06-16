const reviews = [
  {
    text: "I've tried every fitness app out there. Attax is the first one that made me actually look forward to Monday.",
    name: "Lucas M.",
    location: "Paris, France",
    sport: "Running",
    rating: 5,
  },
  {
    text: "The league system is addictive. I started running more just to stay competitive. That's exactly the point.",
    name: "Sarah K.",
    location: "London, UK",
    sport: "CrossFit",
    rating: 5,
  },
  {
    text: "My mindset shifted from 'I have to work out' to 'I want to earn my points today'. Big difference.",
    name: "Thomas R.",
    location: "Bordeaux, France",
    sport: "Cycling",
    rating: 5,
  },
];

export default function Community() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              letterSpacing: "-0.03em",
              margin: "0 0 1rem",
              lineHeight: 1.1,
            }}
          >
            What athletes are saying
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#666666", maxWidth: "380px", margin: "0 auto", lineHeight: 1.6 }}>
            A community that lifts you up.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              style={{
                backgroundColor: "#fafafa",
                borderRadius: "20px",
                padding: "2rem",
                border: "1px solid #f0f0f0",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FC5F2B">
                    <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.43L7 8.885l-3.09 1.615.59-3.43L2 4.635l3.455-.505z" />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#1a1a1a",
                  lineHeight: 1.7,
                  margin: "0 0 1.5rem",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a" }}>{r.name}</div>
                  <div style={{ fontSize: "0.8125rem", color: "#999999" }}>{r.location}</div>
                </div>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#fff5eb",
                    color: "#FC5F2B",
                    textTransform: "uppercase",
                  }}
                >
                  {r.sport}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
