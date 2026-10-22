import { useState } from 'react'
import { skillsData, coreSkill } from '../assets/data/skillsData'

const orbitSkills = [
  skillsData[0],
  skillsData[4],
  skillsData[6],
  skillsData[8],
  skillsData[1],
  skillsData[7],
  skillsData[9],
  skillsData[11],
]

const Skills = () => {
  const [viewMode, setViewMode] = useState('orbit')
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [focused, setFocused] = useState(null)
  const [hovering, setHovering] = useState(false)

  const rotating = isPlaying && !hovering
  const active = focused ?? coreSkill

  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex justify-center mb-3">
        <span className="bg-gray-100 border border-gray-200 text-gray-700 text-xs px-4 py-1.5 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
          ⚙️ Interactive Skills Ecosystem • Orbital Matrix
        </span>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-black text-[#1E293B] tracking-tight">
          Orbiting Skills System
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-2">
          Hover over any node to{' '}
          <span className="font-semibold text-gray-700">pause the rotation</span>{' '}
          and inspect the capability in the core.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
        <div className="bg-[#F1F5F9] p-1 rounded-full flex gap-1 border border-gray-200 shadow-sm">
          <button
            type="button"
            onClick={() => setViewMode('orbit')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              viewMode === 'orbit'
                ? 'bg-[#1E293B] text-white'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <span>🪐</span> Solar Orbit
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              viewMode === 'grid'
                ? 'bg-[#1E293B] text-white'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <span>▦</span> Grid Matrix
          </button>
        </div>

        {viewMode === 'orbit' && (
          <div className="bg-[#F1F5F9] p-1 rounded-full flex items-center gap-2 border border-gray-200 text-xs px-3 shadow-sm">
            <button
              type="button"
              onClick={() => setIsPlaying((value) => !value)}
              className="font-medium text-gray-700 px-2"
            >
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </button>
            <div className="flex gap-1">
              {[0.5, 1, 1.5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSpeed(value)}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-colors ${
                    speed === value
                      ? 'bg-[#1E293B] text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {value}x
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {viewMode === 'orbit' ? (
        <div
          className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => {
            setHovering(false)
            setFocused(null)
          }}
        >
          <div
            className="absolute inset-0 rounded-full border border-dashed border-gray-200 pointer-events-none"
            aria-hidden="true"
          />

          {orbitSkills.map((skill, index) => {
            const angle = (360 / orbitSkills.length) * index
            const duration = `${18 / speed}s`

            return (
              <div
                key={skill.name}
                className="absolute left-1/2 top-1/2 orbit-node"
                style={{
                  '--orbit-angle': `${angle}deg`,
                  '--orbit-radius': 'clamp(78px, 24vw, 132px)',
                  animationDuration: duration,
                  animationPlayState: rotating ? 'running' : 'paused',
                }}
              >
                <button
                  type="button"
                  onMouseEnter={() => setFocused(skill)}
                  onFocus={() => setFocused(skill)}
                  onClick={() => setFocused(skill)}
                  className={`orbit-node__label bg-white border shadow-md rounded-2xl px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-bold text-[#1E293B] inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap transition-colors ${
                    focused?.name === skill.name
                      ? 'border-rose-300 shadow-lg'
                      : 'border-gray-200 hover:border-rose-200'
                  }`}
                  style={{
                    animationDuration: duration,
                    animationPlayState: rotating ? 'running' : 'paused',
                  }}
                >
                  <span>{skill.icon}</span>
                  {skill.name}
                </button>
              </div>
            )
          })}

          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#1E293B] text-white flex flex-col items-center justify-center text-center shadow-2xl z-10 p-3 sm:p-4">
            <span className="text-lg sm:text-2xl">{active.icon}</span>
            <span className="text-[10px] sm:text-xs font-bold mt-0.5 sm:mt-1 leading-tight">
              {active.name}
            </span>
            <span className="text-[8px] sm:text-[9px] text-gray-300 mt-0.5">
              {active.subtitle ?? `${active.group ?? 'Core'} · ${active.level}`}
            </span>
            {active.desc && (
              <span className="hidden sm:block text-[9px] leading-snug text-gray-300/90 mt-2 line-clamp-3">
                {active.desc}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-[#1E293B] text-sm flex items-center gap-1.5">
                    <span>{skill.icon}</span>
                    {skill.name}
                  </h3>
                  <span className="text-xs font-bold text-indigo-950 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {skill.desc}
                </p>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#1E293B] h-full rounded-full"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Skills
