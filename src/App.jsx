import { Routes, Route, Link } from "react-router-dom"
import AppShell from "./components/layout/AppShell"
import Home from "./pages/Home"
import CareerPage from "./pages/CareerPage"
import SettingsPage from "./pages/SettingsPage"
import ErrorBoundary from "./components/ErrorBoundary"

function NotFound() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
      <p className="text-cyan-300">Page not found</p>
      <h1 className="mt-3 text-4xl font-bold text-white">Nothing lives at this URL</h1>
      <p className="mt-3 text-zinc-400">Use the dashboard to pick a valid career roadmap.</p>
      <Link to="/" className="mt-6 inline-flex rounded-2xl bg-cyan-400/15 px-5 py-3 font-medium text-cyan-100 transition hover:bg-cyan-400/20">
        Open dashboard
      </Link>
    </div>
  )
}

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career/:slug" element={
          <ErrorBoundary fallbackMessage="Failed to load career roadmap. The data might be corrupted or the career path doesn't exist.">
            <CareerPage />
          </ErrorBoundary>
        } />
        <Route path="/career/:slug/*" element={
          <ErrorBoundary fallbackMessage="Failed to load career roadmap. The data might be corrupted or the career path doesn't exist.">
            <CareerPage />
          </ErrorBoundary>
        } />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppShell>
  )
}

export default App
