import { Bookmark, ChevronDown, Clock, Flame, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import DifficultyBadge from "../ui/DifficultyBadge"
import { TopicIcon } from "../ui/icons"
import ResourceTabs from "./ResourceTabs"
import CareerUsagePanel from "../../features/industry/CareerUsagePanel"

function TopicAccordion({ topic, isOpen, onToggle, bookmarked, onBookmark, onQuiz }) {
  const critical = topic.importance === "Critical Skill"

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br from-white/[0.09] to-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-cyan-300/40 hover:shadow-cyan-500/10 ${
        critical ? "border-cyan-300/30 ring-1 ring-cyan-300/20" : "border-white/10"
      }`}
    >
      {/* Compact Header Area */}
      <div 
        className="flex cursor-pointer items-start justify-between gap-4 p-5 focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/[0.06] text-cyan-200 ring-1 ring-white/10 transition group-hover:bg-cyan-400/10 group-hover:ring-cyan-300/30">
            <TopicIcon name={topic.icon} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <DifficultyBadge level={topic.level} />
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                  critical
                    ? "border-cyan-300/30 bg-cyan-400/10 text-cyan-200"
                    : "border-white/10 bg-white/[0.04] text-zinc-400"
                }`}
              >
                {critical ? <Flame className="h-3.5 w-3.5" /> : <Star className="h-3.5 w-3.5" />}
                {topic.importance}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                <Clock className="h-3.5 w-3.5" />
                {topic.weeks}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
            
            {/* Show tags only if they exist */}
            <div className="mt-2 flex flex-wrap gap-2">
              {topic.tags?.slice(0, 5).map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-2 py-0.5 text-[10px] text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuiz?.();
            }}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            Quiz
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onBookmark?.();
            }}
            className={`rounded-xl border p-2 transition ${
              bookmarked ? "border-cyan-300/40 bg-cyan-400/15 text-cyan-200" : "border-white/10 bg-white/[0.04] text-zinc-500 hover:text-white"
            }`}
            aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
          </button>
          
          <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-white/10">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expanded Content Area */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="border-t border-white/10 px-5 pb-6 pt-5">
              <p className="mb-6 text-sm leading-6 text-zinc-300">{topic.description}</p>
              
              {topic.prerequisites?.length > 0 && (
                <div className="mb-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Prerequisites</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.prerequisites.map((item) => (
                      <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-zinc-300">{item}</span>
                    ))}
                  </div>
                  {topic.dependencies?.length > 0 && (
                    <p className="mt-3 text-xs text-amber-200">
                      Dependency chain: {topic.dependencies.join(" -> ")}
                    </p>
                  )}
                </div>
              )}
              
              <ResourceTabs resources={topic.resources} />
              
              <div className="mt-5">
                <CareerUsagePanel industry={topic.industry} />
              </div>
              
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Projects</p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    {topic.projects?.slice(0, 3).map((project) => <li key={project}>{project}</li>)}
                    {(!topic.projects || topic.projects.length === 0) && (
                      <li className="italic text-zinc-600">No projects specified.</li>
                    )}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Interview Prep</p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    {topic.interviewQuestions?.slice(0, 3).map((question) => <li key={question}>{question}</li>)}
                    {(!topic.interviewQuestions || topic.interviewQuestions.length === 0) && (
                      <li className="italic text-zinc-600">No questions specified.</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default TopicAccordion
