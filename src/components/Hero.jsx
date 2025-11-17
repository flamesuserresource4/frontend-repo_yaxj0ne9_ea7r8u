import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
            AI Automation Studio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Build, launch, and scale AI automations
          </h1>
          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            I design and ship production-ready AI agents, voice bots, and workflow automations that save time and unlock new revenue.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white font-medium px-5 py-3 shadow hover:shadow-md transition">Book a free consult</a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-medium px-5 py-3 border border-slate-200 hover:bg-slate-50 transition">See case studies</a>
          </div>
        </div>
      </div>
    </section>
  )
}
