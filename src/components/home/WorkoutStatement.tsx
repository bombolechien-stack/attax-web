export default function WorkoutStatement() {
  return (
    <section style={{
      backgroundColor: "#ffffff",
      padding: "clamp(8rem, 18vh, 14rem) 2rem",
    }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(3.5rem, 8vw, 9rem)",
          fontWeight: 800,
          color: "#0d0d0d",
          letterSpacing: "-0.065em",
          lineHeight: 0.88,
          margin: "0 0 clamp(3rem, 6vh, 5rem)",
          maxWidth: "900px",
        }}>
          Your workouts<br />now matter.
        </h2>
        <p style={{
          fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
          color: "#999",
          lineHeight: 1.7,
          margin: 0,
          maxWidth: "480px",
          fontWeight: 400,
        }}>
          Every run, lift, walk, and ride translates directly into combat power against real opponents. No shortcuts. No cheating.
        </p>
      </div>
    </section>
  );
}
