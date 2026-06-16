import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import HowItWorks from "@/components/home/HowItWorks";
import DailyMatch from "@/components/home/DailyMatch";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import ArenaSection from "@/components/home/ArenaSection";
import FAQ from "@/components/home/FAQ";
import DownloadCTA from "@/components/home/DownloadCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoSection />
      <HowItWorks />
      <DailyMatch />
      <FeaturesGrid />
      <ArenaSection />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
