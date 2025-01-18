import { VideoWithPlaceholder } from "./VideoWithPlaceholder";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  videoSrc: string;
  placeholderSrc: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
  videoSrc,
  placeholderSrc,
}) => (
  <div className="bg-[#f8f8f8] flex flex-col font-math w-full lg:w-[950px] shadow-lg rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
    <div className="font-bold text-xl">{title}</div>
    <div className="flex gap-2 lg:gap-8 flex-col lg:flex-row mt-3">
      <div className="flex-grow">
        <VideoWithPlaceholder
          src={videoSrc}
          alt={title}
          placeholderSrc={placeholderSrc}
        />
      </div>
      <div className="flex flex-col gap-4 lg:w-[700px] font-light mt-2 justify-evenly">
        <div className="text-justify">{description}</div>
        <div className="flex-wrap flex gap-2 mt-1">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <button
            aria-label="Check it out"
            type="button"
            className="w-60 py-2.5 px-5 text-sm font-medium rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-100 bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
            onClick={() => window.open(link, "_blank")}
          >
            Check it out!
          </button>
        </div>
      </div>
    </div>
  </div>
);
