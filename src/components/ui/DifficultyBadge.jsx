import { levelStyles } from "../../data/careers"

function DifficultyBadge({ level, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${levelStyles[level]?.badge ?? levelStyles.Beginner.badge} ${className}`}
    >
      {level}
    </span>
  )
}

export default DifficultyBadge
