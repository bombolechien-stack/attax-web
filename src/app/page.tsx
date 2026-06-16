import Hero from "@/components/home/Hero";
import PhotoBreak from "@/components/home/PhotoBreak";
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
      <PhotoBreak
        src="/images/photo-runners.jpg"
        alt="Athletes racing"
        quote="Every workout changes tomorrow's battle."
        position="center 40%"
      />
      <HowItWorks />
      <DailyMatch />
      <PhotoBreak
        src="/images/photo-gym.jpg"
        alt="Athlete lifting"
        position="center 30%"
      />
      <FeaturesGrid />
      <ArenaSection />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
