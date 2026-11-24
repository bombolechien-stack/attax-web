"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useLang, useT } from "@/lib/i18n";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import SectionHead from "./SectionHead";

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
  { w: "Y", y: 486, o: 312, a: { en: ["Running · 38 min", "Yoga · 55 min"], fr: ["Course · 38 min", "Yoga · 55 min"] } },
  { w: "O", y: 210, o: 455, a: { en: ["Weight training · 40 min", "Swimming · 53 min"], fr: ["Musculation · 40 min", "Natation · 53 min"] } },
  { w: "Y", y: 530, o: 380, a: { en: ["Cycling · 1 h 00", "Tennis · 1 h 10"], fr: ["Vélo · 1 h 00", "Tennis · 1 h 10"] } },
  { w: "O", y: 95, o: 268, a: { en: ["Walking · 5,000 steps", "Climbing · 45 min"], fr: ["Marche · 5 000 pas", "Escalade · 45 min"] } },
  { w: "Y", y: 620, o: 540, a: { en: ["Football · 1 h 15", "Running · 50 min"], fr: ["Football · 1 h 15", "Course · 50 min"] } },
  { w: "O", y: 140, o: 395, a: { en: ["Yoga · 30 min", "HIIT · 35 min"], fr: ["Yoga · 30 min", "HIIT · 35 min"] } },
  { w: "Y", y: 512, o: 388, final: true, a: { en: ["Weight training · 55 min", "Swimming · 53 min"], fr: ["Musculation · 55 min", "Natation · 53 min"] } },
];
// Le déroulé d'un round (secondes depuis son début).
// Les deux scores comptent ensemble (comme l'app), s'arrêtent ensemble, puis le coup.
// 22/11 (retour du propriétaire : on ne doit jamais s'arrêter ENTRE deux rounds) : chaque cran de défilement fait jouer
// UN round entier, en 1,15 s : les deux scores comptent ensemble, le coup (boxeurs en fond), le morceau jaune tombe, le
// perdant passe en gris ; puis le round reste affiché au repos (REST) jusqu'au cran suivant.
const T_ME0 = 0.05, T_ME1 = 0.55, T_OPP0 = 0.05, T_OPP1 = 0.55, T_HIT = 0.6, FRAG = 0.42, REST = 1.02, T_FADE = 1.04, ROUND_LEN = 1.15;

const COPY = {
  en: {
    me: "JOHNNY", opp: "SOPHIE", hp: "HP", round: (n: number) => `ROUND ${n} / 7`, finalRound: "FINAL ROUND", stake: "2 HP AT STAKE",
    days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"], wins: "WINS THE ROUND", vs: "vs",
    winner: "WINNER", verdict: "Wins the match, 4 HP to 2.",
    note: "Example workouts. The same workout can score more or fewer pts: the higher your heart rate, the more each minute earns.",
  },
  fr: {
    me: "JOHNNY", opp: "SOPHIE", hp: "PV", round: (n: number) => `ROUND ${n} / 7`, finalRound: "ROUND FINAL", stake: "2 PV EN JEU",
    days: ["Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi", "Mardi"], wins: "REMPORTE LE ROUND", vs: "vs",
    winner: "VAINQUEUR", verdict: "Remporte le match, 4 PV à 2.",
    note: "Séances données en exemple. Une même séance peut rapporter plus ou moins de pts : plus ton cœur bat vite, plus chaque minute rapporte.",
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

/** Vie d'un joueur après les rounds dont le coup est déjà tombé (à l'instant t du match). */
function lifeAt(side: "Y" | "O", t: number) {
  let life = HP0;
  ROUNDS.forEach((r, i) => { if (r.w !== side && t >= i * ROUND_LEN + T_HIT) life -= r.final ? 2 : 1; });
  return life;
}

/** Le morceau jaune à l'instant k (0 → 1) : les mêmes étapes que l'animation mrFrag (un léger saut, puis il tombe en
 *  tournant et s'efface), mais pilotées par le défilement. */
function fragAt(k: number) {
  let y: number, rot: number, o = 1;
  if (k < 0.12) { const u = k / 0.12; y = -3 * u; rot = -2 * u; }
  else { const e = Math.pow((k - 0.12) / 0.88, 2); y = -3 + 73 * e; rot = -2 + 11 * e; o = 1 - e; }
  return { t: `translate3d(0, ${y.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg)`, o };
}

/** La barre de vie de l'app (pleine, rendue une fois) ; tout ce qui bouge est piloté en direct par DailyMatch. */
function HpBar({ side }: { side: "me" | "opp" }) {
  const me = side === "me", pos = me ? "left" : "right";
  return (
    <div className="mr-bar-wrap" data-bar={side}>
      <div className="mr-bar">
        <span className="mr-bar-fill" style={{ background: me ? G_ME : G_OPP, [pos]: 0, width: "100%" }} />
        <span className="mr-bar-sheen" />
      </div>
      <span className="mr-frag" style={{ [pos]: "100%", width: "0%", opacity: 0 }} />
      <span className="mr-notch" style={{ [pos]: "100%", opacity: 0 }} />
      <div className="mr-ticks">{Array.from({ length: HP0 - 1 }, (_, k) => <i key={k} style={{ left: `${((k + 1) / HP0) * 100}%` }} />)}</div>
    </div>
  );
}

const sg = (v: number, a: number, b: number) => clamp((v - a) / (b - a));
const io3 = (u: number) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
// Fondus enchaînés entre deux rounds (secondes de match autour de la fin du round) : le round sortant s'efface en
// montant, le suivant arrive par en dessous ; les deux se chevauchent.
const OUT0 = -0.1, OUT1 = 0.08, IN0 = -0.04, IN1 = 0.16;
const VERDICT_T = ROUNDS.length * ROUND_LEN + 0.3;
const REDUCED_T = 5 * ROUND_LEN + REST;
/** Le cran de défilement → l'instant de repos à atteindre : avant le 1er cran, rien n'est joué ; puis round 1 … 7 au
 *  repos ; puis le verdict. 8 crans égaux sur la course épinglée. */
const restFor = (p: number) => {
  if (p <= 0.002) return 0;
  const st = Math.min(ROUNDS.length, Math.floor(p * (ROUNDS.length + 1)));
  return st >= ROUNDS.length ? VERDICT_T : st * ROUND_LEN + REST;
};

export default function DailyMatch() {
  const t = useT();
  const { lang } = useLang();
  const m = t.dailyMatch;
  const c = COPY[lang];
  const tall = useMedia("(max-width: 760px)");
  const reduceM = useMedia("(prefers-reduced-motion: reduce)");
  const stage = useRef<HTMLDivElement | null>(null);
  const cache = useRef<Record<string, string>>({});
  const langRef = useRef(lang);

  // 22/11 (accord du propriétaire, revu le même jour) : le match avance avec le défilement, PAR CRANS. La course épinglée
  // est découpée en 8 crans (7 rounds + verdict) ; à chaque cran franchi, le round suivant se JOUE en entier (1,15 s :
  // scores qui comptent ensemble, coup du gagnant avec les boxeurs en fond, morceau jaune qui tombe, perdant en gris), puis
  // reste au repos : on ne s'arrête jamais entre deux rounds. En remontant, retour rapide au round précédent. Les rounds
  // s'enchaînent en fondus croisés. Les 7 rounds et le verdict sont rendus UNE fois, empilés ; chaque image ne fait que des
  // écritures directes de ce qui change (opacité, transform, textes) : aucun rendu React. Épinglé (sticky) sur ordinateur
  // ET sur téléphone : barres de vie, frise et round restent ensemble à l'écran, sous la barre de navigation.
  // Mouvements réduits : le coup du round 6, fixe.
  const put = (el: HTMLElement | null | undefined, key: string, v: string, write: (e: HTMLElement, v: string) => void) => {
    if (!el || cache.current[key] === v) return;
    cache.current[key] = v;
    write(el, v);
  };
  const op = (e: HTMLElement, v: string) => { e.style.opacity = v; };
  const tf = (e: HTMLElement, v: string) => { e.style.transform = v; };
  const tx = (e: HTMLElement, v: string) => { e.textContent = v; };
  const draw = (time: number) => {
    const root = stage.current; if (!root) return;
    const c2 = COPY[langRef.current];
    const nf = (n: number) => n.toLocaleString(langRef.current === "fr" ? "fr-FR" : "en-US");
    const ri = Math.max(0, Math.min(ROUNDS.length - 1, Math.floor(time / ROUND_LEN)));
    // Boxeurs : fondu à l'instant du coup, fondu de sortie avant le round suivant.
    let boxW: "Y" | "O" = ROUNDS[ri].w, boxO = 0;
    ROUNDS.forEach((r, i) => {
      const lt = time - i * ROUND_LEN;
      const o = io3(sg(lt, T_HIT - 0.06, T_HIT + 0.08)) * (1 - io3(sg(lt, T_FADE, ROUND_LEN + 0.05)));
      if (o > boxO) { boxO = o; boxW = r.w; }
    });
    root.querySelectorAll<HTMLElement>(".mr-boxers img").forEach((img, k) => {
      const isBlue = img.dataset.w === "blue";
      put(img, `bo${k}`, ((boxW === "Y") === isBlue ? boxO * 0.85 : 0).toFixed(3), op);
      put(img, `bs${k}`, `scale(${(1.035 - 0.035 * boxO).toFixed(4)})`, tf);
    });
    // Barres de vie, PV, morceau jaune.
    (["Y", "O"] as const).forEach((side) => {
      const life = lifeAt(side, time), f = (life / HP0) * 100, pos = side === "Y" ? "left" : "right";
      const wrap = root.querySelector<HTMLElement>(`[data-bar="${side === "Y" ? "me" : "opp"}"]`); if (!wrap) return;
      put(wrap.querySelector<HTMLElement>(".mr-bar-fill"), `fill${side}`, `${f.toFixed(3)}%`, (e, v) => { e.style.width = v; });
      const notch = wrap.querySelector<HTMLElement>(".mr-notch");
      put(notch, `np${side}`, `${f.toFixed(3)}%`, (e, v) => { e.style.setProperty(pos, v); });
      put(notch, `no${side}`, f < 99.9 ? "1" : "0", op);
      put(root.querySelector<HTMLElement>(`[data-hp="${side}"]`), `hp${side}`, `${life} ${c2.hp}`, tx);
      const frag = wrap.querySelector<HTMLElement>(".mr-frag");
      let k = -1, loss = 1;
      ROUNDS.forEach((r, i) => { const lt = time - i * ROUND_LEN - T_HIT; if (r.w !== side && lt >= 0 && lt < FRAG) { k = lt / FRAG; loss = r.final ? 2 : 1; } });
      if (k >= 0) {
        put(frag, `fp${side}`, `${f.toFixed(3)}%`, (e, v) => { e.style.setProperty(pos, v); });
        put(frag, `fw${side}`, `${((loss / HP0) * 100).toFixed(3)}%`, (e, v) => { e.style.width = v; });
        const fr = fragAt(k);
        put(frag, `ft${side}`, fr.t, tf);
        put(frag, `fo${side}`, fr.o.toFixed(3), op);
      } else put(frag, `fo${side}`, "0", op);
    });
    // Frise des rounds.
    root.querySelectorAll<HTMLElement>(".mr-dashes i").forEach((d, i) => {
      const done = time >= i * ROUND_LEN + T_HIT, x = ROUNDS[i];
      put(d, `d${i}`, done ? (x.w === "Y" ? BLUE : RED) : i === ri && time < ROUNDS.length * ROUND_LEN ? INK : "#D5DBE4", (e, v) => { e.style.background = v; });
    });
    // Cartes des rounds (fondus croisés) puis verdict.
    root.querySelectorAll<HTMLElement>(".mr-rounds > .mr-round").forEach((card, i) => {
      const b0 = i * ROUND_LEN, b1 = (i + 1) * ROUND_LEN;
      const inK = i === 0 ? 1 : io3(sg(time - b0, IN0, IN1));
      const outK = i >= ROUNDS.length ? 0 : io3(sg(time - b1, OUT0, OUT1));
      const o = inK * (1 - outK);
      put(card, `co${i}`, o.toFixed(3), op);
      put(card, `ct${i}`, `translate3d(0, ${((1 - inK) * 22 - outK * 22).toFixed(2)}px, 0)`, tf);
      put(card, `cv${i}`, o > 0.005 ? "visible" : "hidden", (e, v) => { e.style.visibility = v; });
      if (i >= ROUNDS.length || o <= 0.005) return;
      const r = ROUNDS[i], lt = time - b0;
      const cnt = eo(clamp((lt - T_ME0) / (T_ME1 - T_ME0)));
      const cntO = eo(clamp((lt - T_OPP0) / (T_OPP1 - T_OPP0)));
      const hitK = io3(sg(lt, T_HIT - 0.03, T_HIT + 0.15));
      (["Y", "O"] as const).forEach((side) => {
        const line = card.querySelector<HTMLElement>(`[data-line="${side}"]`); if (!line) return;
        const won = r.w === side;
        put(line.querySelector<HTMLElement>(".mr-num"), `n${i}${side}`, nf(Math.round(side === "Y" ? r.y * cnt : r.o * cntO)), tx);
        put(line, `lo${i}${side}`, won ? "1" : (1 - 0.74 * hitK).toFixed(3), op);
        const w = line.querySelector<HTMLElement>(".mr-won");
        put(w, `wo${i}${side}`, won ? hitK.toFixed(3) : "0", op);
        put(w, `wt${i}${side}`, `translate3d(0, ${won ? ((1 - hitK) * 4).toFixed(2) : "4"}px, 0)`, tf);
      });
    });
  };
  // La tête de lecture : elle rejoint l'instant de repos du cran courant en temps réel (1 round = 1,15 s) ; plusieurs
  // crans d'un coup → accélère (fini en ~0,8 s) ; en remontant → retour rapide (≤ 0,4 s). Jamais d'arrêt entre deux rounds.
  const play = useRef({ t: 0, goal: 0, raf: 0, prev: 0 });
  const kickPlay = () => {
    const P = play.current;
    if (P.raf) return;
    P.prev = 0;
    const step = (now: number) => {
      const dt = P.prev ? Math.min(0.05, (now - P.prev) / 1000) : 1 / 60;
      P.prev = now;
      const gap = P.goal - P.t;
      const speed = gap > 0 ? (gap > ROUND_LEN * 1.1 ? gap / 0.8 : 1) : Math.max(3, -gap / 0.4);
      const mv = speed * dt;
      P.t = Math.abs(gap) <= mv ? P.goal : P.t + Math.sign(gap) * mv;
      draw(P.t);
      P.raf = P.t !== P.goal ? requestAnimationFrame(step) : 0;
    };
    P.raf = requestAnimationFrame(step);
  };
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pinRef = useScrollProgress<HTMLDivElement>((p) => {
    if (reduced()) { draw(REDUCED_T); return; }
    const g = restFor(p);
    if (g !== play.current.goal) { play.current.goal = g; kickPlay(); }
  }, { mode: "pin" });
  // Changement de langue ou de format (nouveaux nœuds) : cache vidé, on redessine à la même position.
  useEffect(() => {
    cache.current = {};
    langRef.current = lang;
    draw(reduced() ? REDUCED_T : play.current.t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, tall]);
  useEffect(() => () => { if (play.current.raf) cancelAnimationFrame(play.current.raf); }, []);

  const fmt = tall ? "tall" : "wide";

  return (
    <section id="daily-match" className="mr-section p5-sec p-lines p-lines-light">
      <div className="p5-wrap">
        <SectionHead label={lang === "fr" ? "03 · 10h → 21h30" : "03 · 10 AM → 9:30 PM"} title={[m.h2[0], m.h2[1]]} lead={m.subtitle} />
      </div>

      {/* L'écran Match de l'app, agrandi ; épinglé pendant le défilement sur ordinateur */}
      <div ref={pinRef} className={`mr-pin is-scrub${!reduceM ? " is-pinned" : ""}`}>
      <div ref={stage} className="mr-stage" style={{ fontFamily: FONT }}>
        {/* 4. Les boxeurs, en fond, figés sur le coup du gagnant */}
        <div className="mr-boxers" aria-hidden="true">
          {(["blue", "red"] as const).map((w) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={`${w}-${fmt}`} data-w={w} src={`/match/punch-${w}-${fmt}.webp`} alt="" loading="lazy" style={{ opacity: 0 }} />
          ))}
        </div>

        <div className="mr-inner">
          {/* 1. Les barres de vie */}
          <div className="mr-bars">
            <div>
              <HpBar side="me" />
              <div className="mr-hp" style={{ color: BLUE }}><b>{c.me}</b> <span data-hp="Y">{HP0} {c.hp}</span></div>
            </div>
            <div>
              <HpBar side="opp" />
              <div className="mr-hp" style={{ color: RED, textAlign: "right" }}><span data-hp="O">{HP0} {c.hp}</span> <b>{c.opp}</b></div>
            </div>
          </div>

          {/* 2. La frise des rounds */}
          <div className="mr-dashes" aria-hidden="true">
            {ROUNDS.map((x, i) => <i key={i} className={x.final ? "is-final" : undefined} style={{ background: i === 0 ? INK : "#D5DBE4" }} />)}
          </div>

          {/* 3. Les rounds, empilés (fondus croisés), puis le verdict */}
          <div className="mr-rounds">
            {ROUNDS.map((r, ri) => (
              <div className="mr-round" key={`r${ri}`} style={{ opacity: ri === 0 ? 1 : 0, visibility: ri === 0 ? "visible" : "hidden" }}>
                <span className="mr-kick">{r.final ? c.finalRound : c.round(ri + 1)}</span>
                <span className="mr-day">{c.days[ri]}</span>
                {r.final && <span className="mr-kick" style={{ color: RED, marginTop: 4 }}>{c.stake}</span>}
                {(["Y", "O"] as const).map((side) => {
                  const col = side === "Y" ? BLUE : RED;
                  return (
                    <div key={side} style={{ display: "contents" }}>
                      {side === "O" && <span className="mr-vs">VS</span>}
                      <div className="mr-line" data-line={side}>
                        <span className="mr-won" style={{ color: col, opacity: 0, transform: "translateY(4px)" }}>{c.wins}</span>
                        <span className="mr-big" style={{ color: col }}><span className="mr-num">0</span><small>pts</small></span>
                        <span className="mr-act">{r.a[lang][side === "Y" ? 0 : 1]}<sup className="mr-star" aria-hidden="true">*</sup></span>
                      </div>
                    </div>
                  );
                })}
                <span className="mr-split"><i style={{ flex: r.y, background: BLUE }} /><b /><i style={{ flex: r.o, background: RED }} /></span>
              </div>
            ))}
            <div className="mr-round mr-verdict" style={{ opacity: 0, visibility: "hidden" }}>
              <span className="mr-kick" style={{ letterSpacing: "0.4em" }}>{c.winner}</span>
              <span className="mr-verdict-name">{c.me}</span>
              <span className="mr-verdict-sub">{c.verdict}</span>
            </div>
          </div>
          <p className="mr-note"><span aria-hidden="true">* </span>{c.note}</p>
        </div>
      </div>
      </div>

    </section>
  );
}
