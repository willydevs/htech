import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Início',       href: '#inicio'       },
  { label: 'Serviços',     href: '#servicos'      },
  { label: 'Equipamentos', href: '#equipamentos'  },
  { label: 'Sobre',        href: '#sobre'         },
  { label: 'Contato',      href: '#contato'       },
]

const services = [
  'Manutenção de Ultrassom',
  'Sistemas PACS & DICOM',
  'Suporte Técnico 24/7',
  'Manutenção Preventiva',
  'Calibração e QA',
  'Instalação de Equipamentos',
]

const socials = [
  {
    icon:  Instagram,
    href:  'https://www.instagram.com/htechservices?igsh=MTA4Y2RqOXhxMm9tYw%3D%3D',
    label: 'Instagram',
  },
  {
    icon:  MessageCircle,
    href:  'https://wa.me/message/B37GMDVLVGA2G1',
    label: 'WhatsApp',
  },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-slate-400">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Especialistas em manutenção de equipamentos médicos de diagnóstico por imagem. Mais de 10 anos garantindo a excelência operacional do seu parque tecnológico.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-brand-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} className="text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('#servicos')}
                    className="text-sm hover:text-white transition-colors duration-150 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+557933030236" className="text-sm hover:text-white transition-colors">
                  +55 79 3303-0236
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={15} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/message/B37GMDVLVGA2G1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram size={15} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/htechservices?igsh=MTA4Y2RqOXhxMm9tYw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  @htechservices
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Atendimento em todo o Brasil</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-slate-800 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400 mb-1 font-medium">Horário de atendimento:</p>
              <p className="text-xs text-white font-semibold">Suporte de Urgência: 24h / 7 dias</p>
              <p className="text-xs text-slate-400 mt-1">Comercial: Seg–Sex, 8h–18h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} HTech Service. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Termos de Uso</a>
            <button
              onClick={scrollTop}
              className="w-8 h-8 bg-slate-800 hover:bg-brand-700 rounded-lg flex items-center justify-center transition-colors duration-200 ml-2"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={14} className="text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
