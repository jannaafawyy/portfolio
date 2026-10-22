import { site } from '../assets/data/siteData'

const YEAR = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white px-4 pb-8">
      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-rose-400 text-slate-900 font-black flex items-center justify-center text-[10px]">
            {site.initials}
          </span>
          <span className="font-bold text-white">{site.shortName}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.links.email}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        <p>© {YEAR} All rights reserved • Software Engineer's Portfolio</p>
        <a href="#top" className="hover:text-white transition-colors">
          Top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
