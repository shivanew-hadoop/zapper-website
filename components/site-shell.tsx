import Link from "next/link";
import { Mail, Download } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-slate-950 shadow-glow">
            Z
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight">Zapper</p>
            <p className="text-xs text-slate-400">Voice to Text Overlay</p>
          </div>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/downloads" className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 md:inline-flex">
          Download
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">Zapper</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
            Real-time voice to text overlay for meetings, calls and live conversations.
          </p>
        </div>
        <div>
          <p className="font-semibold">Pages</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Support</p>
          <a href="mailto:zapperapp.support@gmail.com" className="mt-3 flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <Mail size={16} /> zapperapp.support@gmail.com
          </a>
          <Link href="/downloads" className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">
            <Download size={16} /> Download Latest
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        © 2026 Zapper. All rights reserved.
      </div>
    </footer>
  );
}

export function PageBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-grid bg-slate-950">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-[20rem] w-[20rem] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      {children}
    </div>
  );
}
