import type { Metadata } from "next";
import { localMeta } from "@/lib/seo";

const EN_META: Metadata = {
  title: "Consumer Health Data Privacy Policy",
  description: "How Attax collects, uses and protects your consumer health data (heart rate, steps).",
  alternates: { canonical: "https://attax.app/health-data-privacy" },
  robots: { index: true, follow: false },
};
export const generateMetadata = () => localMeta("/health-data-privacy", EN_META);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
