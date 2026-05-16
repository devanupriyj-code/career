import { Clock, Signal } from "lucide-react"
import { TopicIcon } from "../ui/icons"
import DifficultyBadge from "../ui/DifficultyBadge"

export default function SkillOverview({ topic }) {
  if (!topic) return null

  const level = topic.level || topic.difficulty
  const duration = topic.weeks || topic.estimatedTime || "2 Weeks"

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px]" aria-hidden />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <TopicIcon name={topic.icon} className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{topic.title}</h2>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <Signal className="h-4 w-4 text-cyan-400" />
                {level}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-cyan-400" />
                {duration}
              </span>
            </div>
          </div>
        </div>
        <DifficultyBadge level={level} />
      </div>

      <p className="relative mt-6 max-w-3xl text-base leading-relaxed text-zinc-300">{topic.description}</p>

      {topic.tags?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {topic.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {topic.prerequisites?.length > 0 && (
        <div className="mt-6 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-rose-400">Prerequisites</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {topic.prerequisites.map((prereq) => (
              <span key={prereq} className="rounded-lg bg-rose-500/10 px-3 py-1 text-sm font-medium text-rose-200">
                {prereq}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
