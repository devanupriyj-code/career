import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Keyboard, Search } from "lucide-react"
import RoadmapGraph from "../components/RoadmapGraph"
import LearningPathSidebar from "../components/LearningPathSidebar"
import RoadmapStats from "../components/RoadmapStats"
import EmptyState from "../components/ui/EmptyState"
import SkeletonCard from "../components/ui/SkeletonCard"
import SkeletonGraph from "../components/ui/SkeletonGraph"
import SkeletonSidebar from "../components/ui/SkeletonSidebar"
import HeroBanner from "../components/layout/HeroBanner"
import FloatingPanel from "../components/roadmap/FloatingPanel"
import SkillDetailPanel from "../components/roadmap/SkillDetailPanel"
import ErrorBoundary from "../components/ErrorBoundary"
import KeyboardShortcutsOverlay from "../components/layout/KeyboardShortcutsOverlay"
import QuizModal from "../features/quiz/QuizModal"
import InterviewPrep from "../features/interview/InterviewPrep"
import MarketInsights from "../features/market/MarketInsights"
import CertificationCard from "../features/certifications/CertificationCard"
import { getCareerBySlug } from "../data/careers"
import { useBookmarks } from "../hooks/useBookmarks"
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation"

function CareerPage() {
  const { slug } = useParams()
  const career = getCareerBySlug(slug)
  const [activeFilter, setActiveFilter] = useState("all")
  const [query, setQuery] = useState("")
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [quizTopic, setQuizTopic] = useState(null)
  const [keyboardHelpOpen, setKeyboardHelpOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const { toggleBookmark, isBookmarked } = useBookmarks()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 180)
    return () => window.clearTimeout(timer)
  }, [slug])

  const hasVisibleTopics = useMemo(() => {
    if (!career || !query) return true
    const q = query.toLowerCase()
    return career.sections.some(section => {
      if (section.title.toLowerCase().includes(q)) return true
      return section.topics.some(topic => 
        topic.title.toLowerCase().includes(q) || 
        topic.description?.toLowerCase().includes(q) ||
        topic.tags?.some(tag => tag.toLowerCase().includes(q))
      )
    })
  }, [career, query])

  useKeyboardNavigation({
    items: career?.steps || [],
    selectedIndex,
    setSelectedIndex,
    onSelect: setSelectedTopic,
    onEscape: () => {
      setSelectedTopic(null)
      setQuizTopic(null)
      setKeyboardHelpOpen(false)
    }
  })

  if (!career) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
        <p className="text-cyan-300">Roadmap not found</p>
        <h1 className="mt-3 text-4xl font-bold text-white">This career path does not exist</h1>
        <p className="mt-3 text-zinc-400">Choose one of the available roadmaps to continue.</p>
        <Link to="/" className="mt-6 inline-flex rounded-2xl bg-cyan-400/15 px-5 py-3 font-medium text-cyan-100 transition hover:bg-cyan-400/20">
          Back to roadmaps
        </Link>
      </div>
    )
  }

  const selectedTopicId = selectedTopic ? `${career.slug}:${selectedTopic.title}` : null

  return (
    <div>
      <HeroBanner career={career} />

      {loading ? (
        <SkeletonGraph />
      ) : (
        <ErrorBoundary fallbackMessage="Unable to load roadmap graph. Please try reloading or selecting a different career path.">
          <div className="mb-16">
            <RoadmapGraph roadmap={career} onSelectTopic={setSelectedTopic} />
          </div>
        </ErrorBoundary>
      )}

      {/* Projects Section */}
      {career?.projects?.length > 0 && (
        <section className="mb-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-400">Capstone</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-5xl">Projects You Can Build</h2>
            <p className="mt-4 text-zinc-400">Put your new skills to the test with these real-world scenarios.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {career.projects.map((proj, idx) => (
              <div key={idx} className="group relative rounded-[2rem] border border-white/10 bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900 hover:border-fuchsia-500/30">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-bold text-fuchsia-300">
                  {proj.difficulty || "Advanced"}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-fuchsia-300 transition-colors">{proj.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">{proj.description}</p>
                <button className="rounded-xl bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 w-full border border-white/10 group-hover:border-white/20">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <FloatingPanel isOpen={Boolean(selectedTopic)} onClose={() => setSelectedTopic(null)}>
        <SkillDetailPanel topic={selectedTopic} />
      </FloatingPanel>

      <KeyboardShortcutsOverlay open={keyboardHelpOpen} onClose={() => setKeyboardHelpOpen(false)} />
    </div>
  )
}

export default CareerPage
