import { motion } from "framer-motion"
import TopicCard from "./roadmap/TopicCard"

function RoadmapSection({ section, roadmapSlug, isBookmarked, toggleBookmark, onOpenTopic }) {
  return (
    <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">{section.level}</p>
            <h2 className="mt-2 text-2xl font-bold text-white">{section.title}</h2>
          </div>
          <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300">{section.estimatedTime}</span>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">{section.description}</p>
      </div>
      {section.topics.map((topic) => {
        const topicId = `${roadmapSlug}:${topic.title}`
        return (
          <TopicCard
            key={topic.title}
            topic={{ ...topic, level: topic.difficulty, weeks: topic.estimatedTime }}
            bookmarked={isBookmarked(topicId)}
            onBookmark={() => toggleBookmark(topicId)}
            onOpen={() => onOpenTopic({ ...topic, level: topic.difficulty, weeks: topic.estimatedTime })}
          />
        )
      })}
    </motion.section>
  )
}

export default RoadmapSection
