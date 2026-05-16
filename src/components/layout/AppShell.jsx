import { useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AnimatedBackground from "../ui/AnimatedBackground"
import CommandPalette from "./CommandPalette"
import FloatingActions from "./FloatingActions"
import SearchBar from "./SearchBar"
import Sidebar from "./Sidebar"
import FooterAd from "../ads/FooterAd"
import { careers, getAllTopics } from "../../data/careers"
import { useTheme } from "../../hooks/useTheme"

function AppShell({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [query, setQuery] = useState("")
  const { theme, setTheme, themes } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const results = useMemo(() => {
    if (!query.trim()) return []
    const search = query.toLowerCase()
    const careerMatches = careers
      .filter((career) => `${career.title} ${career.role} ${career.summary}`.toLowerCase().includes(search))
      .map((career) => ({ type: "Career", label: career.title, path: `/career/${career.slug}` }))
    const topicMatches = getAllTopics()
      .filter((topic) => `${topic.title} ${topic.description} ${topic.careerTitle}`.toLowerCase().includes(search))
      .map((topic) => ({ type: "Topic", label: `${topic.title} - ${topic.careerTitle}`, path: `/career/${topic.careerSlug}` }))
    return [...careerMatches, ...topicMatches].slice(0, 6)
  }, [query])

  const contentOffset = collapsed ? "lg:pl-[92px]" : "lg:pl-[288px]"

  return (
    <div className="min-h-screen text-white transition-colors duration-500">
      <AnimatedBackground />
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        theme={theme}
        setTheme={setTheme}
        themes={themes}
      />

      <div className={`relative z-0 min-h-screen ${contentOffset} transition-[padding] duration-300`}>
        <header className="sticky top-0 z-20 border-b border-white/5 bg-[var(--app-bg)]/70 px-5 py-4 backdrop-blur-2xl sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="pl-14 lg:pl-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Developer learning platform</p>
              <h1 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                {location.pathname === "/" ? "Career Roadmaps" : "Build your learning path"}
              </h1>
            </div>
            <div className="relative w-full max-w-xl">
              <SearchBar value={query} onChange={setQuery} />
              {results.length > 0 && (
                <div className="absolute left-0 right-0 top-full z-30 mt-3 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                  {results.map((result) => (
                    <button
                      key={`${result.type}-${result.label}`}
                      type="button"
                      onClick={() => {
                        navigate(result.path)
                        setQuery("")
                      }}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm text-zinc-200 transition hover:bg-white/10"
                    >
                      <span>{result.label}</span>
                      <span className="text-xs text-zinc-500">{result.type}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8">{children}</main>

        <footer className="relative z-10 mx-auto max-w-7xl border-t border-white/5 px-5 pb-10 pt-6 sm:px-8">
          <FooterAd />
          <p className="mt-4 text-center text-xs text-zinc-600">
            DevPath Studio — interactive developer roadmaps
          </p>
        </footer>
      </div>

      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
      <FloatingActions openCommandPalette={() => setPaletteOpen(true)} />
    </div>
  )
}

export default AppShell
