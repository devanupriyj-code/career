import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Code2, FolderGit2, PlaySquare } from "lucide-react"
import VideoPreviewCard from "./VideoPreviewCard"

const tabs = [
  { id: "videos", label: "Videos", icon: PlaySquare },
  { id: "docs", label: "Docs", icon: BookOpen },
  { id: "practice", label: "Practice", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderGit2 }
]

function ResourceTabs({ resources }) {
  const [active, setActive] = useState("videos")
  const grouped = Array.isArray(resources)
    ? {
        videos: resources.filter((resource) => resource.type === "Videos"),
        docs: resources.filter((resource) => resource.type === "Documentation"),
        practice: resources.filter((resource) => resource.type === "Practice"),
        projects: resources.filter((resource) => resource.type === "Projects")
      }
    : resources

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
                active === tab.id ? "text-white" : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {active === tab.id && <motion.span layoutId="active-tab" className="absolute inset-0 rounded-xl bg-cyan-400/15" />}
              <Icon className="relative h-4 w-4" />
              <span className="relative">{tab.label}</span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
        >
          {active === "videos" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {grouped.videos.map((video) => <VideoPreviewCard key={video.title} video={video} />)}
            </div>
          )}

          {active === "docs" && (
            <div className="grid gap-3 sm:grid-cols-2">
              {grouped.docs.map((item) => (
                <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-zinc-200 transition hover:border-cyan-300/40 hover:bg-white/[0.07]">
                  {item.title}
                </a>
              ))}
            </div>
          )}

          {active === "practice" && (
            <div className="grid gap-3 sm:grid-cols-2">
              {grouped.practice.map((item) => (
                <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-zinc-200 transition hover:border-cyan-300/40 hover:bg-white/[0.07]">
                  {item.title}
                </a>
              ))}
            </div>
          )}

          {active === "projects" && (
            <ul className="space-y-3">
              {(grouped.projects.length ? grouped.projects.map((item) => item.title) : []).map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-zinc-200">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ResourceTabs
