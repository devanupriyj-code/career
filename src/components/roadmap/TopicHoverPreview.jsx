import { AnimatePresence, motion } from "framer-motion"
import { Briefcase, Clock, Layers } from "lucide-react"
import DifficultyBadge from "../ui/DifficultyBadge"

function TopicHoverPreview({ topic, show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          className="pointer-events-none absolute left-4 right-4 top-20 z-20 rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl sm:left-auto sm:right-6 sm:w-96"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <DifficultyBadge level={topic.level} />
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
              <Clock className="h-3.5 w-3.5" />
              {topic.weeks}
            </span>
          </div>
          <h4 className="font-semibold text-white">{topic.title}</h4>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-400">{topic.description}</p>
          <div className="mt-4 grid gap-2 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <Briefcase className="h-3.5 w-3.5 text-cyan-300" />
              {topic.industry?.salaryRelevance ?? "Strong market signal"}
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-cyan-300" />
              Requires: {topic.prerequisites?.length ? topic.prerequisites.join(", ") : "No prerequisites"}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {topic.projects?.slice(0, 2).map((project) => (
              <span key={project} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-300">{project}</span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TopicHoverPreview
