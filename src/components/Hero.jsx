import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Illustration } from './Illustration'
import site from '../util/siteContent'
import { Button } from './ui/button'
import fadeUp from '../util/fadeUp'


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

export default Hero