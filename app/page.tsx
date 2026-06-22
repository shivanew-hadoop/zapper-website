import Image from "next/image";
import CTA from "@/components/CTA";

const features = [
  ["🎙️", "Real-Time Transcription", "Converts live speech into clean captions with low delay."],
  ["🪟", "Desktop Overlay", "Readable captions float over meetings, browsers and applications."],
  ["⚡", "Low Latency", "Built for fast live conversations, interviews and calls."],
  ["🔐", "Privacy Focused", "Simple workflow with transparent download and support channels."],
  ["💬", "Host Chat Panel", "View and reply to host messages inside the meeting caption service."],
  ["🔤", "Font Controls", "Increase or decrease caption size quickly during a session."]
];

const faqs = [
  ["What is Zapper?", "Zapper is a Windows meeting caption service that displays real-time voice-to-text captions in an overlay window."],
  ["Does it work with Google Meet?", "Yes. Zapper is designed around a Google Meet join-and-transcribe workflow."],
  ["Where do I download the installer?", "Use the Downloads page. The installer is published through GitHub Releases."],
  ["Is payment integrated on the website?", "Not yet. The current flow keeps download public and payment/license handling offline."],
  ["How do I get support?", "Use zapperapp.support@gmail.com or WhatsApp +91 9346073219."]
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge"><span className="pulse" /> Windows meeting caption service</div>
            <h1>Real-time <span className="gradient">voice-to-text overlay</span> for live meetings.</h1>
            <p className="lead">Zapper helps professionals view live captions while discussions are happening. Join, transcribe and read speech clearly in a lightweight overlay window.</p>
            <div className="actions">
              <a className="btn btn-primary" href="/downloads">Download Zapper</a>
              <a className="btn btn-ghost" href="/products">Explore Product</a>
            </div>
            <div className="trust">
              <span>✓ Google Meet focused</span>
              <span>✓ Windows installer</span>
              <span>✓ Support over Email & WhatsApp</span>
            </div>
          </div>
          <div className="mock">
            <Image src="/screenshots/zapper-overlay.jpg" alt="Zapper meeting caption service overlay" width={1024} height={768} priority />
            <div className="floating">
              <small>SPEECH DETECTED</small>
              <p>Captions appear directly inside the overlay while the meeting continues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Features</div>
            <h2>Built for fast, readable meeting captions.</h2>
            <p>Everything is focused on one outcome: help you follow conversations clearly without disturbing the meeting flow.</p>
          </div>
          <div className="grid grid-3">
            {features.map(([icon, title, desc]) => (
              <div className="card" key={title}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-card">
          <div>
            <div className="kicker">Product preview</div>
            <h2>Simple window. Clear captions. Practical workflow.</h2>
            <p>Zapper keeps the interface direct: paste a meeting URL, join and transcribe, then follow captions in real time.</p>
            <div className="list">
              <div><span className="check">✓</span> Meeting URL input</div>
              <div><span className="check">✓</span> Join & Transcribe action</div>
              <div><span className="check">✓</span> Speech detection state</div>
              <div><span className="check">✓</span> Caption area and host chat panel</div>
            </div>
          </div>
          <div className="mock"><Image src="/screenshots/zapper-overlay.jpg" alt="Zapper desktop interface" width={1024} height={768} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">FAQ</div>
            <h2>Common questions.</h2>
          </div>
          <div className="faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
