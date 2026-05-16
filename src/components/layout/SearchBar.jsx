import { Search } from "lucide-react"
import { motion } from "framer-motion"

function SearchBar({ value, onChange, placeholder = "Search careers, topics, projects..." }) {
  return (
    <motion.label
      className="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-zinc-300 shadow-2xl shadow-black/20 backdrop-blur-xl transition focus-within:border-cyan-300/50 focus-within:bg-white/[0.09]"
      whileFocus={{ scale: 1.01 }}
    >
      <Search className="h-4 w-4 text-zinc-500 transition group-focus-within:text-cyan-300" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-zinc-500"
        placeholder={placeholder}
        type="search"
      />
      <kbd className="hidden rounded-md border border-white/10 bg-black/30 px-2 py-1 text-[10px] font-semibold text-zinc-500 sm:inline-flex">
        Ctrl K
      </kbd>
    </motion.label>
  )
}

export default SearchBar
