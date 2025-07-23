import textUtilsWebm from "../images/TextUtils.webm";
import textUtilsImg from "../images/TextUtils.webp";
import questQuizzyWebm from "../images/QuestQuizzy.webm";
import questQuizzyImg from "../images/QuestQuizzy.webp";
import quickResumeImg from "../images/QuickResume.webp";
import quickResumeWebm from "../images/QuickResume.webm";
import googleOAuthImg from "../images/GoogleOAuth.webp";
import { Project } from "../types/types";

export const projectData: Project[] = [
  {
    title: "GoogleOAuth: Full-Stack Google Auth Platform",
    description:
      "GoogleOAuth provides a secure and scalable authentication system with Google login and session management. Built with clean architecture — ideal for apps needing robust auth flows and admin-level control.",
    technologies: [
      "C#",
      ".NET Web API",
      "MongoDB",
      "Docker",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://jatins-nextgoogleauth.vercel.app/",
    videoSrc: "",
    placeholderSrc: googleOAuthImg,
    features: [
      "Google OAuth 2.0 with server-side token verification",
      "Token-based auth using JWT with refresh rotation",
      "Soft-delete and account restoration support",
      "Device-wise session tracking and targeted logout",
      "Role-based access control with protected routes",
      "Admin panel with user list and session insights",
      "Sleek, responsive, animated UI and persistent login",
    ],
  },
  {
    title: "QuickResume: Simplify Your Resume.",
    description:
      "QuickResume is a lightweight resume builder designed for flexibility and speed, enabling users to create professional resumes with ease.",
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
    features: [
      "Real-time resume editing with autosave",
      "Drag & drop section reordering",
      "Template customization and live preview",
      "Save/load resume as JSON",
      "Shareable links and PDF export",
      "Undo functionality and section control",
    ],
  },
  {
    title: "TextUtils: Do Fun With Text.",
    description:
      "TextUtils is a simple and responsive text utility app for quick formatting, transformation, and analysis of user input.",
    technologies: ["React", "JavaScript", "Bootstrap CSS", "HTML"],
    link: "https://j-goyal.github.io/TextUtils-React/",
    videoSrc: textUtilsWebm,
    placeholderSrc: textUtilsImg,
    features: [
      "Convert text to uppercase/lowercase",
      "Remove extra spaces and extract numbers",
      "Character and word count statistics",
      "Theme customization (light/dark)",
      "Instant text preview and updates",
    ],
  },
  {
    title: "QuestQuizzy: Engaging Quiz Platform.",
    description:
      "QuestQuizzy is a responsive quiz platform built for interactive learning and fast-paced testing. It combines clean UI with a playful experience, ideal for casual or educational use.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "API"],
    link: "https://jatins-questquizzy.vercel.app/",
    videoSrc: questQuizzyWebm,
    placeholderSrc: questQuizzyImg,
    features: [
      "Wide range of quiz categories",
      "Color-changing countdown timer for urgency",
      "Answer review with correct/incorrect flags",
      "Dynamic questions from API",
      "Simple, engaging & Responsive UI for all devices",
    ],
  },
];
