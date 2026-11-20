"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, slideRight } from "@/hooks/useInView";

// « 7 jours. 7 rounds. » = l'écran Match de l'app pendant les rounds, agrandi à la largeur du bloc (pas de téléphone) :
// 1. en haut, les deux barres de vie de l'app (components/match/HealthBars.tsx : capsule chromée, dégradé du bord vers le
//    centre, barre noire, 7 tirets ; la mienne en bleu à gauche, la sienne en rouge à droite) ;
// 2. la frise des 7 rounds (les tirets de l'app) ;
// 3. chaque round, l'un après l'autre : le jour (« ROUND n / 7 »), MON score bleu qui compte, « vs », son score rouge qui
//    compte (empilés et centrés, comme la révélation des rounds de l'app, captures fn-02…fn-07) ;
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

// Les séances du jour de chaque round (comme les lignes de séance de l'app : heure, pastille + joueur, sport, durée,
// pts), puis les pas. Total du jour = pts des séances + pts des pas (10 pts par tranche complète de 1 000 pas).
type Sport = { en: string; fr: string };
type Sess = { who: "Y" | "O"; at: string; sport: Sport; min: number; pts: number };
type Round = { w: "Y" | "O"; y: number; o: number; ys: number; os: number; sess: Sess[]; final?: boolean };
const SP = (en: string, fr: string): Sport => ({ en, fr });
const ROUNDS: Round[] = [
  { w: "Y", y: 486, o: 312, ys: 10020, os: 9040, sess: [{ who: "Y", at: "7:10 AM", sport: SP("Running", "Course"), min: 38, pts: 386 }, { who: "O", at: "6:40 PM", sport: SP("Yoga", "Yoga"), min: 55, pts: 222 }] },
  { w: "O", y: 210, o: 455, ys: 6010, os: 7020, sess: [{ who: "Y", at: "12:30 PM", sport: SP("Strength training", "Musculation"), min: 40, pts: 150 }, { who: "O", at: "6:35 PM", sport: SP("Swimming", "Natation"), min: 53, pts: 385 }] },
  { w: "Y", y: 530, o: 380, ys: 8030, os: 8000, sess: [{ who: "Y", at: "6:05 PM", sport: SP("Cycling", "Vélo"), min: 60, pts: 450 }, { who: "O", at: "1:45 PM", sport: SP("Tennis", "Tennis"), min: 70, pts: 300 }] },
  { w: "O", y: 95, o: 268, ys: 5000, os: 7000, sess: [{ who: "Y", at: "8:20 AM", sport: SP("Walking", "Marche"), min: 35, pts: 45 }, { who: "O", at: "10:15 AM", sport: SP("Climbing", "Escalade"), min: 45, pts: 198 }] },
  { w: "Y", y: 620, o: 540, ys: 10000, os: 9000, sess: [{ who: "Y", at: "5:30 PM", sport: SP("Football", "Football"), min: 75, pts: 520 }, { who: "O", at: "7:00 AM", sport: SP("Running", "Course"), min: 50, pts: 450 }] },
  { w: "O", y: 140, o: 395, ys: 6000, os: 8000, sess: [{ who: "Y", at: "6:50 AM", sport: SP("Yoga", "Yoga"), min: 30, pts: 80 }, { who: "O", at: "7:15 PM", sport: SP("HIIT", "HIIT"), min: 35, pts: 315 }] },
  { w: "Y", y: 512, o: 388, ys: 10000, os: 9000, final: true, sess: [{ who: "Y", at: "6:05 PM", sport: SP("Strength training", "Musculation"), min: 55, pts: 412 }, { who: "O", at: "6:35 PM", sport: SP("Swimming", "Natation"), min: 53, pts: 298 }] },
];
// Contrôle : chaque total = séances + pas.
if (process.env.NODE_ENV !== "production") ROUNDS.forEach((r, i) => {
  const sum = (w: "Y" | "O", st: number) => r.sess.filter((x) => x.who === w).reduce((a, x) => a + x.pts, 0) + Math.floor(st / 1000) * 10;
  if (sum("Y", r.ys) !== r.y || sum("O", r.os) !== r.o) console.warn("DailyMatch: round", i + 1, "pts do not add up");
});
// Le déroulé d'un round (secondes depuis son début).
// Les deux scores comptent ensemble (comme l'app), s'arrêtent ensemble, puis le coup.
const T_ME0 = 0.5, T_ME1 = 2.1, T_VS = 0.5, T_OPP0 = 0.5, T_OPP1 = 2.1, T_HIT = 2.3, T_FADE = 3.6, ROUND_LEN = 4.3;
const VERDICT_LEN = 3.6, CYCLE = ROUNDS.length * ROUND_LEN + VERDICT_LEN;

const COPY = {
  en: {
    me: "JOHNNY", opp: "SOPHIE", hp: "HP", round: (n: number) => `ROUND ${n} / 7`, finalRound: "FINAL ROUND", stake: "2 HP AT STAKE",
    days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"], wins: "WINS THE ROUND", vs: "vs",
    winner: "WINNER", verdict: "Wins the match, 4 HP to 2.",
    workouts: (d: string) => `${d.toUpperCase()}'S WORKOUTS`, steps: "Steps",
  },
  fr: {
    me: "JOHNNY", opp: "SOPHIE", hp: "PV", round: (n: number) => `ROUND ${n} / 7`, finalRound: "ROUND FINAL", stake: "2 PV EN JEU",
    days: ["Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi", "Mardi"], wins: "REMPORTE LE ROUND", vs: "vs",
    winner: "VAINQUEUR", verdict: "Remporte le match, 4 PV à 2.",
    workouts: (d: string) => `SÉANCES DU ${d.toUpperCase()}`, steps: "Pas",
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
  const clockTxt = (x: string) => (lang === "fr" ? x.replace(/^(\d+):(\d+) (AM|PM)$/, (_, h, mm, ap) => `${(+h % 12) + (ap === "PM" ? 12 : 0)}h${mm}`) : x);
  const who = (w: "Y" | "O") => (w === "Y" ? "Johnny" : "Sophie");
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
              <span className="mr-kick mr-wins" style={{ color: BLUE, opacity: hit && r.w === "Y" ? 1 : 0 }}>{c.wins}</span>
              <span className="mr-big" style={{ color: BLUE, opacity: lt < T_ME0 ? 0 : hit && r.w !== "Y" ? 0.26 : 1 }}>{nf(yPts)}<small>pts</small></span>
              <span className="mr-vs" style={{ opacity: lt >= T_VS ? 1 : 0 }}>{c.vs}</span>
              <span className="mr-kick mr-wins" style={{ color: RED, opacity: hit && r.w === "O" ? 1 : 0 }}>{c.wins}</span>
              <span className="mr-big" style={{ color: RED, opacity: lt < T_OPP0 ? 0 : hit && r.w !== "O" ? 0.26 : 1 }}>{nf(oPts)}<small>pts</small></span>
              <span className="mr-split" style={{ opacity: lt >= T_OPP0 ? 1 : 0 }}><i style={{ flex: Math.max(1, yPts), background: BLUE }} /><i style={{ flex: Math.max(1, oPts), background: RED }} /></span>

              {/* Les séances du jour, sous les scores (lignes de séance de l'app) */}
              <div className="mr-sess">
                <span className="mr-kick" style={{ color: INK, letterSpacing: "0.18em" }}>{c.workouts(c.days[ri])}</span>
                {[...r.sess].sort((a, b) => (a.who === b.who ? 0 : a.who === "Y" ? -1 : 1)).map((x, k) => (
                  <div key={k} className="mr-sess-row">
                    <span className="mr-sess-at">{clockTxt(x.at)}</span>
                    <i style={{ background: x.who === "Y" ? BLUE : RED }} />
                    <span className="mr-sess-t"><b>{who(x.who)}</b> · {x.sport[lang]} · {x.min} min</span>
                    <span className="mr-sess-pts" style={{ color: x.who === "Y" ? BLUE : RED }}>{nf(x.pts)} pts</span>
                  </div>
                ))}
                <div className="mr-sess-row mr-sess-steps">
                  <span className="mr-sess-at">{c.steps}</span>
                  <i style={{ background: "transparent" }} />
                  <span className="mr-sess-t"><b style={{ color: BLUE }}>{nf(r.ys)}</b> · <b style={{ color: RED }}>{nf(r.os)}</b></span>
                  <span className="mr-sess-pts"><span style={{ color: BLUE }}>{Math.floor(r.ys / 1000) * 10}</span> · <span style={{ color: RED }}>{Math.floor(r.os / 1000) * 10}</span> pts</span>
                </div>
              </div>
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
