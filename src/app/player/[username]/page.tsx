import type { Metadata } from "next";

type Props = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username} — Attax Athlete Profile`,
    description: `View ${username}'s public Attax profile: ranking, stats, and sports activity.`,
  };
}

export default async function PlayerProfilePage({ params }: Props) {
  const { username } = await params;
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem", fontSize: "2rem" }}>
          {username.charAt(0).toUpperCase()}
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Coming in V2
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.25rem" }}>
          @{username}
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
          Public athlete profiles are coming in Attax V2. Rankings, stats, badges, and full activity history for every athlete.
        </p>
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", padding: "12px 28px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", borderRadius: "999px", textDecoration: "none" }}>
          Download Attax
        </a>
      </div>
    </section>
  );
}
