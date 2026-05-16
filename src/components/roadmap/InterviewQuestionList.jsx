import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

function QuestionItem({ question, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className="overflow-hidden rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start gap-3 px-4 py-3.5 text-left transition hover:bg-fuchsia-500/10"
        aria-expanded={open}
      >
        <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-400" />
        <span className="flex-1 text-sm font-medium text-zinc-200">{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4 shrink-0 text-fuchsia-400/70" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="border-t border-fuchsia-500/10 px-4 py-3 pl-11 text-sm leading-relaxed text-zinc-400">
              Practice explaining this clearly with a real example from your projects or labs.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function InterviewQuestionList({ questions }) {
  if (!questions?.length) {
    return <p className="text-sm text-zinc-500">No interview questions listed for this skill yet.</p>
  }

  return (
    <div className="space-y-3">
      {questions.map((question, index) => (
        <QuestionItem key={`${question}-${index}`} question={question} index={index} />
      ))}
    </div>
  )
}
