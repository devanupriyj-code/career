function SkeletonSidebar() {
  return (
    <aside className="animate-pulse rounded-3xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-5 h-4 w-32 rounded bg-white/10" />
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="h-12 rounded-2xl bg-white/10" />
        ))}
      </div>
    </aside>
  )
}

export default SkeletonSidebar
