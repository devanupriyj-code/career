function LearningPathSidebar({ sections, activeSection, onSelectSection }) {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Learning Path</p>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.title}
            type="button"
            onClick={() => onSelectSection?.(section.title)}
            className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
              activeSection === section.title ? "bg-cyan-400/15 text-cyan-100" : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            <span className="block font-semibold">{section.title}</span>
            <span className="text-xs text-zinc-500">{section.topics.length} topics · {section.estimatedTime}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default LearningPathSidebar
