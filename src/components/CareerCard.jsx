import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

function CareerCard({ career }) {
  return (
    <motion.article whileHover={{ y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <Link
        to={`/career/${career.slug}`}
        className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-cyan-300/40 hover:shadow-cyan-500/10"
      >
        <div className={`mb-6 h-2 w-24 rounded-full bg-gradient-to-r ${career.accent}`} />
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">{career.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{career.summary}</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-400 transition group-hover:border-cyan-300/40 group-hover:text-cyan-200">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {career.metrics.map((metric) => (
            <span key={metric} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">
              {metric}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  )
}

export default CareerCard
