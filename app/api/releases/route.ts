export const dynamic = "force-dynamic";

type GithubRelease = {
  id: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  published_at: string;
  html_url: string;
  draft?: boolean;
  prerelease?: boolean;
  assets: Array<{
    id: number;
    name: string;
    browser_download_url: string;
    download_count: number;
    size: number;
  }>;
};

export async function GET() {
  const owner = "shivanew-hadoop";
  const repo = "zapper-website";

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`, {
    headers: { Accept: "application/vnd.github+json" },
    cache: "no-store"
  });

  if (!response.ok) {
    return Response.json({ error: "Unable to load GitHub releases" }, { status: 502 });
  }

  const releases = ((await response.json()) as GithubRelease[])
    .filter((release) => !release.draft)
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

  return Response.json(releases);
}
