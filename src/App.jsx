import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(56,189,248,0.15),transparent_30%),radial-gradient(circle_at_80%_-10%,rgba(59,130,246,0.15),transparent_30%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Logos />
        <Features />
        <CTA />

        <footer className="py-12">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} MerchantIQ. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
