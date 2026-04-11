const REPO = "FidelusAleksander/ghcertified";
const BOT_LOGINS = new Set([
  "dependabot[bot]",
  "github-actions[bot]",
  "imgbot[bot]",
  "Copilot",
]);

export interface Contributor {
  login: string;
  avatarUrl: string;
  profileUrl: string;
  contributions: number;
}

/**
 * Fetch repository contributors from the GitHub API.
 * Filters out bots and returns human contributors sorted by contribution count.
 * Intended to be called at build time (SSG).
 */
export async function getContributors(): Promise<Contributor[]> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contributors?per_page=100`,
  );

  if (!res.ok) return [];

  const data: Array<{
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
  }> = await res.json();

  return data
    .filter((c) => !BOT_LOGINS.has(c.login))
    .map((c) => ({
      login: c.login,
      avatarUrl: c.avatar_url,
      profileUrl: c.html_url,
      contributions: c.contributions,
    }));
}
