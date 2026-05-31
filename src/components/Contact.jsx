import { Mail, MessageSquareText, Phone } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Field } from './ui/input'



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

export default Contact