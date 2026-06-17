import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Attax",
  description: "Attax Privacy Policy — how we collect, use and protect your personal data.",
  alternates: { canonical: "https://attax.app/privacy" },
  robots: { index: true, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
