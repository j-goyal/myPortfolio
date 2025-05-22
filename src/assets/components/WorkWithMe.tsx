import { FiArrowUpRight } from "react-icons/fi"
import { WORK_WITH_ME_EMAIL } from "../constants/constants"

export function WorkWithMe() {
  return (
    <div className="flex justify-center items-center">
      <button
        aria-label="Email Me"
        type="button"
        className="text-md flex items-center gap-2 py-2.5 px-5 rounded-lg border bg-gray-950 dark:bg-gray-700 text-white border-gray-600 hover:bg-gray-700 dark:hover:bg-gray-950  transition-colors w-fit group"
        onClick={() => window.open(`mailto:${WORK_WITH_ME_EMAIL}`, "_blank")}
      >
        Work with me
        <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </div>
  )
}
