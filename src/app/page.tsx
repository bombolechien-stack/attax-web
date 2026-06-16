import Hero from "@/components/home/Hero";
import WorkoutsNowMatter from "@/components/home/WorkoutsNowMatter";
import VisualBreak from "@/components/home/VisualBreak";
import HowItWorks from "@/components/home/HowItWorks";
import LifestyleSection from "@/components/home/LifestyleSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import ArenaSection from "@/components/home/ArenaSection";
import FAQ from "@/components/home/FAQ";
import DownloadCTA from "@/components/home/DownloadCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkoutsNowMatter />
      <VisualBreak />
      <HowItWorks />
      <LifestyleSection />
      <FeaturesGrid />
      <ArenaSection />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
