export function NavItems({
  activeSection,
  onItemClick,
}: {
  activeSection?: string;
  onItemClick?: () => void;
}) {
  return (
    <div className="text-lg font-semibold gap-7 flex flex-col md:flex-row items-center">
      <a
        className={`hover:cursor-pointer hover:text-purple-900 ${
          (activeSection === "AboutMe" || activeSection === "") ? "text-purple-900" : ""
        }`}
        href="#AboutMe"
        onClick={() => onItemClick?.()}
      >
        About Me
      </a>
      <a
        className={`hover:cursor-pointer hover:text-purple-900 ${
          (activeSection === "Skills") ? "text-purple-900" : ""
        }`}
        href="#Skills"
        onClick={() => onItemClick?.()}
      >
        Skills
      </a>
      <a
        className={`hover:cursor-pointer hover:text-purple-900 ${
          activeSection === "experience" ? "text-purple-900" : ""
        }`}
        href="#experience"
        onClick={() => onItemClick?.()}
      >
        Experience
      </a>
      <a
        className={`hover:cursor-pointer hover:text-purple-900 ${
          activeSection === "projects" ? "text-purple-900" : ""
        }`}
        href="#projects"
        onClick={() => onItemClick?.()}
      >
        Projects
      </a>
      <a
        className={`hover:cursor-pointer hover:text-purple-900 ${
          activeSection === "achievements" ? "text-purple-900" : ""
        }`}
        href="#achievements"
        onClick={() => onItemClick?.()}
      >
        Awards
      </a>
    </div>
  );
}
