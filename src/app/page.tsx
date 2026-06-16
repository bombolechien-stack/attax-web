import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import HowItWorks from "@/components/home/HowItWorks";
import DailyMatch from "@/components/home/DailyMatch";
import PhotoStrip from "@/components/home/PhotoStrip";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import ArenaSection from "@/components/home/ArenaSection";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoSection />
      <HowItWorks />
      <DailyMatch />
      <PhotoStrip src="/images/photo-gym.jpg" alt="Athlete training" position="center 30%" height="65vh" />
      <FeaturesGrid />
      <ArenaSection />
      <FAQ />
    </>
  );
}
