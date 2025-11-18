import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/90 backdrop-blur shadow ring-1 ring-white/60 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-indigo-600" />
          </div>
          <span className="text-white/90 text-lg font-semibold tracking-tight">DreamSaaS</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-white/90 hover:text-white transition">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-white/90 transition shadow">Get started</button>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-white/15 text-white/90">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
