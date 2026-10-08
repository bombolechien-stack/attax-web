import type { Metadata } from "next";
import ComingSoonGate from "@/components/ComingSoonGate";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
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

export const metadata: Metadata = {
  title: "Attax — Sport is now a game.",
  description:
    "Attax turns your real workouts into daily duels: heart rate and steps become points, leagues of 8, strategy cards and a verdict every night at 9:30 PM. Free on iPhone & Android.",
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
    "Attax turns your real workouts into daily duels: heart rate and steps become points, leagues of 8, strategy cards and a verdict every night at 9:30 PM. Free on iPhone & Android.",
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
        text: "Yes. You need a device that measures your heart rate — smartwatch, fitness band or chest strap — synced with Apple Health (iPhone) or Health Connect (Android). Your phone alone counts your steps, but workouts are scored from your heart rate.",
      },
    },
    {
      "@type": "Question",
      name: "How are points calculated in Attax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your watch measures your effort through Apple Health or Health Connect: every minute your heart works hard earns activity points, and your steps count too.",
      },
    },
    {
      "@type": "Question",
      name: "How is a duel decided?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your duel score is your activity of the day plus the 6 previous days, revealed round by round during the day. At 9:30 PM the highest score wins, after strategy cards are applied.",
      },
    },
    {
      "@type": "Question",
      name: "Can I play Attax with friends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Create a league in the app, share the code and start it when everyone is in.",
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
        text: "Attax is a competitive fitness game: your real activity, measured by your watch, powers a daily duel against a player of your league. Leagues of 8 players, 7 duels in 7 days, strategy cards and a global rank from Rookie to Legend.",
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
      <HowItWorks />
      <DailyLoop />
      <DailyMatch />
      <CardsShowcase />
      <Testimonials />
      <VisualGrid />
      <FeaturesGrid />
      <ArenaSection />
      <PrivacyStrip />
      <FAQ />
    </ComingSoonGate>
  );
}
