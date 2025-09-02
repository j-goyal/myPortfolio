import { useEffect, useState } from "react"
import { NavItems } from "./NavItems"
import { Resume } from "./Resume"
import { Logo } from "./Logo"
import { ThemeToggle } from "./ThemeToggle"

export function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const updateActiveSection = () => {
    const hash = window.location.hash.replace("#", "")
    setActiveSection(hash || "")
  }

  const resetActiveSection = () => {
    setActiveSection("")
  }

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    updateActiveSection()
    window.addEventListener("hashchange", updateActiveSection)

    return () => window.removeEventListener("hashchange", updateActiveSection)
  }, [])

  useEffect(() => {
    if (activeSection) {
      scrollToSection(activeSection)
    }
  }, [activeSection])

  return (
    <div className="bg-white dark:bg-gray-800 fixed top-0 left-0 w-full z-50 shadow h-14 flex justify-between px-4 sm:px-6 md:px-8 items-center">
      <Logo resetActiveSection={resetActiveSection} />

      <div className="hidden ml:flex items-center">
        <NavItems activeSection={activeSection} />
      </div>
      <div className="hidden ml:flex items-center gap-3">
        <ThemeToggle />
        <Resume />
      </div>

      <div className="ml:hidden flex items-center">
        <ThemeToggle />
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="ml-1 text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-40">
          <div className="border-t border-gray-300 dark:border-gray-600" />
          <div className="flex flex-col items-center py-4 gap-5">
            <NavItems activeSection={activeSection} onItemClick={closeMenu} />
            <div className="flex items-center gap-3">
              <Resume />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
