import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness Gamification Explained | Attax",
  description:
    "Fitness gamification applies game mechanics to exercise. Learn why it works and how Attax uses competition, progression and rewards to keep you active.",
  alternates: { canonical: "https://attax.app/fitness-gamification" },
  openGraph: {
    title: "Fitness Gamification Explained | Attax",
    description: "Why games succeed where motivation fails — and how Attax applies it to fitness.",
    url: "https://attax.app/fitness-gamification",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
