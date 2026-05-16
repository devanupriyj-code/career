function QuizProgress({ current, total, score }) {
  const progress = total ? ((current + 1) / total) * 100 : 0

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
        <span>Question {Math.min(current + 1, total)} of {total}</span>
        <span>Score {score}/{total}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export default QuizProgress
