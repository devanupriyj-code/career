import { Code2, ExternalLink, Layers } from "lucide-react"

export default function ProjectDetailPanel({ project }) {
  if (!project) return null

  return (
    <div className="flex flex-col gap-6 pb-12">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-bold text-fuchsia-300">
        <Layers className="h-3.5 w-3.5" />
        {project.difficulty || project.level || "Advanced"}
      </div>
      <h2 className="text-3xl font-black text-white">{project.title}</h2>
      <p className="text-base leading-relaxed text-zinc-400">{project.description}</p>
      {project.stack?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-3 pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-cyan-300/40 hover:text-white"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400/15 px-4 py-2.5 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/25"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  )
}
