import type { Metadata } from "next";
import ComingSoonGate from "@/components/ComingSoonGate";
import Hero from "@/components/home/Hero";
import Idea from "@/components/home/Idea";
import SportsMarquee from "@/components/home/SportsMarquee";
import DailyMatch from "@/components/home/DailyMatch";
import CardsShowcase from "@/components/home/CardsShowcase";
import FightNight from "@/components/home/FightNight";
import LeagueTable from "@/components/home/LeagueTable";
import Beyond from "@/components/home/Beyond";
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
  mainEntity: T.en.faq.items.map((it) => ({
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
      {/* Passe 5 (20/11) : une page deux fois plus courte et vivante. Hero (vidéo des sportifs, le haut du téléphone) →
          le match du jour (boxeurs face à face, adversaire, compte à rebours, faits du jeu) → tous les sports comptent →
          une journée (frise de 5 captures) → 7 jours. 7 rounds. → les cartes → Soir de combat (les coups, le K.O.) →
          la ligue (classement vivant, rangs) → au-delà → FAQ → appel final. */}
      <div className="pm p5">
      <Hero />
      <Idea />
      <SportsMarquee />
      <DailyMatch />
      <CardsShowcase />
      <FightNight />
      <LeagueTable />
      <Beyond />
      <FAQ />
      </div>
    </ComingSoonGate>
  );
}
