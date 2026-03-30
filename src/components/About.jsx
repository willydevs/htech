import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const points = [
  'Equipe certificada pelos principais fabricantes de ultrassom',
  'Estoque de peças originais para reduzir o tempo de downtime',
  'Contratos de manutenção flexíveis adaptados ao seu orçamento',
  'Cobertura nacional com técnicos distribuídos estrategicamente',
  'Relatórios técnicos detalhados após cada atendimento',
  'Comprometimento com os padrões ANVISA e ISO',
]

function useInView() {
  const ref     = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, seen]
}

export default function About() {
  const [ref, seen] = useInView()

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Images collage */}
          <div
            className={`relative transition-all duration-700 ${seen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="/images/imgi_62_Probo-Tampa-Employee-Evan-pulling-circuit-board-BGR57898-1536x1024.jpg"
                alt="Técnico realizando manutenção em equipamento de ultrassom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-extrabold text-xs">HT</span>
                </div>
                <span className="text-brand-700 font-bold text-sm">HTech Service</span>
              </div>
              <p className="text-slate-500 text-xs leading-snug">Referência em manutenção de equipamentos de diagnóstico por imagem</p>
            </div>

            {/* Second image thumb */}
            <div className="absolute -top-5 -right-5 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white hidden lg:block">
              <img
                src="/images/imgi_74_MIUS-916-scaled-3-1536x1024.jpg"
                alt="Equipamento médico em manutenção"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-700 delay-200 ${seen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <span className="inline-block text-brand-700 text-sm font-semibold tracking-widest uppercase mb-3">
              Sobre a HTech
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Mais de 10 anos garantindo a{' '}
              <span className="text-brand-700">continuidade</span>{' '}
              do seu parque de equipamentos
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-4">
              A HTech Service nasceu da paixão por tecnologia médica e do compromisso de manter os equipamentos de diagnóstico por imagem funcionando com máxima performance. Atendemos hospitais, clínicas e centros de diagnóstico em todo o Brasil.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Nossa equipe de engenheiros e técnicos biomédicos trabalha com os mais altos padrões de qualidade, garantindo que cada atendimento gere um impacto real na operação do seu serviço de saúde.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-snug">{p}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Fale com nossa equipe
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
