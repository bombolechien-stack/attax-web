import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness Competition App | Attax",
  description:
    "Attax is the fitness competition app where real-world activity becomes a competitive advantage. Train, compete, progress and climb the rankings.",
  alternates: { canonical: "https://attax.app/fitness-competition-app" },
  openGraph: {
    title: "Fitness Competition App | Attax",
    description: "A better reason to stay active — compete through real activity.",
    url: "https://attax.app/fitness-competition-app",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
