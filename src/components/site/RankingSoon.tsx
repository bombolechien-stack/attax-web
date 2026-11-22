"use client";
import Link from "next/link";
import { PageHero } from "@/components/site/Site";
import { useLang } from "@/lib/i18n";

// Classement mondial (bientôt) : textes dans la langue du site (22/11).
export default function RankingSoon() {
  const { lang } = useLang();
  const fr = lang === "fr";
  return (
    <PageHero
      full
      bg={<div style={{ position: "absolute", inset: 0, background: "#0a0a0a" }} />}
      kick={fr ? "Bientôt" : "Coming soon"}
      title={fr ? <><span>Classement</span> <span><em>mondial</em></span></> : <><span>Global</span> <span><em>Rankings</em></span></>}
      lead={fr
        ? "Le classement mondial d'Attax est en préparation. Bientôt, tu verras où tu te situes face aux joueurs du monde entier."
        : "The global Attax leaderboard is in development. Soon you'll be able to see how you rank against players worldwide."}
    >
      <Link className="h7-btn h7-btn-light" href="/">{fr ? "← Retour à l'accueil" : "← Back home"}</Link>
    </PageHero>
  );
}
