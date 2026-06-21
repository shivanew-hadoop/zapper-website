import Link from "next/link";
import { CheckCircle2, Monitor, Sparkles } from "lucide-react";

const productFeatures = [
  "Real-time captions",
  "Transparent overlay",
  "Low latency transcription",
  "Works with meetings and calls",
  "Lightweight Windows desktop app",
  "Easy installation and usage",
];

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Products</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">Zapper Desktop</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Designed for professionals who need real-time speech transcription with minimal distraction during meetings, calls and conversations.
        </p>
      </div>

      <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
        <div className="glass rounded-[2rem] p-8">
          <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 p-4 text-slate-950">
            <Monitor size={38} />
          </div>
          <h2 className="text-3xl font-bold">Windows Voice-to-Text Overlay Application</h2>
          <p className="mt-4 text-slate-400">
            Zapper runs as a desktop overlay so users can read live speech without switching windows or losing meeting focus.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {productFeatures.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="text-cyan-300" size={18} /> {item}
              </div>
            ))}
          </div>
          <Link href="/downloads" className="mt-9 inline-flex rounded-full bg-white px-7 py-3 font-bold text-slate-950 hover:bg-cyan-100">
            Download Zapper
          </Link>
        </div>

        <div className="glass rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] bg-slate-950 p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-slate-400">Product Preview</p>
                <p className="text-xl font-bold">Zapper Overlay</p>
              </div>
              <Sparkles className="text-violet-300" />
            </div>
            <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-cyan-300">Live text</p>
              <p className="mt-2 text-2xl font-semibold">Captions stay visible while your meeting continues.</p>
            </div>
            <div className="mt-8 h-3 rounded-full bg-white/10">
              <div className="h-3 w-2/3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
