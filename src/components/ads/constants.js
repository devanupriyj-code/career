export const ADSENSE_CLIENT = "ca-pub-6403988907886762"

export const AD_SLOTS = {
  HOMEPAGE_BANNER: "1234567890",
  SIDEBAR: "1234567891",
  CAREER_PAGE: "1234567892",
  FOOTER: "1234567893"
}

/** Show placeholders in dev / localhost — live ads usually do not render locally. */
export function isAdSenseDevMode() {
  if (import.meta.env.DEV) return true
  if (typeof window === "undefined") return false
  const host = window.location.hostname
  return host === "localhost" || host === "127.0.0.1" || host === "[::1]"
}
