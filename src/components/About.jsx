import React from 'react'

const journey = [
  {
    title: 'The foundation',
    body: "I started with the core computer-science principles — OOP, algorithms and data structures in C++ and Python — before moving on to building complete, end-to-end web applications.",
  },
  {
    title: 'The MEAN-Stack chapter',
    body: 'I graduated from the National Telecommunication Institute (NTI) intensive MEAN-Stack program with a 95% excellence score across 120 rigorous training hours.',
  },
  {
    title: 'The security chapter',
    body: "To make sure the applications I build are resilient against modern web threats, I completed NTI's Cybersecurity Academy certification in Penetration Testing and Application Security, accredited by EG-CERT & NTRA.",
  },
  {
    title: 'The philosophy',
    body: 'Every feature I ship is developed with security, speed and clean architecture at heart — good software should be understandable by the next person who reads it.',
  },
]

const highlights = [
  { value: '95%', label: 'NTI graduation score' },
  { value: '192h', label: 'Certified training' },
  { value: '3+', label: 'Full-stack projects' },
]

const About = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="flex justify-center mb-4">
        <span className="bg-rose-50 border border-rose-100 text-rose-700 text-xs px-4 py-1.5 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
          <span>👤</span> About Me • Janna Fawy
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-3">
          Computer Science & Full-Stack Engineering
        </h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Undergraduate at{' '}
          <span className="underline decoration-gray-300">
            South Valley National University
          </span>
          , combining full-stack development, modern frontend crafts,{' '}
          <span className="text-indigo-950 font-semibold">
            and certified penetration testing expertise
          </span>
          .
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
        <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-8">
          I'm{' '}
          <span className="text-indigo-950 font-semibold">Janna Fawy</span>, a
          Computer Science student at{' '}
          <span className="text-indigo-950 font-semibold">
            South Valley National University
          </span>{' '}
          in Qena, Egypt. My passion lies in crafting high-quality software that
          bridges technical rigor with thoughtful, human design.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {journey.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-rose-100 pl-5 hover:border-rose-300 transition-colors"
            >
              <h3 className="font-bold text-[#1E293B] text-sm md:text-base mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#1E293B]">
                {item.value}
              </div>
              <div className="text-[11px] md:text-xs text-gray-500 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About