import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollNav from "@/components/ScrollNav";
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
        {/* White announcement banner — full width, above everything */}
        <div style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #f0f0f0",
          textAlign: "center",
          padding: "9px 16px",
          fontSize: "0.8125rem",
          fontWeight: 500,
          color: "#333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          position: "relative",
          zIndex: 10001,
        }}>
          🎉 Attax beta is live — free to download on iOS &amp; Android
          <span style={{ color: "#FC5F2B", fontWeight: 600, cursor: "pointer" }}>Learn more →</span>
        </div>

        {/* Floating pill nav — appears on scroll (hidden on first viewport) */}
        <ScrollNav />

        <main style={{ flex: 1, margin: 0, padding: 0 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
