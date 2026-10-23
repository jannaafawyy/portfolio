import { site } from '../assets/data/siteData';
import dreamHomeShot from '../assets/profile-hero.jpeg';
import parkSmartShot from '../assets/parksmart.jpeg';

const projects = [
  {
    badge: 'Full-Stack (Team Project)',
    title: 'ParkSmart — Smart Parking...',
    desc: 'An end-to-end intelligent parking reservation system built with a multidisciplinary engineering team.',
    tags: ['Full-Stack', 'React / Angular', 'Node.js', '+3'],
    image: parkSmartShot,
    link: site.links.githubRepos
  },
  {
    badge: 'Frontend Foundation',
    title: 'Dream Home — Modern Interior...',
    desc: 'A responsive interior and home aesthetics web platform. Janna\'s foundational front-end project.',
    tags: ['HTML5', 'CSS3', 'JavaScript ES6', '+2'],
    image: dreamHomeShot,
    link: site.links.githubRepos
  },
  {
    badge: 'Interactive Frontend',
    title: 'Creative Orbital Portfolio',
    desc: 'Personal interactive portfolio engineering showcase built with React 19, Tailwind CSS v4, and Vite.',
    tags: ['React 19', 'Tailwind CSS v4', 'Vite', '+2'],
    image: './project-portfolio.svg',
    link: site.links.githubRepos
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex justify-center mb-3">
        <span className="bg-rose-50 border border-rose-100 text-rose-700 text-xs px-4 py-1.5 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
          📂 Featured Software Engineering Projects
        </span>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-[#1E293B] tracking-tight">
          Practical Work
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-2">
          From smart-city full-stack systems to responsive frontend platforms and architectural milestones.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${proj.title} — open on GitHub`}
            title="Open on GitHub"
            className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-[#1E293B] text-white text-[10px] px-3 py-1 rounded-full font-semibold">
                {proj.badge}
              </span>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-[#1E293B] text-base group-hover:text-rose-600 transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-xs text-gray-400 group-hover:text-rose-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{proj.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.tags.map((t, index) => (
                  <span key={index} className="text-[10px] bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href={site.links.githubRepos}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#1E293B] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-slate-800 transition-colors shadow-md"
        >
          View all projects on GitHub <span>↗</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;