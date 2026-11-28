import type { Metadata } from "next";
import { localMeta } from "@/lib/seo";

const EN_META: Metadata = {
  title: "Cookie Policy",
  description: "Attax Cookie Policy: how we use cookies and similar technologies on our website.",
  alternates: { canonical: "https://attax.app/cookie-policy" },
  robots: { index: true, follow: false },
};
export const generateMetadata = () => localMeta("/cookie-policy", EN_META);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
