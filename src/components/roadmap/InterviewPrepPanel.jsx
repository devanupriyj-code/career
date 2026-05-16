import { HelpCircle } from "lucide-react"

export default function InterviewPrepPanel({ questions }) {
  if (!questions || questions.length === 0) return null

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-fuchsia-400">Interview Prep</h3>
      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div key={idx} className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4">
            <div className="flex gap-3">
              <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-400" />
              <p className="text-sm font-medium text-zinc-200">{q}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
