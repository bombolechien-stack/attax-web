import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Attax — App Store & Google Play",
  description:
    "Download Attax for free on iPhone and Android. Your real workouts become a boxing duel every day against a player from your league, with Fight Night at 9:30 PM.",
  alternates: { canonical: "https://attax.app/download" },
  openGraph: {
    title: "Download Attax — App Store & Google Play",
    description: "Free on iPhone and Android. Your real workouts become a daily boxing duel.",
    url: "https://attax.app/download",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
