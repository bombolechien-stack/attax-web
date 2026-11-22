"use client";

// Télécharger (21/11) : système de l'accueil (src/components/site/Site.tsx). L'en-tête reprend la carte sombre de
// l'accueil avec les boutons des stores (liens directs App Store / Google Play, lib/stores) ; mêmes textes
// (translations.ts → download). Écrans : vraies captures de l'app dans le cadre du téléphone (les anciennes captures
// /screens/app/<langue>/2.webp n'existaient plus).
import Image from "next/image";
import { useLang, useT } from "@/lib/i18n";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";
import { SitePage, PageHero, Sec, Head, Phones, Reveal, AppleIcon, PlayIcon } from "@/components/site/Site";

// Montres compatibles (retour du 22/11 : bloc équilibré, liste à droite). Galaxy Watch et Fitbit : Android seulement.
const WATCHES: { name: string; android?: boolean }[] = [
  { name: "Apple Watch" }, { name: "Garmin" }, { name: "Samsung Galaxy Watch", android: true }, { name: "Fitbit", android: true },
  { name: "COROS" }, { name: "Amazfit" }, { name: "Withings" }, { name: "Oura" }, { name: "CMF by Nothing" },
];

const SHOTS = ["activity", "final-round", "card"] as const;

export default function DownloadPage() {
  const t = useT();
  const { lang } = useLang();
  const d = t.download;
  const fr = lang === "fr";

  return (
    <SitePage>
      <PageHero
        full
        bg={<>
          <div style={{ position: "absolute", inset: 0, background: "#080808" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(30,30,60,0.9) 0%, rgba(8,8,8,1) 65%)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,8,8,0.4) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.95) 100%)" }} />
        </>}
        kick={d.hero_label}
        title={<><span>{d.h1[0]}</span> <span><em>{d.h1[1]}</em></span></>}
        lead={d.subtitle}
        phone={{ src: `/screens/story/${lang}/final-round.webp`, alt: d.screens[1].label }}
      >
        <a className="h7-btn h7-btn-light" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"><AppleIcon />{d.cta_ios}</a>
        <a className="h7-btn h7-btn-ghost" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer"><PlayIcon />{d.cta_android}</a>
      </PageHero>

      <section className="sp-sec">
        <div className="p5-wrap">
          <Reveal>
            <ul className="sp-checks is-grid">
              {d.features.map((f: string) => <li key={f}>{f}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="sp-sec">
        <div className="p5-wrap">
          <div className="sp-compat">
            <Head kick={d.platforms_label} title={d.platforms_h2} lead={d.platforms_sub} />
            <Reveal className="sp-watches">
              <p className="sp-label">{fr ? "Montres et capteurs compatibles" : "Compatible watches and sensors"}</p>
              <ul>
                {WATCHES.map((w) => (
                  <li key={w.name}><b>{w.name}</b>{w.android && <span>{fr ? "sur Android" : "on Android"}</span>}</li>
                ))}
                <li className="is-more"><b>{fr ? "et d'autres" : "and more"}</b><span>{fr ? "ceintures cardio, bracelets" : "chest straps, bands"}</span></li>
              </ul>
              <div className="sp-sync">
                <span className="sp-label">{fr ? "Synchronisé avec" : "Synced with"}</span>
                <span className="sp-tag"><AppleIcon />{fr ? "Apple Santé" : "Apple Health"}</span>
                <span className="sp-tag"><PlayIcon />Health Connect</span>
              </div>
            </Reveal>
          </div>
        <Reveal className="sp-plats" >
          {([
            { os: "iOS", title: d.ios_title, req: d.ios_req, sub: d.ios_sub, href: "/download/ios", more: d.ios_more, icon: <AppleIcon /> },
            { os: "Android", title: d.android_title, req: d.android_req, sub: d.android_sub, href: "/download/android", more: d.android_more, icon: <PlayIcon /> },
          ]).map((p) => (
            <div key={p.os} className="sp-plat">
              <div className="sp-plat-top">
                <Image src="/images/apple-touch-icon.png" alt="Attax" width={48} height={48} />
                <div><span className="h7-n" style={{ margin: 0 }}>{p.os}</span><h3 className="h7-h3">{p.title}</h3></div>
              </div>
              <p className="h7-p">{p.req}<br />{p.sub}</p>
              <a className="h7-btn h7-btn-ink" href={p.href}>{p.icon}{p.more}</a>
            </div>
          ))}
        </Reveal>
        </div>
      </section>

      <Sec kick={d.screens_label} title={d.screens_h2}>
        <Phones items={SHOTS.map((s, i) => ({ src: `/screens/story/${lang}/${s}.webp`, alt: d.screens[i].label, title: d.screens[i].label, body: d.screens[i].caption }))} />
      </Sec>
    </SitePage>
  );
}
