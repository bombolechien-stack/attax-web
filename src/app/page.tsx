import type { Metadata } from "next";
import ComingSoonGate from "@/components/ComingSoonGate";
import Hero from "@/components/home/Hero";
import SportsMarquee from "@/components/home/SportsMarquee";
import DailyMatch from "@/components/home/DailyMatch";
import CardsShowcase from "@/components/home/CardsShowcase";
import FightNight from "@/components/home/FightNight";
import Beyond from "@/components/home/Beyond";
import PrivacyStrip from "@/components/home/PrivacyStrip";
import FAQ from "@/components/home/FAQ";
import { T } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Attax — Your workouts become a fight.",
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
      {/* Parcours court, une idée par section, sans redite :
          01 bouger (pts) → 02 le match (7 rounds) → 03 les cartes → 04 Soir de combat → au-delà du match. */}
      <Hero />
      <SportsMarquee />
      <DailyMatch />
      <CardsShowcase />
      <FightNight />
      <Beyond />
      <PrivacyStrip />
      <FAQ />
    </ComingSoonGate>
  );
}
