import { useState } from "react"
import { Clipboard, ChevronDown } from "lucide-react"
import DifficultyBadge from "../../components/ui/DifficultyBadge"

function QuestionRow({ question, difficulty }) {
  const [copied, setCopied] = useState(false)

  async function copyQuestion() {
    await navigator.clipboard.writeText(question)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm leading-6 text-zinc-300">{question}</p>
      <div className="flex shrink-0 items-center gap-2">
        <DifficultyBadge level={difficulty} />
        <button type="button" onClick={copyQuestion} className="rounded-xl border border-white/10 p-2 text-zinc-400 hover:text-white" aria-label="Copy question">
          <Clipboard className="h-4 w-4" />
        </button>
      </div>
      {copied && <span className="absolute text-xs text-cyan-200">Copied</span>}
    </div>
  )
}

function InterviewPrep({ topic }) {
  const [open, setOpen] = useState(true)
  const prep = topic.interviewPrep
  if (!prep) return null

  const groups = [
    ["Beginner Questions", prep.beginner, "Beginner"],
    ["Advanced Questions", prep.advanced, "Advanced"],
    ["Coding Tasks", prep.codingTasks, "Intermediate"],
    ["Scenario Questions", prep.scenarios, "Advanced"]
  ]

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Interview prep</p>
          <h3 className="mt-1 text-xl font-bold text-white">{topic.title} practice mode</h3>
        </div>
        <ChevronDown className={`h-5 w-5 text-zinc-400 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-5 space-y-5">
          {groups.map(([label, questions, difficulty]) => (
            <div key={label}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
              <div className="space-y-3">
                {questions.map((question) => <QuestionRow key={question} question={question} difficulty={difficulty} />)}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default InterviewPrep
