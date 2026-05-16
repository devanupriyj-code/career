import { getAllRoadmapTopics, getRoadmapBySlug, getRoadmapTopics, roadmaps } from "./roadmaps"
import { enrichTopic, getCertifications, getMarketInsights } from "../utils/topicEnrichment"

export const levelStyles = {
  Beginner: {
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    node: "from-emerald-500/20 to-emerald-400/5 border-emerald-400/40",
    dot: "bg-emerald-400"
  },
  Intermediate: {
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    node: "from-amber-500/20 to-amber-400/5 border-amber-400/40",
    dot: "bg-amber-400"
  },
  Advanced: {
    badge: "border-rose-400/30 bg-rose-400/10 text-rose-300",
    node: "from-rose-500/20 to-rose-400/5 border-rose-400/40",
    dot: "bg-rose-400"
  }
}

export const careers = roadmaps.map((roadmap) => {
  const topicTitles = getRoadmapTopics(roadmap).map((topic) => topic.title)
  const steps = getRoadmapTopics(roadmap).map((topic) => enrichTopic(topic, roadmap.slug, topicTitles))

  return {
    ...roadmap,
    title: roadmap.title.replace(" Engineer", "").replace(" Developer", ""),
    role: roadmap.title,
    summary: roadmap.description,
    accent:
      roadmap.slug === "frontend"
        ? "from-fuchsia-500 to-pink-300"
        : roadmap.slug === "backend"
          ? "from-blue-500 to-indigo-300"
          : roadmap.slug === "devops"
            ? "from-sky-500 to-cyan-300"
            : roadmap.slug === "ai-ml"
              ? "from-violet-500 to-cyan-300"
              : roadmap.slug === "cybersecurity"
                ? "from-emerald-500 to-lime-300"
                : roadmap.slug === "android"
                  ? "from-green-500 to-teal-300"
                  : "from-orange-500 to-amber-300",
    metrics: [roadmap.estimatedTime, roadmap.salaryRange, roadmap.difficulty],
    marketInsights: getMarketInsights(roadmap.slug),
    certifications: getCertifications(roadmap.slug),
    steps,
    projects: steps.flatMap((topic) =>
      topic.projects.slice(0, 1).map((project) => ({
        title: project,
        level: topic.difficulty,
        description: `Portfolio project for ${topic.title}: ${topic.description}`,
        stack: topic.tags.slice(0, 4),
        github: "https://github.com/",
        demo: "https://roadmap.sh/"
      }))
    ).slice(0, 4)
  }
})

export const comparisons = [
  {
    title: "Frontend vs Backend",
    left: { name: "Frontend", pros: ["Fast visual feedback", "Strong product craft"], cons: ["Browser complexity", "Frequent UI churn"] },
    right: { name: "Backend", pros: ["Deep systems work", "Clear service ownership"], cons: ["Less visual output", "Operational pressure"] }
  },
  {
    title: "AI/ML vs Data Science",
    left: { name: "AI/ML", pros: ["Model building", "Production AI features"], cons: ["Math-heavy", "Evaluation can be subtle"] },
    right: { name: "Data Science", pros: ["Business insights", "Experiment design"], cons: ["Messy data work", "Stakeholder ambiguity"] }
  },
  {
    title: "DevOps vs Cloud Engineer",
    left: { name: "DevOps", pros: ["Automation focus", "Delivery impact"], cons: ["On-call risk", "Wide tool surface"] },
    right: { name: "Cloud Engineer", pros: ["Platform depth", "Architecture scope"], cons: ["Provider lock-in", "Cost complexity"] }
  }
]

export function getCareerBySlug(slug) {
  return careers.find((career) => career.slug === slug)
}

export function getDetailedRoadmapBySlug(slug) {
  return getRoadmapBySlug(slug)
}

export function getAllTopics() {
  return getAllRoadmapTopics().map((topic) => ({
    ...enrichTopic(topic, topic.roadmapSlug, []),
    careerTitle: topic.roadmapTitle,
    careerSlug: topic.roadmapSlug,
    level: topic.difficulty,
    weeks: topic.estimatedTime
  }))
}
