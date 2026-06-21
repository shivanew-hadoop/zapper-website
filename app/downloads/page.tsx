import Link from "next/link";
import { Download, Laptop, ShieldCheck } from "lucide-react";

const downloadUrl = "https://github.com/shivanew-hadoop/zupzup/releases/latest/download/ZapperSetup.exe";

export default function DownloadsPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Downloads</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">Download Zapper</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Download the latest stable Windows version of Zapper voice-to-text overlay.
        </p>
      </div>

      <div className="glass mx-auto mt-14 max-w-3xl rounded-[2rem] p-8 text-center md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-950">
          <Laptop size={42} />
        </div>
        <h2 className="mt-7 text-3xl font-bold">Zapper Desktop</h2>
        <p className="mt-2 text-slate-400">Version v1.0.0 · Windows 10 / Windows 11</p>
        <a href={downloadUrl} className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-slate-950 hover:bg-cyan-100">
          <Download size={20} /> Download EXE
        </a>
        <p className="mt-5 text-xs text-slate-500">No login required. Public latest installer download.</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h3 className="flex items-center gap-2 text-xl font-bold"><ShieldCheck className="text-cyan-300" /> System Requirements</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>Windows 10 or later</li>
            <li>Internet connection</li>
            <li>Microphone access when required</li>
            <li>Minimum 4GB RAM</li>
            <li>500MB available storage</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-bold">Need help?</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Contact support if you face installation, download or usage issues.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/10">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
