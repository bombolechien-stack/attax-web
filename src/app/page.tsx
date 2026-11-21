import type { Metadata } from "next";
import ComingSoonGate from "@/components/ComingSoonGate";
import Hero from "@/components/home/Hero";
import Opponent6 from "@/components/home/Opponent6";
import Workout6 from "@/components/home/Workout6";
import DailyMatch from "@/components/home/DailyMatch";
import CardTwist6 from "@/components/home/CardTwist6";
import LeagueTable from "@/components/home/LeagueTable";
import Download6 from "@/components/home/Download6";
import FAQ from "@/components/home/FAQ";
import { T } from "@/lib/translations";
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
  applicationCategory: "HealthApplication",
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
  mainEntity: T.en.faq.items.slice(0, 5).map((it) => ({
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
      <div className="pm p5">
      <Hero />
      <Opponent6 />
      <Workout6 />
      <DailyMatch />
      <CardTwist6 />
      <LeagueTable />
      <Download6 />
      <FAQ />
      </div>
    </ComingSoonGate>
  );
}
