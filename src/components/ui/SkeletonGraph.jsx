function SkeletonGraph() {
  return (
    <div className="h-[460px] animate-pulse rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:h-[520px]">
      <div className="grid h-full place-items-center">
        <div className="grid w-full max-w-4xl gap-8 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-24 rounded-3xl bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkeletonGraph
