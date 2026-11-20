"use client";

import Image from "next/image";
import { useLang, useT } from "@/lib/i18n";
import { useInView, scaleIn } from "@/hooks/useInView";

// Section « Les cartes » : la mise en page de la version en ligne (fond noir, texte à gauche, éventail de
// 3 cartes inclinées qui se redressent au survol), avec les cartes au format PORTRAIT de l'app
// (budyfit app/(tabs)/match.tsx → CardPortraitV3, gabarit 270 × 378) : « Attax » + n°, famille, nom,
// scène de la planche, effet sur bandeau noir, accroche, grand numéro.
const SHOWN = ["ghost", "spike", "freeze"] as const;   // ordre voulu par gui : Ghost, Quitte ou double (au centre), Freeze
const ACC: Record<string, string> = { spike: "#1D4ED8", freeze: "#0891B2", ghost: "#7C3AED" };
// Accroches de la planche (v3Tagline de l'app)
const TAGLINE: Record<"en" | "fr", Record<string, string>> = {
  en: { spike: "All or nothing, tonight.", freeze: "Freeze their best day.", ghost: "Vanish until 9:30 PM." },
  fr: { spike: "Tout ou rien, ce soir.", freeze: "Gèle son meilleur jour.", ghost: "Disparais jusqu'à 21h30." },
};

type Card = { id: string; n: string; fam: string; name: string; punchy: string; sub: string };

const INK = "#0E141A";

/** Carte portrait, en unités du gabarit de l'app (k = largeur / 270) via container queries. */
function PortraitCard({ card, family, tagline }: { card: Card; family: string; tagline: string }) {
  const u = (v: number) => `${(v / 270) * 100}cqw`;
  return (
    <div style={{ containerType: "inline-size", width: "100%" }}>
    <div style={{ position: "relative", width: "100%", aspectRatio: "270 / 378", borderRadius: u(14), overflow: "hidden", backgroundColor: "#EEF1F6" }}>
      {/* scanlines de la carte (34 lignes très légères) */}
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent calc(100% / 34 - 1.2px), rgba(15,23,42,0.035) calc(100% / 34 - 1.2px), rgba(15,23,42,0.035) calc(100% / 34))" }} />
      <div style={{ position: "absolute", top: u(12), left: u(14), right: u(14), display: "flex", alignItems: "center", gap: u(7) }}>
        <span style={{ fontSize: u(12), fontWeight: 800, fontStyle: "italic", color: INK, letterSpacing: "-0.02em", lineHeight: 1 }}>Attax</span>
        <span style={{ flex: 1, height: 1, backgroundColor: "rgba(14,20,26,0.25)" }} />
        <span style={{ fontSize: u(9), fontWeight: 800, color: INK }}>n°{card.n}</span>
      </div>
      <div style={{ position: "absolute", top: u(33), left: u(14), fontSize: u(7), fontWeight: 800, letterSpacing: u(1.4), color: ACC[card.id], textTransform: "uppercase" }}>{family}</div>
      <div style={{ position: "absolute", top: u(41), left: u(13), right: u(40), fontSize: u(Math.min(30, 360 / card.name.length)), lineHeight: u(34), fontWeight: 900, fontStyle: "italic", letterSpacing: u(-1.4), color: INK, whiteSpace: "nowrap", textTransform: "uppercase" }}>{card.name}</div>
      <Image src="/images/flag.svg" alt="" width={15} height={15} style={{ position: "absolute", top: u(48), right: u(14), width: u(15), height: u(15), filter: "brightness(0)" }} />
      <div style={{ position: "absolute", top: u(81), left: u(14), right: u(14), height: u(172), borderRadius: u(9), overflow: "hidden" }}>
        <Image src={`/cards/v3/${card.id}.webp`} alt="" fill sizes="(max-width: 860px) 60vw, 300px" style={{ objectFit: "cover", objectPosition: "right" }} />
      </div>
      <div style={{ position: "absolute", top: u(262), left: u(14), right: u(14), height: u(72), borderRadius: u(8), backgroundColor: INK, padding: `0 ${u(12)}`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: u(17), fontWeight: 800, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{card.punchy}</div>
        <div style={{ marginTop: u(4), fontSize: u(10), lineHeight: u(13), fontWeight: 700, color: "rgba(255,255,255,0.78)" }}>{card.sub}</div>
      </div>
      <div style={{ position: "absolute", left: u(14), right: u(70), bottom: u(17), fontSize: u(9.5), fontWeight: 500, color: INK, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{tagline}</div>
      <div style={{ position: "absolute", right: u(13), bottom: u(8), fontSize: u(34), lineHeight: u(38), fontWeight: 900, fontStyle: "italic", letterSpacing: u(-1.6), color: INK }}>{card.n}</div>
    </div>
    </div>
  );
}

export default function CardsShowcase() {
  const t = useT();
  const { lang } = useLang();
  const cs = t.cardsShowcase;
  const fam = cs.families as Record<string, string>;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: cardsRef, visible: cardsVisible } = useInView<HTMLDivElement>(0.1, { oneShot: true });
  const cards = SHOWN.map((id) => (cs.cards as readonly Card[]).find((c) => c.id === id)!);
  const rotations = [-6, 0, 6];
  const lifts = [18, 0, 18];
  const delays = [180, 60, 300];

  return (
    <section id="cards" className="cards-section p5-sec p5-dark" style={{ position: "relative", overflow: "hidden" }}>
      <div className="p5-wrap" style={{ position: "relative" }}>
        <div className="cards-showcase-inner" style={{ display: "flex", alignItems: "center", gap: "4rem", justifyContent: "space-between" }}>
          <div ref={headerRef} className={`cards-showcase-text p5-head-stack${headerVisible ? " is-in" : ""}`}>
            <p className="p5-label">{cs.label}</p>
            <h2 className="p5-h2"><span>{cs.h2[0]}</span> <span>{cs.h2[1]}</span></h2>
            <p className="p5-lead">{cs.sub}</p>
            <p className="cards-cta"><b>{cs.cta}</b> {cs.cta_sub}</p>
          </div>

          <div ref={cardsRef} className="cards-fan" style={{ flex: "0 1 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {cards.map((c, i) => {
              const base = `rotate(${rotations[i]}deg) translateY(${lifts[i]}px)`;
              const appear = scaleIn(cardsVisible, delays[i], 0.88);
              return (
                <div key={c.id} className="cards-fan-item"
                  style={{
                    ...appear,
                    transform: `${appear.transform} ${base}`,
                    width: 230, flexShrink: 0, margin: "0 -6px", zIndex: i === 1 ? 2 : 1, position: "relative",
                    borderRadius: 16, boxShadow: "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)",
                    transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1), opacity 1s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = "rotate(0deg) translateY(-16px) scale(1.05)"; el.style.zIndex = "10"; el.style.boxShadow = "0 50px 90px rgba(0,0,0,0.6), 0 0 60px rgba(10,61,255,0.35), 0 0 0 1px rgba(255,255,255,0.14)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = base; el.style.zIndex = i === 1 ? "2" : "1"; el.style.boxShadow = "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)"; }}
                >
                  {/* Passe 5 : les cartes arrivent face cachée et se retournent l'une après l'autre (le tirage du matin) */}
                  <div className="card-flip" style={{ transform: cardsVisible ? "rotateY(0deg)" : "rotateY(180deg)", transitionDelay: `${400 + delays[i] * 2}ms` }}>
                    <div className="card-face"><PortraitCard card={c} family={fam[c.fam]} tagline={TAGLINE[lang][c.id]} /></div>
                    <div className="card-back" aria-hidden="true"><Image src="/images/flag.svg" alt="" width={44} height={44} /><span>Attax</span></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
