import { FolderGit2, Rocket } from "lucide-react"
import CollapsibleSection from "./CollapsibleSection"

export default function ProjectsPanel({ projects }) {
  if (!projects?.length) {
    return <p className="text-sm text-zinc-500">No portfolio projects listed for this skill yet.</p>
  }

  return (
    <div className="space-y-3">
      {projects.map((project, index) => (
        <CollapsibleSection
          key={`${project}-${index}`}
          subtitle="Portfolio build"
          title={project}
          accent="text-fuchsia-400"
          defaultOpen={index === 0}
        >
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300">
              <FolderGit2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm leading-relaxed text-zinc-400">
                Build this project to demonstrate practical mastery. Focus on clean structure, documentation,
                and one measurable outcome you can discuss in interviews.
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-fuchsia-300/80">
                <Rocket className="h-3.5 w-3.5" />
                Recommended capstone
              </p>
            </div>
          </div>
        </CollapsibleSection>
      ))}
    </div>
  )
}
