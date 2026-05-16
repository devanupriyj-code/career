import { AnimatePresence, motion } from "framer-motion"
import { Trophy, X } from "lucide-react"
import { useState } from "react"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import EmptyState from "../../components/ui/EmptyState"
import QuizCard from "./QuizCard"
import QuizProgress from "./QuizProgress"

function QuizModal({ topic, open, onClose }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [, setQuizScores] = useLocalStorage("roadmap-quiz-scores", {})
  const questions = topic?.quizQuestions ?? []
  const selectedAnswer = answers[current]
  const score = answers.filter((answer, index) => answer === questions[index]?.correctAnswer).length
  const complete = answers.length === questions.length && questions.length > 0

  function answerQuestion(answer) {
    setAnswers((items) => {
      const next = [...items]
      next[current] = answer
      return next
    })
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      setCurrent((item) => item + 1)
    } else {
      setQuizScores((scores) => ({ ...scores, [topic.topicKey ?? topic.title]: { score, total: questions.length, date: new Date().toISOString() } }))
    }
  }

  function reset() {
    setCurrent(0)
    setAnswers([])
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.section initial={{ opacity: 0, y: 22, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 22, scale: 0.97 }} className="w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-950/95 p-6 shadow-2xl shadow-black/60" onMouseDown={(event) => event.stopPropagation()}>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Quiz</p>
                <h2 className="mt-2 text-2xl font-bold text-white">{topic?.title}</h2>
              </div>
              <button type="button" onClick={onClose} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-zinc-400 hover:text-white" aria-label="Close quiz">
                <X className="h-5 w-5" />
              </button>
            </div>

            {questions.length === 0 ? (
              <EmptyState title="No quiz yet" description="This topic does not have quiz questions available." />
            ) : complete ? (
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">Quiz complete</h3>
                <p className="mt-2 text-zinc-400">You scored {score} out of {questions.length}.</p>
                <div className="mt-6 flex justify-center gap-3">
                  <button type="button" onClick={reset} className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/10">Try again</button>
                  <button type="button" onClick={onClose} className="rounded-2xl bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/25">Close</button>
                </div>
              </div>
            ) : (
              <div>
                <QuizProgress current={current} total={questions.length} score={score} />
                <div className="mt-6">
                  <QuizCard question={questions[current]} selectedAnswer={selectedAnswer} onAnswer={answerQuestion} />
                </div>
                <div className="mt-6 flex justify-end">
                  <button type="button" disabled={!selectedAnswer} onClick={nextQuestion} className="rounded-2xl bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/25 disabled:cursor-not-allowed disabled:opacity-40">
                    {current === questions.length - 1 ? "Finish quiz" : "Next question"}
                  </button>
                </div>
              </div>
            )}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuizModal
