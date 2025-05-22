import type React from "react"
import { useState } from "react"
import { VideoWithPlaceholder } from "./VideoWithPlaceholder"
import { FiArrowUpRight } from "react-icons/fi"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link: string
  videoSrc: string
  placeholderSrc: string
  isLast?: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
  videoSrc,
  placeholderSrc,
  isLast = false,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative font-math">
      <div className="absolute left-0 md:left-8 top-8 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 z-10 transform -translate-x-1/2 hidden md:block"></div>

      {!isLast && (
        <div className="absolute left-0 md:left-8 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
      )}

      <div
        className={`ml-0 md:ml-16 bg-white dark:bg-gray-800 rounded-3xl shadow-lg transition-all duration-300 overflow-hidden ${
          isHovered ? "shadow-2xl transform -translate-y-1" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-2 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-500 dark:to-gray-300"></div>

        <div className="p-6 sm:p-8">
          <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-6">{title}</h3>

          <div className="flex gap-6 lg:gap-8 flex-col lg:flex-row">
            <div className="flex-grow lg:w-1/2 overflow-hidden rounded-lg ">
              <VideoWithPlaceholder src={videoSrc} alt={title} placeholderSrc={placeholderSrc} />
            </div>

            <div className="flex flex-col gap-5 lg:w-1/2 justify-between">
              <p className="text-gray-800 dark:text-gray-200 text-justify">{description}</p>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  aria-label="Check it out"
                  type="button"
                  className="flex items-center gap-2 py-2.5 px-5 text-sm font-medium rounded-lg border bg-gray-950 text-white border-gray-600 hover:bg-gray-700 transition-colors w-fit group"
                  onClick={() => window.open(link, "_blank")}
                >
                  Check it out!
                  <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
