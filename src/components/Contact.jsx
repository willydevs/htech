import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Instagram } from 'lucide-react'

const contactInfo = [
  {
    icon:  Phone,
    label: 'Telefone / WhatsApp',
    value: '+55 79 3303-0236',
    href:  'tel:+557933030236',
  },
  {
    icon:  Mail,
    label: 'E-mail',
    value: 'contato@htechservice.com.br',
    href:  'mailto:contato@htechservice.com.br',
  },
  {
    icon:  MapPin,
    label: 'Atendimento',
    value: 'Todo o território nacional',
    href:  null,
  },
  {
    icon:  Instagram,
    label: 'Instagram',
    value: '@htechservices',
    href:  'https://www.instagram.com/htechservices?igsh=MTA4Y2RqOXhxMm9tYw%3D%3D',
  },
  {
    icon:  MessageCircle,
    label: 'Atendimento 24/7',
    value: 'Suporte ininterrupto',
    href:  null,
  },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-700 text-sm font-semibold tracking-widest uppercase mb-3">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Vamos conversar?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Preencha o formulário ou escolha seu canal preferido. Respondemos rapidamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-brand-700" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-slate-800 font-semibold hover:text-brand-700 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-800 font-semibold">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/message/B37GMDVLVGA2G1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-md mt-2 hidden lg:block">
              <img
                src="/images/contact-dicom.png"
                alt="Instalação Sistema DICOM Print - HTech Service"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Mensagem enviada!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Recebemos seu contato e retornaremos em breve. Obrigado!
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', subject:'', message:'' }) }}
                  className="text-brand-700 text-sm font-semibold hover:underline mt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Nome *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Telefone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    E-mail *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Assunto
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="manutencao">Manutenção Corretiva</option>
                    <option value="preventiva">Manutenção Preventiva</option>
                    <option value="pacs">Sistemas PACS</option>
                    <option value="contrato">Contrato de Suporte</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Descreva o equipamento, o problema e a urgência do atendimento..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-600 disabled:bg-brand-400 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
