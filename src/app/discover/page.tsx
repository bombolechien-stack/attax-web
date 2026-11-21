"use client";

// Découvrir (21/11) : système de l'accueil (src/components/site/Site.tsx). Mêmes textes (translations.ts → discover).
import { useLang, useT } from "@/lib/i18n";
import { SitePage, PageHero, PhotoBg, Sec, HairList, Phones, Reveal, FinalCta, AppleIcon } from "@/components/site/Site";

export default function DiscoverPage() {
  const t = useT();
  const { lang } = useLang();
  const d = t.discover;

  return (
    <SitePage>
      <PageHero
        full
        bg={<PhotoBg src="/images/discover-hero.png" alt="Discover Attax" pos="center 30%" />}
        kick={d.hero_label}
        title={<><span>{d.h1[0]}</span> <span><em>{d.h1[1]}</em></span></>}
        lead={d.subtitle}
        stats={d.stats}
      >
        <a className="h7-btn h7-btn-light" href="/download/ios"><AppleIcon />{d.cta_ios}</a>
        <a className="h7-btn h7-btn-ghost" href="/adventure">{d.cta_story}</a>
      </PageHero>

      <Sec kick={d.pillars_label} title={<><span>{d.pillars_h2[0]}</span> <span>{d.pillars_h2[1]}</span></>} lead={d.pillars_sub} split>
        <HairList items={d.pillars.map((p) => ({ n: p.n, title: p.title, body: p.description }))} />
      </Sec>

      <Sec kick={d.duel_label} title={<><span>{d.duel_h2[0]}</span> <span>{d.duel_h2[1]}</span></>} lead={d.duel_body.join(" ")}>
        <Phones
          items={[
            { src: `/screens/story/${lang}/rounds.webp`, alt: lang === "fr" ? "Les rounds du match" : "The match rounds" },
            { src: `/screens/story/${lang}/card.webp`, alt: lang === "fr" ? "La carte jouée" : "The card played" },
            { src: `/screens/story/${lang}/final-round.webp`, alt: lang === "fr" ? "Le round final" : "The final round" },
          ]}
        />
      </Sec>

      <Sec kick={d.philosophy_label} title={<><span>{d.philosophy_h2[0]}</span> <span>{d.philosophy_h2[1]}</span></>}>
        <Reveal className="sp-cols">
          {d.philosophy_body.map((text: string, i: number) => <p key={i}>{text}</p>)}
        </Reveal>
      </Sec>

      <Sec kick={d.schedule_label} title={<><span>{d.schedule_h2[0]}</span> <span>{d.schedule_h2[1]}</span></>} lead={d.schedule_sub} split>
        <HairList items={d.schedule_items.map((s) => ({ n: s.n, title: s.title, body: s.description }))} />
      </Sec>

      <FinalCta />
    </SitePage>
  );
}
