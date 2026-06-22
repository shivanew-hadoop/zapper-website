import Image from "next/image";
import CTA from "@/components/CTA";

export default function ProductsPage() {
  return (
    <main>
      <section className="page-top">
        <div className="container">
          <div className="badge"><span className="pulse" /> Zapper Desktop</div>
          <h1>Meeting Caption Service for Windows.</h1>
          <p className="lead">A focused desktop application for live meeting transcription, readable captions and a practical overlay workflow.</p>
        </div>
      </section>
      <section className="section">
        <div className="container product-card">
          <div className="card">
            <div className="kicker">Main product</div>
            <h2>Zapper Desktop</h2>
            <p>Designed for users who need live captions during meetings, interviews, support calls and online discussions.</p>
            <div className="list">
              <div><span className="check">✓</span> Windows voice-to-text overlay</div>
              <div><span className="check">✓</span> Google Meet URL workflow</div>
              <div><span className="check">✓</span> Low-latency captions</div>
              <div><span className="check">✓</span> Host chat panel</div>
              <div><span className="check">✓</span> Font size controls</div>
              <div><span className="check">✓</span> Simple support and licensing flow</div>
            </div>
            <div className="actions"><a className="btn btn-primary" href="/downloads">Download for Windows</a></div>
          </div>
          <div className="mock"><Image src="/screenshots/zapper-overlay.jpg" alt="Zapper product screenshot" width={1024} height={768} /></div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
