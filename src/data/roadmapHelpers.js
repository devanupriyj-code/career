export function createResources(topic, docsUrl = "https://roadmap.sh/") {
  return [
    {
      type: "Videos",
      title: `${topic} full course and crash tutorials`,
      url: "https://www.youtube.com/results?search_query=" + encodeURIComponent(`${topic} full course`)
    },
    {
      type: "Documentation",
      title: `${topic} official documentation`,
      url: docsUrl
    },
    {
      type: "Practice",
      title: `${topic} hands-on exercises and labs`,
      url: "https://www.freecodecamp.org/learn/"
    },
    {
      type: "Practice",
      title: `${topic} project examples on GitHub`,
      url: "https://github.com/search?q=" + encodeURIComponent(`${topic} project`)
    }
  ]
}

export function createTopic({
  title,
  description,
  difficulty,
  estimatedTime,
  docsUrl,
  projects = [],
  interviewQuestions = [],
  miniTasks = [],
  prerequisites = [],
  tags = []
}) {
  return {
    title,
    description,
    difficulty,
    estimatedTime,
    projects,
    resources: [
      ...createResources(title, docsUrl),
      ...projects.map((project) => ({
        type: "Projects",
        title: project,
        url: "https://github.com/search?q=" + encodeURIComponent(project)
      }))
    ],
    interviewQuestions,
    miniTasks,
    prerequisites,
    tags
  }
}

export function createSection(title, level, description, estimatedTime, topics) {
  return {
    title,
    level,
    description,
    estimatedTime,
    topics
  }
}
