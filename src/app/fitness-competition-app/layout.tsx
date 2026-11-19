import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness Competition App",
  description:
    "Attax is the fitness competition app where your real workouts become daily boxing duels. Train, compete in leagues of 8 players, and climb from Rookie to Legend.",
  alternates: { canonical: "https://attax.app/fitness-competition-app" },
  openGraph: {
    title: "Fitness Competition App | Attax",
    description: "A better reason to stay active: compete through real activity.",
    url: "https://attax.app/fitness-competition-app",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
