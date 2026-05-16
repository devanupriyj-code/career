import { Palette } from "lucide-react"

function ThemeSwitcher({ theme, setTheme, themes }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-2 backdrop-blur-xl">
      <div className="mb-2 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        <Palette className="h-3.5 w-3.5" />
        Theme
      </div>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTheme(item.id)}
            className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
              theme === item.id
                ? "bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/30"
                : "text-zinc-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeSwitcher
