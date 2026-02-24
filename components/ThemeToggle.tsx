"use client"
import { FiMoon, FiSun } from "react-icons/fi"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <FiSun className="h-5 w-5 text-gray-300" /> : <FiMoon className="h-5 w-5 text-gray-700" />}
    </button>
  )
}
