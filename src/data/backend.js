import { createSection, createTopic } from "./roadmapHelpers"

export const backendRoadmap = {
  slug: "backend",
  title: "Backend Developer",
  description:
    "A complete path to designing, building, and scaling robust server-side applications, APIs, databases, and microservices architecture.",
  icon: "Server",
  estimatedTime: "6-9 months",
  salaryRange: "$80k - $160k",
  difficulty: "Advanced",
  sections: [
    createSection("Beginner", "Beginner", "Learn the fundamentals of server-side programming, APIs, and databases.", "8-10 weeks", [
      createTopic({
        title: "Node.js",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Learn server-side JavaScript, event loop, modules, file system, and streams.",
        tags: ["nodejs", "javascript", "runtime"]
      }),
      createTopic({
        title: "Express",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Build web servers and APIs using the Express framework, routing, and middleware.",
        tags: ["express", "framework", "server"]
      }),
      createTopic({
        title: "REST APIs",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Design standard RESTful endpoints, HTTP methods, status codes, and JSON responses.",
        tags: ["rest", "api", "http"]
      }),
      createTopic({
        title: "SQL",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Learn relational databases, queries, joins, aggregates, and basic schema design.",
        tags: ["sql", "database", "relational"]
      }),
      createTopic({
        title: "PostgreSQL",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Dive deep into PostgreSQL, indexing, transactions, and advanced querying.",
        tags: ["postgresql", "rdbms", "database"]
      }),
      createTopic({
        title: "MongoDB",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Understand NoSQL document databases, collections, schemas, and aggregation pipelines.",
        tags: ["mongodb", "nosql", "database"]
      })
    ]),
    createSection("Intermediate", "Intermediate", "Implement advanced data access, security, and real-time communication.", "10-12 weeks", [
      createTopic({
        title: "GraphQL",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Build flexible APIs with GraphQL, defining schemas, queries, mutations, and resolvers.",
        tags: ["graphql", "api", "query-language"]
      }),
      createTopic({
        title: "Redis",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Use Redis for caching, session management, and as an in-memory data store.",
        tags: ["redis", "cache", "memory"]
      }),
      createTopic({
        title: "JWT",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Implement stateless authentication using JSON Web Tokens, access, and refresh tokens.",
        tags: ["jwt", "auth", "security"]
      }),
      createTopic({
        title: "OAuth",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Integrate third-party login flows like Google/GitHub using OAuth 2.0.",
        tags: ["oauth", "sso", "auth"]
      }),
      createTopic({
        title: "WebSockets",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Build real-time bidirectional communication features like chat or live updates.",
        tags: ["websockets", "real-time", "socket-io"]
      }),
      createTopic({
        title: "Rate Limiting",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Protect APIs from abuse using rate limiting algorithms and middleware.",
        tags: ["security", "api", "protection"]
      }),
      createTopic({
        title: "API Security",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Learn about CORS, CSRF, XSS, SQL Injection prevention, and secure headers.",
        tags: ["security", "owasp", "web"]
      })
    ]),
    createSection("Advanced", "Advanced", "Master distributed systems, containerization, and massive scale.", "8-12 weeks", [
      createTopic({
        title: "Microservices",
        difficulty: "Advanced",
        estimatedTime: "3 weeks",
        description: "Design distributed architectures, bounded contexts, service discovery, and message queues.",
        tags: ["microservices", "architecture", "distributed"]
      }),
      createTopic({
        title: "Docker",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Containerize applications, write Dockerfiles, and manage multi-container apps with Compose.",
        tags: ["docker", "containers", "devops"]
      }),
      createTopic({
        title: "Deployment",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Deploy backends to cloud providers, configure CI/CD pipelines, and manage environments.",
        tags: ["deployment", "ci-cd", "cloud"]
      }),
      createTopic({
        title: "Scalability",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Learn horizontal vs vertical scaling, load balancing, sharding, and replication.",
        tags: ["scaling", "system-design", "load-balancing"]
      })
    ])
  ]
}
