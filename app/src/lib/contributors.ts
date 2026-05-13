const REPO = "FidelusAleksander/ghcertified";

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
 *
 * Uses GITHUB_TOKEN env var when available to avoid rate-limit issues on shared
 * build infrastructure (unauthenticated: 60 req/hr/IP, authenticated: 5000 req/hr).
 */
export async function getContributors(): Promise<Contributor[]> {
  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };
    const token = process.env.GITHUB_TOKEN;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(
      `https://api.github.com/repos/${REPO}/contributors?per_page=100`,
      { headers },
    );

    if (!res.ok) return [];

    const data: Array<{
      login: string;
      avatar_url: string;
      html_url: string;
      contributions: number;
      type: string;
    }> = await res.json();

    return data
      .filter((c) => c.type !== "Bot")
      .map((c) => ({
        login: c.login,
        avatarUrl: c.avatar_url,
        profileUrl: c.html_url,
        contributions: c.contributions,
      }));
  } catch {
    // Network errors, DNS failures, timeouts — return empty gracefully
    // so the build succeeds and the contributors section is simply hidden.
    return [];
  }
}
