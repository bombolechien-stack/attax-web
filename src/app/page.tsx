import Hero from "@/components/home/Hero";
import WorkoutStatement from "@/components/home/WorkoutStatement";
import CombatScreen from "@/components/home/CombatScreen";
import ThreeWords from "@/components/home/ThreeWords";
import FAQ from "@/components/home/FAQ";
import DownloadCTA from "@/components/home/DownloadCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkoutStatement />
      <CombatScreen />
      <ThreeWords />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
