export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div className="kicker">Get started</div>
          <h2>Ready to use live captions?</h2>
          <p>Download the latest Windows installer from GitHub Releases and start using Zapper.</p>
          <div className="actions" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="/downloads">Download Latest Version</a>
            <a className="btn btn-ghost" href="/contact">Contact Support</a>
          </div>
        </div>
      </div>
    </section>
  );
}
