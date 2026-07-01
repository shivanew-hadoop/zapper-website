import Image from "next/image";
import CTA from "@/components/CTA";

const features = [
["🎙️","Real-Time Transcription","Converts live speech into clean captions with low delay."],
["🪟","Desktop Overlay","Readable captions float over meetings, browsers and applications."],
["⚡","Low Latency","Built for fast live conversations, interviews and calls."],
["🔐","Privacy Focused","Simple workflow with transparent download and support channels."],
["💬","Host Chat Panel","View and reply to host messages inside the meeting caption service."],
["🔤","Font Controls","Increase or decrease caption size quickly during a session."]
];

const faqs = [
["What is Zapper?","Zapper is a Windows meeting caption service that displays real-time voice-to-text captions in an overlay window."],
["Does it work with Google Meet?","Yes. Zapper is designed around a Google Meet join-and-transcribe workflow."],
["Where do I download the installer?","Use the Downloads page. The installer is published through GitHub Releases."]
];

export default function HomePage(){
return(
<main>
<section className="hero">
<div className="container hero-grid">
<div>
<div className="badge"><span className="pulse"/> Windows meeting caption service</div>
<h1>Real-time <span className="gradient">voice-to-text overlay</span> for live meetings.</h1>
<p className="lead">Zapper helps professionals view live captions while discussions are happening. Join, transcribe and read speech clearly in a lightweight overlay window.</p>
<div className="actions">
<a className="btn btn-primary" href="/downloads">Download Zapper</a>
<a className="btn btn-ghost" href="/products">Explore Product</a>
</div>
</div>
<div className="mock">
<Image src="/screenshots/zapper-overlay.jpg" alt="overlay" width={1024} height={768} priority />
</div>
</div>
</section>

<section className="section">
<div className="container">
<div className="section-head">
<div className="kicker">SCREENSHOTS</div>
<h2>User Screen vs Host Screen</h2>
<p>See exactly what the user sees and what meeting participants see.</p>
</div>

<div className="screenshot-grid">
<div className="screenshot-card">
<div className="screenshot-title">User Screen</div>
<div className="screenshot-desc">Complete overlay captions visible to user.</div>
<Image src="/images/user-screen.png" alt="user" width={1200} height={700} className="screenshot-img"/>
</div>

<div className="screenshot-card">
<div className="screenshot-title">Host Screen</div>
<div className="screenshot-desc">Others see only the shared screen.</div>
<Image src="/images/host-screen.png" alt="host" width={1200} height={700} className="screenshot-img"/>
</div>
</div>

</div>
</section>

<section className="section"><div className="container"><div className="section-head"><div className="kicker">Features</div><h2>Built for fast, readable meeting captions.</h2></div>
<div className="grid grid-3">{features.map(([i,t,d])=><div className="card" key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
</div></section>

<section className="section"><div className="container"><div className="section-head"><div className="kicker">FAQ</div><h2>Common Questions</h2></div>
<div className="faq">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
</div></section>

<CTA/>
</main>
)}
