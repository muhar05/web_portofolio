import HomeSection from "@/components/views/Home/HomeSection";
import { getGitHubStats } from "@/lib/github";

export default async function Home() {
  const githubStats = await getGitHubStats();
  return <HomeSection githubStats={githubStats} />;
}
