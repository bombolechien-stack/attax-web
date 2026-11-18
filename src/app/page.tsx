import type { Metadata } from "next";
import ComingSoonGate from "@/components/ComingSoonGate";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import SportsMarquee from "@/components/home/SportsMarquee";
import HowItWorks from "@/components/home/HowItWorks";
import DailyLoop from "@/components/home/DailyLoop";
import DailyMatch from "@/components/home/DailyMatch";
import CardsShowcase from "@/components/home/CardsShowcase";
import Testimonials from "@/components/home/Testimonials";
import VisualGrid from "@/components/home/VisualGrid";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import ArenaSection from "@/components/home/ArenaSection";
import PrivacyStrip from "@/components/home/PrivacyStrip";
import FAQ from "@/components/home/FAQ";
import FightNight from "@/components/home/FightNight";
import Beyond from "@/components/home/Beyond";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a smartwatch to use Attax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You need a device that measures your heart rate — smartwatch, fitness band or chest strap — synced with Apple Health (iPhone) or Health Connect (Android). Your phone alone counts your steps, but your workouts are measured by your watch.",
      },
    },
    {
      "@type": "Question",
      name: "How do I earn pts in Attax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your workouts and your steps, measured by your watch through Apple Health or Health Connect, become pts. Intensity pays, not just volume. Manual entries don't count.",
      },
    },
    {
      "@type": "Question",
      name: "How is a match decided?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A match has 7 rounds: the 6 previous days and today. Each day is won by whoever scored the most pts that day, and every round lost costs HP. The final round is fought at 9:30 PM, after the cards are revealed: whoever keeps the most HP wins. Never a draw.",
      },
    },
    {
      "@type": "Question",
      name: "Can I play Attax with friends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Create a ranked league with your friends, or a custom league from 2 to 40 players. Share the code, they join in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Is Attax free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Attax is free to download and play, with no ads.",
      },
    },
    {
      "@type": "Question",
      name: "Does Attax work on iPhone and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Attax is available on iPhone (App Store) and Android (Google Play).",
      },
    },
    {
      "@type": "Question",
      name: "What is Attax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Attax is a competitive fitness game: your real workouts, measured by your watch, power a daily boxing duel against a player of your league. Leagues of 8 players, 7 rounds per match, 12 tactical cards, Fight Night every evening at 9:30 PM, a world season and ranks from Rookie to Legend.",
      },
    }
  ],
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
      <Hero />
      <InfoSection />
      <SportsMarquee />
      <HowItWorks />
      <DailyLoop />
      <DailyMatch />
      <FightNight />
      <CardsShowcase />
      <Testimonials />
      <VisualGrid />
      <Beyond />
      <FeaturesGrid />
      <ArenaSection />
      <PrivacyStrip />
      <FAQ />
    </ComingSoonGate>
  );
}
