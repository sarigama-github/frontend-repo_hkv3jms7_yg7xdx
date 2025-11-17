export default function CTA() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-sky-900/30 to-slate-900 p-10">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Start with the sandbox. Scale to production.</h3>
              <p className="mt-2 text-slate-300">Transparent usage-based pricing with enterprise SLAs. Bring your own data or stream events to get going quickly.</p>
            </div>
            <div className="flex gap-3 justify-start lg:justify-end">
              <a href="#" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100">Get API key</a>
              <a href="#" className="px-5 py-3 rounded-xl border border-white/10 text-white font-medium text-sm hover:bg-white/10">Talk to sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
