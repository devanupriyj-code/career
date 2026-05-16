import { aiMlRoadmap } from "./ai_ml"
import { androidRoadmap } from "./android"
import { backendRoadmap } from "./backend"
import { cybersecurityRoadmap } from "./cybersecurity"
import { dataScienceRoadmap } from "./data_science"
import { devopsRoadmap } from "./devops"
import { frontendRoadmap } from "./frontend"

export const roadmaps = [
  frontendRoadmap,
  backendRoadmap,
  devopsRoadmap,
  aiMlRoadmap,
  cybersecurityRoadmap,
  androidRoadmap,
  dataScienceRoadmap
]

export function getRoadmapBySlug(slug) {
  return roadmaps.find((roadmap) => roadmap.slug === slug)
}

export function getRoadmapTopics(roadmap) {
  return roadmap.sections.flatMap((section) =>
    section.topics.map((topic) => ({
      ...topic,
      sectionTitle: section.title,
      sectionLevel: section.level,
      roadmapTitle: roadmap.title,
      roadmapSlug: roadmap.slug,
      icon: roadmap.icon,
      id: `${roadmap.slug}:${topic.title}`
    }))
  )
}

export function getAllRoadmapTopics() {
  return roadmaps.flatMap(getRoadmapTopics)
}
