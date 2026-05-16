function DemandCard({ label, value, tone = "cyan" }) {
  const colors = {
    cyan: "text-cyan-200 bg-cyan-400/10 border-cyan-300/20",
    green: "text-emerald-200 bg-emerald-400/10 border-emerald-300/20",
    yellow: "text-amber-200 bg-amber-400/10 border-amber-300/20",
    rose: "text-rose-200 bg-rose-400/10 border-rose-300/20"
  }

  return (
    <div className={`rounded-2xl border p-4 ${colors[tone]}`}>
      <p className="text-xs uppercase tracking-[0.18em] opacity-70">{label}</p>
      <p className="mt-2 text-lg font-bold">{value}</p>
    </div>
  )
}

export default DemandCard
