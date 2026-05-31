import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { ChevronDown } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeader } from './SectionHeader'
import site from '../util/siteContent'


function Faqs() {
  return (
    <AnimatedSection id="faqs" className="py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="FAQs" title="Simple answers for ambitious families." />
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

export default Faqs