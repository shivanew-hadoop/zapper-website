import { Mail, Phone, Clock } from "lucide-react";

const cards = [
  { icon: Mail, title: "Email Support", value: "zapperapp.supported@gmail.com", href: "mailto:zapperapp.supported@gmail.com" },
  { icon: Phone, title: "Phone", value: "+91 XXXXX XXXXX", href: null },
  { icon: Clock, title: "Response Time", value: "Usually within 24 hours", href: null },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">Get in Touch</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Have questions, feedback or support requests? We are here to help.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="glass rounded-[2rem] p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
              <card.icon size={30} />
            </div>
            <h2 className="mt-6 text-xl font-bold">{card.title}</h2>
            {card.href ? (
              <a href={card.href} className="mt-3 block break-words text-sm text-slate-300 hover:text-white">{card.value}</a>
            ) : (
              <p className="mt-3 break-words text-sm text-slate-300">{card.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="glass mt-10 rounded-[2rem] p-8 md:p-10">
        <h2 className="text-2xl font-bold">Support Note</h2>
        <p className="mt-4 leading-7 text-slate-400">
          For faster support, mention your Windows version, Zapper version, and the issue you are facing. This helps us respond clearly without unnecessary back-and-forth.
        </p>
      </div>
    </section>
  );
}
