export const dynamic = "force-dynamic";

type GithubRelease = {
  id: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  published_at: string;
  html_url: string;
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
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    return Response.json({ error: "Unable to load GitHub releases" }, { status: 502 });
  }

  const releases = (await response.json()) as GithubRelease[];
  return Response.json(releases);
}
