import { AnimatePresence, motion } from "framer-motion"
import { Bookmark, Clock, X } from "lucide-react"
import DifficultyBadge from "../ui/DifficultyBadge"
import { TopicIcon } from "../ui/icons"
import ResourceTabs from "./ResourceTabs"

function TopicModal({ topic, topicId, open, onClose, bookmarked, onBookmark }) {
  return (
    <AnimatePresence>
      {open && topic && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950/95 p-6 shadow-2xl shadow-black/60 backdrop-blur-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/30">
                  <TopicIcon name={topic.icon} className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <DifficultyBadge level={topic.level} />
                    <span className="inline-flex items-center gap-2 text-sm text-zinc-500">
                      <Clock className="h-4 w-4" />
                      {topic.weeks}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{topic.title}</h2>
                  <p className="mt-3 max-w-2xl text-zinc-400">{topic.description}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onBookmark}
                  className={`rounded-2xl border p-3 transition ${
                    bookmarked ? "border-cyan-300/40 bg-cyan-400/15 text-cyan-200" : "border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white"
                  }`}
                  aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
                >
                  <Bookmark className={`h-5 w-5 ${bookmarked ? "fill-current" : ""}`} />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-zinc-400 transition hover:text-white"
                  aria-label="Close topic details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <ResourceTabs resources={topic.resources} topicId={topicId} />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Projects</p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {topic.projects?.map((project) => <li key={project}>{project}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Interview Questions</p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {topic.interviewQuestions?.map((question) => <li key={question}>{question}</li>)}
                </ul>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TopicModal
