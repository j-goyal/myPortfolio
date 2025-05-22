import type React from "react";
import type { ExperienceDetail } from "../types/types";
import { useState } from "react";

interface ExperienceCardProps {
  experience: ExperienceDetail;
  isLast?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isLast = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative font-math"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-0 md:left-8 top-8 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 z-10 transform -translate-x-1/2 hidden md:block"></div>

      {!isLast && (
        <div className="absolute left-0 md:left-8 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
      )}

      <div
        className={`ml-0 md:ml-16 bg-white dark:bg-gray-800 rounded-3xl shadow-lg transition-all duration-300 overflow-hidden ${
          isHovered ? "shadow-2xl transform -translate-y-1" : ""
        }`}
      >
        <div className="h-2 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-500 dark:to-gray-300"></div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-6">
            <div>
              <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">
                {experience.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {experience.location}
              </p>
            </div>
            <div className="px-4 py-1.5 text-center bg-gray-200 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 font-medium text-sm whitespace-nowrap">
              {experience.duration}
            </div>
          </div>

          <div className="space-y-4 text-[15px] text-gray-800 dark:text-gray-200">
            {experience.responsibilities.map((responsibility, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 min-w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 group-hover:bg-gray-700 dark:group-hover:bg-gray-300 transition-colors"></div>
                  </div>
                  <p className="text-justify group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                    {responsibility.text}
                  </p>
                </div>

                {responsibility.subResponsibilities && (
                  <div className="mt-2 ml-7 space-y-2">
                    {responsibility.subResponsibilities.map((sub, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-start gap-3 group/sub"
                      >
                        <div className="mt-1.5 min-w-3 h-3 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 group-hover/sub:bg-gray-600 dark:group-hover/sub:bg-gray-400 transition-colors"></div>
                        </div>
                        <p className="text-gray-800 dark:text-gray-300 group-hover/sub:text-gray-950 dark:group-hover/sub:text-white transition-colors">
                          {sub.heading && (
                            <span className="underline text-gray-800 dark:text-gray-300">
                              {sub.heading}:
                            </span>
                          )}{" "}
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
