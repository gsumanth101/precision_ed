import { Sparkles } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeader } from './SectionHeader'
import { Card } from './ui/card'
import { Illustration } from './Illustration'
import site from '../util/siteContent'


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

export default About