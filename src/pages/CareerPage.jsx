import { useEffect, useMemo, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import RoadmapGraph from "../components/RoadmapGraph"
import HeroBanner from "../components/layout/HeroBanner"
import SkillDetailsSection from "../components/roadmap/SkillDetailsSection"
import FloatingPanel from "../components/roadmap/FloatingPanel"
import ProjectDetailPanel from "../components/roadmap/ProjectDetailPanel"
import ErrorBoundary from "../components/ErrorBoundary"
import KeyboardShortcutsOverlay from "../components/layout/KeyboardShortcutsOverlay"
import SkeletonGraph from "../components/ui/SkeletonGraph"
import AdBanner from "../components/ads/AdBanner"
import { AD_SLOTS } from "../components/ads/constants"
import { getCareerBySlug } from "../data/careers"
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation"

function findNodeIdForTopic(career, topic) {
  if (!career?.sections || !topic) return null
  for (let sIndex = 0; sIndex < career.sections.length; sIndex++) {
    const section = career.sections[sIndex]
    for (let tIndex = 0; tIndex < (section.topics?.length ?? 0); tIndex++) {
      if (section.topics[tIndex].title === topic.title) {
        return `topic-${sIndex}-${tIndex}`
      }
    }
  }
  return null
}

function CareerPage() {
  const { slug } = useParams()
  const career = getCareerBySlug(slug)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedNodeId, setSelectedNodeId] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [keyboardHelpOpen, setKeyboardHelpOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const detailsRef = useRef(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 180)
    return () => window.clearTimeout(timer)
  }, [slug])

  useEffect(() => {
    setSelectedTopic(null)
    setSelectedNodeId(null)
    setSelectedProject(null)
  }, [slug])

  const selectTopic = (topic, nodeId) => {
    setSelectedProject(null)
    setSelectedTopic(topic)
    setSelectedNodeId(nodeId ?? findNodeIdForTopic(career, topic))
  }

  useEffect(() => {
    if (!selectedTopic || !detailsRef.current) return
    const timer = window.setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 120)
    return () => window.clearTimeout(timer)
  }, [selectedTopic?.topicKey, selectedTopic?.title])

  useKeyboardNavigation({
    items: career?.steps || [],
    selectedIndex,
    setSelectedIndex,
    onSelect: (topic) => selectTopic(topic),
    onEscape: () => {
      setSelectedTopic(null)
      setSelectedNodeId(null)
      setSelectedProject(null)
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

  const handleViewProject = (project) => {
    setSelectedTopic(null)
    setSelectedNodeId(null)
    setSelectedProject(project)
  }

  return (
    <div className="relative z-10">
      <HeroBanner career={career} />

      {loading ? (
        <SkeletonGraph />
      ) : (
        <ErrorBoundary fallbackMessage="Unable to load roadmap graph. Please try reloading or selecting a different career path.">
          <div className="relative z-0 mb-8">
            <RoadmapGraph
              roadmap={career}
              selectedNodeId={selectedNodeId}
              onSelectTopic={selectTopic}
            />
          </div>
        </ErrorBoundary>
      )}

      {!loading && <AdBanner slot={AD_SLOTS.CAREER_PAGE} className="mb-8" />}

      {!loading && (
        <SkillDetailsSection topic={selectedTopic} sectionRef={detailsRef} />
      )}

      {!loading && <AdBanner slot={AD_SLOTS.CAREER_PAGE} className="my-10" />}

      {career?.projects?.length > 0 && (
        <section className="relative z-20 mb-16">
          <AdBanner slot={AD_SLOTS.CAREER_PAGE} className="mb-10" />
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-400">Capstone</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-5xl">Projects You Can Build</h2>
            <p className="mt-4 text-zinc-400">Put your new skills to the test with these real-world scenarios.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {career.projects.map((proj, idx) => (
              <div key={idx} className="group relative z-10 rounded-[2rem] border border-white/10 bg-zinc-900/50 p-8 transition-all hover:border-fuchsia-500/30 hover:bg-zinc-900">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-bold text-fuchsia-300">
                  {proj.difficulty || "Advanced"}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-fuchsia-300">{proj.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">{proj.description}</p>
                <button
                  type="button"
                  onClick={() => handleViewProject(proj)}
                  className="relative z-20 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <FloatingPanel
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title="Project Details"
      >
        <ProjectDetailPanel project={selectedProject} />
      </FloatingPanel>

      <KeyboardShortcutsOverlay open={keyboardHelpOpen} onClose={() => setKeyboardHelpOpen(false)} />
    </div>
  )
}

export default CareerPage
