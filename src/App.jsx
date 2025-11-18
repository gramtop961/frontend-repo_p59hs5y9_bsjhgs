import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      {/* Top navigation */}
      <Navbar />

      {/* Dreamy hero with Spline cover */}
      <Hero />

      {/* Product sections */}
      <Features />
      <CTA />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} DreamSaaS. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
