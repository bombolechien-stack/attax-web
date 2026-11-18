"use client";

import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, scaleIn } from "@/hooks/useInView";
import HeroBackdrop from "@/components/scan/HeroBackdrop";

/** Soir de combat (révélation de 21h30) : la VRAIE révélation de l'app, filmée image par image sur un téléphone
 *  le 17/11/2026 (scripts/fight-night-video/build.py → public/videos/fight-night-{en,fr}.mp4), dans un cadre de téléphone. */
export default function FightNight() {
  const t = useT();
  const { lang } = useLang();
  const f = t.fightNight;
  const { ref, visible } = useInView<HTMLDivElement>(0.12, { oneShot: true });

  return (
    <section id="fight-night" className="fn-section" style={{ position: "relative", backgroundColor: "#EBEFF3", padding: "9rem 2rem", overflow: "hidden" }}>
      {/* Fond du hero de l'app (HeroBackdrop porté tel quel) */}
      <HeroBackdrop />

      <div ref={ref} className="fn-inner" style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", display: "flex", alignItems: "center", gap: "6rem" }}>
        <div className="fn-phone" style={{ ...scaleIn(visible, 100, 0.94), flex: "0 0 auto", width: "min(340px, 74vw)", filter: "drop-shadow(0 40px 60px rgba(11,17,22,0.20))" }}>
          <div style={{ position: "relative", borderRadius: 46, padding: 10, backgroundColor: "#0B1116" }}>
            <video
              key={lang}
              autoPlay muted loop playsInline preload="metadata"
              poster={`/videos/fight-night-${lang}-poster.jpg`}
              aria-label={f.alt}
              style={{ display: "block", width: "100%", height: "auto", aspectRatio: "540 / 1064", borderRadius: 36, backgroundColor: "#EEF1F7", objectFit: "cover" }}
            >
              <source src={`/videos/fight-night-${lang}.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ ...fadeUp(visible, 0), marginBottom: "1.5rem" }} className="section-label">{f.label}</span>
          <h2 style={{ fontSize: "clamp(2.75rem, 5vw, 5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.05em", lineHeight: 0.98, margin: "0 0 2rem" }}>
            <div style={{ overflow: "hidden", paddingBottom: "0.08em" }}><span style={clipReveal(visible, 80)}>{f.h2[0]}</span></div>
            <div style={{ overflow: "hidden", paddingBottom: "0.12em" }}><span style={{ ...clipReveal(visible, 200), color: "#0443FD" }}>{f.h2[1]}</span></div>
          </h2>
          <p style={{ ...fadeUp(visible, 280), fontSize: "1.125rem", color: "#4a5560", lineHeight: 1.75, margin: "0 0 2.5rem", maxWidth: 480 }}>{f.body}</p>
          <ol style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", borderTop: "1px solid rgba(11,17,22,0.1)" }}>
            {f.steps.map((s, i) => (
              <li key={s.n} style={{ ...fadeUp(visible, 340 + i * 80), display: "flex", alignItems: "baseline", gap: "1.5rem", padding: "1.05rem 0", borderBottom: "1px solid rgba(11,17,22,0.1)" }}>
                <span className="pin-mono" style={{ fontSize: "0.6875rem", color: i === 3 ? "#0443FD" : "rgba(11,17,22,0.35)" }}>{s.n}</span>
                <span style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0B1116", letterSpacing: "-0.02em" }}>{s.t}</span>
              </li>
            ))}
          </ol>
          <p style={{ ...fadeUp(visible, 700), fontSize: "0.9375rem", color: "#6b7680", lineHeight: 1.7, margin: 0, maxWidth: 460 }}>{f.note}</p>
        </div>
      </div>
    </section>
  );
}
