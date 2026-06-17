import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Attax — The Competitive Fitness Game",
  description:
    "Discover how Attax turns your daily activity into competition. Face real opponents, climb the rankings and make every workout count.",
  alternates: { canonical: "https://attax.app/discover" },
  openGraph: {
    title: "Discover Attax — The Competitive Fitness Game",
    description: "Face real opponents, climb the rankings and make every workout count.",
    url: "https://attax.app/discover",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
