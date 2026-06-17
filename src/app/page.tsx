import type { Metadata } from "next";
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
    "Attax is the competitive fitness game where your real-world activity powers daily battles, rankings and progression.",
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
    "Attax is the competitive fitness game where your real-world activity powers daily battles, rankings and progression.",
  url: "https://attax.app",
  downloadUrl: "https://attax.app/download",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "120" },
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
        text: "Yes. Attax requires a smartwatch or fitness tracker (Apple Watch, Fitbit, Garmin, or similar) to automatically synchronize your activity through Apple Health or Health Connect.",
      },
    },
    {
      "@type": "Question",
      name: "Does walking count in Attax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every form of activity contributes — walking, running, cycling, swimming, gym sessions, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Is Attax free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Attax is free to download and play.",
      },
    },
    {
      "@type": "Question",
      name: "Does Attax work on iPhone and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Attax is available on both the App Store (iOS) and Google Play (Android).",
      },
    },
    {
      "@type": "Question",
      name: "What is Attax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Attax is a competitive fitness game where your real-world activity — walking, running, cycling, gym sessions — powers daily battles and rankings against other players.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
