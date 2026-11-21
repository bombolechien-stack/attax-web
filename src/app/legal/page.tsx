"use client";
import Link from "next/link";
import { SitePage, PageHero, Article } from "@/components/site/Site";
import { useLang } from "@/lib/i18n";

// Mentions légales (art. 6-III de la loi n° 2004-575 du 21 juin 2004, LCEN).

function ContentFr() {
  return (
    <>

      <section>
        <h2>Éditeur</h2>
        <p>Le site attax.app et l'application mobile Attax (iOS et Android) sont édités par <strong>ATTAX</strong>, société par actions simplifiée (SAS) au capital de 1 000 €, dont le siège social est situé 61 rue de Lyon, 75012 Paris, France.</p>
        <p>Immatriculée au Registre du commerce et des sociétés de Paris sous le numéro 107 084 337 (RCS Paris 107 084 337). SIRET du siège : 107 084 337 00016. N° de TVA intracommunautaire : FR81107084337.</p>
        <p>Contact : <a href="mailto:contact@attax.app">contact@attax.app</a></p>
        <p>Directeur de la publication : Guillaume Ruiz, Président.</p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p><strong>Site web</strong> : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).</p>
        <p><strong>Données de l'application</strong> : Supabase Inc. (supabase.com), sur des serveurs situés dans l'Union européenne (Paris, France).</p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>ATTAX est responsable du traitement des données personnelles collectées par l'application et le site. Leur utilisation et tes droits sont décrits dans la <Link href="/privacy">politique de confidentialité</Link> et la <Link href="/health-data-privacy">politique relative aux données de santé</Link>.</p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>La marque Attax, les logos, les textes, les visuels et l'application sont la propriété d'ATTAX. Toute reproduction ou utilisation sans autorisation écrite préalable est interdite.</p>
      </section>
    </>
  );
}

function ContentEn() {
  return (
    <>

      <section>
        <h2>Publisher</h2>
        <p>The website attax.app and the Attax mobile app (iOS and Android) are published by <strong>ATTAX</strong>, a French simplified joint-stock company (SAS) with a share capital of €1,000, whose registered office is at 61 rue de Lyon, 75012 Paris, France.</p>
        <p>Registered with the Paris Trade and Companies Register under number 107 084 337 (RCS Paris 107 084 337). SIRET: 107 084 337 00016. EU VAT number: FR81107084337.</p>
        <p>Contact: <a href="mailto:contact@attax.app">contact@attax.app</a></p>
        <p>Publication director: Guillaume Ruiz, President.</p>
      </section>

      <section>
        <h2>Hosting</h2>
        <p><strong>Website</strong>: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA (vercel.com).</p>
        <p><strong>App data</strong>: Supabase Inc. (supabase.com), on servers located in the European Union (Paris, France).</p>
      </section>

      <section>
        <h2>Personal data</h2>
        <p>ATTAX is the data controller for the personal data collected by the app and the website. How it is used and your rights are described in our <Link href="/privacy">Privacy Policy</Link> and <Link href="/health-data-privacy">Consumer Health Data Privacy Policy</Link>.</p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>The Attax brand, logos, texts, visuals and the app are the property of ATTAX. Any reproduction or use without prior written permission is prohibited.</p>
      </section>
    </>
  );
}

export default function LegalPage() {
  const { lang } = useLang();
  const fr = lang === "fr";
  return (
    <SitePage>
      <PageHero
        bg={<></>}
        compact
        kick={fr ? <>Légal</> : <>Legal</>}
        title={fr ? <>Mentions légales</> : <>Legal Notice</>}
        meta={fr ? <>Dernière mise à jour : 20 octobre 2026</> : <>Last updated: October 20, 2026</>}
      />
      <Article
        foot={<>
            <Link href="/privacy">{lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}</Link>
            <Link href="/terms">{lang === "fr" ? "Conditions d'utilisation" : "Terms of Service"}</Link>
            <Link href="/">{lang === "fr" ? "Retour à Attax" : "Back to Attax"}</Link>
        </>}
      >
        {fr ? <ContentFr /> : <ContentEn />}
      </Article>
    </SitePage>
  );
}
