import DemandCard from "./DemandCard"

function MarketInsights({ insights }) {
  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Industry demand</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Market insights</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <DemandCard label="Demand" value={insights.demand} tone="rose" />
        <DemandCard label="Remote jobs" value={insights.remote} tone="cyan" />
        <DemandCard label="Salary" value={insights.salary} tone="green" />
        <DemandCard label="Future growth" value={insights.growth} tone="yellow" />
      </div>
      <p className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-zinc-400">{insights.trend}</p>
    </section>
  )
}

export default MarketInsights
