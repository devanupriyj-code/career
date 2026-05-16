import { ExternalLink, PlaySquare, FileText, Globe } from "lucide-react"

export default function ResourceSection({ resources }) {
  if (!resources || resources.length === 0) return null

  const getIcon = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return <PlaySquare className="h-4 w-4" />
    if (url.includes('github.com')) return <Globe className="h-4 w-4" />
    return <FileText className="h-4 w-4" />
  }

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">Curated Resources</h3>
      <div className="grid gap-3">
        {resources.map((resource, idx) => (
          <a
            key={idx}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-cyan-500/30"
          >
            <div className="flex items-center gap-3">
              <div className="text-zinc-400 group-hover:text-cyan-400">
                {getIcon(resource.url)}
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-200 group-hover:text-white">{resource.title}</p>
                <p className="text-xs text-zinc-500">{resource.type}</p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  )
}
