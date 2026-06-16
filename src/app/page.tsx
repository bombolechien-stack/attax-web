import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import DailyMatch from "@/components/home/DailyMatch";
import Features from "@/components/home/Features";
import Waitlist from "@/components/home/Waitlist";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <DailyMatch />
      <Features />
      <Waitlist />
    </>
  );
}
