import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import TopicAccordion from "./TopicAccordion"

function SectionAccordion({ section, roadmapSlug, isBookmarked, toggleBookmark, onQuiz, searchQuery }) {
  const [isSectionOpen, setIsSectionOpen] = useState(true)
  const [openTopicIds, setOpenTopicIds] = useState([])

  // Expand sections and matching topics if there's a search query
  useEffect(() => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      // If the section title matches, keep section open
      // If any topic matches, keep section open and open those topics
      let shouldOpenSection = section.title.toLowerCase().includes(q)
      const matchingTopicIds = []

      section.topics.forEach(topic => {
        const matches = 
          topic.title.toLowerCase().includes(q) || 
          topic.description?.toLowerCase().includes(q) ||
          topic.tags?.some(tag => tag.toLowerCase().includes(q))
          
        if (matches) {
          shouldOpenSection = true
          matchingTopicIds.push(topic.title)
        }
      })

      if (shouldOpenSection) setIsSectionOpen(true)
      if (matchingTopicIds.length > 0) {
        setOpenTopicIds(prev => [...new Set([...prev, ...matchingTopicIds])])
      }
    }
  }, [searchQuery, section])

  const toggleSection = () => {
    setIsSectionOpen((prev) => !prev)
  }

  const toggleTopic = (topicTitle) => {
    setOpenTopicIds((prev) =>
      prev.includes(topicTitle)
        ? prev.filter((id) => id !== topicTitle)
        : [...prev, topicTitle]
    )
  }

  // Filter topics based on search query
  const visibleTopics = section.topics.filter(topic => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      topic.title.toLowerCase().includes(q) ||
      topic.description?.toLowerCase().includes(q) ||
      topic.tags?.some(tag => tag.toLowerCase().includes(q)) ||
      section.title.toLowerCase().includes(q) // if section matches, show all its topics
    );
  });

  if (visibleTopics.length === 0 && searchQuery) {
    return null; // Don't render empty sections when searching
  }

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <button
        onClick={toggleSection}
        className="group w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl transition hover:bg-white/[0.06] hover:border-cyan-300/30"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">{section.level}</p>
          <h2 className="mt-2 text-2xl font-bold text-white transition group-hover:text-cyan-100">{section.title}</h2>
          <p className="mt-2 text-sm text-zinc-400">{section.description}</p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300">
            {section.estimatedTime}
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition group-hover:bg-cyan-400/10 group-hover:text-cyan-300 text-zinc-400">
            <motion.div
              animate={{ rotate: isSectionOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Section Content (Topics) */}
      <AnimatePresence initial={false}>
        {isSectionOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pt-2 pl-2 sm:pl-6 space-y-4 border-l-2 border-white/5 ml-4 sm:ml-8">
              {visibleTopics.map((topic) => {
                const topicId = `${roadmapSlug}:${topic.title}`
                return (
                  <TopicAccordion
                    key={topic.title}
                    topic={{ ...topic, level: topic.difficulty, weeks: topic.estimatedTime }}
                    isOpen={openTopicIds.includes(topic.title)}
                    onToggle={() => toggleTopic(topic.title)}
                    bookmarked={isBookmarked(topicId)}
                    onBookmark={() => toggleBookmark(topicId)}
                    onQuiz={() => onQuiz({ ...topic, level: topic.difficulty, weeks: topic.estimatedTime })}
                  />
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SectionAccordion
