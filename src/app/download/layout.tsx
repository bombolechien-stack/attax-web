import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Attax — App Store & Google Play",
  description:
    "Download Attax for free on iOS and Android. Turn your real-world activity into competition, progression, and daily challenges.",
  alternates: { canonical: "https://attax.app/download" },
  openGraph: {
    title: "Download Attax — App Store & Google Play",
    description: "Free on iOS and Android. Turn your activity into competition.",
    url: "https://attax.app/download",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
