import { useState } from 'react'
import { Mail, MessageSquareText, Phone } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Field } from './ui/input'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    siteName: 'https://precisioned.gov2partner.com/',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setSuccess('')
    setError('')

    try {
      const response = await fetch(
        'https://cust.gov2partner.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form')
      }

      setSuccess('Thank you! We received your message.')

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        siteName: 'https://precisioned.gov2partner.com/',
      })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatedSection id="contact" className="pb-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[42px] border border-amber-100/70 bg-white/65 p-5 shadow-[0_34px_110px_rgba(217,119,6,0.15)] backdrop-blur-2xl sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        
        {/* Left Side */}
        <div className="rounded-[34px] bg-gradient-to-br from-yellow-50 via-white to-sky-50 p-8">
          <Badge>Contact</Badge>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-5xl">
            Start the conversation.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tell us what you are building for: student growth,
            school programs, or global partnerships.
          </p>

          <img
            src="/undraw_text_messages.svg"
            alt="Contact illustration"
            className="float-delayed mt-8 max-h-72 w-full max-w-md object-contain"
          />

          <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-2xl bg-white/75 p-4">
              <Mail size={17} className="text-amber-600" />
              support@gov2partner.com
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-white/75 p-4">
              <Phone size={17} className="text-amber-600" />
              Global mentorship desk
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="grid content-center gap-4 rounded-[34px] border border-white/70 bg-white/70 p-5 shadow-inner shadow-slate-100/80 sm:p-7"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />

            <Field
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <Field
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />

          <Field
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            required
          />

          {success && (
            <div className="rounded-xl bg-green-50 p-3 text-sm text-green-700">
              {success}
            </div>
          )}

          {error && (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="mt-2 w-full sm:w-auto"
          >
            {loading ? 'Submitting...' : 'Submit'}
            <MessageSquareText size={18} />
          </Button>
        </form>
      </div>
    </AnimatedSection>
  )
}

export default Contact