import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-10 md:pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-sky-200 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" /> Live risk insights for every transaction
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight text-white tracking-tight">
            The Intelligence Layer for Modern Payments
          </h1>
          <p className="mt-5 text-slate-300 text-lg">
            Reduce chargebacks, stop fraud, and unlock approval rates with real‑time merchant risk scoring built for fintech and enterprise teams.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition">Book a demo</a>
            <a href="#docs" className="px-5 py-3 rounded-xl bg-white/10 text-white font-medium text-sm border border-white/10 hover:bg-white/15 transition">Read the docs</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-sm text-slate-300/90">
            <div>
              <div className="text-2xl font-bold text-white">45%</div>
              <div className="text-slate-400">Fewer chargebacks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">+12%</div>
              <div className="text-slate-400">Approval uplift</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">ms</div>
              <div className="text-slate-400">Sub‑10ms scoring</div>
            </div>
          </div>
        </div>

        <div className="relative h-[520px] md:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
