import ThemeSwitcher from "../components/layout/ThemeSwitcher"
import { useTheme } from "../hooks/useTheme"

function SettingsPage() {
  const { theme, setTheme, themes } = useTheme()

  return (
    <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Settings</p>
      <h1 className="mt-3 text-4xl font-bold text-white">Customize your workspace</h1>
      <p className="mt-4 text-zinc-400">Choose a persistent visual theme for the learning platform.</p>
      <div className="mt-8 max-w-md">
        <ThemeSwitcher theme={theme} setTheme={setTheme} themes={themes} />
      </div>
    </div>
  )
}

export default SettingsPage
