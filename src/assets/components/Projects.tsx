import textUtilsWebm from "../images/TextUtils.webm";
import textUtilsImg from "../images/TextUtils.webp";
import questQuizzyWebm from "../images/QuestQuizzy.webm";
import questQuizzyImg from "../images/QuestQuizzy.webp";
import quickResumeImg from "../images/QuickResume.webp";
import quickResumeWebm from "../images/QuickResume.webm";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  videoSrc: string;
  placeholderSrc: string;
}

const projects: Project[] = [
  {
    title: "QuickResume: Create Resumes with Ease.",
    description:
      "QuickResume is a comprehensive platform for crafting personalized resumes, offering features like JSON saving/loading, sharing links, PDF export, customizable templates, drag and rearrange sections, autosaving, adding/removing sections, undo functionality. Perfect for creating polished, professional resumes effortlessly.",
    technologies: [
      "NextJs",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
    ],
    link: "https://jatins-quickresume.vercel.app/",
    videoSrc: quickResumeWebm,
    placeholderSrc: quickResumeImg,
  },
  {
    title: "TextUtils: Do Fun With Text.",
    description:
      "Text utility web application that enables users to perform text operations such as converting to uppercase/lowercase and manipulating text (e.g., removing spaces, extracting numbers), with theme customization to personalize the appearance for a more engaging and user-friendly experience.",
    technologies: ["React", "JavaScript", "HTML", "Bootstrap CSS"],
    link: "https://j-goyal.github.io/TextUtils-React/",
    videoSrc: textUtilsWebm,
    placeholderSrc: textUtilsImg,
  },
  {
    title: "QuestQuizzy: Engaging Quiz Platform.",
    description:
      "Quiz platform designed to deliver personalized experience, featuring a dynamic countdown timer that transitions through colors (green → yellow → red) as time dwindles, enhancing urgency and excitement. With the added ability to review answers, it's an ideal choice for fun, interactive, and engaging learning sessions!",
    technologies: ["React", "JavaScript", "HTML", "Tailwind CSS", "API"],
    link: "https://jatins-questquizzy.vercel.app/",
    videoSrc: questQuizzyWebm,
    placeholderSrc: questQuizzyImg,
  },
];

export const Projects: React.FC = () => (
  <div
    id="projects"
    className="bg-white flex flex-col items-center px-3 sm:px-10 scroll-my-10"
  >
    <div className="w-full lg:w-[980px] items-start font-extrabold text-gray-500 text-2xl mt-8 mb-3 sm:mt-10 sm:mb-5 px-4">
      PROJECTS
    </div>
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);
