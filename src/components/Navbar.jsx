import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Product', href: '#product' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ]

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30"></div>
          <span className="text-white text-lg font-semibold tracking-tight">MerchantIQ</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-slate-200 hover:text-white">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors">Get started</button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="md:hidden mx-3 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-4 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="block px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/5">
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3">
            <button className="flex-1 px-4 py-2 text-sm text-slate-200 hover:text-white">Sign in</button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100">Get started</button>
          </div>
        </div>
      )}
    </header>
  )
}
