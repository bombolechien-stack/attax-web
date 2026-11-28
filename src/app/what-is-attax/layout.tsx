import type { Metadata } from "next";
import { localMeta } from "@/lib/seo";

const EN_META: Metadata = {
  title: "What is Attax? The Competitive Fitness Game",
  description:
    "Attax is a competitive fitness game powered by real-world activity: your workouts become daily duels. Learn what makes it different from traditional fitness apps.",
  alternates: { canonical: "https://attax.app/what-is-attax" },
  openGraph: {
    title: "What is Attax? The Competitive Fitness Game",
    description: "A competitive fitness game powered by real-world activity.",
    url: "https://attax.app/what-is-attax",
  },
};
export const generateMetadata = () => localMeta("/what-is-attax", EN_META);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
