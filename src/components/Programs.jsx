import { useState } from 'react'
import { Check } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeader } from './SectionHeader'
import { Card } from './ui/card'
import { Illustration } from './Illustration'
import site from '../util/siteContent'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

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

export default Programs