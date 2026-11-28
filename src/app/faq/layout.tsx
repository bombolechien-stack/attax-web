import type { Metadata } from "next";
import { localMeta, reqLang } from "@/lib/seo";
import { FAQ_CONTENT } from "./content";

const EN_META: Metadata = {
  title: "FAQ: Matches, Rounds, Cards, Ranks & Watches",
  description:
    "All the answers about Attax: duels in 7 rounds, Fight Night at 9:30 PM, leagues of 8, the 12 cards, ranks, the Season, compatible watches and heart-rate sensors.",
  alternates: { canonical: "https://attax.app/faq" },
  openGraph: {
    title: "Attax FAQ",
    description: "Matches, rounds, cards, leagues, ranks and compatible watches.",
    url: "https://attax.app/faq",
  },
};
export const generateMetadata = () => localMeta("/faq", EN_META);

// Données structurées FAQPage (Google) générées depuis le contenu de la page.
const faqSchemaFor = (lang: "en" | "fr") => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CONTENT[lang].categories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: [item.a, ...(item.list ?? []), item.after ?? ""].filter(Boolean).join(" "),
      },
    })),
  ),
});

export default async function Layout({ children }: { children: React.ReactNode }) {
  const faqSchema = faqSchemaFor(await reqLang());
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
