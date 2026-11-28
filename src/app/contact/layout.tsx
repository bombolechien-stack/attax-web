import type { Metadata } from "next";
import { localMeta } from "@/lib/seo";

const EN_META: Metadata = {
  title: "Contact Attax",
  description: "Get in touch with the Attax team for support, partnerships, or media inquiries.",
  alternates: { canonical: "https://attax.app/contact" },
  openGraph: {
    title: "Contact Attax",
    description: "Get in touch with the Attax team.",
    url: "https://attax.app/contact",
  },
};
export const generateMetadata = () => localMeta("/contact", EN_META);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
