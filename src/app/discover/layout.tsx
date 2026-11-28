import type { Metadata } from "next";
import { localMeta } from "@/lib/seo";

const EN_META: Metadata = {
  title: "Discover Attax: The Competitive Fitness Game",
  description:
    "A duel every day against a player of your league, strategy cards and a verdict at 9:30 PM. Attax turns your daily activity into competition.",
  alternates: { canonical: "https://attax.app/discover" },
  openGraph: {
    title: "Discover Attax: The Competitive Fitness Game",
    description: "A duel every day against a player of your league, strategy cards and a verdict at 9:30 PM. Make every workout count.",
    url: "https://attax.app/discover",
  },
};
export const generateMetadata = () => localMeta("/discover", EN_META);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
