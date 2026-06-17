import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Connect Fitness Game for Android | Attax",
  description:
    "Attax is the fitness game built for Android. Connect your activity through Health Connect and transform movement into competition.",
  alternates: { canonical: "https://attax.app/health-connect-fitness-game" },
  openGraph: {
    title: "Health Connect Fitness Game for Android | Attax",
    description: "Transform movement into competition on Android through Health Connect.",
    url: "https://attax.app/health-connect-fitness-game",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
