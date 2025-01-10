export function NavItems() {
  return (
    <>
      <div className=" font-bold text-2xl flex flex-col justify-center ml-4 h-full">
        <a
          className="hover:cursor-pointer"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState({}, "", "/");
          }}
        >
          Jatin Goyal.
        </a>
      </div>

      <div className="flex items-center mr-4">
        <div className="hidden md:flex text-lg font-semibold gap-7 items-end">
          <a
            className="hover:cursor-pointer hover:text-purple-900"
            href="#AboutMe"
          >
            About Me
          </a>
          <a
            className="hover:cursor-pointer hover:text-purple-900"
            href="#experience"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:cursor-pointer hover:text-purple-900"
          >
            Projects
          </a>
          <a
            className="hover:cursor-pointer hover:text-purple-900"
            href="#achievements"
          >
            Achievements & Awards
          </a>
        </div>
      </div>
    </>
  );
}
