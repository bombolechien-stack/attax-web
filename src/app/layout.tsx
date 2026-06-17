import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollNav from "@/components/ScrollNav";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";
import { LangProvider } from "@/lib/i18n";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const BASE_URL = "https://attax.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Attax — Sport is now a game.",
    template: "%s | Attax",
  },
  description:
    "Attax is the competitive fitness game where your real-world activity powers daily battles, rankings and progression.",
  keywords: [
    "fitness game",
    "competitive fitness",
    "fitness app",
    "Apple Health game",
    "Health Connect game",
    "fitness competition",
    "workout game",
    "fitness gamification",
    "activity tracker competition",
  ],
  authors: [{ name: "Attax", url: BASE_URL }],
  creator: "Attax",
  publisher: "Attax",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: "Attax",
    title: "Attax — Sport is now a game.",
    description:
      "Attax is the competitive fitness game where your real-world activity powers daily battles, rankings and progression.",
    url: BASE_URL,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Attax — Sport is now a game.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gowithattax",
    creator: "@gowithattax",
    title: "Attax — Sport is now a game.",
    description:
      "Attax is the competitive fitness game where your real-world activity powers daily battles, rankings and progression.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/images/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/images/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/images/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body
        style={{
          fontFamily: "var(--font-jakarta), -apple-system, BlinkMacSystemFont, sans-serif",
          margin: 0,
          padding: 0,
          backgroundColor: "#ffffff",
          color: "#1a1a1a",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <LangProvider>
          <ScrollProgress />
          <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 9, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent calc(16.666% - 0.5px), rgba(255,255,255,0.032) calc(16.666% - 0.5px), rgba(255,255,255,0.032) 16.666%)" }} />
          <Banner />
          <ScrollNav />
          <main style={{ flex: 1, margin: 0, padding: 0 }}>{children}</main>
          <Footer />
          <CookieConsent />
        </LangProvider>
      </body>
    </html>
  );
}
