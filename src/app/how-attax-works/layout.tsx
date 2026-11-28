import type { Metadata } from "next";
import { localMeta } from "@/lib/seo";

const EN_META: Metadata = {
  title: "How Attax Works",
  description:
    "How Attax turns your workouts and steps into daily duels: 7 rounds, 3 cards every morning, Fight Night at 9:30 PM, leagues of 8 players.",
  alternates: { canonical: "https://attax.app/how-attax-works" },
  openGraph: {
    title: "How Attax Works | Attax",
    description: "Real activity. Real competition. No manual tracking.",
    url: "https://attax.app/how-attax-works",
  },
};
export const generateMetadata = () => localMeta("/how-attax-works", EN_META);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
