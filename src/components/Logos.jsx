export default function Logos() {
  const logos = [
    'Stripe','Visa','Mastercard','Plaid','Adyen','Checkout.com'
  ]

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by leading payment teams</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          {logos.map(l => (
            <div key={l} className="h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center text-slate-300">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
