import React from "react"
import { AlertTriangle, RefreshCcw } from "lucide-react"

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
    this.setState({ errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8 text-center backdrop-blur-xl">
          <div className="mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-rose-500/20 text-rose-400 ring-1 ring-rose-500/30">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">Something went wrong</h2>
          <p className="mb-6 max-w-md text-sm text-zinc-400">
            {this.props.fallbackMessage || "The component crashed. Try reloading the page. If the problem persists, the roadmap data might be invalid."}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 rounded-xl bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600 shadow-lg shadow-rose-500/20"
            >
              <RefreshCcw className="h-4 w-4" />
              Reload Page
            </button>
            <button
              onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Try Again
            </button>
          </div>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <div className="mt-8 w-full max-w-2xl overflow-auto rounded-xl border border-white/10 bg-black/50 p-4 text-left">
              <p className="mb-2 font-mono text-sm text-rose-400">{this.state.error.toString()}</p>
              <pre className="text-xs text-zinc-500">{this.state.errorInfo?.componentStack}</pre>
            </div>
          )}
        </div>
      )
    }

    return this.props.children
  }
}
