function ResourceCard({ resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-zinc-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
    >
      <span className="mb-2 inline-flex rounded-full bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">{resource.type}</span>
      <p>{resource.title}</p>
    </a>
  )
}

export default ResourceCard
