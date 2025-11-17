import { ShieldCheck, Gauge, LineChart, Zap } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Adaptive Risk Engine',
    desc: 'Device, identity, and behavioral signals fused into a single merchant risk score.'
  },
  {
    icon: Gauge,
    title: 'Real-time Decisions',
    desc: 'Sub-10ms scoring with streaming updates for authorizations and post-auth checks.'
  },
  {
    icon: LineChart,
    title: 'Portfolio Intelligence',
    desc: 'Cohort analytics for approval rates, chargebacks, retries, and recovery.'
  },
  {
    icon: Zap,
    title: 'Simple Integration',
    desc: 'Drop-in API and event webhooks. Start with a key, scale to millions.'
  }
]

export default function Features() {
  return (
    <section id="product" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Build a smarter acquiring stack</h2>
          <p className="mt-3 text-slate-300">Plug MerchantIQ into your payment flows to reduce risk and lift approvals without sacrificing UX.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur hover:border-white/20 transition">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-sky-300">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
