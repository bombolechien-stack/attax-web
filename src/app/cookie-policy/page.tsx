"use client";
import Link from "next/link";
import { SitePage, PageHero, Article } from "@/components/site/Site";
import { useLang } from "@/lib/i18n";


function ContentEn() {
  return (
    <>

        <section>
          <h2>1. In Short</h2>
          <p>The attax.app website uses no advertising cookies, no analytics and no third-party tracking. It only stores what it needs to work: your language, your choice about this notice and, during the preview phase, your access to the full website. No consent is required for these, as they are strictly necessary.</p>
        </section>

        <section>
          <h2>2. What We Store on Your Device</h2>
          <p><strong>attax-lang</strong> (local storage): your language preference (English or French). Essential.</p>
          <p><strong>attax_cookie_consent</strong> (local storage): remembers that you have seen this notice. Essential.</p>
          <p><strong>attax_preview_unlocked</strong> (cookie, 1 year, and local storage): remembers access to the full website while it is in preview. Essential.</p>
          <p>None of these contain personal data, and none are shared with anyone. Like any website, our host (Vercel) processes technical connection data such as your IP address to deliver and secure the site; this does not involve cookies.</p>
        </section>

        <section>
          <h2>3. The Attax App</h2>
          <p>This policy covers the website only. How the Attax mobile app handles your data, and the data you send through the website's contact form or waiting list, is explained in our <Link href="/privacy">Privacy Policy</Link>.</p>
        </section>

        <section>
          <h2>4. Your Choices</h2>
          <p>You can delete this data at any time from your browser settings (cookies and site data). The website will simply be shown in English until you choose your language again.</p>
        </section>

        <section>
          <h2>5. Contact</h2>
          <p>For questions about this policy, contact <a href="mailto:contact@attax.app">contact@attax.app</a>.</p>
        </section>

    </>
  );
}

function ContentFr() {
  return (
    <>

        <section>
          <h2>1. En bref</h2>
          <p>Le site attax.app n'utilise aucun cookie publicitaire, aucun outil de statistiques et aucun pistage tiers. Il ne retient que ce dont il a besoin pour fonctionner : ta langue, ton choix concernant ce message et, pendant la phase de prévisualisation, ton accès au site complet. Ces éléments étant strictement nécessaires, ils ne demandent pas de consentement.</p>
        </section>

        <section>
          <h2>2. Ce que nous enregistrons sur ton appareil</h2>
          <p><strong>attax-lang</strong> (stockage local) : ta langue (français ou anglais). Indispensable.</p>
          <p><strong>attax_cookie_consent</strong> (stockage local) : retient que tu as vu ce message. Indispensable.</p>
          <p><strong>attax_preview_unlocked</strong> (cookie, 1 an, et stockage local) : retient l'accès au site complet pendant sa phase de prévisualisation. Indispensable.</p>
          <p>Aucune de ces données ne contient d'informations personnelles, et aucune n'est partagée. Comme pour tout site, notre hébergeur (Vercel) traite des données techniques de connexion, comme ton adresse IP, pour afficher et sécuriser le site ; cela ne passe pas par des cookies.</p>
        </section>

        <section>
          <h2>3. L'application Attax</h2>
          <p>Cette politique concerne uniquement le site. La façon dont l'application mobile Attax traite tes données, ainsi que les données envoyées via le formulaire de contact ou la liste d'attente du site, est expliquée dans notre <Link href="/privacy">politique de confidentialité</Link>.</p>
        </section>

        <section>
          <h2>4. Tes choix</h2>
          <p>Tu peux supprimer ces données à tout moment dans les réglages de ton navigateur (cookies et données de site). Le site s'affichera simplement en anglais jusqu'à ce que tu choisisses à nouveau ta langue.</p>
        </section>

        <section>
          <h2>5. Contact</h2>
          <p>Pour toute question sur cette politique, écris à <a href="mailto:contact@attax.app">contact@attax.app</a>.</p>
        </section>
    </>
  );
}

export default function CookiePolicyPage() {
  const { lang } = useLang();
  const fr = lang === "fr";
  return (
    <SitePage>
      <PageHero
        bg={<></>}
        compact
        kick={fr ? <>Légal</> : <>Legal</>}
        title={fr ? <>Politique cookies</> : <>Cookie Policy</>}
        meta={fr ? <>Dernière mise à jour : 18 novembre 2026</> : <>Last updated: November 18, 2026</>}
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
