import { RESUME_SHAREABLE_LINK } from "../constants/constants";
import { FiExternalLink } from "react-icons/fi";

export function Resume() {
  return (
    <div className="flex items-center">
      <button
        aria-label="Resume"
        className="h-9 bg-gray-950 border-gray-600 border gap-2 flex items-center hover:shadow-lg hover:bg-gray-800 text-white font-semibold text-sm px-4 sm:px-6 rounded-lg group"
        onClick={() => window.open(RESUME_SHAREABLE_LINK, "_blank")}
      >
        Resume{" "}
        <FiExternalLink
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </div>
  );
}
