import type { Metadata } from "next";
import { FAQ_CONTENT } from "./content";

export const metadata: Metadata = {
  title: "FAQ — Matches, Rounds, Cards, Ranks & Watches",
  description:
    "All the answers about Attax: daily boxing duels in 7 rounds, Fight Night at 9:30 PM, leagues of 8 players, the 12 cards, ranks from Rookie to Legend, and compatible watches.",
  alternates: { canonical: "https://attax.app/faq" },
  openGraph: {
    title: "Attax FAQ",
    description: "Matches, rounds, cards, leagues, ranks and compatible watches.",
    url: "https://attax.app/faq",
  },
};

// Données structurées FAQPage (Google) générées depuis le contenu de la page.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CONTENT.en.categories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: [item.a, ...(item.list ?? []), item.after ?? ""].filter(Boolean).join(" "),
      },
    })),
  ),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
