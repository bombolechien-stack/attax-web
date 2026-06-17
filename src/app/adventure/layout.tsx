import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Adventure — Attax Story",
  description:
    "The story behind Attax — a fitness game built around real activity, competition, and the belief that sport should be more than just tracking.",
  alternates: { canonical: "https://attax.app/adventure" },
  openGraph: {
    title: "The Adventure — Attax Story",
    description: "The story behind Attax — built around real activity and real competition.",
    url: "https://attax.app/adventure",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
