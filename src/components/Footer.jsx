import { useMemo } from 'react'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import site from '../util/siteContent'


function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[30px] border border-white/70 bg-white/65 px-6 py-6 text-sm text-slate-500 shadow-sm backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-bold text-slate-950">{site.brand}</div>
          <div>© {year} Global Education & Innovation Consortium.</div>
        </div>
        <div className="flex items-center gap-2">
          {[FaLinkedinIn, FaXTwitter].map((Icon, index) => (
            <a key={index} href="#hero" aria-label="Social link" className="grid size-10 place-items-center rounded-full bg-[#18120a] text-amber-100 transition hover:-translate-y-0.5">
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer