export function flattenRoadmapSections(roadmap) {
  return roadmap.sections.flatMap((section) =>
    section.topics.map((topic) => ({
      ...topic,
      sectionTitle: section.title,
      sectionLevel: section.level,
      roadmapSlug: roadmap.slug,
      roadmapTitle: roadmap.title,
      id: `${roadmap.slug}:${topic.title}`
    }))
  )
}

export function getDifficultyScore(difficulty) {
  return { Beginner: 1, Intermediate: 2, Advanced: 3 }[difficulty] ?? 1
}

export function topicMatchesQuery(topic, query) {
  if (!query.trim()) return true
  const haystack = [
    topic.title,
    topic.description,
    topic.difficulty,
    topic.estimatedTime,
    ...(topic.tags ?? []),
    ...(topic.prerequisites ?? [])
  ].join(" ").toLowerCase()

  return haystack.includes(query.toLowerCase())
}
