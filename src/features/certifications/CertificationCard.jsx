import { ExternalLink } from "lucide-react"
import DifficultyBadge from "../../components/ui/DifficultyBadge"

function CertificationCard({ certification }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-white">{certification.title}</h3>
          <p className="mt-1 text-sm text-zinc-500">{certification.provider}</p>
        </div>
        <DifficultyBadge level={certification.difficulty} />
      </div>
      <p className="text-sm text-zinc-400">{certification.industryValue}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-xs text-zinc-500">{certification.duration}</span>
        <a href={certification.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400/15 px-3 py-2 text-sm font-medium text-cyan-100">
          Official
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}

export default CertificationCard
