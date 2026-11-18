"use client";

import Image from "next/image";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal } from "@/hooks/useInView";

/** Ligue, saison, binôme, palmarès : quatre captures de l'app, montrées EN ENTIER (la coupe du profil était coupée). */
export default function Beyond() {
  const t = useT();
  const { lang } = useLang();
  const b = t.beyond;
  const { ref: headRef, visible: headVisible } = useInView<HTMLDivElement>(0.1);
  const { ref, visible } = useInView<HTMLDivElement>(0.08, { oneShot: true });

  return (
    <section id="season" className="by-section" style={{ backgroundColor: "#ffffff", padding: "9rem 2rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div ref={headRef} style={{ marginBottom: "5rem" }}>
          <span style={{ ...fadeUp(headVisible, 0), marginBottom: "1.5rem" }} className="section-label">{b.label}</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 4.6vw, 4.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.05em", lineHeight: 1, margin: 0 }}>
            <div style={{ overflow: "hidden", paddingBottom: "0.08em" }}><span style={clipReveal(headVisible, 80)}>{b.h2[0]}</span></div>
            <div style={{ overflow: "hidden", paddingBottom: "0.12em" }}><span style={{ ...clipReveal(headVisible, 200), color: "#0443FD" }}>{b.h2[1]}</span></div>
          </h2>
        </div>

        <div ref={ref} className="by-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          {b.items.map((it, i) => (
            <article key={it.k} style={{ ...fadeUp(visible, i * 120) }}>
              <div className="by-shot" style={{ backgroundColor: "#EEF1F7", borderRadius: 24, padding: "2rem 1.5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image src={`/screens/app/${lang}/${it.img}.webp`} alt={`${it.t[0]} ${it.t[1]}`} width={560} height={1107} quality={90} sizes="(max-width: 640px) 70vw, (max-width: 1100px) 40vw, 260px"
                  style={{ width: "min(240px, 100%)", height: "auto", filter: "drop-shadow(0 20px 36px rgba(11,17,22,0.16))" }} />
              </div>
              <span className="pin-mono" style={{ display: "block", fontSize: "0.6875rem", color: "rgba(11,17,22,0.4)", margin: "1.75rem 0 0.75rem" }}>{it.k}</span>
              <h3 style={{ fontSize: "1.375rem", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1, color: "#0d0d0d", margin: "0 0 0.75rem" }}>
                {it.t[0]} <span style={{ color: "#0443FD" }}>{it.t[1]}</span>
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "#777", lineHeight: 1.7, margin: 0, maxWidth: 360 }}>{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
