import { Project } from "@/types/types";

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
    placeholderSrc: "/GoogleOAuth.webp",
    features: [
      "Secure Google OAuth 2.0 login",
      "JWT authentication with refresh tokens",
      "Soft-delete and easy account restore",
      "Per-device session tracking & logout",
      "Role-based route access protection",
      "Admin panel with detailed insights",
      "Animated & sleek UI with persistent login",
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
    videoSrc: "/QuickResume.webm",
    placeholderSrc: "QuickResume.webp",
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
    videoSrc: "/TextUtils.webm",
    placeholderSrc: "/TextUtils.webp",
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
    videoSrc: "/QuestQuizzy.webm",
    placeholderSrc: "/QuestQuizzy.webp",
    features: [
      "Wide range of quiz categories",
      "Color-changing countdown for urgency",
      "Answer review with correct/incorrect flags",
      "Dynamic questions from API",
      "Simple, engaging & responsive UI",
    ],
  }
];
