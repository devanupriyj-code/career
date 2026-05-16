import { ArrowUp, Compass, Plus, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function FloatingActions({ openCommandPalette }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const actions = [
    { label: "Quick search", icon: Search, onClick: openCommandPalette },
    { label: "Roadmaps", icon: Compass, onClick: () => navigate("/") },
    { label: "Top", icon: ArrowUp, onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) }
  ]

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="space-y-2"
          >
            {actions.map((action) => {
              const Icon = action.icon
              return (
                <button
                  key={action.label}
                  type="button"
                  onClick={() => {
                    action.onClick()
                    setOpen(false)
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm font-medium text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <span>{action.label}</span>
                  <Icon className="h-4 w-4" />
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-2xl shadow-cyan-500/25 transition hover:scale-105"
        aria-label="Open quick actions"
      >
        <Plus className={`h-6 w-6 transition ${open ? "rotate-45" : ""}`} />
      </button>
    </div>
  )
}

export default FloatingActions
