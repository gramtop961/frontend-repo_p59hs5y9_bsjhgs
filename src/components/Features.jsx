import { ShieldCheck, Sparkles, GaugeCircle, Layers3 } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/7 transition">
      <div className="h-11 w-11 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white/90">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-white font-semibold">{title}</h3>
      <p className="mt-1 text-white/70 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Built for clarity</h2>
          <p className="mt-3 text-white/70">Everything you need to launch a polished product fast.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={Sparkles} title="Dreamy UI" desc="Soft gradients, layered depth, and tasteful motion help your brand stand out." />
          <Feature icon={Layers3} title="Composable" desc="Modular sections you can rearrange and extend without friction." />
          <Feature icon={GaugeCircle} title="Performance" desc="Vite + React + Tailwind pair speed with a delightful developer experience." />
          <Feature icon={ShieldCheck} title="Secure" desc="Best practices baked in with sensible defaults and modern tooling." />
        </div>
      </div>
    </section>
  )
}

export default Features
