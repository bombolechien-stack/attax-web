import type { Metadata } from "next";
import { SitePage, PageHero } from "@/components/site/Site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Attax global ranking",
  description: "The Attax global ranking: see where athletes stand worldwide. Coming soon.",
};

export default function RankingPage() {
  return (
    <SitePage>
      <PageHero
        full
        bg={<div style={{ position: "absolute", inset: 0, background: "#0a0a0a" }} />}
        kick="Coming in V2"
        title={<><span>Global</span> <span><em>Rankings</em></span></>}
        lead="The global Attax leaderboard is in development. Soon you'll be able to see how you rank against athletes worldwide."
      >
        <Link className="h7-btn h7-btn-light" href="/">← Back home</Link>
      </PageHero>
    </SitePage>
  );
}
