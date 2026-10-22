import { useEffect, useState } from 'react'
import { site } from '../assets/data/siteData'

const links = [
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills Orbit' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleNavigate = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-4 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto bg-[#1E293B]/95 text-white rounded-full flex items-center gap-4 md:gap-5 text-xs md:text-sm font-medium shadow-xl backdrop-blur-md border border-slate-700/60 transition-all duration-300 ${
          scrolled ? 'py-2 px-4 md:px-6' : 'py-2.5 px-4 md:px-6'
        }`}
      >
        <a
          href="#top"
          onClick={handleNavigate}
          className="font-black tracking-widest uppercase text-white/90 hover:text-rose-300 transition-colors shrink-0"
        >
          {site.initials}<span className="text-rose-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'location' : undefined}
              className={`px-2 py-1 rounded-full transition-colors ${
                active === link.id
                  ? 'text-rose-300 bg-white/10'
                  : 'hover:text-rose-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-rose-400/90 text-[#1E293B] font-bold px-4 py-1.5 rounded-full hover:bg-rose-300 transition-colors shrink-0"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="md:hidden w-8 h-8 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <span className="text-base leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden pointer-events-auto mt-2 w-full max-w-xs bg-[#1E293B]/97 text-white rounded-3xl border border-slate-700/60 shadow-2xl backdrop-blur-md p-3 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavigate}
              aria-current={active === link.id ? 'location' : undefined}
              className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                active === link.id
                  ? 'bg-white/10 text-rose-300'
                  : 'text-white/80 hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavigate}
            className="mt-1 bg-rose-400/90 text-[#1E293B] text-center font-bold px-4 py-2.5 rounded-2xl"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
