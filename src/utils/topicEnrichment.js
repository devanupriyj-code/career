const industryByTag = {
  aws: ["Startups", "FAANG", "Enterprise"],
  cloud: ["Startups", "FAANG", "Enterprise"],
  react: ["Startups", "Freelancing", "Enterprise"],
  security: ["Enterprise", "Government", "FAANG"],
  "machine-learning": ["FAANG", "Research", "Enterprise"],
  android: ["Startups", "Enterprise", "Freelancing"],
  sql: ["Enterprise", "Startups", "Analytics"],
  docker: ["Startups", "Enterprise", "FAANG"]
}

export function getImportance(topic) {
  const text = `${topic.title} ${(topic.tags ?? []).join(" ")}`.toLowerCase()
  if (topic.difficulty === "Advanced" || /(linux|javascript|react|node|sql|docker|kubernetes|machine learning|python|networking|auth)/i.test(text)) {
    return "Critical Skill"
  }
  if (topic.difficulty === "Intermediate") return "Recommended"
  return "Optional"
}

export function getIndustryUsage(topic) {
  const tagMatches = (topic.tags ?? []).flatMap((tag) => industryByTag[tag] ?? [])
  const usage = Array.from(new Set([...tagMatches, "Startups", "Enterprise"])).slice(0, 4)

  return {
    usedIn: usage,
    popularity: topic.difficulty === "Advanced" ? 88 : topic.difficulty === "Intermediate" ? 78 : 66,
    jobMarketUsage: `${topic.title} appears frequently in ${usage.slice(0, 2).join(" and ")} job descriptions.`,
    salaryRelevance: topic.difficulty === "Advanced" ? "High salary leverage" : topic.difficulty === "Intermediate" ? "Strong hiring signal" : "Foundation skill"
  }
}

export function createQuizQuestions(topic) {
  const prerequisite = topic.prerequisites?.[0] ?? "foundational knowledge"
  const tag = topic.tags?.[0] ?? topic.title.toLowerCase()

  return [
    {
      question: `What should you learn before going deep into ${topic.title}?`,
      options: [prerequisite, "Unrelated UI animation", "Production billing", "Brand typography"],
      correctAnswer: prerequisite,
      difficulty: topic.difficulty,
      explanation: `${topic.title} builds on ${prerequisite}, so learning that first makes the topic easier to apply.`
    },
    {
      question: `Which project best proves practical ${topic.title} skill?`,
      options: [topic.projects?.[0] ?? `Build a ${topic.title} lab`, "Change a button color", "Write a resume summary", "Rename a folder"],
      correctAnswer: topic.projects?.[0] ?? `Build a ${topic.title} lab`,
      difficulty: topic.difficulty,
      explanation: "Portfolio projects demonstrate that you can apply the concept under realistic constraints."
    },
    {
      question: `Which tag is most closely associated with ${topic.title}?`,
      options: [tag, "watercolor", "spreadsheet-only", "print-design"],
      correctAnswer: tag,
      difficulty: topic.difficulty,
      explanation: `The ${tag} tag maps this topic to the tools and concepts employers commonly search for.`
    }
  ]
}

export function createInterviewPrep(topic) {
  return {
    beginner: topic.interviewQuestions?.slice(0, 1) ?? [],
    advanced: topic.interviewQuestions?.slice(1, 3) ?? [],
    codingTasks: [
      `Build a small ${topic.title} demo and explain your tradeoffs.`,
      `Debug a broken ${topic.title} workflow from logs or errors.`
    ],
    scenarios: [
      `A team is adopting ${topic.title} next sprint. What risks and rollout steps would you propose?`,
      `How would you explain ${topic.title} to a non-technical stakeholder?`
    ]
  }
}

export function enrichTopic(topic, roadmapSlug, topicTitles) {
  const dependencies = (topic.prerequisites ?? []).filter((item) => topicTitles.includes(item))

  const defaultMiniTasks = topic.miniTasks?.length ? topic.miniTasks : [
    `Understand ${topic.title} basics`,
    `Learn core concepts`,
    `Complete hands-on lab`,
    `Review best practices`
  ];

  const defaultProjects = topic.projects?.length ? topic.projects : [
    `Build a ${topic.title} demo`,
    `Integrate ${topic.title} into an existing app`
  ];

  return {
    ...topic,
    level: topic.difficulty,
    weeks: topic.estimatedTime,
    miniTasks: defaultMiniTasks,
    projects: defaultProjects,
    dependencies,
    importance: getImportance(topic),
    industry: getIndustryUsage(topic),
    quizQuestions: createQuizQuestions(topic),
    interviewPrep: createInterviewPrep(topic),
    free: topic.resources.some((resource) => resource.url.includes("youtube.com") || resource.url.includes("freecodecamp")),
    certification: topic.tags.some((tag) => ["aws", "kubernetes", "security", "cloud", "power-bi"].includes(tag)),
    topicKey: `${roadmapSlug}:${topic.title}`
  }
}

export function getMarketInsights(slug) {
  const map = {
    frontend: { demand: "High Demand", remote: "Very High", salary: "$75k - $155k", growth: "Growing steadily", trend: "Design systems, performance, and AI-assisted UI work are strong hiring signals." },
    backend: { demand: "High Demand", remote: "High", salary: "$85k - $170k", growth: "Growing fast", trend: "API reliability, data systems, and distributed architecture remain core needs." },
    devops: { demand: "High Demand", remote: "High", salary: "$85k - $165k", growth: "Growing fast", trend: "Cloud automation, Kubernetes, and platform engineering continue to expand." },
    "ai-ml": { demand: "Explosive Demand", remote: "High", salary: "$105k - $210k", growth: "Growing fastest", trend: "LLMs, RAG, agents, and evaluation are driving new AI engineering roles." },
    cybersecurity: { demand: "High Demand", remote: "Medium", salary: "$90k - $180k", growth: "Growing fast", trend: "Cloud security, detection engineering, and appsec remain urgent." },
    android: { demand: "Steady Demand", remote: "Medium", salary: "$80k - $160k", growth: "Stable", trend: "Compose, Firebase, and high-quality mobile UX are valued." },
    "data-science": { demand: "High Demand", remote: "High", salary: "$85k - $175k", growth: "Growing", trend: "Analytics, ML literacy, and business storytelling are strong differentiators." }
  }

  return map[slug] ?? map.frontend
}

export function getCertifications(slug) {
  const map = {
    devops: [
      ["AWS Certified Cloud Practitioner", "AWS", "Beginner", "4-6 weeks", "https://aws.amazon.com/certification/certified-cloud-practitioner/", "Strong cloud foundation signal"],
      ["Certified Kubernetes Application Developer", "CNCF", "Advanced", "8-10 weeks", "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/", "Excellent Kubernetes credibility"],
      ["Docker Certified Associate", "Docker", "Intermediate", "6-8 weeks", "https://www.docker.com/", "Useful containerization proof"]
    ],
    frontend: [
      ["Meta Front-End Developer", "Meta", "Intermediate", "4-6 months", "https://www.coursera.org/professional-certificates/meta-front-end-developer", "Recognized portfolio pathway"],
      ["Google UX Design", "Google", "Beginner", "3-6 months", "https://www.coursera.org/professional-certificates/google-ux-design", "Helpful product design signal"]
    ],
    "ai-ml": [
      ["Google Professional ML Engineer", "Google Cloud", "Advanced", "10-12 weeks", "https://cloud.google.com/learn/certification/machine-learning-engineer", "High-value ML production credential"],
      ["TensorFlow Developer Certificate", "TensorFlow", "Intermediate", "6-8 weeks", "https://www.tensorflow.org/certificate", "Good deep learning implementation signal"]
    ],
    cybersecurity: [
      ["Security+", "CompTIA", "Beginner", "8-10 weeks", "https://www.comptia.org/certifications/security", "Common entry security credential"],
      ["Certified Ethical Hacker", "EC-Council", "Intermediate", "8-12 weeks", "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/", "Offensive security familiarity"]
    ]
  }

  return (map[slug] ?? [
    ["Role-focused portfolio certificate", "Industry", "Intermediate", "4-8 weeks", "https://roadmap.sh/", "Useful when paired with strong projects"]
  ]).map(([title, provider, difficulty, duration, url, industryValue]) => ({
    title,
    provider,
    difficulty,
    duration,
    url,
    industryValue
  }))
}
