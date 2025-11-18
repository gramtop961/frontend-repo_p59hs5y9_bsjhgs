function CTA() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/15 p-10">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-pink-400/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-indigo-400/30 blur-3xl" />

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Make it yours in minutes</h3>
            <p className="mt-2 text-white/70 max-w-2xl">Start free, then upgrade when you’re ready. No credit card required.</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow/50 shadow-white/20 hover:bg-white/95 transition">Get started</button>
              <button className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">Contact sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
