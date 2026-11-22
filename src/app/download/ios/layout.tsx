import type { Metadata } from "next";

const TITLE = "Download Attax for iPhone: Free on the App Store";
const DESC = "Attax is free on the App Store: your workouts from Apple Health become a boxing duel every day against a player from your league, with Fight Night at 9:30 PM. iOS 15.1 or later.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://attax.app/download/ios" },
  openGraph: { title: TITLE, description: DESC, url: "https://attax.app/download/ios", type: "website", images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Attax: Sport is now a game." }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Attax",
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: "https://apps.apple.com/app/id6821117530",
  url: "https://attax.app/download/ios",
  description: DESC,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      {children}
    </>
  );
}
