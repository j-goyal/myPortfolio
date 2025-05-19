import React from "react"
import { ExperienceCard } from "./ExperienceCard"
import { experienceData } from "../data/experienceData"

export const Experience: React.FC = () => {
  return (
    <div id="experience" className="flex flex-col items-center px-4 sm:px-6 md:px-8 justify-center scroll-my-10 py-12">
      <div className="w-full lg:w-[980px] flex flex-col items-start">
        <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 text-2xl mb-2">
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-gray-700 to-gray-400 rounded-full mb-8"></div>
      </div>

      <div className="relative w-full lg:w-[950px]">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 to-gray-200 hidden md:block"></div>

        <div className="space-y-10">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} isLast={index === experienceData.length - 1} />
          ))}
        </div>
      </div>
    </div>
  )
}
