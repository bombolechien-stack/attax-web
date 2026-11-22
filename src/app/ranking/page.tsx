import type { Metadata } from "next";
import { SitePage } from "@/components/site/Site";
import RankingSoon from "@/components/site/RankingSoon";

export const metadata: Metadata = {
  title: "Attax global ranking",
  description: "The Attax global ranking: see where athletes stand worldwide. Coming soon.",
};

export default function RankingPage() {
  return (
    <SitePage>
      <RankingSoon />
    </SitePage>
  );
}
