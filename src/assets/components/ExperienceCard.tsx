import { ExperienceDetail } from "../types/types";

interface ExperienceCardProps {
  experience: ExperienceDetail;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-[#f9f9f9] flex flex-col font-math w-full lg:w-[950px] shadow-lg rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
      <div className="flex justify-between md:gap-2 items-baseline flex-col md:flex-row">
        <div className="font-bold text-xl">{experience.title}</div>
        <div className="font-semibold text-lg text-gray-500">{experience.duration}</div>
      </div>
      <div className="gap-1.5 flex flex-col text-[15px]">
      <ul style={{ listStyleType: "disc", paddingLeft: "40px", textAlign: "justify" }}>
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index}>
              {responsibility.text}
              {responsibility.subResponsibilities && (
                <ul style={{ listStyleType: "circle", paddingLeft: "40px" }}>
                  {responsibility.subResponsibilities.map((sub, subIndex) => (
                    <li key={subIndex}>
                      {sub.heading && <span className="underline">{sub.heading}:</span>}{" "}
                      {sub.description}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
