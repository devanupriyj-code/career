import { Code2, ExternalLink } from "lucide-react"
import DifficultyBadge from "../ui/DifficultyBadge"

function ProjectShowcase({ projects }) {
  return (
    <section className="mt-10">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Projects</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Real-world portfolio builds</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/40">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <DifficultyBadge level={project.level} />
            </div>
            <p className="text-sm leading-6 text-zinc-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">{tag}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:text-white">
                <Code2 className="h-4 w-4" />
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20">
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectShowcase
