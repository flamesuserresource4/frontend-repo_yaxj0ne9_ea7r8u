import { Bot, MessageSquare, Sparkles, Workflow, Mic, Zap } from 'lucide-react'

export default function Services() {
  const items = [
    {
      icon: Bot,
      title: 'Custom AI Agents',
      desc: 'Task-specific agents that handle support, outreach, research, and operations with human-like quality.'
    },
    {
      icon: Mic,
      title: 'Voice Automation',
      desc: 'Natural-sounding phone agents for inbound and outbound calls with scheduling, CRM updates, and payments.'
    },
    {
      icon: Workflow,
      title: 'Workflow Orchestration',
      desc: 'End-to-end automation connecting your tools: CRM, Notion, Slack, email, and internal systems.'
    },
    {
      icon: MessageSquare,
      title: 'Chatbots & RAG',
      desc: 'Chat experiences on your docs and data using retrieval-augmented generation for accurate responses.'
    },
    {
      icon: Sparkles,
      title: 'Model Integration',
      desc: 'OpenAI, Anthropic, Groq, ElevenLabs, and more—production setups with observability and safety.'
    },
    {
      icon: Zap,
      title: 'Automation Audits',
      desc: 'Identify high-impact opportunities, quantify ROI, and get a clear execution roadmap.'
    }
  ]

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">From idea to launch, I build automations that deliver measurable results—fast.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-white flex items-center justify-center shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
