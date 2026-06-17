import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple Health Fitness Game | Attax",
  description:
    "Attax is the fitness game powered by Apple Health. Every workout contributes. Every step matters. Every day becomes an opportunity to win.",
  alternates: { canonical: "https://attax.app/apple-health-fitness-game" },
  openGraph: {
    title: "Apple Health Fitness Game | Attax",
    description: "Turn your Apple Health activity into competition, progression and daily challenges.",
    url: "https://attax.app/apple-health-fitness-game",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
