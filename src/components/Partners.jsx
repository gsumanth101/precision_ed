import { Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeader } from './SectionHeader'
import { Card } from './ui/card'
import site from '../util/siteContent'
import fadeUp from '../util/fadeUp'


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

        {/* <div className="mt-10 overflow-hidden rounded-[34px] border border-amber-100 bg-gradient-to-r from-yellow-50 via-white to-sky-50 p-2">
          <div className="grid gap-3 rounded-[28px] bg-white/62 p-4 sm:grid-cols-3">
            {['Schools', 'Universities', 'Nonprofits'].map((item) => (
              <div key={item} className="rounded-2xl border border-white bg-white/75 px-5 py-4 text-center text-sm font-bold text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </AnimatedSection>
  )
}

export default Partners