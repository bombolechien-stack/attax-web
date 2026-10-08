import type { Metadata } from "next";
import { FAQ_CONTENT } from "./content";

export const metadata: Metadata = {
  title: "FAQ — Duels, Points, Cards, Ranks & Watches",
  description:
    "All the answers about Attax: how duels and leagues work, points and heart-rate zones, the 12 strategy cards, ranks from Rookie to Legend, and compatible watches.",
  alternates: { canonical: "https://attax.app/faq" },
  openGraph: {
    title: "Attax FAQ",
    description: "Duels, points, heart-rate zones, cards, ranks and compatible watches.",
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
