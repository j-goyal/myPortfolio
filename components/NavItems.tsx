"use client"
export function NavItems({
  activeSection,
  onItemClick,
}: {
  activeSection?: string
  onItemClick?: () => void
}) {
  return (
    <div className="text-lg font-semibold gap-7 flex flex-col md:flex-row items-center">
      <a
        className={`hover:cursor-pointer hover:text-purple-900 dark:hover:text-purple-400 ${
          activeSection === "AboutMe" || activeSection === ""
            ? "text-purple-900 dark:text-purple-400"
            : "dark:text-gray-300"
        }`}
        href="#AboutMe"
        onClick={() => onItemClick?.()}
      >
        About Me
      </a>
      <a
        className={`hover:cursor-pointer hover:text-purple-900 dark:hover:text-purple-400 ${
          activeSection === "Skills" ? "text-purple-900 dark:text-purple-400" : "dark:text-gray-300"
        }`}
        href="#Skills"
        onClick={() => onItemClick?.()}
      >
        Skills
      </a>
      <a
        className={`hover:cursor-pointer hover:text-purple-900 dark:hover:text-purple-400 ${
          activeSection === "experience" ? "text-purple-900 dark:text-purple-400" : "dark:text-gray-300"
        }`}
        href="#experience"
        onClick={() => onItemClick?.()}
      >
        Experience
      </a>
      <a
        className={`hover:cursor-pointer hover:text-purple-900 dark:hover:text-purple-400 ${
          activeSection === "projects" ? "text-purple-900 dark:text-purple-400" : "dark:text-gray-300"
        }`}
        href="#projects"
        onClick={() => onItemClick?.()}
      >
        Projects
      </a>
      <a
        className={`hover:cursor-pointer hover:text-purple-900 dark:hover:text-purple-400 ${
          activeSection === "achievements" ? "text-purple-900 dark:text-purple-400" : "dark:text-gray-300"
        }`}
        href="#achievements"
        onClick={() => onItemClick?.()}
      >
        Awards
      </a>
      <a
        className={`hover:cursor-pointer hover:text-purple-900 dark:hover:text-purple-400 ${
          activeSection === "contact" ? "text-purple-900 dark:text-purple-400" : "dark:text-gray-300"
        }`}
        href="#contact"
        onClick={() => onItemClick?.()}
      >
        Reach Out
      </a>
    </div>
  )
}
