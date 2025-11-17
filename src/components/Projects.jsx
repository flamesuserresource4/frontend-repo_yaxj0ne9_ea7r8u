export default function Projects() {
  const cases = [
    {
      title: 'Lead Gen Voice Agent',
      result: '37% lift in qualified bookings',
      details: 'Outbound agent that dials leads within 60 seconds, qualifies them, and schedules on the sales calendar.'
    },
    {
      title: 'Support Autopilot',
      result: '63% self-serve resolution',
      details: 'Multi-channel bot that answers FAQs, processes returns, and updates orders with human handoff.'
    },
    {
      title: 'Ops Automation Suite',
      result: '20+ hours saved/week',
      details: 'Automations across CRM, Notion, GSheets, and Slack to keep data clean and teams aligned.'
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Case Studies</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A few recent wins. I can share more details on a call.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-48 rounded-xl bg-gradient-to-br from-purple-500/15 via-blue-500/15 to-orange-400/15 border border-slate-200" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.details}</p>
              <p className="mt-3 text-sm font-medium text-slate-900">Outcome: {c.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
