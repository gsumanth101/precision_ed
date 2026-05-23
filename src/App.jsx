import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Avatar from '@mui/material/Avatar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  ChevronDown,
  Globe2,
  GraduationCap,
  Mail,
  Menu,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from 'lucide-react'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { AnimatedSection } from './components/AnimatedSection'
import { SectionHeader } from './components/SectionHeader'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Field } from './components/ui/input'
import { Illustration } from './components/Illustration'

const site = {
  brand: 'Precision Ed',
  nav: [
    { label: 'Offerings', href: '#offerings' },
    { label: 'Programs', href: '#programs' },
    { label: 'About', href: '#about' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Global Education & Innovation Consortium',
    title: 'Start early. Aim globally. Build with precision.',
    copy: '"A premium mentorship pathway for students preparing for top universities, AI fluency, and future-ready careers."',
    stats: [
      ['Top 20', 'student cohort model'],
      ['8-12', 'grades served'],
      ['2-week', 'mentorship rhythm'],
    ],
  },
  offerings: [
    {
      icon: Target,
      title: 'Admissions Roadmaps',
      text: '"A clear plan before the pressure begins."',
    },
    {
      icon: BrainCircuit,
      title: 'AI & Technology Awareness',
      text: '"Future literacy for every ambitious learner."',
    },
    {
      icon: ShieldCheck,
      title: 'Profile Positioning',
      text: '"A stronger story across academics and activities."',
    },
    {
      icon: Globe2,
      title: 'Global Opportunity Prep',
      text: '"Olympiads, research, internships, and global exposure."',
    },
  ],
  programTabs: [
    {
      label: 'Global BS Prep',
      title: '"Built for the top 20 students ready to compete globally."',
      points: [
        'Step-by-step BS admissions roadmap.',
        'For Grade 8-12 students with global ambition.',
        'Biweekly mentorship with elite mentors.',
        'Exposure to students already studying abroad.',
      ],
    },
    {
      label: 'AI Awareness',
      title: '"AI awareness that feels practical, modern, and accessible."',
      points: [
        'AI basics and responsible innovation.',
        'Confidence through guided exploration.',
        'Workshops for school and university partners.',
        'Technology literacy tied to real careers.',
      ],
    },
    {
      label: 'Mentorship',
      title: '"Guidance from people who have already walked the path."',
      points: [
        'Ivy League and global-campus mentors.',
        'Mindset, communication, and direction.',
        'Clear feedback for students and parents.',
        'Long-term growth, not last-minute stress.',
      ],
    },
  ],
  benefits: [
    '"Clarity for top global universities."',
    '"Strategy that compounds over time."',
    '"Confidence across medicine, engineering, law, arts, and tech."',
    '"Growth across academics, activities, and communication."',
    '"A future-ready perspective for career and life."',
  ],
  partners: [
    {
      title: 'University Leaders',
      text: '"Mentorship, research pathways, and global exposure."',
      icon: Building2,
    },
    {
      title: 'Schools & Universities',
      text: '"AI and technology awareness for future-ready campuses."',
      icon: GraduationCap,
    },
    {
      title: 'Nonprofits',
      text: '"Access to guidance where opportunity changes trajectories."',
      icon: Users,
    },
  ],
  faqs: [
    ['Who can join?', 'Grade 8-12 students with strong academics, involvement, and global ambition.'],
    ['What makes it different?', 'Early planning, global mentors, AI awareness, and admissions positioning in one pathway.'],
    ['How often is mentorship?', 'Every two weeks with program leaders, experts, and students studying abroad.'],
  ],
  quotes: [
    '"Ambition needs architecture."',
    '"Global preparation starts before applications."',
    '"Students do better when the path is visible."',
  ],
}

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: { main: '#18120a' },
  },
})

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const current = ['hero', 'offerings', 'programs', 'about', 'partners', 'contact']
        .map((id) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? 9999 }))
        .filter((item) => item.top < 160)
        .pop()
      if (current) setActive(current.id)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

        <a href="#contact" className="hidden lg:block">
          <Button variant="secondary" className="min-h-10 px-4">
            Start a conversation
          </Button>
        </a>

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

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Badge>{site.hero.eyebrow}</Badge>
          <h1 className="mt-7 max-w-5xl text-balance text-5xl font800 font-bold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
            <span className="gradient-text">{site.hero.title}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
            {site.hero.copy}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#programs">
              <Button>
                Explore programs <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#partners">
              <Button variant="secondary">Partner with us</Button>
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {site.hero.stats.map(([value, label]) => (
              <Card key={value} className="rounded-3xl p-4 text-left">
                <div className="whitespace-nowrap text-2xl font-bold tracking-tight text-slate-950">{value}</div>
                <div className="mt-1 text-xs font-medium leading-5 text-slate-500">{label}</div>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-yellow-200 via-amber-100 to-sky-100 blur-3xl" />
          <Card className="relative overflow-hidden rounded-[36px] p-5">
            <div className="rounded-[28px] bg-gradient-to-br from-amber-50 via-white to-sky-50 p-8">
              <motion.div className="float-slow mx-auto w-full max-w-lg">
                <Illustration type="hero" />
              </motion.div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['Ivy League mentors', 'AI awareness labs'].map((item) => (
                  <div key={item} className="rounded-2xl border border-amber-100/80 bg-white/78 p-4 text-sm font-semibold text-stone-700 shadow-sm">
                    <Check className="mb-2 text-amber-600" size={18} /> {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function Offerings() {
  return (
    <AnimatedSection id="offerings">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we offer"
          title="Clear pathways. Strong stories. Global readiness."
          description='"Everything a student needs to move from ambition to direction."'
        />
        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.offerings.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="group flex h-full flex-col p-6 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(217,119,6,0.18)]">
                  <div className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-700 transition group-hover:bg-amber-400 group-hover:text-stone-950">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.text}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

function QuoteStrip() {
  return (
    <AnimatedSection className="py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-[38px] border border-amber-100/70 bg-white/64 p-5 shadow-[0_24px_80px_rgba(217,119,6,0.12)] backdrop-blur-2xl md:grid-cols-[0.86fr_1.14fr] lg:p-8">
        <div className="rounded-[30px] bg-gradient-to-br from-yellow-50 via-white to-sky-50 p-6">
          <img
            src="/undraw_text_messages.svg"
            alt="unDraw message illustration for mentorship conversations"
            className="float-slow mx-auto max-h-72 w-full object-contain"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {site.quotes.map((quote, index) => (
            <Card key={quote} className="flex min-h-40 flex-col justify-between rounded-[26px] p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Note 0{index + 1}</span>
              <p className="mt-6 text-pretty text-lg font-semibold leading-7 text-stone-950">{quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function Programs() {
  const [tab, setTab] = useState(0)
  const current = site.programTabs[tab]

  return (
    <AnimatedSection id="programs" className="py-24">
      <div className="mx-auto max-w-7xl rounded-[40px] border border-amber-100/70 bg-white/62 p-5 shadow-[0_30px_100px_rgba(217,119,6,0.14)] backdrop-blur-2xl sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Programs"
          title="Premium programs with focused mentorship."
          description='"Structured guidance for students who want to prepare with intent."'
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] bg-gradient-to-br from-yellow-50 via-white to-sky-50 p-6">
            <div className="float-delayed mx-auto max-w-md">
              <Illustration type="ai" />
            </div>
          </div>
          <div>
            <Tabs
              value={tab}
              onChange={(_, value) => setTab(value)}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="Program tabs"
              sx={{
                mb: 3,
                '& .MuiTabs-indicator': { backgroundColor: '#d97706', height: 3, borderRadius: 4 },
                '& .MuiTab-root': { textTransform: 'none', fontWeight: 700, color: '#78716c' },
                '& .Mui-selected': { color: '#18120a !important' },
              }}
            >
              {site.programTabs.map((item) => (
                <Tab key={item.label} label={item.label} />
              ))}
            </Tabs>
            <Card className="rounded-[30px] bg-white/85">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{current.title}</h3>
              <div className="mt-6 grid gap-3">
                {current.points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl bg-amber-50/60 p-4 text-sm leading-6 text-stone-700">
                    <Check className="mt-0.5 shrink-0 text-amber-600" size={18} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

function About() {
  return (
    <AnimatedSection id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            align="left"
            eyebrow="About"
            title="Built for modern students with global goals."
            description='"Educators, mentors, and partners working together around one student pathway."'
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {site.benefits.map((benefit) => (
              <div key={benefit} className="flex min-h-24 items-start gap-3 rounded-3xl border border-white/70 bg-white/70 p-4 text-sm leading-6 text-slate-700 shadow-sm">
                <Sparkles className="mt-1 shrink-0 text-amber-500" size={17} />
                {benefit}
              </div>
            ))}
          </div>
        </div>
        <Card className="overflow-hidden rounded-[38px] p-6">
          <div className="rounded-[30px] bg-gradient-to-br from-yellow-50 via-white to-sky-50 p-8">
            <div className="float-slow mx-auto max-w-lg">
              <Illustration type="global" />
            </div>
          </div>
        </Card>
      </div>
    </AnimatedSection>
  )
}

function Partners() {
  return (
    <AnimatedSection id="partners">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Partner with us"
          title="Partnerships that expand student access."
          description='"Bring mentorship, research pathways, and AI awareness to more learners."'
        />
        <div className="grid auto-rows-fr gap-5 lg:grid-cols-3">
          {site.partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <motion.div key={partner.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full p-7 hover:-translate-y-2">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid size-13 place-items-center rounded-2xl bg-[#18120a] text-amber-200">
                      <Icon size={23} />
                    </div>
                    <Avatar sx={{ bgcolor: '#fef3c7', color: '#b45309', fontWeight: 800 }}>{index + 1}</Avatar>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{partner.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{partner.text}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-[34px] border border-amber-100 bg-gradient-to-r from-yellow-50 via-white to-sky-50 p-2">
          <div className="grid gap-3 rounded-[28px] bg-white/62 p-4 sm:grid-cols-3">
            {['Schools', 'Universities', 'Nonprofits'].map((item) => (
              <div key={item} className="rounded-2xl border border-white bg-white/75 px-5 py-4 text-center text-sm font-bold text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

function Testimonials() {
  return (
    <AnimatedSection className="py-10">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>Outcomes</Badge>
        <blockquote className="mt-6 text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-950 sm:text-4xl">
          "Clarity creates confidence. Confidence creates global choices."
        </blockquote>
        <p className="mt-5 text-slate-500">Precision Ed student and parent outcome</p>
      </div>
    </AnimatedSection>
  )
}

function Faqs() {
  return (
    <AnimatedSection className="py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Questions" title="Simple answers for ambitious families." />
        <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white/70 shadow-[0_20px_60px_rgba(148,163,184,0.15)] backdrop-blur-2xl">
          {site.faqs.map(([question, answer]) => (
            <Accordion key={question} disableGutters elevation={0} sx={{ background: 'transparent', '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ChevronDown size={18} />} sx={{ px: 3, py: 1.2 }}>
                <span className="font-semibold text-slate-950">{question}</span>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, color: '#64748b', lineHeight: 1.8 }}>{answer}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function Contact() {
  return (
    <AnimatedSection id="contact" className="pb-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[42px] border border-amber-100/70 bg-white/65 p-5 shadow-[0_34px_110px_rgba(217,119,6,0.15)] backdrop-blur-2xl sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="rounded-[34px] bg-gradient-to-br from-yellow-50 via-white to-sky-50 p-8">
          <Badge>Contact</Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-5xl">
            Start the conversation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            "Tell us what you are building for: student growth, school programs, or global partnerships."
          </p>
          <img
            src="/undraw_text_messages.svg"
            alt="unDraw text message illustration"
            className="float-delayed mt-8 max-h-72 w-full max-w-md object-contain"
          />
          <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-2xl bg-white/75 p-4"><Mail size={17} className="text-amber-600" /> support@gov2partner.com</div>
            <div className="flex items-center gap-2 rounded-2xl bg-white/75 p-4"><Phone size={17} className="text-amber-600" /> Global mentorship desk</div>
          </div>
        </div>

        <form className="grid content-center gap-4 rounded-[34px] border border-white/70 bg-white/70 p-5 shadow-inner shadow-slate-100/80 sm:p-7" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" required />
            <Field label="Email" name="email" type="email" autoComplete="email" required />
          </div>
          <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
          <Field label="Message" name="message" multiline required />
          <Button type="submit" className="mt-2 w-full sm:w-auto">
            Submit <MessageSquareText size={18} />
          </Button>
        </form>
      </div>
    </AnimatedSection>
  )
}

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="noise" />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Offerings />
        <QuoteStrip />
        <Programs />
        <About />
        <Testimonials />
        <Partners />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
