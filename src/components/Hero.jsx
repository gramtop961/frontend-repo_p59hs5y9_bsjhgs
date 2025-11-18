import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Spline 3D cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/50gS2Nx3yhdqzJSa/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for dreamy vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/30 via-[#0b1020]/40 to-[#0b1020]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-white/80 text-sm">Clean SaaS • dreamy aesthetic</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_6px_40px_rgba(255,255,255,0.2)]">
            Design your product with a calm, modern flow
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
            A beautifully minimal SaaS starter with a wavy, animated background and subtle depth. Crafted for focus, clarity, and momentum.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow/50 shadow-white/20 hover:bg-white/95 transition">Start free</button>
            <button className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">Live demo</button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/70">
            <div>
              <div className="text-2xl font-semibold text-white">2x</div>
              <div className="text-sm">Faster launch</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <div className="text-2xl font-semibold text-white">99.9%</div>
              <div className="text-sm">Uptime SLA</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <div className="text-2xl font-semibold text-white">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
