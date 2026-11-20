"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, slideRight } from "@/hooks/useInView";

// « 7 jours. 7 rounds. » = l'écran Match de l'app pendant les rounds, agrandi à la largeur du bloc (pas de téléphone) :
// 1. en haut, les deux barres de vie de l'app (components/match/HealthBars.tsx : capsule chromée, dégradé du bord vers le
//    centre, barre noire, 7 tirets ; la mienne en bleu à gauche, la sienne en rouge à droite) ;
// 2. la frise des 7 rounds (les tirets de l'app) ;
// 3. chaque round, l'un après l'autre, comme la carte de round de l'app (ScoreCard, components/reveal/FightNight.tsx) :
//    « ROUND n / 7 », le jour, puis pour chacun « WINS THE ROUND » (au-dessus du gagnant), le score qui compte + « pts »,
//    et dessous son activité du jour sur une ligne grise ; « VS » entre les deux ; la barre bleu / rouge dessous ;
// 4. quand les scores s'arrêtent : les deux boxeurs de l'app apparaissent EN FOND, en très gros plan, figés à l'instant où
//    le gagnant touche (images fixes rendues avec le moteur de l'app : scripts/fight-night-video/punch-stills.mjs), et au
//    même instant la barre du perdant perd son PV : le morceau jaune tombe (le « Frag » de la révélation, fast), et le
//    score du perdant passe en gris (opacité 0,26, comme ScoreCard de components/reveal/FightNight.tsx).
// 5. Les boxeurs s'effacent, round suivant ; 6 rounds, puis le round final (2 PV en jeu), le verdict, et on recommence.
// Règles : 7 PV chacun, round perdu −1 PV, round final −2 PV, K.O. seulement à 0 PV, jamais de nul (ici 4 PV à 2).

const BLUE = "#0443FD", RED = "#EC0420", INK = "#09090B", HP0 = 7;
const FONT = "var(--font-manrope), var(--font-jakarta), sans-serif";
const G_ME = "linear-gradient(90deg, #0024c8 0%, #0443FD 45%, #4b78ff 82%, #9bb1ff 100%)";
const G_OPP = "linear-gradient(270deg, #a8001a 0%, #EC0420 45%, #ff3a55 82%, #ffa1a9 100%)";

// Chaque round : le gagnant, les pts du jour de chacun, et l'activité du jour de chacun sur UNE ligne, comme la carte de
// round de l'app (ScoreCard de components/reveal/FightNight.tsx, libellés sur le modèle de R6 / R6_EN : « Course · 48 min »).
type Act = { en: [string, string]; fr: [string, string] };
type Round = { w: "Y" | "O"; y: number; o: number; a: Act; final?: boolean };
const ROUNDS: Round[] = [
  { w: "Y", y: 486, o: 312, a: { en: ["Run · 38 min", "Yoga · 55 min"], fr: ["Course · 38 min", "Yoga · 55 min"] } },
  { w: "O", y: 210, o: 455, a: { en: ["Weights · 40 min", "Swim · 53 min"], fr: ["Muscu · 40 min", "Natation · 53 min"] } },
  { w: "Y", y: 530, o: 380, a: { en: ["Cycling · 1 h 00", "Tennis · 1 h 10"], fr: ["Vélo · 1 h 00", "Tennis · 1 h 10"] } },
  { w: "O", y: 95, o: 268, a: { en: ["Walk · 5,000 steps", "Climbing · 45 min"], fr: ["Marche · 5 000 pas", "Escalade · 45 min"] } },
  { w: "Y", y: 620, o: 540, a: { en: ["Football · 1 h 15", "Run · 50 min"], fr: ["Foot · 1 h 15", "Course · 50 min"] } },
  { w: "O", y: 140, o: 395, a: { en: ["Yoga · 30 min", "HIIT · 35 min"], fr: ["Yoga · 30 min", "HIIT · 35 min"] } },
  { w: "Y", y: 512, o: 388, final: true, a: { en: ["Weights · 55 min", "Swim · 53 min"], fr: ["Muscu · 55 min", "Natation · 53 min"] } },
];
// Le déroulé d'un round (secondes depuis son début).
// Les deux scores comptent ensemble (comme l'app), s'arrêtent ensemble, puis le coup.
const T_ME0 = 0.5, T_ME1 = 2.1, T_VS = 0.5, T_OPP0 = 0.5, T_OPP1 = 2.1, T_HIT = 2.3, T_FADE = 3.6, ROUND_LEN = 4.3;
const VERDICT_LEN = 3.6, CYCLE = ROUNDS.length * ROUND_LEN + VERDICT_LEN;

const COPY = {
  en: {
    me: "JOHNNY", opp: "SOPHIE", hp: "HP", round: (n: number) => `ROUND ${n} / 7`, finalRound: "FINAL ROUND", stake: "2 HP AT STAKE",
    days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"], wins: "WINS THE ROUND", vs: "vs",
    winner: "WINNER", verdict: "Wins the match, 4 HP to 2.",
  },
  fr: {
    me: "JOHNNY", opp: "SOPHIE", hp: "PV", round: (n: number) => `ROUND ${n} / 7`, finalRound: "ROUND FINAL", stake: "2 PV EN JEU",
    days: ["Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi", "Mardi"], wins: "REMPORTE LE ROUND", vs: "vs",
    winner: "VAINQUEUR", verdict: "Remporte le match, 4 PV à 2.",
  },
};

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const eo = (u: number) => 1 - Math.pow(1 - u, 3);

function useMedia(q: string) {
  return useSyncExternalStore(
    (cb) => { const m = window.matchMedia(q); m.addEventListener("change", cb); return () => m.removeEventListener("change", cb); },
    () => window.matchMedia(q).matches,
    () => false,
  );
}

/** Vie d'un joueur après les rounds dont le coup est déjà tombé (à l'instant t du cycle). */
function lifeAt(side: "Y" | "O", t: number) {
  let life = HP0;
  ROUNDS.forEach((r, i) => { if (r.w !== side && t >= i * ROUND_LEN + T_HIT) life -= r.final ? 2 : 1; });
  return life;
}

/** La barre de vie de l'app ; « drop » = le morceau jaune qui vient de se détacher (il tombe, en CSS). */
function HpBar({ side, life, drop }: { side: "me" | "opp"; life: number; drop: { key: string; from: number } | null }) {
  const me = side === "me", f = life / HP0;
  const pos = me ? "left" : "right";
  return (
    <div className="mr-bar-wrap">
      <div className="mr-bar">
        <span className="mr-bar-fill" style={{ background: me ? G_ME : G_OPP, [pos]: 0, width: `${f * 100}%` }} />
        <span className="mr-bar-sheen" />
      </div>
      {drop && <span key={drop.key} className="mr-frag" style={{ [pos]: `${f * 100}%`, width: `${((drop.from - life) / HP0) * 100}%` }} />}
      {f < 0.999 && <span className="mr-notch" style={{ [pos]: `${f * 100}%` }} />}
      <div className="mr-ticks">{Array.from({ length: HP0 - 1 }, (_, k) => <i key={k} style={{ left: `${((k + 1) / HP0) * 100}%` }} />)}</div>
    </div>
  );
}

export default function DailyMatch() {
  const t = useT();
  const { lang } = useLang();
  const m = t.dailyMatch;
  const c = COPY[lang];
  const reduce = useMedia("(prefers-reduced-motion: reduce)");
  const tall = useMedia("(max-width: 760px)");
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: stageRef, visible: onScreen } = useInView<HTMLDivElement>(0.25);
  const [clock, setClock] = useState(0);

  // L'horloge du match (≈ 30 images/s), seulement quand le bloc est à l'écran. Animations réduites : l'image du coup
  // du round 6, sans mouvement.
  useEffect(() => {
    if (reduce || !onScreen) return;
    let raf = 0, last = 0;
    const t0 = performance.now() - clock * 1000;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return;
      last = now;
      setClock(((now - t0) / 1000) % CYCLE);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, onScreen]);

  const time = reduce ? 5 * ROUND_LEN + T_HIT + 0.6 : clock;
  const ri = Math.min(ROUNDS.length - 1, Math.floor(time / ROUND_LEN));
  const verdict = time >= ROUNDS.length * ROUND_LEN;
  const r = ROUNDS[ri], lt = verdict ? ROUND_LEN : time - ri * ROUND_LEN;
  const yPts = Math.round(r.y * eo(clamp((lt - T_ME0) / (T_ME1 - T_ME0))));
  const oPts = Math.round(r.o * eo(clamp((lt - T_OPP0) / (T_OPP1 - T_OPP0))));
  const hit = lt >= T_HIT;
  const boxers = hit && lt < T_FADE && !verdict;
  const lifeMe = lifeAt("Y", time), lifeOpp = lifeAt("O", time);
  // Le morceau jaune : seulement pendant la seconde qui suit le coup.
  const dropFor = (side: "Y" | "O") => (hit && lt < T_HIT + 1.1 && r.w !== side && !verdict ? { key: `${ri}`, from: (side === "Y" ? lifeMe : lifeOpp) + (r.final ? 2 : 1) } : null);
  const nf = (n: number) => n.toLocaleString(lang === "fr" ? "fr-FR" : "en-US");

  const fmt = tall ? "tall" : "wide";

  return (
    <section id="daily-match" className="mr-section">
      <div style={{ maxWidth: "76rem", margin: "0 auto" }}>
        <div ref={headerRef} style={{ marginBottom: "3.5rem" }}>
          <span style={{ ...fadeUp(headerVisible, 0), display: "block", marginBottom: "1.5rem" }} className="section-label">{m.label}</span>
          <div className="dm-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.055em", lineHeight: 0.95, margin: 0 }}>
              <div><span style={clipReveal(headerVisible, 80)}>{m.h2[0]}</span></div>
              <div><span style={{ ...clipReveal(headerVisible, 220), color: BLUE }}>{m.h2[1]}</span></div>
            </h2>
            <p style={{ ...slideRight(headerVisible, 350), fontSize: "1.0625rem", color: "rgba(11,17,22,0.58)", lineHeight: 1.75, maxWidth: "460px", margin: 0 }}>{m.subtitle}</p>
          </div>
        </div>
      </div>

      {/* L'écran Match de l'app, agrandi */}
      <div ref={stageRef} className="mr-stage" style={{ fontFamily: FONT }}>
        {/* 4. Les boxeurs, en fond, figés sur le coup du gagnant */}
        <div className="mr-boxers" aria-hidden="true">
          {(["blue", "red"] as const).map((w) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={`${w}-${fmt}`} src={`/match/punch-${w}-${fmt}.webp`} alt="" loading="lazy"
              style={{ opacity: boxers && (r.w === "Y") === (w === "blue") ? 0.85 : 0 }} />
          ))}
        </div>

        <div className="mr-inner">
          {/* 1. Les barres de vie */}
          <div className="mr-bars">
            <div>
              <HpBar side="me" life={lifeMe} drop={dropFor("Y")} />
              <div className="mr-hp" style={{ color: BLUE }}><b>{c.me}</b> <span key={lifeMe}>{lifeMe} {c.hp}</span></div>
            </div>
            <div>
              <HpBar side="opp" life={lifeOpp} drop={dropFor("O")} />
              <div className="mr-hp" style={{ color: RED, textAlign: "right" }}><span key={lifeOpp}>{lifeOpp} {c.hp}</span> <b>{c.opp}</b></div>
            </div>
          </div>

          {/* 2. La frise des rounds */}
          <div className="mr-dashes" aria-hidden="true">
            {ROUNDS.map((x, i) => {
              const done = time >= i * ROUND_LEN + T_HIT;
              return <i key={i} className={x.final ? "is-final" : undefined} style={{ background: done ? (x.w === "Y" ? BLUE : RED) : i === ri && !verdict ? INK : "#D5DBE4" }} />;
            })}
          </div>

          {/* 3. Le round : le jour, mon score, vs, son score */}
          {!verdict ? (
            <div className="mr-round" key={`r${ri}`}>
              <span className="mr-kick">{r.final ? c.finalRound : c.round(ri + 1)}</span>
              <span className="mr-day">{c.days[ri]}</span>
              {r.final && <span className="mr-kick" style={{ color: RED, marginTop: 4 }}>{c.stake}</span>}
              {(["Y", "O"] as const).map((side) => {
                const col = side === "Y" ? BLUE : RED, won = side === r.w, v = side === "Y" ? yPts : oPts;
                return (
                  <div key={side} style={{ display: "contents" }}>
                    {side === "O" && <span className="mr-vs" style={{ opacity: lt >= T_VS ? 1 : 0 }}>VS</span>}
                    <div className="mr-line" style={{ opacity: lt < T_ME0 ? 0 : hit && !won ? 0.26 : 1 }}>
                      <span className="mr-won" style={{ color: col, opacity: hit && won ? 1 : 0, transform: hit && won ? "none" : "translateY(4px)" }}>{c.wins}</span>
                      <span className="mr-big" style={{ color: col }}>{nf(v)}<small>pts</small></span>
                      <span className="mr-act">{r.a[lang][side === "Y" ? 0 : 1]}</span>
                    </div>
                  </div>
                );
              })}
              <span className="mr-split" style={{ opacity: lt >= T_OPP0 ? 1 : 0, transform: lt >= T_OPP0 ? "scaleX(1)" : "scaleX(0)" }}><i style={{ flex: r.y, background: BLUE }} /><b /><i style={{ flex: r.o, background: RED }} /></span>
            </div>
          ) : (
            <div className="mr-round mr-verdict" key="verdict">
              <span className="mr-kick" style={{ letterSpacing: "0.4em" }}>{c.winner}</span>
              <span className="mr-verdict-name">{c.me}</span>
              <span className="mr-verdict-sub">{c.verdict}</span>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
