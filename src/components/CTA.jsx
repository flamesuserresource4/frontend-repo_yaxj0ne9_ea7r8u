export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Ready to automate?</h2>
        <p className="mt-4 text-slate-600">Tell me about your goals. I’ll propose a lean MVP, timeline, and pricing. No fluff.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-3">
          <input required placeholder="Name" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <input required type="email" placeholder="Email" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <textarea required placeholder="What do you want to automate?" rows={4} className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white font-medium px-5 py-3 shadow hover:shadow-md transition">Send</button>
        </form>
        <p className="mt-4 text-xs text-slate-500">Prefer email? hello@yourdomain.com</p>
      </div>
    </section>
  )
}
