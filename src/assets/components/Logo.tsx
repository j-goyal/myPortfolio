export function Logo({ resetActiveSection }: { resetActiveSection: () => void }) {
  return (
    <div className="font-bold text-2xl">
      <a
        className="hover:cursor-pointer"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.replaceState({}, "", "/");
          resetActiveSection();
        }}
      >
        Jatin Goyal.
      </a>
    </div>
  );
}
