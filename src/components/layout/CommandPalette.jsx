import { Command } from "cmdk"
import { AnimatePresence, motion } from "framer-motion"
import { Search } from "lucide-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { careers, getAllTopics } from "../../data/careers"

function CommandPalette({ open, setOpen }) {
  const navigate = useNavigate()
  const topics = getAllTopics()

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((current) => !current)
      }

      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [setOpen])

  function runCommand(path) {
    navigate(path)
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-start bg-black/70 px-4 pt-20 backdrop-blur-sm sm:pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 shadow-2xl shadow-black/60 backdrop-blur-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <Command shouldFilter>
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <Search className="h-5 w-5 text-zinc-500" />
                <Command.Input
                  autoFocus
                  placeholder="Search roadmaps, topics, projects..."
                  className="w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
                />
                <kbd className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-zinc-500">
                  Esc
                </kbd>
              </div>

              <Command.List className="max-h-[420px] overflow-y-auto p-3">
                <Command.Empty className="px-4 py-8 text-center text-sm text-zinc-500">
                  No commands found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-xs text-zinc-500 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2">
                  <Command.Item onSelect={() => runCommand("/")} className="cursor-pointer rounded-2xl px-4 py-3 text-sm text-zinc-200 aria-selected:bg-white/10">
                    Dashboard
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand("/settings")} className="cursor-pointer rounded-2xl px-4 py-3 text-sm text-zinc-200 aria-selected:bg-white/10">
                    Settings
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Careers" className="mt-2 text-xs text-zinc-500 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2">
                  {careers.map((career) => (
                    <Command.Item
                      key={career.slug}
                      onSelect={() => runCommand(`/career/${career.slug}`)}
                      className="cursor-pointer rounded-2xl px-4 py-3 text-sm text-zinc-200 aria-selected:bg-white/10"
                    >
                      {career.title} roadmap
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Topics" className="mt-2 text-xs text-zinc-500 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2">
                  {topics.map((topic) => (
                    <Command.Item
                      key={topic.id}
                      onSelect={() => runCommand(`/career/${topic.careerSlug}`)}
                      className="cursor-pointer rounded-2xl px-4 py-3 text-sm text-zinc-200 aria-selected:bg-white/10"
                    >
                      {topic.title} in {topic.careerTitle}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CommandPalette
