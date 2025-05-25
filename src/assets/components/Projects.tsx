import type React from "react"
import { ProjectCard } from "./ProjectCard"
import { projectData } from "../data/projectData"

export const Projects: React.FC = () => (
  <div id="projects" className="flex flex-col items-center px-4 sm:px-6 md:px-8 justify-center scroll-my-10 py-12">
    <div className="w-full lg:w-[980px] flex flex-col items-start">
      <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-100 text-2xl mb-2">
        PROJECTS
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-gray-700 to-gray-400 dark:from-gray-300 dark:to-gray-100 rounded-full mb-8"></div>
    </div>

    <div className="relative w-full lg:w-[950px]">
      <div className="space-y-10">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} isLast={index === projectData.length - 1} />
        ))}
      </div>
    </div>
  </div>
)
