"use client";

// « Le matériel » (26/11) : à poser là où le site parle des montres compatibles (Télécharger, FAQ).
//  · deux façons de jouer : une montre (via Apple Santé / Health Connect) ou un capteur cardio Bluetooth (ceinture,
//    brassard), relié directement à l'app ;
//  · deux produits mis en avant, par les adresses courtes /nothingwatch et /cardio (liens d'affiliation, src/lib/gear.ts) ;
//  · les marques déconseillées, avec la raison.
// Photos des produits : public/images/gear/watch.png et public/images/gear/sensor.webp (IMG ci-dessous). Sans photo,
// la carte montre le nom du produit sur fond sombre.
import { useLang } from "@/lib/i18n";
import { Head, Reveal } from "./Site";
import "./gear.css";

const IMG: { watch: string | null; sensor: string | null } = { watch: "/images/gear/watch.png", sensor: "/images/gear/sensor.webp" };

const COPY = {
  fr: {
    kick: "Le matériel",
    title: "Pas encore équipé ?",
    lead: "Deux façons de jouer : une montre connectée, ou un simple capteur cardio Bluetooth.",
    ways: [
      { k: "Montre connectée", t: "Via Apple Santé ou Health Connect", b: "Ta montre envoie tes séances, ta fréquence cardiaque et tes pas à Apple Santé (iPhone) ou Health Connect (Android). Attax les lit." },
      { k: "Capteur cardio Bluetooth", t: "Directement dans Attax", b: "Ceinture thoracique ou brassard : le capteur se connecte à l'app en Bluetooth. Pas besoin d'Apple Santé ni de Health Connect." },
    ],
    picks: [
      { key: "watch" as const, tag: "Notre choix", name: "CMF Watch 3 Pro", by: "by Nothing", body: "Le meilleur rapport qualité-prix que nous ayons trouvé : GPS, grande autonomie, et des données qui arrivent bien dans Apple Santé comme dans Health Connect.", cta: "Voir la montre", href: "/nothingwatch" },
      { key: "sensor" as const, tag: "Le moins cher", name: "Brassard cardio moofit HW401", by: "Bluetooth", body: "Encore plus simple : un brassard qui mesure ta fréquence cardiaque et se connecte directement à Attax. Rechargeable, il se porte au bras.", cta: "Voir le capteur", href: "/cardio" },
    ],
    aff: "Liens affiliés",
    avoidK: "Les montres que nous déconseillons",
    avoid: [
      { name: "Xiaomi / Redmi", why: "Elles envoient mal leurs données à Apple Santé et à Health Connect : des séances arrivent incomplètes, avec des trous." },
      { name: "Huawei / Honor", why: "Sur Android, Huawei Health ne partage pas ses données avec Health Connect. Sur iPhone, seules les séances lancées sur la montre arrivent." },
    ],
    avoidAfter: "Tu as déjà l'une de ces montres ? Ajoute un capteur cardio Bluetooth : il passe directement par Attax.",
  },
  en: {
    kick: "The gear",
    title: "Not equipped yet?",
    lead: "Two ways to play: a smartwatch, or a simple Bluetooth heart-rate sensor.",
    ways: [
      { k: "Smartwatch", t: "Through Apple Health or Health Connect", b: "Your watch sends your workouts, heart rate and steps to Apple Health (iPhone) or Health Connect (Android). Attax reads them." },
      { k: "Bluetooth heart-rate sensor", t: "Straight into Attax", b: "Chest strap or armband: the sensor connects to the app over Bluetooth. No need for Apple Health or Health Connect." },
    ],
    picks: [
      { key: "watch" as const, tag: "Our pick", name: "CMF Watch 3 Pro", by: "by Nothing", body: "The best value we've found: GPS, long battery life, and data that reaches Apple Health and Health Connect properly.", cta: "See the watch", href: "/nothingwatch" },
      { key: "sensor" as const, tag: "The cheapest", name: "moofit HW401 heart-rate armband", by: "Bluetooth", body: "Even simpler: an armband that measures your heart rate and connects straight to Attax. Rechargeable, worn on the arm.", cta: "See the sensor", href: "/cardio" },
    ],
    aff: "Affiliate links",
    avoidK: "Watches we don't recommend",
    avoid: [
      { name: "Xiaomi / Redmi", why: "They send their data poorly to Apple Health and Health Connect: workouts arrive incomplete, with gaps." },
      { name: "Huawei / Honor", why: "On Android, Huawei Health doesn't share its data with Health Connect. On iPhone, only workouts started on the watch come through." },
    ],
    avoidAfter: "Already own one of these? Add a Bluetooth heart-rate sensor: it goes straight through Attax.",
  },
};

export default function Gear({ id = "gear" }: { id?: string }) {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <section id={id} className="sp-sec">
      <div className="p5-wrap">
        <Head kick={c.kick} title={c.title} lead={c.lead} split />
        <div className="sp-body">
          <Reveal className="gr-ways">
            {c.ways.map((w) => (
              <div key={w.k} className="gr-way">
                <p className="sp-label">{w.k}</p>
                <h3 className="h7-h3">{w.t}</h3>
                <p className="h7-p">{w.b}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="gr-picks">
            {c.picks.map((p) => (
              <a key={p.key} className="gr-pick" href={p.href} target="_blank" rel="sponsored nofollow noopener">
                <div className={`gr-img${IMG[p.key] ? "" : " is-empty"}`}>
                  {IMG[p.key]
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img src={IMG[p.key] as string} alt={p.name} loading="lazy" />
                    : <span>{p.name}</span>}
                  <em>{p.tag}</em>
                </div>
                <div className="gr-txt">
                  <h3 className="h7-h3">{p.name} <small>{p.by}</small></h3>
                  <p className="h7-p">{p.body}</p>
                  <span className="h7-btn h7-btn-ink">{p.cta} →</span>
                </div>
              </a>
            ))}
          </Reveal>
          <p className="sp-note gr-aff">{c.aff}</p>

          <Reveal className="gr-avoid">
            <p className="sp-label">{c.avoidK}</p>
            <ul>
              {c.avoid.map((a) => <li key={a.name}><b>{a.name}</b><span>{a.why}</span></li>)}
            </ul>
            <p className="sp-note">{c.avoidAfter}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
