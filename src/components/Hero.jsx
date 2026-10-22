import heroPhoto from '../assets/profile.jpg'
import { site } from '../assets/data/siteData'

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-between pt-24 pb-12 px-4 overflow-hidden"
    >
      <div className="absolute top-10 left-10 hidden md:grid grid-cols-2 gap-2 opacity-30">
        <div className="w-3 h-3 bg-[#1E293B] rounded-full" />
        <div className="w-5 h-5 bg-[#1E293B] rounded-full" />
      </div>

      <div className="absolute bottom-24 right-10 hidden lg:grid grid-cols-2 gap-3 opacity-20">
        <div className="w-4 h-4 bg-[#C27D88] rounded-full" />
        <div className="w-2 h-2 bg-[#1E293B] rounded-full" />
      </div>

      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center">
        <div className="relative text-center select-none w-full">
          <span
            className="relative z-20 inline-block -mb-1 sm:-mb-2 md:-mb-4 text-[2.5rem] sm:text-[4rem] md:text-[6.5rem] leading-none font-serif italic text-[#C27D88] opacity-90 whitespace-nowrap"
            style={{ fontFamily: "'Dancing Script', cursive, serif" }}
          >
            Software Engineer&apos;s
          </span>

          <p className="relative z-0 text-[2.75rem] sm:text-[4.5rem] md:text-[8rem] font-black tracking-widest text-[#1E293B] uppercase leading-none">
            Portfolio
          </p>
        </div>

        <div className="relative z-10 -mt-4 sm:-mt-8 md:-mt-16 flex flex-col items-center">
          <div className="w-60 md:w-72 h-72 md:h-80 rounded-t-full rounded-b-3xl overflow-hidden border-4 border-white shadow-2xl relative bg-gray-200 animate-float">
            <img
              src={heroPhoto}
              alt="Janna Fawy"
              className="w-full h-full object-cover object-top"
            />

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-[11px] px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Janna Fawy • Computer Science
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-5 text-center text-[#1E293B] space-y-1 z-10">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Janna Khalid Fawy Mohamed
          </h1>
          <p className="text-xs md:text-sm text-gray-600 font-medium">
            <span className="text-indigo-950 font-semibold">
              Faculty of Computers &amp; Information
            </span>{' '}
            — South Valley National University (CS)
          </p>
          <p className="text-xs md:text-sm text-gray-600 font-medium">
            MEAN-Stack Certified (NTI 95% Score) • Penetration Testing &amp; Security
            (EG-CERT)
          </p>
        </div>

        <div className="mt-6 md:mt-7 flex flex-wrap justify-center gap-3 z-10">
          <a
            href="#projects"
            className="bg-[#1E293B] text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2 shadow-md hover:bg-slate-800 transition-colors"
          >
            Explore Projects <span>↗</span>
          </a>

          <a
            href="#skills"
            className="bg-white border border-gray-200 text-[#1E293B] px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="text-rose-400">▶</span> Interactive Skills
          </a>

          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-gray-200 text-[#1E293B] px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="text-blue-600 font-bold">in</span> LinkedIn
          </a>

          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-gray-200 text-[#1E293B] px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span>⎇</span> GitHub
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="mt-6 md:mt-8 text-[#1E293B]/50 hover:text-[#1E293B] transition-colors animate-bounce"
      >
        ↓
      </a>
    </section>
  )
}

export default Hero
