import type { Metadata } from "next";
import { localMeta, reqLang } from "@/lib/seo";
import { CLUBS_CONTENT, fill } from "./content";

const EN_META: Metadata = {
  title: "Attax Clubs: Get Your Community Moving Every Day",
  description:
    "Create a free Attax club for your gym, sports club, clients, community or company. A rival every day, a champion every month. No health data shared.",
  alternates: { canonical: "https://attax.app/clubs" },
  openGraph: {
    title: "Attax Clubs: Get Your Community Moving Every Day",
    description: "A rival every day, a champion every month, a cup with your logo. Create your club in one minute, for free.",
    url: "https://attax.app/clubs",
  },
};
export const generateMetadata = () => localMeta("/clubs", EN_META);

// Données structurées FAQPage (Google) générées depuis le contenu de la page, en anglais (comme /faq).
const faqSchemaFor = (lang: "en" | "fr") => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CLUBS_CONTENT[lang].faq.items.map((item) => ({
    "@type": "Question",
    name: fill(item.q, CLUBS_CONTENT[lang].w),
    acceptedAnswer: { "@type": "Answer", text: fill(item.a, CLUBS_CONTENT[lang].w) },
  })),
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
