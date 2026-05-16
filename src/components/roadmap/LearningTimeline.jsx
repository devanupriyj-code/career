import { motion } from "framer-motion"
import { levelStyles } from "../../data/careers"

function LearningTimeline({ steps }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Timeline</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Learning progression</h2>
      </div>
      <div className="relative space-y-5 before:absolute before:bottom-2 before:left-[15px] before:top-2 before:w-px before:bg-white/10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative flex gap-4"
          >
            <span className={`relative z-10 mt-1 h-8 w-8 rounded-full border-4 border-zinc-950 ${levelStyles[step.level]?.dot ?? "bg-cyan-400"}`} />
            <div className="min-w-0 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{step.weeks}</p>
              <h3 className="mt-1 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default LearningTimeline
