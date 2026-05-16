import { createSection, createTopic } from "./roadmapHelpers"

export const frontendRoadmap = {
  slug: "frontend",
  title: "Frontend Developer",
  description:
    "A complete path for building accessible, responsive, performant, production-grade web applications with modern JavaScript, React, design systems, testing, and frontend architecture.",
  icon: "Code2",
  estimatedTime: "5-8 months",
  salaryRange: "$75k - $155k",
  difficulty: "Intermediate",
  sections: [
    createSection("Beginner", "Beginner", "Start with the browser platform: structure, styling, interaction, and API communication.", "8-10 weeks", [
      createTopic({
        title: "HTML",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Learn the foundation of the web. Cover document structure, basic tags, headings, paragraphs, and links.",
        tags: ["html", "web", "structure"]
      }),
      createTopic({
        title: "Semantic HTML",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Learn semantic elements, forms, tables, metadata, SEO basics, accessible markup, and how browsers parse content.",
        tags: ["semantics", "seo", "forms", "a11y"]
      }),
      createTopic({
        title: "CSS",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Master selectors, cascade, specificity, box model, and custom properties.",
        tags: ["css", "styling", "cascade"]
      }),
      createTopic({
        title: "Flexbox",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Master flexible one-dimensional layouts, alignment, and distribution of space.",
        tags: ["css", "flexbox", "layout"]
      }),
      createTopic({
        title: "Grid",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Master two-dimensional layouts, grid template areas, tracks, and gaps.",
        tags: ["css", "grid", "layout"]
      }),
      createTopic({
        title: "Responsive Design",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Learn media queries, fluid typography, responsive images, and mobile-first design.",
        tags: ["responsive", "mobile-first", "media-queries"]
      }),
      createTopic({
        title: "JavaScript Basics",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Learn values, functions, scope, closures, arrays, objects, and control flow.",
        tags: ["javascript", "fundamentals", "logic"]
      }),
      createTopic({
        title: "DOM Manipulation",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Learn to query the DOM, attach event listeners, modify styles, and mutate elements dynamically.",
        tags: ["dom", "events", "browser"]
      }),
      createTopic({
        title: "ES6+",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Modern JavaScript features including arrow functions, destructuring, modules, promises, and async/await.",
        tags: ["es6", "async", "modern-js"]
      })
    ]),
    createSection("Intermediate", "Intermediate", "Build maintainable applications with typed JavaScript, React, styling systems, auth, and routing.", "10-14 weeks", [
      createTopic({
        title: "React",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Learn components, props, state, composition, and predictable UI data flow.",
        tags: ["react", "components", "spa"]
      }),
      createTopic({
        title: "Hooks",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Master useState, useEffect, useContext, useMemo, useCallback, and custom hooks.",
        tags: ["react", "hooks", "state"]
      }),
      createTopic({
        title: "State Management",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Learn Redux, Zustand, Recoil, or Context API for managing complex global state.",
        tags: ["state", "redux", "zustand"]
      }),
      createTopic({
        title: "APIs",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Consume REST and GraphQL APIs, handle loading and error states, pagination, and fetch.",
        tags: ["api", "fetch", "rest"]
      }),
      createTopic({
        title: "Tailwind CSS",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Build consistent interfaces with utility classes, responsive variants, and design tokens.",
        tags: ["tailwind", "css", "utility"]
      }),
      createTopic({
        title: "TypeScript",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Use static typing, interfaces, unions, generics, narrowing, and utility types.",
        tags: ["typescript", "types", "safety"]
      }),
      createTopic({
        title: "Routing",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Implement client-side routing using React Router, handling dynamic segments and nested routes.",
        tags: ["routing", "react-router", "navigation"]
      }),
      createTopic({
        title: "Forms",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Handle complex forms, validation, error states using libraries like React Hook Form and Zod.",
        tags: ["forms", "validation", "ux"]
      }),
      createTopic({
        title: "Authentication",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Understand sessions, cookies, JWTs, OAuth, protected routes, and client-side auth state.",
        tags: ["auth", "jwt", "security"]
      })
    ]),
    createSection("Advanced", "Advanced", "Polish apps for scale, accessibility, performance, testing, and frontend system design.", "8-12 weeks", [
      createTopic({
        title: "Next.js",
        difficulty: "Advanced",
        estimatedTime: "3 weeks",
        description: "Study App Router, server rendering, static generation, server components, and API routes.",
        tags: ["nextjs", "ssr", "react"]
      }),
      createTopic({
        title: "Performance Optimization",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Optimize Core Web Vitals, bundle size, lazy loading, code splitting, and render performance.",
        tags: ["performance", "web-vitals", "speed"]
      }),
      createTopic({
        title: "SEO",
        difficulty: "Advanced",
        estimatedTime: "1 week",
        description: "Learn technical SEO, meta tags, sitemaps, structured data, and optimizing for crawlers.",
        tags: ["seo", "marketing", "metadata"]
      }),
      createTopic({
        title: "Accessibility",
        difficulty: "Advanced",
        estimatedTime: "1 week",
        description: "Build keyboard-friendly, screen-reader-compatible interfaces with ARIA, focus management, and semantic markup.",
        tags: ["a11y", "aria", "inclusive"]
      }),
      createTopic({
        title: "Testing",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Write unit, integration, and E2E tests using Vitest, React Testing Library, and Playwright.",
        tags: ["testing", "vitest", "playwright"]
      }),
      createTopic({
        title: "Frontend System Design",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Design scalable frontend architectures with state boundaries, observability, and deployment strategies.",
        tags: ["architecture", "system-design", "scale"]
      }),
      createTopic({
        title: "Caching",
        difficulty: "Advanced",
        estimatedTime: "1 week",
        description: "Master client-side caching strategies, React Query / SWR, Service Workers, and HTTP caching.",
        tags: ["caching", "react-query", "performance"]
      }),
      createTopic({
        title: "PWA",
        difficulty: "Advanced",
        estimatedTime: "1 week",
        description: "Build Progressive Web Apps with offline support, push notifications, and app manifests.",
        tags: ["pwa", "offline", "mobile"]
      }),
      createTopic({
        title: "Micro Frontends",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Understand module federation, independent deployments, and composing large apps from smaller chunks.",
        tags: ["micro-frontends", "module-federation", "architecture"]
      })
    ])
  ]
}
