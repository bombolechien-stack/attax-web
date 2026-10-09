import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Health Data Privacy Policy",
  description: "How Attax collects, uses and protects your consumer health data (heart rate, steps).",
  alternates: { canonical: "https://attax.app/health-data-privacy" },
  robots: { index: true, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
