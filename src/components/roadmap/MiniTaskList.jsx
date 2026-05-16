import { CheckSquare } from "lucide-react"

export default function MiniTaskList({ tasks }) {
  if (!tasks || tasks.length === 0) return null

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-400">Learning Checklist</h3>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <label key={index} className="group flex cursor-pointer items-start gap-3 rounded-xl border border-white/5 bg-black/20 p-3 transition-colors hover:bg-white/5">
            <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-emerald-500 focus:ring-emerald-500/20 focus:ring-offset-zinc-900" />
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{task}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
