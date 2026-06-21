import { LockKeyhole } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center px-5 py-20">
      <div className="glass w-full max-w-md rounded-[2rem] p-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-950">
          <LockKeyhole size={32} />
        </div>
        <h1 className="mt-7 text-center text-3xl font-black">Admin Login</h1>
        <p className="mt-2 text-center text-sm text-slate-400">Authorized administrators only</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-300">Email</label>
            <input type="email" placeholder="admin@zapperapp.in" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300">Password</label>
            <input type="password" placeholder="••••••••" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300" />
          </div>
          <button type="button" className="w-full rounded-full bg-white px-6 py-3 font-bold text-slate-950 hover:bg-cyan-100">
            Sign In
          </button>
        </form>

        <div className="mt-6 rounded-2xl border border-yellow-300/20 bg-yellow-300/10 p-4 text-xs leading-5 text-yellow-100">
          This is a placeholder page now. Real admin upload will be added later using Supabase Auth and Storage.
        </div>
      </div>
    </section>
  );
}
