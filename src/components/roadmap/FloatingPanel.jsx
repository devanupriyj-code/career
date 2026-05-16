import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function FloatingPanel({ isOpen, onClose, children }) {
  // Prevent body scroll when panel is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.5 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col bg-zinc-950/95 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] border-l border-white/10 backdrop-blur-2xl sm:w-[500px]"
          >
            {/* Header / Close button */}
            <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Skill Details</h2>
              <button
                onClick={onClose}
                className="rounded-full bg-white/5 p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
