import {
  Atom,
  BarChart3,
  BookOpen,
  Box,
  Boxes,
  Braces,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Network,
  Radar,
  ServerCog,
  Shield,
  Sigma,
  Siren,
  Smartphone,
  Sparkles,
  Terminal,
  Wifi,
  Workflow
} from "lucide-react"

const iconMap = {
  Atom,
  BarChart3,
  BookOpen,
  Box,
  Boxes,
  Braces,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Network,
  Radar,
  ServerCog,
  Shield,
  Sigma,
  Siren,
  Smartphone,
  Sparkles,
  Terminal,
  Wifi,
  Workflow
}

export function TopicIcon({ name, className = "h-5 w-5" }) {
  const Icon = iconMap[name] ?? BookOpen
  return <Icon className={className} aria-hidden="true" />
}
