import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Attax Works | Attax",
  description:
    "Discover how Attax transforms your real-world activity into competition, progression, and daily challenges through Apple Health and Health Connect.",
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
