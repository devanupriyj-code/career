import { Clipboard } from "lucide-react"
import { useState } from "react"

function InterviewQuestionCard({ question }) {
  const [copied, setCopied] = useState(false)

  async function copyQuestion() {
    await navigator.clipboard.writeText(question)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <article className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm leading-6 text-zinc-300">{question}</p>
      <button type="button" onClick={copyQuestion} className="rounded-xl border border-white/10 p-2 text-zinc-400 hover:text-white" aria-label="Copy question">
        <Clipboard className="h-4 w-4" />
      </button>
      {copied && <span className="text-xs text-cyan-200">Copied</span>}
    </article>
  )
}

export default InterviewQuestionCard
