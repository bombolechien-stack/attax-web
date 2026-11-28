import type { Metadata } from "next";
import { localMeta } from "@/lib/seo";

const EN_META: Metadata = {
  title: "Terms of Service",
  description: "Attax Terms of Service: the rules and conditions governing use of the Attax platform.",
  alternates: { canonical: "https://attax.app/terms" },
  robots: { index: true, follow: false },
};
export const generateMetadata = () => localMeta("/terms", EN_META);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
