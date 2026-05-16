import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const themes = [
  { id: "dark", label: "Dark" },
  { id: "oled", label: "OLED" },
  { id: "purple", label: "Purple" },
  { id: "blue", label: "Blue" }
]

export function useTheme() {
  const [theme, setTheme] = useLocalStorage("roadmap-theme", "dark")

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return { theme, setTheme, themes }
}
