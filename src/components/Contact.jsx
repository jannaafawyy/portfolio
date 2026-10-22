import { useState } from 'react'
import { site } from '../assets/data/siteData'

const EMAIL = site.email

const initialForm = { name: '', email: '', message: '' }

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [senderName, setSenderName] = useState('')

  const handleCopy = async () => {
    const fallbackCopy = () => {
      const field = document.createElement('textarea')
      field.value = EMAIL
      field.setAttribute('readonly', '')
      field.style.position = 'fixed'
      field.style.opacity = '0'
      document.body.appendChild(field)
      field.select()
      const done = document.execCommand('copy')
      document.body.removeChild(field)
      return done
    }

    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
    } catch {
      setCopied(fallbackCopy())
    } finally {
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleChange = (event) => {
    if (error) setError('')
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in every field before sending.')
      setStatus('idle')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('That email address does not look valid.')
      setStatus('idle')
      return
    }

    setError('')

    const name = form.name.trim()
    const subject = encodeURIComponent(`Portfolio enquiry — ${name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${name}\n${form.email}`,
    )

    setSenderName(name)
    setStatus('sent')
    setForm(initialForm)
    setTimeout(() => setStatus('idle'), 6000)

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="bg-[#1E293B] text-white pt-16 pb-10 px-4 mt-20 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-5 bg-white text-[#1E293B] p-6 rounded-3xl shadow-lg flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              Direct Contact <span className="text-rose-400">✨</span>
            </h3>

            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-100 mb-4">
              <span className="text-[10px] text-gray-400 block mb-1">
                Email Address
              </span>
              <div className="flex justify-between items-center gap-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-xs md:text-sm font-bold hover:text-rose-600 transition-colors break-all"
                >
                  {EMAIL}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="bg-white border border-gray-200 text-xs px-3 py-1 rounded-xl shadow-sm hover:bg-gray-50 transition-colors shrink-0"
                >
                  {copied ? 'Copied!' : '📋 Copy'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-[#0077B5] text-white py-2.5 rounded-xl text-center text-xs font-bold hover:bg-[#0069a3] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1E293B] text-white py-2.5 rounded-xl text-center text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                GitHub
              </a>
            </div>

            <div className="text-xs text-gray-500 flex items-center gap-1.5 px-1">
              <span>📍</span> {site.location}
            </div>
          </div>

          <div className="bg-amber-50/60 border border-amber-100 p-4 rounded-2xl text-xs text-amber-900">
            <span className="font-bold block mb-0.5">Computer Science Student</span>
            South Valley National University • Open for engineering opportunities
          </div>
        </div>

        <div className="md:col-span-7 bg-white text-[#1E293B] p-6 md:p-8 rounded-3xl shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs font-bold block mb-1"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={80}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Connor"
                  className="w-full bg-stone-100 border-none p-3 rounded-2xl text-xs focus:ring-2 focus:ring-slate-800 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs font-bold block mb-1"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={120}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-stone-100 border-none p-3 rounded-2xl text-xs focus:ring-2 focus:ring-slate-800 outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="text-xs font-bold block mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                maxLength={1200}
                value={form.message}
                onChange={handleChange}
                placeholder="Discuss project requirements, open opportunities, or say hello..."
                className="w-full bg-stone-100 border-none p-3 rounded-2xl text-xs focus:ring-2 focus:ring-slate-800 outline-none resize-none"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-3 py-2"
              >
                {error}
              </p>
            )}

            {status === 'sent' && (
              <p
                role="status"
                className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2"
              >
                Thanks {senderName || 'there'}! Your mail client should be open now —
                just hit send.
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#1E293B] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-md"
            >
              <span>✈️</span> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
