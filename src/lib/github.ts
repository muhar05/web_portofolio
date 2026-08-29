const USERNAME = "muhar05";
const GITHUB_API = "https://api.github.com";
const MAX_LANGUAGE_REQUESTS = 25;

export interface LanguageUsage {
  name: string;
  count: number;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: LanguageUsage[];
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  name: string;
  owner: { login: string };
  stargazers_count: number;
  language: string | null;
}

interface LanguageBytes {
  [key: string]: number;
}

async function fetchJson<T>(url: string, signal: AbortSignal): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "portfolio",
      },
      signal,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getGitHubStats(): Promise<GitHubStats | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const [user, repos] = await Promise.all([
      fetchJson<GitHubUser>(
        `${GITHUB_API}/users/${USERNAME}`,
        controller.signal,
      ),
      fetchJson<GitHubRepo[]>(
        `${GITHUB_API}/users/${USERNAME}/repos?per_page=100&sort=pushed&direction=desc`,
        controller.signal,
      ),
    ]);

    if (!user || !repos) return null;

    const totalStars = repos.reduce(
      (sum, r) => sum + (r.stargazers_count ?? 0),
      0,
    );

    const totals: Record<string, number> = {};
    const sample = repos.slice(0, MAX_LANGUAGE_REQUESTS);
    const results = await Promise.allSettled(
      sample.map((r) =>
        fetchJson<LanguageBytes>(
          `${GITHUB_API}/repos/${r.owner.login}/${r.name}/languages`,
          controller.signal,
        ),
      ),
    );
    for (const res of results) {
      if (res.status === "fulfilled" && res.value) {
        for (const [name, bytes] of Object.entries(res.value)) {
          totals[name] = (totals[name] ?? 0) + bytes;
        }
      }
    }

    const topLanguages: LanguageUsage[] = Object.entries(totals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));

    return {
      publicRepos: user.public_repos ?? 0,
      followers: user.followers ?? 0,
      following: user.following ?? 0,
      totalStars,
      topLanguages,
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
