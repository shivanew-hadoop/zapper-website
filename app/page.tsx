import Link from "next/link";
import { ArrowRight, Captions, Gauge, Layers, ShieldCheck } from "lucide-react";

const features = [
  { icon: Captions, title: "Real-Time Transcription", desc: "Convert live speech into text instantly with a low-latency transcription flow." },
  { icon: Layers, title: "Overlay Anywhere", desc: "Display captions over meetings, browsers or any desktop application." },
  { icon: Gauge, title: "Ultra Fast", desc: "Built for quick response so the text feels close to the live conversation." },
  { icon: ShieldCheck, title: "Privacy First", desc: "Simple desktop-first design with a clear user-controlled experience." },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              Windows desktop app for real-time captions
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Real-Time Voice to Text Overlay
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Zapper converts live speech into a clean text overlay for meetings, calls and conversations. Stay focused while captions appear seamlessly on your screen.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/downloads" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-glow transition hover:scale-[1.02]">
                Download Now <ArrowRight size={18} />
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8">
                <p className="text-sm text-slate-400">Live Overlay Preview</p>
                <div className="mt-16 rounded-2xl border border-cyan-300/25 bg-black/45 p-5 shadow-2xl backdrop-blur-xl">
                  <p className="text-cyan-200">Speaker:</p>
                  <p className="mt-2 text-2xl font-semibold">“Zapper is showing the transcript in real time.”</p>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-3 text-center text-xs text-slate-400">
                  <div className="rounded-xl bg-white/5 p-3">Low latency</div>
                  <div className="rounded-xl bg-white/5 p-3">Overlay mode</div>
                  <div className="rounded-xl bg-white/5 p-3">Windows app</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">Built for daily meeting workflows</h2>
          <p className="mt-3 text-slate-400">Simple, fast and practical features for people who need live text on screen.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="glass rounded-3xl p-6">
              <feature.icon className="mb-5 text-cyan-300" size={34} />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="glass rounded-[2rem] p-8 text-center md:p-14">
          <h2 className="text-3xl font-black md:text-5xl">Ready to experience Zapper?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Download the latest Windows version and start using real-time transcription overlay today.</p>
          <Link href="/downloads" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-slate-950 hover:bg-cyan-100">
            Download Latest Version
          </Link>
        </div>
      </section>
    </>
  );
}
