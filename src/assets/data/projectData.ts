import textUtilsWebm from "../images/TextUtils.webm";
import textUtilsImg from "../images/TextUtils.webp";
import questQuizzyWebm from "../images/QuestQuizzy.webm";
import questQuizzyImg from "../images/QuestQuizzy.webp";
import quickResumeImg from "../images/QuickResume.webp";
import quickResumeWebm from "../images/QuickResume.webm";
import { Project } from "../types/types";

export const projectData: Project[] = [
  {
    title: "QuickResume: Simplify Your Resume.",
    description:
      "QuickResume is a comprehensive platform for crafting personalized resumes, offering features like JSON saving/loading, sharing links, PDF export, customizable templates, drag and rearrange sections, autosaving, adding/removing sections, undo functionality. Perfect for creating polished, professional resumes effortlessly.",
    technologies: [
      "NextJs",
      "React",
      "TypeScript",
      "HTML",
      "JavaScript",
      "Tailwind CSS",
    ],
    link: "https://jatins-quickresume.vercel.app/",
    videoSrc: quickResumeWebm,
    placeholderSrc: quickResumeImg,
  },
  {
    title: "TextUtils: Do Fun With Text.",
    description:
      "Text utility web application that enables users to perform range of text operations such as converting to uppercase/lowercase and manipulating text (e.g., removing spaces, extracting numbers), with theme customization to personalize the appearance for a more engaging and user-friendly experience.",
    technologies: ["React", "JavaScript", "Bootstrap CSS", "HTML"],
    link: "https://j-goyal.github.io/TextUtils-React/",
    videoSrc: textUtilsWebm,
    placeholderSrc: textUtilsImg,
  },
  {
    title: "QuestQuizzy: Engaging Quiz Platform.",
    description:
      "Quiz platform designed to deliver personalized experience, featuring a dynamic countdown timer that transitions through colors (green → yellow → red) as time dwindles, enhancing urgency and excitement. With the added ability to review answers, it's an ideal choice for fun, interactive, and engaging learning sessions!",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "API"],
    link: "https://jatins-questquizzy.vercel.app/",
    videoSrc: questQuizzyWebm,
    placeholderSrc: questQuizzyImg,
  },
];
