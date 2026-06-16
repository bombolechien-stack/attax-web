export default function ThreeWords() {
  const words = [
    { word: "Train.", sub: "Any sport. Any effort. It all counts." },
    { word: "Power up.", sub: "Your activity becomes combat strength." },
    { word: "Battle.", sub: "A real duel, every night at 21:30." },
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "0 2rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {words.map((item, i) => (
          <div key={item.word} style={{
            padding: "clamp(5rem, 10vh, 8rem) 0",
            borderTop: "1px solid #ebebeb",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "4rem",
          }}>
            <div style={{
              fontSize: "clamp(4rem, 10vw, 11rem)",
              fontWeight: 800,
              color: "#0d0d0d",
              letterSpacing: "-0.065em",
              lineHeight: 0.85,
              flex: "1 1 auto",
            }}>
              {item.word}
            </div>
            <p style={{
              fontSize: "1.0625rem",
              color: "#aaa",
              lineHeight: 1.65,
              margin: 0,
              flex: "0 0 260px",
              maxWidth: "260px",
              paddingBottom: "0.5rem",
            }}>
              {item.sub}
            </p>
          </div>
        ))}
        <div style={{ borderTop: "1px solid #ebebeb" }} />
      </div>
    </section>
  );
}
