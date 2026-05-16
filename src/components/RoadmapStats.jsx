function RoadmapStats({ roadmap, topicCount }) {
  const stats = [
    ["Estimated time", roadmap.estimatedTime],
    ["Salary range", roadmap.salaryRange],
    ["Difficulty", roadmap.difficulty],
    ["Topics", topicCount]
  ]

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
          <p className="mt-2 text-lg font-semibold text-white">{value}</p>
        </div>
      ))}
    </div>
  )
}

export default RoadmapStats
