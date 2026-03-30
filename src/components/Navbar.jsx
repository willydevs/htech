import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Início',        href: '#inicio'       },
  { label: 'Serviços',      href: '#servicos'      },
  { label: 'Equipamentos',  href: '#equipamentos'  },
  { label: 'Sobre',         href: '#sobre'         },
  { label: 'Contato',       href: '#contato'       },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button onClick={() => handleLink('#inicio')} className="flex items-center">
            <Logo variant="dark" className="h-9 w-auto" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className="text-slate-600 hover:text-brand-700 font-medium text-sm transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-700 after:transition-all after:duration-200 hover:after:w-full"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+557933030236"
              className="flex items-center gap-1.5 text-slate-600 hover:text-brand-700 text-sm font-medium transition-colors"
            >
              <Phone size={15} />
              <span>(79) 3303-0236</span>
            </a>
            <button
              onClick={() => handleLink('#contato')}
              className="bg-brand-700 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px"
            >
              Solicitar Suporte
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-600 hover:text-brand-700 transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-left text-slate-700 hover:text-brand-700 hover:bg-brand-50 font-medium text-sm py-2.5 px-3 rounded-lg transition-colors duration-150"
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:+557933030236"
            className="flex items-center justify-center gap-2 mt-1 text-slate-700 hover:text-brand-700 font-medium text-sm py-2.5 px-3 rounded-lg border border-slate-200 transition-colors"
          >
            <Phone size={14} />
            (79) 3303-0236
          </a>
          <button
            onClick={() => handleLink('#contato')}
            className="mt-2 bg-brand-700 hover:bg-brand-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
          >
            Solicitar Suporte
          </button>
        </nav>
      </div>
    </header>
  )
}
