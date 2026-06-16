"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section id="waitlist" style={{
      backgroundColor: "#080808",
      padding: "9rem 2rem",
      textAlign: "center",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.018) 3px, rgba(255,255,255,0.018) 4px)",
    }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <div className="section-label-light" style={{ marginBottom: "1.5rem" }}>Early access</div>
        <h2 style={{
          fontSize: "clamp(3rem, 4.5vw, 4.5rem)",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.045em",
          lineHeight: 1.0,
          margin: "0 0 1.25rem",
        }}>
          The next generation<br />of fitness gaming.
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, marginBottom: "3rem" }}>
          Be among the first players to enter the arena.
        </p>

        {submitted ? (
          <p style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600 }}>
            You&apos;re on the list. See you in the arena.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              style={{
                width: "360px",
                maxWidth: "100%",
                padding: "14px 20px",
                borderRadius: "999px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
                fontSize: "0.9375rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="btn-white"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#ffffff", color: "#0d0d0d",
                fontWeight: 700, fontSize: "0.9375rem",
                padding: "14px 26px", borderRadius: "999px",
                border: "none", cursor: "pointer",
              }}
            >
              Join the waitlist <span>→</span>
            </button>
          </form>
        )}

        <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.22)", marginTop: "1.5rem" }}>
          Free to join. No spam. Launching soon.
        </p>
      </div>
    </section>
  );
}
