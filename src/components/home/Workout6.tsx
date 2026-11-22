"use client";

import { useLang } from "@/lib/i18n";
import Story6 from "./Story6";
import AppPhone from "./AppPhone";
import ActivityRingLive from "./ActivityRingLive";
import ICONS from "./sportIcons.json";

// Écran 3 : « Ta séance devient des points. » L'écran Activités de l'app (vraie capture story/<langue>/activity.webp :
// l'anneau « pts aujourd'hui ») + trois réassurances, une ligne chacune, avec les icônes de l'app (MaterialCommunityIcons).
const COPY = {
  en: {
    kick: "02 · All day", big: "864",
    title: ["Your workout", "becomes pts."] as [string, string],
    line: "Your watch measures your effort. Your heart rate and your steps set the score.",
    alt: "The Activity screen of Attax: today's pts",
    items: [
      { icon: "watch", t: "Your watch is enough. Nothing to type in. Apple Health or Health Connect.", s: "Apple Health or Health Connect: Apple Watch, Garmin, Samsung Galaxy Watch, Fitbit, COROS, Amazfit, Withings, Oura, CMF by Nothing." },
      { icon: "heart-pulse", t: "Every sport counts.", s: "Running, swimming, football or yoga: if your heart rate goes up, it counts." },
      { icon: "clock-outline", t: "You can train until 9:30 PM.", s: "Everything synced before the verdict counts tonight." },
    ],
  },
  fr: {
    kick: "02 · Toute la journée", big: "864",
    title: ["Ta séance devient", "des pts."] as [string, string],
    line: "Ta montre mesure ton effort. Ton cœur et tes pas font le score.",
    alt: "L'écran Activités d'Attax : les pts du jour",
    items: [
      { icon: "watch", t: "Ta montre suffit. Rien à saisir. Apple Santé ou Health Connect.", s: "Apple Santé ou Health Connect : Apple Watch, Garmin, Samsung Galaxy Watch, Fitbit, COROS, Amazfit, Withings, Oura, CMF by Nothing." },
      { icon: "heart-pulse", t: "Tous les sports comptent.", s: "Course, natation, football ou yoga : si ton cœur accélère, ça compte." },
      { icon: "clock-outline", t: "Tu peux t'entraîner jusqu'à 21h30.", s: "Tout ce qui est synchronisé avant le verdict compte ce soir." },
    ],
  },
};

export default function Workout6() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <Story6 id="workout" kicker={c.kick} title={c.title} line={c.line} reverse extra={
      <ul className="re6">
        {c.items.map((it) => (
          <li key={it.icon}>
            <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path fill="#09090B" d={(ICONS as Record<string, string>)[it.icon]} /></svg>
            <div><b>{it.t}</b></div>
          </li>
        ))}
      </ul>
    }>
      <div className="st6-phone"><AppPhone src={`/screens/story/${lang}/activity.webp`} alt={c.alt} overlay={<ActivityRingLive lang={lang} />} /></div>
    </Story6>
  );
}
