import type { Metadata } from "next";
import { SitePage, PageHero } from "@/components/site/Site";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Attax league #${id}`,
    description: `Public league pages are coming in Attax V2: participants, live scores and a countdown for every league.`,
  };
}

export default async function LeaguePage({ params }: Props) {
  const { id } = await params;
  return (
    <SitePage>
      <PageHero
        full
        bg={<div style={{ position: "absolute", inset: 0, background: "#0a0a0a" }} />}
        kick="Coming in V2"
        title={<>League <em>#{id}</em></>}
        lead="Public league pages are coming in Attax V2. Each league will have its own shareable page with participants, live scores, and a countdown."
      >
        <a className="h7-btn h7-btn-light" href="/download/ios">Download Attax</a>
      </PageHero>
    </SitePage>
  );
}
