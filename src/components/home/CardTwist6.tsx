"use client";

import { useLang, useT } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { useScrollProgress, seg, easeInOut } from "@/hooks/useScrollProgress";
import { useEffect, useRef } from "react";
import type React from "react";
import AppPhone from "./AppPhone";
import LoopVideo from "./LoopVideo";
import { PortraitCard, TAGLINE, type Card } from "./CardsShowcase";
import { RevealLive, StealLive } from "./ParasiteLive";

// Chapitre 04 « Une carte peut tout renverser. » (22/11, refait avec la carte PARASITE à la demande du coordinateur) :
// 1. Le matin : les 3 cartes du jour en éventail (cartes portrait de l'app : Ghost, Parasite, Freeze), Parasite choisie.
// 2. 21h30 : la carte de Johnny se révèle dans la page Match (4 PV contre 4 PV), comme dans l'app (ParasiteLive).
// 3. Le round final : Parasite se joue en plein combat, 120 pts passent de Sophie à Johnny, l'écart bascule ; les PV ne
//    bougent pas pendant le round. Les boxeurs (FighterScene du pack de motion) continuent d'échanger.
// Bases : les vraies captures (store-assets/shots-2026-11-17 fn-18 / fn-30, en/fn-13 / en/fn-29), zones qui changent
// effacées au fond de l'app (story/<langue>/parasite-reveal.webp, parasite-final.webp) et redessinées en HTML.
// Le bloc s'épingle pendant ~1 700 px (ordinateur) / 1 300 px (téléphone) : les deux téléphones restent entiers à
// l'écran pendant leur animation ; sur ordinateur, l'éventail se termine au début de la course.
const SHOWN = ["ghost", "parasite", "freeze"] as const;
const COPY = {
  en: {
    kick: "04 · 9:30 PM", title: ["One card can", "turn it all around."],
    steps: [["Morning", "In the morning, 3 cards. Pick one before 1 PM."], ["9:30 PM", "Your cards are revealed. Parasite steals 20% of your opponent's points today."], ["The final round", "Mid fight, those points switch sides. You take the lead."]],
    alt: ["Your card revealed at 9:30 PM: Parasite, 20% of Sophie's points today", "The final round: Parasite takes 120 pts from Sophie, Johnny goes from 140 pts behind to 100 pts ahead, still 4 HP each"],
  },
  fr: {
    kick: "04 · 21h30", title: ["Une carte peut", "tout renverser."],
    steps: [["Le matin", "Le matin, 3 cartes. Choisis-en une avant 13h."], ["21h30", "Vos cartes se révèlent. Parasite vole 20 % des points du jour de l'adversaire."], ["Le round final", "En plein combat, ces points changent de camp. Tu passes devant."]],
    alt: ["Ta carte dévoilée à 21h30 : Parasite, 20 % des points du jour de Sophie", "Le round final : Parasite prend 120 pts à Sophie, Johnny passe de 140 pts de retard à 100 pts d'avance, toujours 4 PV partout"],
  },
};
const NAV = 68;

export default function CardTwist6() {
  const { lang } = useLang();
  const t = useT();
  const c = COPY[lang];
  const cs = t.cardsShowcase;
  const fams = cs.families as Record<string, string>;
  const cards = SHOWN.map((id) => (cs.cards as readonly Card[]).find((x) => x.id === id)!);
  const par = cards[1];
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const { ref: visRef, visible: visIn } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const sec = useRef<HTMLElement>(null);
  const fan = useRef<((p: number) => void) | null>(null);
  const rev = useRef<((q: number) => void) | null>(null);
  const fin = useRef<((q: number) => void) | null>(null);
  // Une seule course : l'éventail finit (ordinateur), puis la révélation, puis le round final.
  const runRef = useScrollProgress<HTMLDivElement>((p) => {
    fan.current?.(seg(p, 0, 0.1));
    rev.current?.(seg(p, 0.08, 0.5));
    fin.current?.(seg(p, 0.56, 0.98));
  }, { mode: "stick" });
  // Les blocs collés : centrés dans la hauteur sous la barre de navigation.
  useEffect(() => {
    const s = sec.current; if (!s) return;
    const txt = s.querySelector<HTMLElement>(".st6-txt"), ph = s.querySelector<HTMLElement>(".cw7-phones");
    const set = () => {
      // Plus haut que la place (texte à 1366 × 768) : collé par le BAS (le titre sort, les étapes restent lisibles).
      const vh = window.innerHeight, top = (h: number) => Math.round(h <= vh - NAV - 16 ? NAV + Math.max(8, (vh - NAV - h) / 2) : vh - h - 8);
      if (ph) s.style.setProperty("--cw7-top-ph", `${top(ph.offsetHeight)}px`);
      if (txt) s.style.setProperty("--cw7-top-tx", `${top(txt.offsetHeight)}px`);
    };
    set();
    const ro = new ResizeObserver(set);
    if (txt) ro.observe(txt); if (ph) ro.observe(ph);
    window.addEventListener("resize", set);
    return () => { ro.disconnect(); window.removeEventListener("resize", set); };
  }, []);
  return (
    <section ref={sec} id="cards" className="st6 cw7">
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
                  <CardFan push={fan}>
                    {cards.map((cd) => (
                      <div key={cd.id} className={`cw7-card${cd.id === "parasite" ? " is-pick" : ""}`}>
                        <PortraitCard card={cd} family={fams[cd.fam]} tagline={TAGLINE[lang][cd.id]} />
                      </div>
                    ))}
                  </CardFan>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div ref={runRef} className="cw7-run">
          <div ref={visRef} className={`cw7-phones${visIn ? " is-in" : ""}`}>
            <figure className="cw7-ph">
              <AppPhone src={`/screens/story/${lang}/parasite-reveal.webp`} alt={c.alt[0]}
                overlay={<RevealLive lang={lang} card={par} family={fams[par.fam]} tagline={TAGLINE[lang].parasite} drive={rev} />} />
              <figcaption>2 · {c.steps[1][0]}</figcaption>
            </figure>
            <figure className="cw7-ph">
              {/* Le round final : 4 PV contre 4 PV pendant tout le round (les PV ne bougent qu'à la fin) ; la zone des boxeurs
                  joue l'échange du moteur de combat (MotionDesign/05_MotionPack_Remotion/FighterScene.mp4). */}
              <AppPhone src={`/screens/story/${lang}/parasite-final.webp`} alt={c.alt[1]} overlay={<>
                <div className="ph6-fight"><LoopVideo mp4="/videos/fighters-loop.mp4" poster="/videos/fighters-loop-poster.jpg" label={lang === "fr" ? "Les deux boxeurs échangent des coups pendant le round final" : "Both fighters trade blows during the final round"} ratio="540 / 460" /></div>
                <StealLive lang={lang} card={par} family={fams[par.fam]} tagline={TAGLINE[lang].parasite} drive={fin} />
              </>} />
              <figcaption>3 · {c.steps[2][0]}</figcaption>
            </figure>
          </div>
          <div className="cw7-runway" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

// 22/11 (accord du propriétaire, revu le même jour : plus fluide) : les 3 cartes du matin sont distribuées une à une
// dans l'éventail au fil du défilement. Chaque carte part de la pioche (sous le milieu de l'éventail, inclinée), suit un ARC
// (courbe de Bézier quadratique qui passe au-dessus de sa place) en tournant jusqu'à son angle dans l'éventail ; départs
// décalés qui se chevauchent. Puis Parasite se soulève et les deux autres s'estompent. En remontant, tout repart en
// arrière. Mouvements réduits : éventail final directement. `push` : sur ordinateur, la course épinglée du chapitre
// termine l'éventail (le texte est collé, sa propre progression s'arrêterait sinon à mi-chemin).
const FAN_END = [{ r: -5, y: 6, s: 1, o: 0.45 }, { r: 0, y: -10, s: 1.06, o: 1 }, { r: 5, y: 6, s: 1, o: 0.45 }];
const SLOT_X = [0, 94, 188];                                    // place de chaque carte (104 px − 10 px de recouvrement)
function CardFan({ children, push }: { children: React.ReactNode; push: React.MutableRefObject<((p: number) => void) | null> }) {
  const box = useRef<HTMLDivElement | null>(null);
  const st = useRef({ own: 0, pin: 0 });
  const draw = () => {
    const p = Math.max(st.current.own, st.current.pin);
    const els = box.current?.children; if (!els) return;
    const lift = easeInOut(seg(p, 0.74, 1));
    for (let i = 0; i < 3; i++) {
      const el = els[i] as HTMLElement | undefined; if (!el) continue;
      const d = easeInOut(seg(p, i * 0.17, i * 0.17 + 0.42));
      const f = FAN_END[i];
      // Pioche : sous la carte du milieu, 120 px plus bas ; point de contrôle au-dessus de la place (l'arc). Rien ne
      // sort de la largeur de l'éventail (pas de débordement horizontal sur téléphone).
      const sx = SLOT_X[1] - SLOT_X[i], sy = 120, cx = sx * 0.15, cy = -40;
      const u = 1 - d;
      const x = u * u * sx + 2 * u * d * cx;
      const yArc = u * u * sy + 2 * u * d * cy;
      const yEnd = i === 1 ? f.y * lift : f.y;
      const y = yArc + d * d * yEnd;
      const r = u * (-20 + 8 * (i - 1)) + d * f.r + Math.sin(Math.PI * d) * (i - 1) * 4;
      const sc = (0.9 + 0.1 * d) * (i === 1 ? 1 + (f.s - 1) * lift : 1);
      const o = Math.min(1, d * 4) * (i === 1 ? 1 : 1 - (1 - f.o) * lift);
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${r.toFixed(2)}deg) scale(${sc.toFixed(4)})`;
      el.style.opacity = o.toFixed(3);
    }
  };
  const ref = useScrollProgress<HTMLDivElement>((p) => { st.current.own = p; draw(); }, { start: 0.95, end: 0.35 });
  useEffect(() => {
    // Sur téléphone (texte non collé), la course épinglée ne pousse pas l'éventail : il a fini bien avant.
    push.current = (p) => { st.current.pin = window.matchMedia("(min-width: 901px)").matches ? p : 0; draw(); };
    return () => { push.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div ref={(el) => { (ref as React.MutableRefObject<HTMLDivElement | null>).current = el; box.current = el; }} className="cw7-fan is-scrub" aria-hidden="true">{children}</div>;
}
