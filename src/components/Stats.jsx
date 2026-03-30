import { useEffect, useRef, useState } from 'react'
import { Trophy, Clock, Wrench, Star } from 'lucide-react'

const stats = [
  {
    icon:   Trophy,
    value:  '+10',
    suffix: ' Anos',
    label:  'de Dedicação e Excelência',
    color:  'text-brand-700',
    bg:     'bg-brand-50',
  },
  {
    icon:   Clock,
    value:  '24',
    suffix: '/7',
    label:  'Suporte Técnico Disponível',
    color:  'text-emerald-600',
    bg:     'bg-emerald-50',
  },
  {
    icon:   Wrench,
    value:  '+10K',
    suffix: '',
    label:  'Manutenções Realizadas',
    color:  'text-violet-600',
    bg:     'bg-violet-50',
  },
  {
    icon:   Star,
    value:  '100',
    suffix: '%',
    label:  'Comprometimento com Qualidade',
    color:  'text-amber-500',
    bg:     'bg-amber-50',
  },
]

function useInView(threshold = 0.2) {
  const ref     = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSeen(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, seen]
}

export default function Stats() {
  const [ref, seen] = useInView()

  return (
    <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100 overflow-hidden"
        >
          {stats.map(({ icon: Icon, value, suffix, label, color, bg }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center gap-3 p-6 lg:p-8 transition-all duration-500 ${
                seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center`}>
                <Icon size={22} className={color} strokeWidth={2} />
              </div>
              <div>
                <p className={`text-3xl lg:text-4xl font-extrabold ${color} leading-none`}>
                  {value}<span className="text-2xl">{suffix}</span>
                </p>
                <p className="text-slate-500 text-sm mt-1 leading-snug max-w-[120px]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
