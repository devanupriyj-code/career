function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-2xl bg-white/10" />
        <div className="flex-1 space-y-3">
          <div className="h-4 w-1/3 rounded bg-white/10" />
          <div className="h-5 w-2/3 rounded bg-white/10" />
          <div className="h-3 w-full rounded bg-white/10" />
          <div className="h-3 w-4/5 rounded bg-white/10" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard
