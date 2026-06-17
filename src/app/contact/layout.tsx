import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Attax",
  description: "Get in touch with the Attax team for support, partnerships, or media inquiries.",
  alternates: { canonical: "https://attax.app/contact" },
  openGraph: {
    title: "Contact Attax",
    description: "Get in touch with the Attax team.",
    url: "https://attax.app/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
