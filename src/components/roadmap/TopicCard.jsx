import { Bookmark, Clock, Flame, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import DifficultyBadge from "../ui/DifficultyBadge"
import { TopicIcon } from "../ui/icons"
import ResourceTabs from "./ResourceTabs"
import TopicHoverPreview from "./TopicHoverPreview"
import CareerUsagePanel from "../../features/industry/CareerUsagePanel"

function TopicCard({ topic, bookmarked, onBookmark, onOpen, onQuiz }) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const critical = topic.importance === "Critical Skill"

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4, scale: 1.01 }}
      onMouseEnter={() => setPreviewOpen(true)}
      onMouseLeave={() => setPreviewOpen(false)}
      onFocus={() => setPreviewOpen(true)}
      onBlur={() => setPreviewOpen(false)}
      className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-cyan-300/40 hover:shadow-cyan-500/10 ${critical ? "border-cyan-300/30 ring-1 ring-cyan-300/20" : "border-white/10"}`}
    >
      <TopicHoverPreview topic={topic} show={previewOpen} />
      <div className="flex items-start justify-between gap-4">
        <button type="button" onClick={onOpen} className="flex min-w-0 flex-1 items-start gap-4 rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-cyan-300/50" aria-label={`Open ${topic.title} details`}>
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/[0.06] text-cyan-200 ring-1 ring-white/10 transition group-hover:bg-cyan-400/10 group-hover:ring-cyan-300/30">
            <TopicIcon name={topic.icon} />
          </div>
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <DifficultyBadge level={topic.level} />
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${critical ? "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" : "border-white/10 bg-white/[0.04] text-zinc-400"}`}>
                {critical ? <Flame className="h-3.5 w-3.5" /> : <Star className="h-3.5 w-3.5" />}
                {topic.importance}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                <Clock className="h-3.5 w-3.5" />
                {topic.weeks}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{topic.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {topic.tags?.slice(0, 5).map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </button>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={onQuiz ?? onOpen}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            Quiz
          </button>
          <button
            type="button"
            onClick={onBookmark}
            className={`rounded-xl border p-2 transition ${
              bookmarked ? "border-cyan-300/40 bg-cyan-400/15 text-cyan-200" : "border-white/10 bg-white/[0.04] text-zinc-500 hover:text-white"
            }`}
            aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>

      <div className="mt-6">
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
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Interview Prep</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              {topic.interviewQuestions?.slice(0, 3).map((question) => <li key={question}>{question}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default TopicCard
