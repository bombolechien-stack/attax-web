import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import CombatSection from "@/components/home/CombatSection";
import Features from "@/components/home/Features";
import Community from "@/components/home/Community";
import Download from "@/components/home/Download";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <CombatSection />
      <Features />
      <Community />
      <Download />
    </>
  );
}
