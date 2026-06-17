"use client";

import { useEffect, useState, useRef } from "react";

const SECRET_KEY = "attax_preview_unlocked";
const CLICKS_NEEDED = 5;

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch { /* fail silently */ }
    setSent(true);
    setLoading(false);
  }

  if (sent) return (
    <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: 0, fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}>
      You're on the list. We'll be in touch.
    </p>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{
          flex: 1,
          minWidth: "180px",
          maxWidth: "260px",
          padding: "13px 20px",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.15)",
          backgroundColor: "rgba(255,255,255,0.07)",
          color: "#ffffff",
          fontSize: "0.9375rem",
          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
          outline: "none",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "13px 26px",
          borderRadius: "999px",
          border: "none",
          backgroundColor: "#ffffff",
          color: "#0d0d0d",
          fontWeight: 700,
          fontSize: "0.9375rem",
          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
          whiteSpace: "nowrap",
        }}
      >
        {loading ? "…" : "Get Early Access"}
      </button>
    </form>
  );
}

export default function ComingSoonGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const isUnlocked = localStorage.getItem(SECRET_KEY) === "1";
    setUnlocked(isUnlocked);
    if (!isUnlocked) document.body.classList.add("is-coming-soon");
    return () => document.body.classList.remove("is-coming-soon");
  }, []);

  function handleLogoClick() {
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => { clickCount.current = 0; }, 2000);

    if (clickCount.current >= CLICKS_NEEDED) {
      localStorage.setItem(SECRET_KEY, "1");
      setUnlocked(true);
    }
  }

  /* Waiting for hydration */
  if (unlocked === null) return null;

  /* Full site */
  if (unlocked) return <>{children}</>;

  /* Coming soon */
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden", backgroundColor: "#070707", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

      {/* Boxing video */}
      <video autoPlay muted loop playsInline preload="auto" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center 30%", zIndex: 0,
      }}>
        <source src="/videos/boxingonring.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(7,7,7,0.5) 0%, rgba(7,7,7,0.15) 30%, rgba(7,7,7,0.75) 75%, rgba(7,7,7,1) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 60%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", textAlign: "center", padding: "0 1.5rem" }}>

        {/* Logo — click 5× to unlock */}
        <button
          onClick={handleLogoClick}
          aria-label="Attax"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <svg width="32" height="32" viewBox="0 0 958.37 914.93" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.9 }}>
            <path d="M449.69,663.33H179.88q-16.87-45-33.73-89.93h.39Q82.21,400.65,17.88,227.88l.09,0L0,179.92H269.81l33.73,89.94H154.94L267.42,573.4H416Q432.82,618.37,449.69,663.33Z"/>
            <path d="M539.63,179.92H269.81Q253,135,236.08,90H505.9Q522.76,135,539.63,179.92Z"/>
            <path d="M685.77,573.4H416q-16.86-45-33.73-89.94H652.05Z"/>
            <path d="M921.67,483.42a.08.08,0,0,0,0,0H651.87q-16.86-45-33.73-89.93H774.39l0,0q-34.77-44.5-69.55-89l-.56-.27-57-73q18-70.6,36-141.22H505.76Q488.9,45.08,472,0H799L776.14,89.94l-30.6,120.78-.07.27,0,.12.18-.29q71.24,91.33,142.49,182.66h-.82l.1,0,.7.34.53.26-.51-.65h.34l17.2,22c2.05,2.62,4.11,5.25,6.15,7.88Q935,452.92,958,482.52a.9.9,0,0,0,.22.45.69.69,0,0,0,.11.45Z"/>
            <path d="M272.93,914.93Q232.49,806.45,192,698l96.33,49.68,60.15,163Z"/>
          </svg>
          <svg width="80" height="24" viewBox="0 0 1095.26 330.11" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.9 }}>
            <path d="M229.5,242.84H108.76L62.63,326.27H0L185.86,0h66.25l45.22,326.27H239.67Zm-97-46.13h92.7l-17-136.57h-1.13Z"/>
            <path d="M331.3,277.88a129.44,129.44,0,0,1,2.26-22.83L360,132.72H324.29l9.27-44.09h35.73L381.5,29.85h55.39L424.46,88.63h50l-9.27,44.09H415.41l-24,111.7a72.93,72.93,0,0,0-2.27,17.18c0,16.28,10.86,22.84,30.08,22.84a97.19,97.19,0,0,0,16.28-1.13L426.27,326a142.6,142.6,0,0,1-27.82,2.72C358.43,328.76,331.3,311.8,331.3,277.88Z"/>
            <path d="M482.17,277.88a128.6,128.6,0,0,1,2.27-22.83l26.45-122.33H475.16l9.28-44.09h35.72l12.21-58.78h55.39L575.33,88.63h50L616,132.72H566.28l-24,111.7a72.87,72.87,0,0,0-2.26,17.18c0,16.28,10.85,22.84,30.07,22.84a97,97,0,0,0,16.28-1.13L577.14,326a142.41,142.41,0,0,1-27.81,2.72C509.31,328.76,482.17,311.8,482.17,277.88Z"/>
            <path d="M609.08,264.09c0-48.16,38.21-76.42,101.75-79.14l65.34-2.71,3.17-14.47a39.83,39.83,0,0,0,.9-10c0-19.44-15.15-31.65-41.6-31.65-27.14,0-43.87,12.43-48.39,31.65H636.44c7.91-45.67,48.84-76.65,106.49-76.65,55.17,0,92,28.72,92,70.32a103.05,103.05,0,0,1-1.81,19.9L800.36,326.27H747l6.11-28.94h-.91c-14.92,19.89-40,32.78-69.64,32.78C641.64,330.11,609.08,302.53,609.08,264.09Zm154.2-21.71,5.2-22.83-56.07,2.71c-30.52,1.13-48.84,14-48.84,34.37,0,18.54,16,30.52,39.34,30.52C732.08,287.15,757.4,268.61,763.28,242.38Z"/>
            <path d="M950.33,243.29l-65.57,83H822.13L925,204,873,86.15h58.79l33.92,82.75h1.13l65.57-82.75h62.85L992.39,208.47l51.77,117.8H985.6l-33.91-83Z"/>
          </svg>
        </button>

        {/* Tagline small */}
        <p style={{
          fontSize: "clamp(0.6875rem, 1.5vw, 0.8125rem)",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.28)",
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
        }}>
          Sport is now a game
        </p>

        {/* Main big */}
        <h1 style={{
          fontSize: "clamp(3rem, 7vw, 6rem)",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.05em",
          lineHeight: 0.95,
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
        }}>
          Coming<br />Soon
        </h1>

        {/* Waitlist form */}
        <WaitlistForm />
      </div>
    </div>
  );
}
