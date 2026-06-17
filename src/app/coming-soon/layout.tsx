import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attax — Coming Soon",
  description:
    "Attax is launching soon. Turn your workouts into competition. Get early access now.",
  alternates: { canonical: "https://attax.app/coming-soon" },
  openGraph: {
    title: "Attax — Coming Soon",
    description: "Turn your workouts into competition. Get early access now.",
    url: "https://attax.app/coming-soon",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
