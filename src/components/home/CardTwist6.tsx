"use client";

import { useLang, useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { useScrollProgress, seg, easeOut } from "@/hooks/useScrollProgress";
import { useRef } from "react";
import type React from "react";
import AppPhone from "./AppPhone";
import LoopVideo from "./LoopVideo";
import { PortraitCard, TAGLINE, type Card } from "./CardsShowcase";

// Chapitre 04 « Une carte peut tout renverser. » (21/11, refait à la demande de gui) : 3 étapes claires, VRAIES captures.
// 1. Le matin : les 3 cartes du jour en éventail (cartes portrait de l'app : Ghost, Overdrive, Freeze), Overdrive choisie.
// 2. 21h30 : la révélation de la carte dans la page Match (Overdrive ×1,5) : store-assets/shots-2026-11-17 fn-18 (FR),
//    en/fn-13 (EN) → story/<langue>/card-reveal.webp.
// 3. Le round final après les cartes : fn-30 (FR, « 82 pts de retard ») / en/fn-29 (EN, « 121 pts ahead », le round bascule)
//    → story/<langue>/card-final.webp. Il n'existe pas encore de capture FR où le score passe devant.
// Plus d'écran bleu du vainqueur ici, plus d'épinglage au défilement ; rien derrière les téléphones.
const SHOWN = ["ghost", "overdrive", "freeze"] as const;
const COPY = {
  en: {
    kick: "04 · 9:30 PM", title: ["One card can", "turn it all around."],
    steps: [["Morning", "In the morning, 3 cards. Pick one before 1 PM."], ["9:30 PM", "Your cards are revealed and play out before the final round."], ["The final round", "One card can turn it all around."]],
    alt: ["Your card revealed at 9:30 PM: Overdrive, today's workout pts ×1.5", "The final round after the cards: Johnny 121 pts ahead"],
  },
  fr: {
    kick: "04 · 21h30", title: ["Une carte peut", "tout renverser."],
    steps: [["Le matin", "Le matin, 3 cartes. Choisis-en une avant 13h."], ["21h30", "Vos cartes se révèlent et entrent en jeu avant le round final."], ["Le round final", "Le round final se joue en direct, cartes comprises."]],
    alt: ["Ta carte dévoilée à 21h30 : Overdrive, les pts de ta séance du jour ×1,5", "Le round final après les cartes : Johnny revient à 82 pts"],
  },
};

export default function CardTwist6() {
  const { lang } = useLang();
  const t = useT();
  const c = COPY[lang];
  const cs = t.cardsShowcase;
  const fams = cs.families as Record<string, string>;
  const cards = SHOWN.map((id) => (cs.cards as readonly Card[]).find((x) => x.id === id)!);
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const { ref: visRef, visible: visIn } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  return (
    <section id="cards" className="st6 cw7">
      <div className="p5-wrap st6-grid">
        <div ref={ref} className={`st6-txt${visible ? " is-in" : ""}`}>
          <p className="st6-kick">{c.kick}</p>
          <h2 className="st6-h2"><span>{c.title[0]}</span> <span>{c.title[1]}</span></h2>
          <ol className="cw7-steps">
            {c.steps.map(([k, l], i) => (
              <li key={k}>
                <span className="cw7-n">{i + 1} · {k}</span>
                <p>{l}</p>
                {i === 0 && (
                  <CardFan>
                    {cards.map((cd) => (
                      <div key={cd.id} className={`cw7-card${cd.id === "overdrive" ? " is-pick" : ""}`}>
                        <PortraitCard card={cd} family={fams[cd.fam]} tagline={TAGLINE[lang][cd.id]} />
                      </div>
                    ))}
                  </CardFan>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div ref={visRef} className={`cw7-phones${visIn ? " is-in" : ""}`}>
          {(["card-reveal", "card-final"] as const).map((src, i) => (
            <figure key={src} className="cw7-ph">
              {src === "card-final" && lang === "en" ? (
                // 22/11 : en anglais, le round final s'anime (motion design de l'app, MotionDesign/04_Site/attax-match-video.mp4,
                // écran recadré) ; textes en anglais dans la vidéo, donc le français garde sa capture fixe.
                <div className="ph6"><div className="ph6-screen" style={{ background: "#EEF1F7" }}>
                  <LoopVideo mp4="/videos/match-final-live-en.mp4" webm="/videos/match-final-live-en.webm" poster="/videos/match-final-live-en-poster.jpg" label="The final round, live: Johnny and Sophie trade blows" ratio="540 / 1120" />
                </div></div>
              ) : src === "card-final" ? (
                // 22/11 : en français aussi, le round final bouge : la capture française garde ses textes et seule la zone
                // des boxeurs joue l'échange du moteur de combat (MotionDesign/05_MotionPack_Remotion/FighterScene.mp4,
                // sans texte, fond de l'app, boucle fondue de 3,7 s, 540 × 460, 330 ko).
                <AppPhone src={`/screens/story/${lang}/${src}.webp`} alt={c.alt[i]} overlay={
                  <div className="ph6-fight"><LoopVideo mp4="/videos/fighters-loop.mp4" poster="/videos/fighters-loop-poster.jpg" label="Les deux boxeurs échangent des coups pendant le round final" ratio="540 / 460" /></div>
                } />
              ) : (
                <AppPhone src={`/screens/story/${lang}/${src}.webp`} alt={c.alt[i]} />
              )}
              <figcaption>{i + 2} · {c.steps[i + 1][0]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// 22/11 (accord du propriétaire) : les 3 cartes du matin sont distribuées une à une dans l'éventail au fil du défilement
// (glissent du bas en tournant jusqu'à leur place, comme l'éventail de la page Match de l'app), puis Overdrive se soulève
// et les deux autres s'effacent (l'état final = l'éventail d'avant) ; en remontant, les cartes se rassemblent. Pas de
// retournement. Mouvements réduits : éventail final directement.
const FAN_END = [{ r: -5, y: 6, s: 1, o: 0.45 }, { r: 0, y: -10, s: 1.06, o: 1 }, { r: 5, y: 6, s: 1, o: 0.45 }];
function CardFan({ children }: { children: React.ReactNode }) {
  const box = useRef<HTMLDivElement | null>(null);
  const ref = useScrollProgress<HTMLDivElement>((p) => {
    const els = box.current?.children; if (!els) return;
    const lift = easeOut(seg(p, 0.72, 1));
    for (let i = 0; i < 3; i++) {
      const el = els[i] as HTMLElement | undefined; if (!el) continue;
      const d = easeOut(seg(p, i * 0.2, i * 0.2 + 0.36));
      const f = FAN_END[i];
      const x = (1 - d) * (1 - i) * 112;                       // part du centre de la pile
      const y = (1 - d) * 70 + d * (i === 1 ? f.y * lift : f.y);
      const r = d * f.r;
      const sc = i === 1 ? 1 + (f.s - 1) * lift : 1;
      const o = d * (i === 1 ? 1 : 1 - (1 - f.o) * lift);
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${r.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
      el.style.opacity = o.toFixed(3);
    }
  }, { start: 0.92, end: 0.45 });
  return <div ref={(el) => { (ref as React.MutableRefObject<HTMLDivElement | null>).current = el; box.current = el; }} className="cw7-fan is-scrub" aria-hidden="true">{children}</div>;
}
