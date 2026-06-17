import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Attax",
  description: "Attax Cookie Policy — how we use cookies and similar technologies on our website.",
  alternates: { canonical: "https://attax.app/cookie-policy" },
  robots: { index: true, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
