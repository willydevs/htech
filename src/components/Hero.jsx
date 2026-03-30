import { ArrowRight, ChevronDown, ShieldCheck, Clock, Award } from 'lucide-react'

const badges = [
  { icon: Award,       label: '+10 Anos de Excelência' },
  { icon: Clock,       label: 'Suporte 24/7'           },
  { icon: ShieldCheck, label: '+10K Manutenções'        },
]

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/imgi_26_Header_Option_6-min-scaled.jpg.webp')" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

      {/* Blue accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-brand-700/20 border border-brand-400/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse-slow" />
            <span className="text-brand-200 text-sm font-medium tracking-wide">
              Troubleshooting &amp; Manutenção Especializada
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
            Excelência em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
              Equipamentos&nbsp;Médicos
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            Especialistas em sistemas de Ultrassom e PACS com mais de{' '}
            <strong className="text-white font-semibold">10 anos</strong> de dedicação.
            Garantimos a continuidade operacional do seu parque de equipamentos com
            suporte técnico completo e rápida resolução de falhas.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-14 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand-900/40 hover:shadow-xl hover:-translate-y-0.5"
            >
              Solicitar Suporte
              <ArrowRight size={18} />
            </button>
            <button
              onClick={scrollToServices}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Nossos Serviços
            </button>
          </div>

          {/* Badges */}
          <div
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '0.45s' }}
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5"
              >
                <Icon size={16} className="text-brand-400 flex-shrink-0" />
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-float"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </button>
    </section>
  )
}
