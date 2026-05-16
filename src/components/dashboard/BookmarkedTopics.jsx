import { Link } from "react-router-dom"
import { Bookmark } from "lucide-react"
import { getAllTopics } from "../../data/careers"
import DifficultyBadge from "../ui/DifficultyBadge"
import EmptyState from "../ui/EmptyState"

function BookmarkedTopics({ bookmarks }) {
  const topics = getAllTopics().filter((topic) => bookmarks.includes(topic.id))

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-200">
          <Bookmark className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Bookmarked topics</p>
          <p className="text-xs text-zinc-500">{topics.length ? "Saved for later" : "No saved topics yet"}</p>
        </div>
      </div>

      <div className="space-y-3">
        {topics.length === 0 && (
          <EmptyState
            icon={Bookmark}
            title="No bookmarks yet"
            description="Save critical topics while exploring roadmaps and they will appear here as your personal study queue."
          />
        )}
        {topics.map((topic) => (
          <Link key={topic.id} to={`/career/${topic.careerSlug}`} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 transition hover:border-cyan-300/30">
            <div>
              <p className="font-medium text-white">{topic.title}</p>
              <p className="text-xs text-zinc-500">{topic.careerTitle}</p>
            </div>
            <DifficultyBadge level={topic.level} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default BookmarkedTopics
