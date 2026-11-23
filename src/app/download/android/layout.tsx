import type { Metadata } from "next";

const TITLE = "Download Attax for Android: Free on Google Play";
const DESC = "Attax is free on Google Play: your workouts from Health Connect become a boxing duel every day against a player from your league, with Fight Night at 9:30 PM. Android 9 or later.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://attax.app/download/android" },
  openGraph: { title: TITLE, description: DESC, url: "https://attax.app/download/android", type: "website", images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Attax: Sport is now a game." }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  inLanguage: ["en", "fr", "es", "pt-BR", "de", "nl", "it", "sv", "fi", "da", "ru", "hi", "ar", "ja", "zh-Hans"],
  name: "Attax",
  operatingSystem: "Android",
  applicationCategory: "HealthApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: "https://play.google.com/store/apps/details?id=app.attax",
  url: "https://attax.app/download/android",
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
