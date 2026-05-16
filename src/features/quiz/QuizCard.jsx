import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

function QuizCard({ question, selectedAnswer, onAnswer }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white">{question.question}</h3>
      <div className="mt-5 grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option
          const isCorrect = question.correctAnswer === option
          const answered = Boolean(selectedAnswer)
          const state = answered && isSelected
            ? isCorrect
              ? "border-emerald-300/40 bg-emerald-400/15 text-emerald-100"
              : "border-rose-300/40 bg-rose-400/15 text-rose-100"
            : answered && isCorrect
              ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-100"
              : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-cyan-300/30"

          return (
            <motion.button
              key={option}
              type="button"
              whileHover={{ scale: answered ? 1 : 1.01 }}
              whileTap={{ scale: answered ? 1 : 0.99 }}
              onClick={() => !answered && onAnswer(option)}
              className={`flex items-center justify-between rounded-2xl border p-4 text-left text-sm font-medium transition ${state}`}
            >
              <span>{option}</span>
              {answered && isSelected && (isCorrect ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />)}
            </motion.button>
          )
        })}
      </div>
      {selectedAnswer && (
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-zinc-300">
          {question.explanation}
        </motion.p>
      )}
    </div>
  )
}

export default QuizCard
