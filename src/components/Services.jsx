import { useEffect, useRef, useState } from 'react'
import { Monitor, HardDrive, Zap, Activity, Settings, Radio } from 'lucide-react'

const services = [
  {
    icon:  Monitor,
    title: 'Manutenção de Ultrassom',
    desc:  'Diagnóstico e reparo especializado em equipamentos de ultrassom das principais fabricantes: GE, Philips, Siemens, Mindray, Samsung e mais. Peças originais e tempo de resposta ágil.',
    tags:  ['GE', 'Philips', 'Siemens', 'Mindray'],
    color: 'blue',
  },
  {
    icon:  HardDrive,
    title: 'Sistemas PACS & DICOM',
    desc:  'Instalação, configuração e suporte a sistemas de armazenamento e comunicação de imagens médicas. Integração com HIS/RIS e otimização de fluxos radiológicos.',
    tags:  ['PACS', 'DICOM', 'HIS/RIS', 'Cloud'],
    color: 'violet',
  },
  {
    icon:  Zap,
    title: 'Suporte Técnico 24/7',
    desc:  'Atendimento remoto e presencial disponível 24 horas, 7 dias por semana. Nossa equipe garante o mínimo tempo de inatividade para sua unidade de saúde.',
    tags:  ['Remoto', 'Presencial', '24/7', 'SLA'],
    color: 'emerald',
  },
  {
    icon:  Activity,
    title: 'Manutenção Preventiva',
    desc:  'Planos de manutenção preventiva e preditiva para prolongar a vida útil dos equipamentos, reduzir custos operacionais e garantir a precisão dos laudos.',
    tags:  ['Preventiva', 'Preditiva', 'Contratos', 'Relatórios'],
    color: 'amber',
  },
  {
    icon:  Settings,
    title: 'Calibração e QA',
    desc:  'Testes de controle de qualidade, calibração e aferição conforme normas ANVISA e protocolos internacionais. Documentação completa para auditoria.',
    tags:  ['ANVISA', 'Calibração', 'QA', 'Laudos'],
    color: 'rose',
  },
  {
    icon:  Radio,
    title: 'Instalação e Comissionamento',
    desc:  'Da logística à operacionalização: desembalo, instalação, treinamento de equipe e qualificação do equipamento para uso clínico imediato.',
    tags:  ['Instalação', 'Treinamento', 'IQ/OQ/PQ', 'Startup'],
    color: 'cyan',
  },
]

const colorMap = {
  blue:   { bg: 'bg-brand-50',   icon: 'text-brand-700',  tag: 'bg-brand-100 text-brand-700',  border: 'hover:border-brand-200'  },
  violet: { bg: 'bg-violet-50',  icon: 'text-violet-600', tag: 'bg-violet-100 text-violet-600', border: 'hover:border-violet-200' },
  emerald:{ bg: 'bg-emerald-50', icon: 'text-emerald-600',tag: 'bg-emerald-100 text-emerald-600',border:'hover:border-emerald-200'},
  amber:  { bg: 'bg-amber-50',   icon: 'text-amber-500',  tag: 'bg-amber-100 text-amber-600',  border: 'hover:border-amber-200'  },
  rose:   { bg: 'bg-rose-50',    icon: 'text-rose-600',   tag: 'bg-rose-100 text-rose-600',    border: 'hover:border-rose-200'   },
  cyan:   { bg: 'bg-cyan-50',    icon: 'text-cyan-600',   tag: 'bg-cyan-100 text-cyan-700',    border: 'hover:border-cyan-200'   },
}

function useInView() {
  const ref     = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, seen]
}

export default function Services() {
  const [ref, seen] = useInView()

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-700 text-sm font-semibold tracking-widest uppercase mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Serviços Especializados
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções completas para manutenção, suporte e gestão de equipamentos de diagnóstico por imagem.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tags, color }, i) => {
            const c = colorMap[color]
            return (
              <div
                key={title}
                className={`bg-white rounded-2xl border border-slate-100 p-6 lg:p-7 flex flex-col gap-4 shadow-sm transition-all duration-300 ${c.border} hover:shadow-lg hover:-translate-y-1 ${
                  seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} className={c.icon} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {tags.map((t) => (
                    <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-lg ${c.tag}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
