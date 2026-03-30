import { useEffect, useRef, useState } from 'react'
import { ShieldCheck, Zap, Users, HeartHandshake, TrendingUp, FileText } from 'lucide-react'

const reasons = [
  {
    icon:  ShieldCheck,
    title: 'Certificados pelos Fabricantes',
    desc:  'Nossa equipe possui certificações técnicas oficiais dos principais fabricantes, garantindo qualidade de fábrica em cada atendimento.',
  },
  {
    icon:  Zap,
    title: 'Tempo de Resposta Ágil',
    desc:  'Comprometemos com SLAs claros e cumprimos. Em emergências críticas, acionamos equipe de plantão para atendimento imediato.',
  },
  {
    icon:  Users,
    title: 'Equipe Especializada',
    desc:  'Engenheiros e técnicos biomédicos com anos de experiência em campo, mantendo seu equipamento dentro das especificações técnicas.',
  },
  {
    icon:  HeartHandshake,
    title: 'Relacionamento de Longo Prazo',
    desc:  'Construímos parcerias duradouras. Nossos clientes permanecem conosco por anos porque entregamos consistência e confiança.',
  },
  {
    icon:  TrendingUp,
    title: 'Redução de Custos Operacionais',
    desc:  'Manutenção preventiva bem feita reduz quebras inesperadas, prolonga a vida útil e diminui o custo total de propriedade do equipamento.',
  },
  {
    icon:  FileText,
    title: 'Documentação Completa',
    desc:  'Cada atendimento gera relatório técnico detalhado, histórico de intervenções e controle de peças, facilitando auditorias e acreditações.',
  },
]

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

export default function WhyUs() {
  const [ref, seen] = useInView()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-700 text-sm font-semibold tracking-widest uppercase mb-3">
            Por que a HTech?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            A escolha certa para o seu serviço de saúde
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Quando a continuidade do seu serviço depende do funcionamento dos equipamentos, você precisa de um parceiro técnico confiável e experiente.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group relative bg-slate-50 hover:bg-brand-700 rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default ${
                seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 bg-white group-hover:bg-brand-600 rounded-xl flex items-center justify-center mb-4 shadow-sm transition-colors duration-300">
                <Icon size={20} className="text-brand-700 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>
              <h3 className="text-slate-900 group-hover:text-white font-bold text-base mb-2 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-slate-500 group-hover:text-brand-200 text-sm leading-relaxed transition-colors duration-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
