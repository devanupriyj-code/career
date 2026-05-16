import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, ClipboardList, FolderGit2, HelpCircle, Layers, MousePointerClick } from "lucide-react"
import SkillOverview from "./SkillOverview"
import MiniTaskList from "./MiniTaskList"
import ResourceTabs from "./ResourceTabs"
import ProjectsPanel from "./ProjectsPanel"
import InterviewQuestionList from "./InterviewQuestionList"
import CollapsibleSection from "./CollapsibleSection"

const TABS = [
  { id: "overview", label: "Overview", icon: Layers },
  { id: "tasks", label: "Tasks", icon: ClipboardList },
  { id: "resources", label: "Resources", icon: BookOpen },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "interview", label: "Interview Prep", icon: HelpCircle }
]

function EmptyPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center backdrop-blur-xl"
    >
      <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
        <MousePointerClick className="h-7 w-7" />
      </div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300/80">Explore the roadmap</p>
      <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">Click a skill node to view details</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
        Select any topic in the graph above — like Docker, React, or Kubernetes — to open tasks, resources,
        projects, and interview prep below.
      </p>
    </motion.div>
  )
}

export default function SkillDetailsSection({ topic, sectionRef }) {
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (topic) setActiveTab("overview")
  }, [topic?.topicKey, topic?.title])

  return (
    <section ref={sectionRef} className="relative z-20 mb-16 scroll-mt-24" aria-live="polite">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Skill deep dive</p>
          <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">Learning details</h2>
        </div>
        {topic && (
          <p className="text-sm text-zinc-500">Content updates when you select a node in the graph</p>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!topic ? (
          <EmptyPrompt key="empty" />
        ) : (
          <motion.article
            key={topic.topicKey || topic.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-zinc-950/95 via-zinc-900/80 to-black/90 p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-2xl sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            <SkillOverview topic={topic} />

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Tabs */}
            <div className="-mx-2 mb-8 overflow-x-auto pb-1">
              <div className="flex min-w-max gap-2 rounded-2xl border border-white/10 bg-black/30 p-1.5">
                {TABS.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                        isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="skill-detail-tab"
                          className="absolute inset-0 rounded-xl border border-cyan-400/30 bg-cyan-400/15 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <Icon className="relative h-4 w-4" />
                      <span className="relative">{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tab panels */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <CollapsibleSection subtitle="Why it matters" title="Learning focus" accent="text-cyan-400">
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {topic.importance
                          ? `${topic.title} is rated as ${topic.importance.toLowerCase()} for this career path.`
                          : `Master ${topic.title} to progress confidently through the roadmap.`}
                        {" "}
                        {topic.industry?.jobMarketUsage}
                      </p>
                    </CollapsibleSection>
                    {topic.dependencies?.length > 0 && (
                      <CollapsibleSection subtitle="Build order" title="Depends on" accent="text-amber-400" defaultOpen={false}>
                        <ul className="space-y-2">
                          {topic.dependencies.map((dep) => (
                            <li key={dep} className="text-sm text-zinc-300">
                              • {dep}
                            </li>
                          ))}
                        </ul>
                      </CollapsibleSection>
                    )}
                  </div>
                )}

                {activeTab === "tasks" && (
                  <CollapsibleSection subtitle="Checklist" title="Mini tasks" accent="text-emerald-400">
                    <MiniTaskList tasks={topic.miniTasks} compact />
                  </CollapsibleSection>
                )}

                {activeTab === "resources" && (
                  <CollapsibleSection subtitle="Curated links" title="Learning resources" accent="text-cyan-400">
                    <ResourceTabs resources={topic.resources} />
                  </CollapsibleSection>
                )}

                {activeTab === "projects" && (
                  <CollapsibleSection subtitle="Portfolio" title="Build these projects" accent="text-fuchsia-400">
                    <ProjectsPanel projects={topic.projects} />
                  </CollapsibleSection>
                )}

                {activeTab === "interview" && (
                  <CollapsibleSection subtitle="Q&A practice" title="Interview questions" accent="text-fuchsia-400">
                    <InterviewQuestionList questions={topic.interviewQuestions} />
                  </CollapsibleSection>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  )
}
