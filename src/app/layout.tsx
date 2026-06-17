import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollNav from "@/components/ScrollNav";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
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
    default: "Attax — Turn Real Activity Into Competition",
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
    title: "Attax — Turn Real Activity Into Competition",
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
    title: "Attax — Turn Real Activity Into Competition",
    description:
      "Attax is the competitive fitness game where your real-world activity powers daily battles, rankings and progression.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
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
          <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 9, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent calc(16.666% - 0.5px), rgba(255,255,255,0.032) calc(16.666% - 0.5px), rgba(255,255,255,0.032) 16.666%)" }} />
          <Banner />
          <ScrollNav />
          <main style={{ flex: 1, margin: 0, padding: 0 }}>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
