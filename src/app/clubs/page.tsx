"use client";

// Clubs (26/11) : page de vente pour les organisations (salles, clubs, coachs, créateurs, entreprises, écoles).
// Système de l'accueil (src/components/site/Site.tsx) ; textes FR/EN dans ./content.ts ; styles propres dans ./clubs.css
// (classes .cl-*). L'aperçu de l'écran télé est le vrai écran de salle avec son club d'exemple (/club-screen?code=DEMO).
// Refonte du 26/11 : tout le discours est dans les onglets (3 arguments en cartes, les outils du profil, la mise en
// pratique) ; l'écran télé n'apparaît que dans l'onglet des salles ; le reste de la page tient en trois sections courtes.
// Chaque carte = un problème du métier (« Aujourd'hui ») puis ce qu'Attax y change. L'onglet choisi est tenu par la page :
// les étapes, « À savoir » et les questions emploient le mot du profil (adhérents, licenciés, clients, abonnés, salariés).
import { useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { SitePage, PageHero, PhotoBg, Sec, Reveal, FinalCta, StoreBtns } from "@/components/site/Site";
import AppPhone from "@/components/home/AppPhone";
import DuoFistsLive from "@/components/home/DuoFistsLive";
import LoopVideo from "@/components/home/LoopVideo";
import { SeasonMomentLive } from "@/components/home/MomentsLive";
import { CLUBS_CONTENT, PARTNERS_EMAIL, fill, type ClubsContent } from "./content";
import "./clubs.css";

type Pair = { title: string; body: string };

/** Grille à filets de l'accueil (h7-grid), apparition à l'entrée dans l'écran. numbered = repère 01, 02, 03. */
function Grid({ items, numbered = false }: { items: Pair[]; numbered?: boolean }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.12, { oneShot: true });
  return (
    <div ref={ref} className={`h7-grid sp-grid${visible ? " is-in" : ""}`}>
      {items.map((it, i) => (
        <div key={it.title} className="h7-cell">
          {numbered && <span className="h7-n">{String(i + 1).padStart(2, "0")}</span>}
          <h3 className="h7-h3">{it.title}</h3>
          <p className="h7-p">{it.body}</p>
        </div>
      ))}
    </div>
  );
}

/** Sélecteur de profil : onglets au clavier (flèches, Début, Fin), un panneau par profil. */
function Profiles({ p, demo, active, setActive }: { p: ClubsContent["profiles"]; demo: string; active: number; setActive: (i: number) => void }) {
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const n = p.items.length;

  const go = (i: number) => {
    const next = (i + n) % n;
    setActive(next);
    tabs.current[next]?.focus();
    tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); go(active + 1); }
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); go(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(n - 1); }
  };

  return (
    <div className="cl-prof">
      <div className="cl-tabs" role="tablist" aria-label={p.tablist} onKeyDown={onKey}>
        {p.items.map((it, i) => (
          <button
            key={it.id}
            ref={(el) => { tabs.current[i] = el; }}
            type="button"
            role="tab"
            id={`cl-tab-${it.id}`}
            aria-selected={i === active}
            aria-controls={`cl-panel-${it.id}`}
            tabIndex={i === active ? 0 : -1}
            className={`cl-tab${i === active ? " is-on" : ""}`}
            onClick={() => setActive(i)}
          >
            {it.tab}
          </button>
        ))}
      </div>

      {p.items.map((it, i) => (
        <div key={it.id} role="tabpanel" id={`cl-panel-${it.id}`} aria-labelledby={`cl-tab-${it.id}`} tabIndex={0} hidden={i !== active} className="cl-panel">
          <div className="cl-panel-head">
            <h3 className="cl-panel-t"><span>{it.title[0]}</span> <span><em>{it.title[1]}</em></span></h3>
            <p className="cl-panel-lead">{it.lead}</p>
          </div>
          <div className="cl-cards">
            {it.cases.map((a) => (
              <div key={a.title} className="cl-card">
                <p className="cl-pb-k">{p.problemLabel}</p>
                <p className="cl-pb">{a.problem}</p>
                <p className="cl-pb-k is-fix">{p.fixLabel}</p>
                <h4 className="h7-h3">{a.title}</h4>
                <p className="h7-p">{a.body}</p>
              </div>
            ))}
          </div>
          <div className="cl-panel-grid">
            <div className="cl-tools">
              <p className="cl-tools-k">{it.toolsLabel}</p>
              <ul>{it.tools.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
            <aside className="cl-use">
              <p className="cl-use-k">{it.useLabel}</p>
              <p className="cl-use-t">{it.use}</p>
            </aside>
          </div>
          {it.tv && (
            <div className="cl-tv-wrap">
              <p className="cl-tools-k">{it.tv.label}</p>
              <div className="cl-tv">
                <iframe src={demo} title={it.tv.frameTitle} loading="lazy" tabIndex={-1} />
              </div>
              <div className="cl-tv-foot">
                <p className="sp-note">{it.tv.note}</p>
                <a className="h7-btn h7-btn-line" href={demo} target="_blank" rel="noopener">{it.tv.cta} →</a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ClubsPage() {
  const { lang } = useLang();
  const c = CLUBS_CONTENT[lang];
  const [open, setOpen] = useState<number | null>(null);
  // Le profil choisi : toute la page parle sa langue.
  const [active, setActive] = useState(0);
  const prof = c.profiles.items[active] ?? c.profiles.items[0];

  const f = (t: string) => fill(t, prof.w, prof.invite);
  const fx = (items: Pair[]) => items.map((it) => ({ title: f(it.title), body: f(it.body) }));
  // Le VRAI écran de salle (src/app/club-screen) avec son club d'exemple : classement, duels d'hier, objectif du mois.
  const demo = "/club-screen?code=DEMO";

  return (
    <SitePage>
      <PageHero
        full
        bg={<PhotoBg src="/images/clubs-team.webp" alt="" pos="center 38%" a={[0.88, 0.5, 0.12]} b={0.9} />}
        kick={c.hero.kick}
        title={<><span>{c.hero.title[0]}</span> <span><em>{c.hero.title[1]}</em></span></>}
        lead={c.hero.lead}
        stats={c.hero.stats}
      >
        <StoreBtns ios={c.hero.ios} android={c.hero.android} dark />
      </PageHero>

      <Sec id="profiles" kick={c.profiles.kick} title={<><span>{c.profiles.title[0]}</span> <span>{c.profiles.title[1]}</span></>} lead={c.profiles.lead} split>
        <Profiles p={c.profiles} demo={demo} active={active} setActive={setActive} />
      </Sec>

      <Sec id="world" kick={c.world.kick} title={<><span>{prof.world.title}</span> <span>{c.world.title2}</span></>} lead={prof.world.lead} split>
        <Reveal className="cl-vs">
          {[prof.world.old, { k: `Attax · ${prof.world.k}`, items: prof.world.items }, c.world.leagues].map((v, i) => (
            <div key={v.k} className={`cl-vs-col${i === 0 ? " is-old" : i === 2 ? " is-us" : ""}`}>
              <p className="cl-vs-k">{v.k}</p>
              <ul>{v.items.map((t) => <li key={t}>{f(t)}</li>)}</ul>
            </div>
          ))}
        </Reveal>
        {/* Les 3 écrans, montés comme sur l'accueil (Beyond7) : le match avec ses boxeurs qui échangent des coups (vidéo en boucle sur la zone du combat), la saison en « moment » de
            l'app, le binôme en capture entière (barre d'état comprise) avec ses poings animés. */}
        <p className="cl-tools-k cl-shots-k">{f(c.world.shotsLabel)}</p>
        <Reveal className="sp-phones">
          <figure><AppPhone src={`/screens/story/${lang}/final-round.webp`} alt={c.world.shots[0].title} overlay={
            <div className="ph6-fight"><LoopVideo mp4="/videos/fighters-loop.mp4" poster="/videos/fighters-loop-poster.jpg" label={c.world.shots[0].title} ratio="540 / 460" /></div>
          } /><figcaption><b>{c.world.shots[0].title}</b>{c.world.shots[0].body}</figcaption></figure>
          <figure><AppPhone><SeasonMomentLive lang={lang} /></AppPhone><figcaption><b>{c.world.shots[1].title}</b>{c.world.shots[1].body}</figcaption></figure>
          <figure><AppPhone src={`/screens/story/${lang}/duo.webp`} alt={c.world.shots[2].title} baked overlay={<DuoFistsLive src={`/screens/story/${lang}/duo.webp`} />} /><figcaption><b>{c.world.shots[2].title}</b>{c.world.shots[2].body}</figcaption></figure>
        </Reveal>
        <div className="cl-world"><Grid items={c.world.items} numbered /></div>
        <Reveal className="h7-mid-row is-in cl-world-foot">
          <p className="h7-mid-t">{prof.world.foot}</p>
          <div className="h7-ctas" style={{ marginTop: 0 }}>
            <a className="h7-btn h7-btn-line" href="/discover">{c.world.cta}</a>
          </div>
        </Reveal>
      </Sec>

      <Sec id="how" kick={c.steps.kick} title={<><span>{c.steps.title[0]}</span> <span>{c.steps.title[1]}</span></>} lead={c.steps.lead} split>
        <Grid items={fx(c.steps.items)} numbered />
        <div className="h7-ctas cl-ctas">
          <StoreBtns ios={c.hero.ios} android={c.hero.android} />
        </div>
      </Sec>

      <Sec id="trust" kick={c.trust.kick} title={<><span>{c.trust.title[0]}</span> <span>{f(c.trust.title[1])}</span></>}>
        <Grid items={fx(c.trust.items)} />
      </Sec>

      <Sec id="faq" kick={c.faq.kick} title={c.faq.title}>
        <div className="h7-faq-list">
          {c.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`h7-faq-item${isOpen ? " is-open" : ""}`}>
                <button className="h7-faq-q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span>{f(item.q)}</span>
                  <span className="h7-plus" aria-hidden="true">+</span>
                </button>
                {isOpen && <p className="h7-faq-a">{f(item.a)}</p>}
              </div>
            );
          })}
        </div>

        <Reveal className="h7-mid-row is-in sp-faq-contact">
          <div>
            <p className="h7-mid-t">{c.final.title}</p>
            <p className="sp-note" style={{ marginTop: "0.5rem", fontSize: "1.0625rem" }}>{c.final.body}</p>
          </div>
          <div className="h7-ctas" style={{ marginTop: 0 }}>
            <a className="h7-btn h7-btn-ink" href={`mailto:${PARTNERS_EMAIL}`}>{c.final.mailLabel}</a>
          </div>
        </Reveal>
      </Sec>

      <FinalCta />
    </SitePage>
  );
}
