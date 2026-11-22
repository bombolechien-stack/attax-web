import type { Metadata } from "next";
import ComingSoonGate from "@/components/ComingSoonGate";
import Hero from "@/components/home/Hero";
import Opponent6 from "@/components/home/Opponent6";
import Workout6 from "@/components/home/Workout6";
import DailyMatch from "@/components/home/DailyMatch";
import CardTwist6 from "@/components/home/CardTwist6";
import LeagueTable from "@/components/home/LeagueTable";
import InfoSection from "@/components/live/InfoSection";
import FeaturesGrid from "@/components/live/FeaturesGrid";
import ArenaSection from "@/components/live/ArenaSection";
import PrivacyStrip from "@/components/live/PrivacyStrip";
import FAQ from "@/components/live/FAQ";
import MidCta from "@/components/live/MidCta";
import Beyond7 from "@/components/home/Beyond7";
import { LIVE } from "@/lib/liveCopy";
import "./home-p5.css";

export const metadata: Metadata = {
  title: "Attax: Sport is now a game.",
  description:
    "Attax turns your real workouts into daily boxing duels: leagues of 8, 7 rounds per match, 12 tactical cards and Fight Night every evening at 9:30 PM. Free on iPhone & Android.",
  alternates: { canonical: "https://attax.app" },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Attax",
  applicationCategory: "GameApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Attax turns your real workouts into daily boxing duels: leagues of 8, 7 rounds per match, 12 tactical cards and Fight Night every evening at 9:30 PM. Free on iPhone & Android.",
  url: "https://attax.app",
  downloadUrl: "https://attax.app/download",
};

// Données structurées = exactement les questions affichées sur l'accueil (FAQ.tsx), en anglais.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LIVE.en.faq.items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function HomePage() {
  return (
    <ComingSoonGate>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Structure validée le 21/11 : l'histoire d'une journée de match de Johnny contre Sophie, en 7 écrans. Hero ->
          l'adversaire du jour -> la séance devient des pts -> 7 rounds -> une carte peut tout renverser (et le vainqueur) ->
          grimpe dans ta ligue -> télécharger ; puis une FAQ courte. Les règles détaillées vivent dans la FAQ et Comment ça marche. */}
      {/* Hero, puis « L'idée » telle qu'en ligne (master), puis les 5 chapitres de l'histoire, puis les sections du site en
          ligne (Fonctionnalités, L'arène, Tes données, FAQ) et la bande « Télécharger » du pied de page, comme en ligne. */}
      {/* Passe 7 (21/11) : une seule page harmonisée, fond de l'app partout (#EEF1F7), sections reprises du site en ligne
          remises dans le système des chapitres (classes .h7-* de home-p5.css). */}
      <div className="pm p5 h7-page">
      <Hero />
      <InfoSection />
      <Opponent6 />
      <Workout6 />
      <DailyMatch />
      <CardTwist6 />
      <LeagueTable />
      <Beyond7 />
      <MidCta />
      <FeaturesGrid />
      <FAQ />
      <PrivacyStrip />
      <ArenaSection />
      </div>
    </ComingSoonGate>
  );
}
