import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Logos, screenshots, gameplay video, ready-to-use texts and key facts to write about Attax, the fitness game where your real workouts become daily duels.",
  alternates: { canonical: "https://attax.app/press" },
  openGraph: {
    title: "Attax Press Kit",
    description: "Logos, screenshots, video and ready-to-use texts to talk about Attax.",
    url: "https://attax.app/press",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
