import type { Metadata } from "next";
import { CLUBS_CONTENT, fill } from "./content";

export const metadata: Metadata = {
  title: "Attax Clubs: Get Your Community Moving Every Day",
  description:
    "Create a free Attax club for your gym, sports club, clients, community or company. A rival every day, one ranking, a champion every month, a live TV screen and tools for the club manager. No health data shared.",
  alternates: { canonical: "https://attax.app/clubs" },
  openGraph: {
    title: "Attax Clubs: Get Your Community Moving Every Day",
    description: "A rival every day, a champion every month, a cup with your logo. Create your club in one minute, for free.",
    url: "https://attax.app/clubs",
  },
};

// Données structurées FAQPage (Google) générées depuis le contenu de la page, en anglais (comme /faq).
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CLUBS_CONTENT.en.faq.items.map((item) => ({
    "@type": "Question",
    name: fill(item.q, CLUBS_CONTENT.en.w),
    acceptedAnswer: { "@type": "Answer", text: fill(item.a, CLUBS_CONTENT.en.w) },
  })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
