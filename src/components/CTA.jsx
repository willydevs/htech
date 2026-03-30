import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-brand-700">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="absolute inset-0 bg-[url('/images/imgi_74_MIUS-916-scaled-3-1536x1024.jpg')] bg-cover bg-center opacity-[0.06]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
          Fale conosco agora
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
          Seu equipamento parou?<br />
          <span className="text-brand-200">A HTech resolve.</span>
        </h2>
        <p className="text-brand-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Não deixe um equipamento fora de operação comprometer o atendimento aos seus pacientes. Nossa equipe está disponível 24 horas para atender sua urgência.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/message/B37GMDVLVGA2G1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-bold text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            Chamar no WhatsApp
          </a>
          <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white border border-white/20 font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Enviar Mensagem
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
