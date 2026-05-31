import { AnimatedSection } from './AnimatedSection'
import { Card } from './ui/card'
import site from '../util/siteContent'


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
              {/* <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Note 0{index + 1}</span> */}
              <p className="mt-6 text-pretty text-lg font-semibold leading-7 text-stone-950">{quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default QuoteStrip