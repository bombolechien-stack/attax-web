import type { Metadata } from "next";
import { localMeta } from "@/lib/seo";

const EN_META: Metadata = {
  title: "Health Connect Fitness Game for Android",
  description:
    "Attax is the fitness game built for Android. Connect your activity through Health Connect and transform movement into competition.",
  alternates: { canonical: "https://attax.app/health-connect-fitness-game" },
  openGraph: {
    title: "Health Connect Fitness Game for Android | Attax",
    description: "Transform movement into competition on Android through Health Connect.",
    url: "https://attax.app/health-connect-fitness-game",
  },
};
export const generateMetadata = () => localMeta("/health-connect-fitness-game", EN_META);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
