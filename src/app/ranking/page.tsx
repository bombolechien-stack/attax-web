import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Ranking — Attax",
  description: "The Attax global ranking — see where athletes stand worldwide. Coming soon.",
};

export default function RankingPage() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2.5rem" }}>
          Coming in V2
        </div>
        <h1 style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1, marginBottom: "1.5rem" }}>
          Global<br />Rankings
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
          The global Attax leaderboard is in development. Soon you&apos;ll be able to see how you rank against athletes worldwide.
        </p>
        <Link href="/" style={{ display: "inline-flex", padding: "12px 28px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", borderRadius: "999px", textDecoration: "none" }}>
          ← Back home
        </Link>
      </div>
    </section>
  );
}
