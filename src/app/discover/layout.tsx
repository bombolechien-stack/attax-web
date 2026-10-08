import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Attax — The Competitive Fitness Game",
  description:
    "Discover how Attax turns your daily activity into competition. A duel every day against a player of your league, strategy cards and a verdict at 9:30 PM. Make every workout count.",
  alternates: { canonical: "https://attax.app/discover" },
  openGraph: {
    title: "Discover Attax — The Competitive Fitness Game",
    description: "A duel every day against a player of your league, strategy cards and a verdict at 9:30 PM. Make every workout count.",
    url: "https://attax.app/discover",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
