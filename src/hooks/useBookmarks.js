import { useLocalStorage } from "./useLocalStorage"

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage("roadmap-bookmarks", [])

  function toggleBookmark(topicId) {
    setBookmarks((current) =>
      current.includes(topicId)
        ? current.filter((item) => item !== topicId)
        : [...current, topicId]
    )
  }

  function isBookmarked(topicId) {
    return bookmarks.includes(topicId)
  }

  return { bookmarks, toggleBookmark, isBookmarked }
}
