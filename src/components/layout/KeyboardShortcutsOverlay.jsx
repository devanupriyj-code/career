import { AnimatePresence, motion } from "framer-motion"
import { Keyboard, X } from "lucide-react"

function KeyboardShortcutsOverlay({ open, onClose }) {
  const shortcuts = [
    ["Ctrl + K", "Open command palette"],
    ["Arrow keys", "Move through roadmap topics"],
    ["Enter", "Open selected topic"],
    ["Esc", "Close modals and overlays"],
    ["Tab", "Move through interactive controls"]
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.section initial={{ opacity: 0, y: 18, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: 0.97 }} className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-950/95 p-6 shadow-2xl shadow-black/60">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  <Keyboard className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Keyboard shortcuts</h2>
                <p className="mt-2 text-sm text-zinc-400">Navigate faster without leaving the keyboard.</p>
              </div>
              <button type="button" onClick={onClose} className="rounded-2xl border border-white/10 p-3 text-zinc-400 hover:text-white" aria-label="Close keyboard shortcuts">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              {shortcuts.map(([keys, label]) => (
                <div key={keys} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="text-sm text-zinc-300">{label}</span>
                  <kbd className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-cyan-100">{keys}</kbd>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default KeyboardShortcutsOverlay
