type Asset = {
  name: string;
  browser_download_url: string;
  download_count: number;
  size: number;
};

type Release = {
  id: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  published_at: string;
  html_url: string;
  assets: Asset[];
};

async function getReleases(): Promise<Release[]> {
  try {
    const response = await fetch("https://api.github.com/repos/shivanew-hadoop/zapper-website/releases", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 300 }
    });
    if (!response.ok) return [];
    return response.json();
  } catch {
    return [];
  }
}

function formatSize(bytes: number) {
  if (!bytes) return "";
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default async function DownloadsPage() {
  const releases = await getReleases();
  const latest = releases[0];
  const latestExe = latest?.assets?.find(asset => asset.name.toLowerCase().endsWith(".exe")) || latest?.assets?.[0];

  return (
    <main>
      <section className="page-top">
        <div className="container">
          <div className="badge"><span className="pulse" /> GitHub Releases</div>
          <h1>Download Zapper.</h1>
          <p className="lead">Install the latest Windows version. Releases are maintained in the official Zapper website GitHub repository.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          {!latest && (
            <div className="notice">
              No GitHub release found yet. Publish your first release with a Windows EXE asset in GitHub, then this page will show it automatically.
            </div>
          )}

          {latest && (
            <div className="card download-card">
              <div>
                <div className="kicker">Latest version</div>
                <h2>{latest.name || latest.tag_name}</h2>
                <div className="meta">
                  <span className="pill">Version {latest.tag_name}</span>
                  <span className="pill">Released {new Date(latest.published_at).toLocaleDateString()}</span>
                  {latestExe && <span className="pill">{latestExe.name}</span>}
                  {latestExe?.size ? <span className="pill">{formatSize(latestExe.size)}</span> : null}
                </div>
                {latest.body && <div className="release-body">{latest.body}</div>}
              </div>
              <div>
                {latestExe ? (
                  <a className="btn btn-primary" href={latestExe.browser_download_url}>Download EXE</a>
                ) : (
                  <a className="btn btn-ghost" href={latest.html_url}>View Release</a>
                )}
              </div>
            </div>
          )}

          <div className="section-head" style={{ marginTop: 44 }}>
            <div className="kicker">Release history</div>
            <h2>Previous versions.</h2>
          </div>

          <div className="grid">
            {releases.slice(1).map(release => {
              const exe = release.assets?.find(asset => asset.name.toLowerCase().endsWith(".exe")) || release.assets?.[0];
              return (
                <div className="card download-card" key={release.id}>
                  <div>
                    <h3>{release.name || release.tag_name}</h3>
                    <div className="meta">
                      <span className="pill">{release.tag_name}</span>
                      <span className="pill">{new Date(release.published_at).toLocaleDateString()}</span>
                      {exe && <span className="pill">{exe.name}</span>}
                    </div>
                  </div>
                  <a className="btn btn-ghost" href={exe?.browser_download_url || release.html_url}>{exe ? "Download" : "View"}</a>
                </div>
              );
            })}
          </div>

          <div className="card" style={{ marginTop: 28 }}>
            <h3>System Requirements</h3>
            <div className="list">
              <div><span className="check">✓</span> Windows 10 or Windows 11</div>
              <div><span className="check">✓</span> Internet connection</div>
              <div><span className="check">✓</span> Minimum 4GB RAM recommended</div>
              <div><span className="check">✓</span> Google Meet link for meeting transcription workflow</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
