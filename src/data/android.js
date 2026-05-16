import { createSection, createTopic } from "./roadmapHelpers"

export const androidRoadmap = {
  slug: "android",
  title: "Android Developer",
  description:
    "A mobile engineering roadmap covering Kotlin, Android Studio, app architecture, APIs, Firebase, Jetpack Compose, offline storage, and push notifications.",
  icon: "Smartphone",
  estimatedTime: "5-8 months",
  salaryRange: "$80k - $160k",
  difficulty: "Intermediate",
  sections: [
    createSection("Android Foundations", "Beginner", "Learn the language, tooling, and core app building blocks.", "8-10 weeks", [
      createTopic({
        title: "Kotlin",
        difficulty: "Beginner",
        estimatedTime: "3 weeks",
        description: "Learn null safety, data classes, collections, functions, coroutines basics, sealed classes, extension functions, and idiomatic Kotlin style.",
        docsUrl: "https://kotlinlang.org/docs/home.html",
        projects: ["Kotlin CLI calculator", "Data model playground", "Coroutine demo"],
        interviewQuestions: ["What is null safety?", "Data class vs regular class?", "What are coroutines?"],
        prerequisites: ["Programming basics"],
        tags: ["kotlin", "coroutines", "mobile"]
      }),
      createTopic({
        title: "Android Studio",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Set up projects, emulators, Gradle, debugging, profiling, logcat, build variants, dependency management, and project structure.",
        docsUrl: "https://developer.android.com/studio",
        projects: ["Starter app setup", "Debugging workflow notes", "Build variant experiment"],
        interviewQuestions: ["What is Gradle?", "How do you inspect logs?", "How do build variants help?"],
        prerequisites: ["Kotlin"],
        tags: ["android-studio", "gradle", "debugging"]
      }),
      createTopic({
        title: "Activities",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Understand lifecycle, intents, configuration changes, state restoration, navigation, permissions, and screen ownership.",
        docsUrl: "https://developer.android.com/guide/components/activities/intro-activities",
        projects: ["Multi-screen notes app", "Intent sharing demo", "Lifecycle logger"],
        interviewQuestions: ["Explain Activity lifecycle.", "How do intents work?", "How do you handle rotation?"],
        prerequisites: ["Android Studio"],
        tags: ["activities", "lifecycle", "intents"]
      }),
      createTopic({
        title: "Fragments",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Use fragments for modular screens, lifecycle-aware UI, navigation, communication patterns, and responsive layouts.",
        docsUrl: "https://developer.android.com/guide/fragments",
        projects: ["Master-detail layout", "Fragment navigation demo", "Reusable settings screen"],
        interviewQuestions: ["Fragment vs Activity?", "How do fragments communicate?", "What lifecycle issues are common?"],
        prerequisites: ["Activities"],
        tags: ["fragments", "navigation", "ui"]
      })
    ]),
    createSection("Connected Apps", "Intermediate", "Build modern mobile apps with APIs, backend services, Compose, and local persistence.", "10-12 weeks", [
      createTopic({
        title: "APIs",
        difficulty: "Intermediate",
        estimatedTime: "3 weeks",
        description: "Consume REST APIs with Retrofit/Ktor, parse JSON, handle errors, loading states, pagination, retries, and network availability.",
        docsUrl: "https://square.github.io/retrofit/",
        projects: ["Weather app", "E-commerce app API client", "Paginated feed"],
        interviewQuestions: ["How do you handle failed requests?", "What is Retrofit?", "How do you model API states?"],
        prerequisites: ["Kotlin", "Activities"],
        tags: ["api", "retrofit", "networking"]
      }),
      createTopic({
        title: "Firebase",
        difficulty: "Intermediate",
        estimatedTime: "3 weeks",
        description: "Use Firebase Auth, Firestore, Storage, Analytics, Crashlytics, security rules, and backend-lite app workflows.",
        docsUrl: "https://firebase.google.com/docs",
        projects: ["Chat app", "Authenticated notes app", "Image upload app"],
        interviewQuestions: ["How do Firestore rules work?", "What is Crashlytics?", "When is Firebase a good fit?"],
        prerequisites: ["APIs"],
        tags: ["firebase", "firestore", "auth"]
      }),
      createTopic({
        title: "Jetpack Compose",
        difficulty: "Intermediate",
        estimatedTime: "4 weeks",
        description: "Build declarative UI with composables, state, recomposition, navigation, theming, previews, layouts, and animation.",
        docsUrl: "https://developer.android.com/compose",
        projects: ["Expense tracker", "Compose design system", "Animated onboarding flow"],
        interviewQuestions: ["What is recomposition?", "How is state hoisted?", "Composable vs View system?"],
        prerequisites: ["Kotlin", "Android Studio"],
        tags: ["compose", "ui", "state"]
      }),
      createTopic({
        title: "Offline Storage",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Persist data with Room, DataStore, caching strategies, sync queues, migrations, and offline-first UX patterns.",
        docsUrl: "https://developer.android.com/training/data-storage",
        projects: ["Offline notes app", "Sync queue prototype", "Room migration lab"],
        interviewQuestions: ["Room vs DataStore?", "How do you design offline-first?", "How do migrations work?"],
        prerequisites: ["Jetpack Compose", "APIs"],
        tags: ["room", "datastore", "offline"]
      })
    ]),
    createSection("Production Mobile", "Advanced", "Ship user-ready Android apps with notifications, architecture, quality, and release discipline.", "6-8 weeks", [
      createTopic({
        title: "Push Notifications",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Implement FCM, notification channels, deep links, permissions, background behavior, delivery reliability, and respectful notification UX.",
        docsUrl: "https://firebase.google.com/docs/cloud-messaging",
        projects: ["Push-enabled chat app", "Reminder notifications", "Deep-linked notification flow"],
        interviewQuestions: ["How does FCM work?", "What are notification channels?", "How do deep links improve notifications?"],
        prerequisites: ["Firebase", "Activities"],
        tags: ["push", "fcm", "notifications"]
      }),
      createTopic({
        title: "App Architecture",
        difficulty: "Advanced",
        estimatedTime: "4 weeks",
        description: "Use MVVM, repositories, use cases, dependency injection, state holders, modularization, testing, and maintainable release structure.",
        docsUrl: "https://developer.android.com/topic/architecture",
        projects: ["Modular e-commerce app", "Testable MVVM notes app", "Production release checklist"],
        interviewQuestions: ["What is MVVM?", "Why use repositories?", "How do you test ViewModels?"],
        prerequisites: ["Jetpack Compose", "Offline Storage"],
        tags: ["architecture", "mvvm", "testing"]
      })
    ])
  ]
}
