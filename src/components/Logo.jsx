/**
 * HTech Service logo — SVG inline fiel ao original
 * Variante "light" (branco) para uso em fundos escuros/azuis
 * Variante "dark"  (azul)   para uso em fundos brancos
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const main  = variant === 'light' ? '#FFFFFF' : '#1d4ed8'
  const sub   = variant === 'light' ? 'rgba(255,255,255,0.70)' : '#64748b'
  const bar   = variant === 'light' ? 'rgba(255,255,255,0.40)' : '#cbd5e1'

  return (
    <svg
      viewBox="0 0 260 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="HTech Service logo"
    >
      {/* ── H ── custom crossbar */}
      <line x1="4"  y1="6"  x2="4"  y2="34" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="4"  y1="20" x2="17" y2="20" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="17" y1="6"  x2="17" y2="34" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>

      {/* ── T ── */}
      <line x1="22" y1="6"  x2="36" y2="6"  stroke={main} strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="29" y1="6"  x2="29" y2="34" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>

      {/* ── E ── */}
      <line x1="41" y1="6"  x2="41" y2="34" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="41" y1="6"  x2="55" y2="6"  stroke={main} strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="41" y1="20" x2="53" y2="20" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="41" y1="34" x2="55" y2="34" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>

      {/* ── C ── */}
      <path d="M72 6 Q58 6 58 20 Q58 34 72 34" stroke={main} strokeWidth="4.5" strokeLinecap="round" fill="none"/>

      {/* ── H (segundo) ── */}
      <line x1="77" y1="6"  x2="77" y2="34" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="77" y1="20" x2="90" y2="20" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="90" y1="6"  x2="90" y2="34" stroke={main} strokeWidth="4.5" strokeLinecap="round"/>

      {/* ── SERVICE (texto pequeno abaixo) ── */}
      <text x="4" y="50" fontFamily="Inter, Arial, sans-serif" fontSize="9" fontWeight="600"
            letterSpacing="5" fill={sub} textAnchor="start">
        SERVICE
      </text>

      {/* ── Divisor | ── */}
      <line x1="107" y1="4" x2="107" y2="36" stroke={bar} strokeWidth="2" strokeLinecap="round"/>

      {/* ── 10+ círculo ── */}
      {/* Círculo externo */}
      <circle cx="136" cy="20" r="16" stroke={main} strokeWidth="3" fill="none"/>
      {/* "10" */}
      <text x="128" y="25" fontFamily="Inter, Arial, sans-serif" fontSize="13" fontWeight="800"
            fill={main} textAnchor="start">
        10
      </text>
      {/* "+" sobreposto no canto superior direito do círculo */}
      <text x="145" y="14" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="800"
            fill={main} textAnchor="middle">
        +
      </text>

      {/* ── ANOS ── */}
      <text x="136" y="50" fontFamily="Inter, Arial, sans-serif" fontSize="7.5" fontWeight="600"
            letterSpacing="3" fill={sub} textAnchor="middle">
        ANOS
      </text>
    </svg>
  )
}
