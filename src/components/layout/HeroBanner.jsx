import { motion } from "framer-motion"
import { ArrowLeft, BookOpen, CheckCircle2, Rocket, Code2 } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroBanner({ career }) {
  const totalTopics = career?.steps?.length || 0
  const totalTasks = career?.steps?.reduce((acc, step) => acc + (step.miniTasks?.length || 0), 0) || 0
  const totalProjects = career?.projects?.length || 0

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-12 overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-zinc-950/90 to-black p-8 shadow-2xl shadow-cyan-900/20 backdrop-blur-3xl sm:p-12"
    >
      {/* Background glowing effects */}
      <div className="absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-[100px] pointer-events-none" />

      <Link to="/" className="relative z-10 mb-8 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-400 transition hover:text-cyan-300">
        <ArrowLeft className="h-4 w-4" />
        BACK TO ROADMAPS
      </Link>

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">{career?.role}</span>
          </motion.div>
          
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-zinc-400 sm:text-7xl">
            {career?.title?.toUpperCase()} ROADMAP
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            {career?.summary}
          </p>
        </div>

        {/* Floating Stats */}
        <div className="flex flex-col justify-end gap-3 lg:w-64">
          <StatCard icon={BookOpen} label="Skills to Master" value={totalTopics} color="text-emerald-400" bg="bg-emerald-400/10" border="border-emerald-500/20" />
          <StatCard icon={CheckCircle2} label="Mini Tasks" value={totalTasks} color="text-amber-400" bg="bg-amber-400/10" border="border-amber-500/20" />
          <StatCard icon={Rocket} label="Portfolio Projects" value={totalProjects} color="text-fuchsia-400" bg="bg-fuchsia-400/10" border="border-fuchsia-500/20" />
        </div>
      </div>
    </motion.section>
  )
}

function StatCard({ icon: Icon, label, value, color, bg, border }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, x: -5 }}
      className={`flex items-center justify-between rounded-2xl border ${border} bg-black/40 p-4 backdrop-blur-md transition-colors hover:${bg}`}
    >
      <div className="flex items-center gap-3">
        <div className={`grid h-10 w-10 place-items-center rounded-xl ${bg} ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-sm font-semibold text-zinc-300">{label}</span>
      </div>
      <span className={`text-xl font-black ${color}`}>{value}</span>
    </motion.div>
  )
}
