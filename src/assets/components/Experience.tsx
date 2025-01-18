import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { experienceData } from "../data/experienceData";

export const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="flex flex-col bg-white items-center px-4 sm:px-6 md:px-8 justify-center scroll-my-10"
    >
      <div className="w-full lg:w-[980px] items-start font-extrabold text-gray-500 text-2xl mt-8 mb-3 sm:mt-10 sm:mb-5 px-4">
        PROFESSIONAL EXPERIENCE
      </div>
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </div>
  );
};
