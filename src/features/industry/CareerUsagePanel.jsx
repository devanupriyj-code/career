import IndustryBadge from "./IndustryBadge"

function CareerUsagePanel({ industry }) {
  if (!industry) return null

  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Used in</p>
        <span className="text-xs text-zinc-500">{industry.popularity}% popularity</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {industry.usedIn.map((item) => <IndustryBadge key={item} label={item} />)}
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{industry.jobMarketUsage}</p>
    </div>
  )
}

export default CareerUsagePanel
