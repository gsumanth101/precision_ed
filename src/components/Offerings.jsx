import { AnimatedSection } from './AnimatedSection'
import { SectionHeader } from './SectionHeader'
import { Card } from './ui/card'
import site from '../util/siteContent'
import { motion } from 'framer-motion'
import fadeUp from '../util/fadeUp'

function Offerings() {
  return (
    <AnimatedSection id="offerings">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we offer"
          title="Clear pathways. Strong stories. Global readiness."
          description='"Everything a student needs to move from ambition to direction."'
        />

        <div className="flex flex-wrap justify-center gap-6">
          {site.offerings.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="w-full sm:w-[340px] lg:w-[300px]"
              >
                <Card className="group flex h-full flex-col rounded-3xl border border-amber-100 bg-white/90 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_26px_80px_rgba(217,119,6,0.18)]">
                  <div className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-700 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-stone-950">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Offerings