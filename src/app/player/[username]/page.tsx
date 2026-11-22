import type { Metadata } from "next";
import { SitePage, PageHero } from "@/components/site/Site";

type Props = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username}, Attax athlete profile`,
    description: `View ${username}'s public Attax profile: ranking, statistics, and sports activity.`,
  };
}

export default async function PlayerProfilePage({ params }: Props) {
  const { username } = await params;
  return (
    <SitePage>
      <PageHero
        full
        bg={<div style={{ position: "absolute", inset: 0, background: "#0a0a0a" }} />}
        kick="Coming in V2"
        title={<><span className="sp-avatar" aria-hidden="true">{username.charAt(0).toUpperCase()}</span><span>@{username}</span></>}
        lead="Public athlete profiles are coming in Attax V2. Rankings, statistics, badges, and full activity history for every athlete."
      >
        <a className="h7-btn h7-btn-light" href="/download/ios">Download Attax</a>
      </PageHero>
    </SitePage>
  );
}
