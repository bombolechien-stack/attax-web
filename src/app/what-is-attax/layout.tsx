import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Attax? The Competitive Fitness Game",
  description:
    "Attax is a competitive fitness game powered by real-world activity. Learn what makes it different from traditional fitness apps.",
  alternates: { canonical: "https://attax.app/what-is-attax" },
  openGraph: {
    title: "What is Attax? The Competitive Fitness Game",
    description: "A competitive fitness game powered by real-world activity.",
    url: "https://attax.app/what-is-attax",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
