import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Attax — Keep moving with Attax",
  description:
    "Attax is the competitive fitness app where every workout fuels your rank. Move, progress, and stay motivated every day.",
  openGraph: {
    title: "Attax — Keep moving with Attax",
    description: "The fitness app where every workout fuels your rank.",
    url: "https://attax.app",
    siteName: "Attax",
    type: "website",
  },
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
        <Navbar />
        <main style={{ flex: 1, margin: 0, padding: 0 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
