import { useEffect } from "react"

export function useKeyboardNavigation({ items, selectedIndex, setSelectedIndex, onSelect, onEscape }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault()
        setSelectedIndex((index) => Math.min(index + 1, items.length - 1))
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault()
        setSelectedIndex((index) => Math.max(index - 1, 0))
      }

      if (event.key === "Enter" && items[selectedIndex]) {
        event.preventDefault()
        onSelect(items[selectedIndex])
      }

      if (event.key === "Escape") {
        onEscape?.()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [items, onEscape, onSelect, selectedIndex, setSelectedIndex])
}
