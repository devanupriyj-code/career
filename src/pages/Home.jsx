import { motion } from "framer-motion"
import { BarChart3, BookOpenCheck, Sparkles } from "lucide-react"
import CareerCard from "../components/CareerCard"
import BookmarkedTopics from "../components/dashboard/BookmarkedTopics"
import ComparisonSection from "../components/dashboard/ComparisonSection"
import AdBanner from "../components/ads/AdBanner"
import { AD_SLOTS } from "../components/ads/constants"
import { careers } from "../data/careers"
import { useBookmarks } from "../hooks/useBookmarks"

function Home() {
  const { bookmarks } = useBookmarks()

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]"
      >
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.1] to-white/[0.03] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Premium developer roadmap studio
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
            Learn like a developer building real systems.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Explore guided roadmaps with interactive nodes, resource tabs, project briefs, search, command navigation, themes, and bookmarks.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["5", "career tracks", BookOpenCheck],
              ["20+", "guided topics", BarChart3],
              ["Ctrl K", "quick command", Sparkles]
            ].map(([value, label, Icon]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <Icon className="mb-3 h-5 w-5 text-cyan-300" />
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-sm text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <BookmarkedTopics bookmarks={bookmarks} />
      </motion.section>

      <AdBanner slot={AD_SLOTS.HOMEPAGE_BANNER} className="my-8" />

      <section className="mt-10">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Roadmaps</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Pick a career path</h2>
          </div>
          <p className="max-w-md text-sm text-zinc-500">Each track includes interactive graph nodes, timeline planning, curated resources, and projects.</p>
        </div>

        <AdBanner slot={AD_SLOTS.HOMEPAGE_BANNER} className="mb-6" />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {careers.map((career, index) => (
            <motion.div
              key={career.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <CareerCard career={career} />
            </motion.div>
          ))}
        </div>
      </section>

      <ComparisonSection />
    </div>
  )
}

export default Home
