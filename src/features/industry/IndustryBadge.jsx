import { Check } from "lucide-react"

function IndustryBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-zinc-300">
      <Check className="h-3.5 w-3.5 text-emerald-300" />
      {label}
    </span>
  )
}

export default IndustryBadge
