import { Link, NavLink, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import {
  BrainCircuit,
  BarChart3,
  Code2,
  Cpu,
  Home,
  Menu,
  PanelLeftClose,
  ServerCog,
  Settings,
  Shield,
  Smartphone,
  Terminal
} from "lucide-react"
import ThemeSwitcher from "./ThemeSwitcher"

const navItems = [
  { label: "Dashboard", to: "/", icon: Home },
  { label: "Frontend", to: "/career/frontend", icon: Code2 },
  { label: "Backend", to: "/career/backend", icon: Cpu },
  { label: "DevOps", to: "/career/devops", icon: ServerCog },
  { label: "AI/ML", to: "/career/ai-ml", icon: BrainCircuit },
  { label: "Cybersecurity", to: "/career/cybersecurity", icon: Shield },
  { label: "Android", to: "/career/android", icon: Smartphone },
  { label: "Data Science", to: "/career/data-science", icon: BarChart3 },
  { label: "Settings", to: "/settings", icon: Settings }
]

function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen, theme, setTheme, themes }) {
  const location = useLocation()

  const sidebar = (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 92 : 288 }}
      className="flex h-full flex-col border-r border-white/10 bg-zinc-950/70 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl"
    >
      <div className="mb-8 flex items-center justify-between gap-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/20">
            <Terminal className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">DevPath Studio</p>
              <p className="truncate text-xs text-zinc-500">Learning platform</p>
            </div>
          )}
        </Link>
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="hidden rounded-xl border border-white/10 bg-white/[0.04] p-2 text-zinc-400 transition hover:text-white lg:inline-flex"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <PanelLeftClose className={`h-4 w-4 transition ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isCareer = item.to.startsWith("/career")
          const active = item.to === "/"
            ? location.pathname === "/"
            : isCareer
              ? location.pathname === item.to
              : location.pathname === item.to

          return (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                active
                  ? "bg-cyan-400/15 text-cyan-100 ring-1 ring-cyan-300/25"
                  : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          )
        })}
      </nav>

      <div className="mt-auto space-y-4">
        {!collapsed && <ThemeSwitcher theme={theme} setTheme={setTheme} themes={themes} />}
        {!collapsed && (
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4">
            <p className="text-sm font-semibold text-white">Next milestone</p>
            <p className="mt-1 text-xs leading-5 text-zinc-400">Bookmark topics, filter by difficulty, and build one project per phase.</p>
          </div>
        )}
      </div>
    </motion.aside>
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-2xl border border-white/10 bg-zinc-950/80 p-3 text-white shadow-xl backdrop-blur-xl lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="fixed inset-y-0 left-0 z-30 hidden lg:block">{sidebar}</div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Close sidebar"
            onClick={() => setMobileOpen(false)}
          />
          <motion.div initial={{ x: -320 }} animate={{ x: 0 }} exit={{ x: -320 }} className="relative h-full w-[86vw] max-w-80">
            {sidebar}
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Sidebar
