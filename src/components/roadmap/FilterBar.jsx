import { ROADMAP_FILTERS } from "../../constants/roadmapFilters"

function FilterBar({ activeFilter, setActiveFilter }) {
  return (
    <div className="flex flex-wrap gap-2">
      {ROADMAP_FILTERS.map((filter) => (
        <button
          key={filter.id}
          type="button"
          onClick={() => setActiveFilter(filter.id)}
          className={`rounded-2xl border px-4 py-2 text-sm font-medium transition ${
            activeFilter === filter.id
              ? "border-cyan-300/40 bg-cyan-400/15 text-cyan-100 shadow-lg shadow-cyan-500/10"
              : "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:text-white"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
