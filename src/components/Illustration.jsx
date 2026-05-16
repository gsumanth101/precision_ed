const palette = {
  ink: '#1c160d',
  amber: '#f59e0b',
  yellow: '#facc15',
  orange: '#fb923c',
  sky: '#0ea5e9',
  cream: '#fff7d6',
  line: '#e7d9b5',
  soft: '#fffaf0',
}

function Shell({ children, title }) {
  return (
    <svg viewBox="0 0 720 520" role="img" aria-label={title} className="h-auto w-full">
      <defs>
        <linearGradient id={`${title}-grad`} x1="8%" x2="92%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fff2b8" />
          <stop offset="48%" stopColor="#fffaf0" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <filter id={`${title}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#d97706" floodOpacity="0.18" />
        </filter>
      </defs>
      <rect x="40" y="46" width="640" height="428" rx="46" fill={`url(#${title}-grad)`} />
      <circle cx="158" cy="130" r="58" fill="#ffffff" opacity="0.72" />
      <circle cx="566" cy="388" r="74" fill="#ffffff" opacity="0.58" />
      {children}
    </svg>
  )
}

export function Illustration({ type = 'hero' }) {
  if (type === 'ai') {
    return (
      <Shell title="AI technology education illustration">
        <g filter="url(#AI technology education illustration-shadow)">
          <rect x="176" y="126" width="368" height="250" rx="34" fill="#fff" />
          <rect x="214" y="164" width="292" height="36" rx="18" fill={palette.cream} />
          <path d="M264 270c0-54 42-98 96-98s96 44 96 98-42 98-96 98-96-44-96-98Z" fill="#fffbeb" />
          <path d="M322 236h76v68h-76z" fill="#fff" stroke={palette.line} strokeWidth="5" />
          <path d="M334 224v-34m52 34v-34m-52 148v-34m52 34v-34m-98-42h-36m216 0h-36" stroke={palette.amber} strokeWidth="8" strokeLinecap="round" />
          <circle cx="360" cy="270" r="22" fill={palette.sky} />
          <path d="M286 406h148" stroke={palette.ink} strokeWidth="11" strokeLinecap="round" opacity="0.85" />
        </g>
      </Shell>
    )
  }

  if (type === 'global') {
    return (
      <Shell title="Global mentorship network illustration">
        <g filter="url(#Global mentorship network illustration-shadow)">
          <circle cx="360" cy="268" r="136" fill="#fff" />
          <path d="M242 268h236M360 132c42 40 66 84 66 136s-24 96-66 136M360 132c-42 40-66 84-66 136s24 96 66 136" fill="none" stroke={palette.line} strokeWidth="6" />
          <circle cx="360" cy="268" r="136" fill="none" stroke={palette.amber} strokeWidth="8" />
          <circle cx="204" cy="158" r="34" fill={palette.yellow} />
          <circle cx="528" cy="180" r="34" fill={palette.orange} />
          <circle cx="540" cy="364" r="34" fill={palette.sky} />
          <circle cx="190" cy="360" r="34" fill="#fde68a" />
          <path d="M238 176l72 44m172-24-72 36m90 108-88-42m-178 46 78-44" stroke={palette.ink} strokeWidth="5" strokeLinecap="round" opacity="0.18" />
        </g>
      </Shell>
    )
  }

  if (type === 'contact') {
    return (
      <Shell title="Contact collaboration illustration">
        <g filter="url(#Contact collaboration illustration-shadow)">
          <rect x="170" y="152" width="380" height="238" rx="36" fill="#fff" />
          <path d="M194 192l166 112 166-112" fill="none" stroke={palette.amber} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M250 128h220" stroke={palette.ink} strokeWidth="12" strokeLinecap="round" opacity="0.88" />
          <circle cx="252" cy="402" r="28" fill={palette.yellow} />
          <circle cx="470" cy="116" r="26" fill={palette.sky} />
          <path d="M246 282h72m84 0h72M246 324h228" stroke={palette.line} strokeWidth="8" strokeLinecap="round" />
        </g>
      </Shell>
    )
  }

  return (
    <Shell title="Global education mentorship illustration">
      <g filter="url(#Global education mentorship illustration-shadow)">
        <rect x="154" y="128" width="412" height="264" rx="38" fill="#fff" />
        <path d="M228 214l132-58 132 58-132 58-132-58Z" fill={palette.amber} />
        <path d="M276 254v58c48 38 120 38 168 0v-58l-84 36-84-36Z" fill={palette.yellow} />
        <path d="M492 214v78" stroke={palette.ink} strokeWidth="8" strokeLinecap="round" />
        <circle cx="492" cy="314" r="14" fill={palette.sky} />
        <rect x="218" y="354" width="284" height="24" rx="12" fill="#fef3c7" />
        <path d="M210 174h88m124 0h88" stroke={palette.line} strokeWidth="9" strokeLinecap="round" />
        <circle cx="184" cy="174" r="13" fill={palette.yellow} />
        <circle cx="536" cy="174" r="13" fill={palette.orange} />
      </g>
    </Shell>
  )
}
