import { CheckCircle2, Clock, Signal } from "lucide-react"

export default function TopicOverview({ topic }) {
  return (
    <div className="mb-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
          <span className="text-3xl">🎯</span>
        </div>
        <div>
          <h1 className="text-3xl font-black text-white">{topic.title}</h1>
          <div className="mt-2 flex items-center gap-3 text-sm font-medium text-zinc-400">
            <span className="flex items-center gap-1.5"><Signal className="h-4 w-4" /> {topic.level || topic.difficulty}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {topic.weeks || topic.estimatedTime}</span>
          </div>
        </div>
      </div>
      
      <p className="text-base leading-relaxed text-zinc-300">
        {topic.description}
      </p>

      {topic.prerequisites?.length > 0 && (
        <div className="mt-6 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-rose-400">Prerequisites</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {topic.prerequisites.map(prereq => (
              <span key={prereq} className="rounded-lg bg-rose-500/10 px-3 py-1 text-sm font-medium text-rose-300">
                {prereq}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
