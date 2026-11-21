"use client";

// Télécharger (21/11) : système de l'accueil (src/components/site/Site.tsx). L'en-tête reprend la carte sombre de
// l'accueil avec les boutons des stores (liens directs App Store / Google Play, lib/stores) ; mêmes textes
// (translations.ts → download). Écrans : vraies captures de l'app dans le cadre du téléphone (les anciennes captures
// /screens/app/<langue>/2.webp n'existaient plus).
import Image from "next/image";
import { useLang, useT } from "@/lib/i18n";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";
import { SitePage, PageHero, Sec, Phones, Reveal, AppleIcon, PlayIcon } from "@/components/site/Site";

const SHOTS = ["activity", "final-round", "card"] as const;

export default function DownloadPage() {
  const t = useT();
  const { lang } = useLang();
  const d = t.download;

  return (
    <SitePage>
      <PageHero
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

      <Sec kick={d.platforms_label} title={d.platforms_h2} lead={d.platforms_sub}>
        <Reveal className="sp-plats">
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
      </Sec>

      <Sec kick={d.screens_label} title={d.screens_h2}>
        <Phones items={SHOTS.map((s, i) => ({ src: `/screens/story/${lang}/${s}.webp`, alt: d.screens[i].label, title: d.screens[i].label, body: d.screens[i].caption }))} />
      </Sec>
    </SitePage>
  );
}
