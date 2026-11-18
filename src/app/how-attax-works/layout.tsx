import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Attax Works",
  description:
    "Discover how Attax turns your workouts and steps into daily boxing duels: 7 rounds, 3 cards every morning, Fight Night at 9:30 PM, leagues of 8 players. Through Apple Health and Health Connect.",
  alternates: { canonical: "https://attax.app/how-attax-works" },
  openGraph: {
    title: "How Attax Works | Attax",
    description: "Real activity. Real competition. No manual tracking.",
    url: "https://attax.app/how-attax-works",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
