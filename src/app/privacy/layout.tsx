import type { Metadata } from "next";
import { localMeta } from "@/lib/seo";

const EN_META: Metadata = {
  title: "Privacy Policy",
  description: "Attax Privacy Policy: how we collect, use and protect your personal data.",
  alternates: { canonical: "https://attax.app/privacy" },
  robots: { index: true, follow: false },
};
export const generateMetadata = () => localMeta("/privacy", EN_META);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
