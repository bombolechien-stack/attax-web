"use client";

// L'aventure (21/11) : système de l'accueil (src/components/site/Site.tsx). Mêmes textes (translations.ts → adventure).
import { useT } from "@/lib/i18n";
import { SitePage, PageHero, PhotoBg, Sec, Head, HairList, Reveal, FinalCta, AppleIcon } from "@/components/site/Site";

export default function AdventurePage() {
  const t = useT();
  const a = t.adventure;

  return (
    <SitePage>
      <PageHero
        full
        bg={<PhotoBg src="/images/cycling-race.jpg" alt="Cycling is Attax" pos="center 40%" a={[0.96, 0.72, 0.2]} b={0.9} />}
        kick={a.hero_label}
        title={<><span>{a.h1[0]}</span> <span><em>{a.h1[1]}</em></span></>}
        lead={a.subtitle}
        stats={a.stats}
      >
        <a className="h7-btn h7-btn-light" href="/download/ios"><AppleIcon />{a.cta_download}</a>
        <a className="h7-btn h7-btn-ghost" href="/contact">{a.cta_contact}</a>
      </PageHero>

      <Sec kick={a.story_label} title={<><span>{a.story_h2[0]}</span> <span>{a.story_h2[1]}</span></>} lead={a.story_sub} split>
        <HairList items={a.timeline.map((it) => ({ n: it.n, pre: it.year, title: it.title, body: it.description }))} />
      </Sec>

      <section className="sp-sec">
        <div className="p5-wrap sp-two">
          <Head kick={a.manifesto_label} title={a.manifesto_h2} />
          <Reveal className="sp-paras">
            {a.manifesto_body.map((text: string, i: number) => <p key={i}>{text}</p>)}
          </Reveal>
        </div>
      </section>

      <Sec kick={a.values_label} title={<><span>{a.values_h2[0]}</span> <span>{a.values_h2[1]}</span></>}>
        <HairList items={a.values.map((v) => ({ n: v.n, title: v.title, body: v.description }))} />
      </Sec>

      <FinalCta />
    </SitePage>
  );
}
