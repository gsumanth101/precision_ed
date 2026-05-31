import { useEffect, useState } from 'react'
import {
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

import site from '../util/siteContent'
import { motion } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 12)
//       const current = ['hero', 'about', 'offerings', 'programs', 'partners', 'contact']
//         .map((id) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? 9999 }))
//         .filter((item) => item.top < 160)
//         .pop()
//       if (current) setActive(current.id)
//     }

//     onScroll()
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-white/70 bg-white/78 shadow-[0_18px_60px_rgba(148,163,184,0.22)] backdrop-blur-2xl'
            : 'border-white/50 bg-white/45 backdrop-blur-xl'
        }`}
      >
        <a href="#hero" className="flex items-center gap-3 rounded-full pr-3 text-slate-950">
          <span className="grid size-10 place-items-center rounded-full bg-[#18120a] text-amber-200 shadow-lg shadow-amber-900/20">
            <Sparkles size={18} />
          </span>
          <span className="text-sm font800 font-semibold tracking-tight sm:text-base">{site.brand}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const id = item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === id ? 'bg-[#18120a] text-amber-100 shadow-lg shadow-amber-900/15' : 'text-stone-600 hover:bg-amber-50/80 hover:text-stone-950'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        {/* <a href="#contact" className="hidden lg:block">
          <Button variant="secondary" className="min-h-10 px-4">
            Start a conversation
          </Button>
        </a> */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-900 shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/70 bg-white/88 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-amber-50"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  )
}

export default Navbar