import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Attax",
  description: "Attax Terms of Service — the rules and conditions governing use of the Attax platform.",
  alternates: { canonical: "https://attax.app/terms" },
  robots: { index: true, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
