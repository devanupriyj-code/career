import { comparisons } from "../../data/careers"

function ComparisonSection() {
  return (
    <section className="mt-10">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Compare paths</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Choose the work style that fits you</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {comparisons.map((comparison) => (
          <article key={comparison.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <h3 className="mb-5 text-lg font-semibold text-white">{comparison.title}</h3>
            {[comparison.left, comparison.right].map((side) => (
              <div key={side.name} className="mb-4 rounded-2xl border border-white/10 bg-black/20 p-4 last:mb-0">
                <p className="font-semibold text-cyan-100">{side.name}</p>
                <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.16em] text-emerald-300">Pros</p>
                    <ul className="space-y-1 text-zinc-400">
                      {side.pros.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.16em] text-rose-300">Cons</p>
                    <ul className="space-y-1 text-zinc-400">
                      {side.cons.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ComparisonSection
