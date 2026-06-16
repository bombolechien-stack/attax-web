import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Attax — Keep moving with Attax",
  description:
    "Attax is the competitive fitness app where every workout fuels your rank. Move, progress, and compete against athletes worldwide.",
  keywords: ["fitness", "competition", "ranking", "sport", "workout", "attax"],
  openGraph: {
    title: "Attax — Keep moving with Attax",
    description: "The competitive fitness app where every workout fuels your rank.",
    url: "https://attax.app",
    siteName: "Attax",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
