import Hero from "@/components/home/Hero";
import WorkoutsNowMatter from "@/components/home/WorkoutsNowMatter";
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
      <WorkoutsNowMatter />
      <HowItWorks />
      <DailyMatch />
      <FeaturesGrid />
      <ArenaSection />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
