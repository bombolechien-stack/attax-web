import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `League #${id} — Attax`,
    description: `Join or view this Attax league: participants, scores, and rankings.`,
  };
}

export default async function LeaguePage({ params }: Props) {
  const { id } = await params;
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2.5rem" }}>
          Coming in V2
        </div>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem" }}>
          League #{id}
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
          Public league pages are coming in Attax V2. Each league will have its own shareable page with participants, live scores, and a countdown.
        </p>
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", padding: "12px 28px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", borderRadius: "999px", textDecoration: "none" }}>
          Download Attax
        </a>
      </div>
    </section>
  );
}
