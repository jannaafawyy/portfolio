import React from 'react'

const certifications = [
  {
    id: 1,
    title: 'MEAN-Stack Web Development',
    issuer: 'National Telecommunication Institute (NTI) & ITIDA',
    score: 'Score: 95%',
    description: 'Intensive full-stack training program covering MongoDB, Express.js, Angular, and Node.js with hands-on projects.',
    hours: '120 Hours (90 Technical, 30 Freelance) • Grade: 95%',
    image: '/nti-cert-1.svg',
  },
  {
    id: 2,
    title: 'Penetration Testing & Application Security',
    issuer: 'NTI Cybersecurity Academy, EG-CERT & NTRA',
    score: 'Security Certified',
    description: 'Specialized cybersecurity track focusing on web vulnerability assessment, security audits, and threat mitigation.',
    hours: '72 Hours • Vulnerability Assessment & Web Security',
    image: '/egcert-cert.svg',
  },
]

const certificationStats = [
  { value: '95%', label: 'NTI Excellence Score' },
  { value: '192h', label: 'Total Certified Hours' },
  { value: '2', label: 'Official Gov Certifications' },
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex justify-center mb-3">
        <span className="bg-gray-100 border border-gray-200 text-gray-700 text-xs px-4 py-1.5 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
          🎓 Verified Certifications • NTI / EG-CERT
        </span>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-[#1E293B] tracking-tight">
          Certifications & Training
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-2">
          Official, verified credentials earned through full-time intensive
          programs in full-stack engineering and application security.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {certificationStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#1E293B] text-white rounded-3xl px-6 py-7 text-center shadow-lg"
          >
            <div className="text-3xl md:text-4xl font-black text-rose-300">
              {stat.value}
            </div>
            <div className="text-[11px] md:text-xs text-gray-300 mt-1.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-44 overflow-hidden bg-gray-100">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#1E293B] text-white text-[10px] px-3 py-1 rounded-full font-bold">
                {cert.score}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-[#1E293B] text-base leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1.5">{cert.issuer}</p>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-3">
                {cert.description}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  {cert.hours}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications