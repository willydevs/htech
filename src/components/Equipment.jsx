import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

const equipment = [
  {
    img:   '/images/imgi_12_refurbished-Epiq-7-683x1024-1-350x430.jpg',
    name:  'Philips EPIQ 7',
    brand: 'Philips',
    type:  'Ultrassom Premium',
  },
  {
    img:   '/images/imgi_143_refurbished-ge-logiq-s8-1-350x430.jpg',
    name:  'GE LOGIQ S8',
    brand: 'GE Healthcare',
    type:  'Ultrassom Diagnóstico',
  },
  {
    img:   '/images/imgi_145_GE-vivid-iq-2-350x430.jpg',
    name:  'GE Vivid IQ',
    brand: 'GE Healthcare',
    type:  'Ecocardiografia',
  },
  {
    img:   '/images/imgi_147_voluson-e10-for-sale-350x430.jpg',
    name:  'GE Voluson E10',
    brand: 'GE Healthcare',
    type:  'Ultrassom Obstétrico',
  },
  {
    img:   '/images/imgi_14_20220926-BGR50968-350x430.jpg',
    name:  'Sistema Avançado',
    brand: 'Multi-marca',
    type:  'Manutenção Geral',
  },
  {
    img:   '/images/imgi_15_refurbished-Mindray-DC-70-e1676404122382-350x430.jpg',
    name:  'Mindray DC-70',
    brand: 'Mindray',
    type:  'Ultrassom Diagnóstico',
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

export default function Equipment() {
  const [ref, seen] = useInView()

  return (
    <section id="equipamentos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-700 text-sm font-semibold tracking-widest uppercase mb-3">
            Equipamentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Parque de Equipamentos Atendidos
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Trabalhamos com as principais marcas e modelos do mercado de diagnóstico por imagem, garantindo atendimento especializado para cada equipamento.
          </p>
        </div>

        {/* Brands strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['GE Healthcare', 'Philips', 'Siemens', 'Mindray', 'Samsung', 'Toshiba', 'Esaote', 'SonoSite'].map((b) => (
            <span key={b} className="bg-white border border-slate-200 text-slate-600 text-sm font-medium px-4 py-2 rounded-xl shadow-sm">
              {b}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {equipment.map(({ img, name, brand, type }, i) => (
            <div
              key={name}
              className={`group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-700/0 group-hover:bg-brand-700/5 transition-colors duration-300" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1.5 shadow-sm">
                    <ExternalLink size={14} className="text-brand-700" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs text-brand-700 font-semibold uppercase tracking-wider mb-1">{brand}</p>
                <h3 className="text-slate-900 font-bold text-sm leading-snug">{name}</h3>
                <p className="text-slate-400 text-xs mt-1">{type}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Não encontrou seu equipamento?{' '}
          <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-brand-700 font-semibold hover:underline"
          >
            Entre em contato
          </button>{' '}
          — atendemos praticamente todas as marcas.
        </p>
      </div>
    </section>
  )
}
