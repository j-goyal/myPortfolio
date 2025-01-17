import { ProjectCard } from "./ProjectCard";
import { projectData } from "../data/projectData";

export const Projects: React.FC = () => (
  <div
    id="projects"
    className="bg-white flex flex-col items-center px-3 sm:px-10 scroll-my-10"
  >
    <div className="w-full lg:w-[980px] items-start font-extrabold text-gray-500 text-2xl mt-8 mb-3 sm:mt-10 sm:mb-5 px-4">
      PROJECTS
    </div>
    {projectData.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);
