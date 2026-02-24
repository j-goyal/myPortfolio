interface SubResponsibilities {
  heading?: string;
  description?: string;
}

export interface ExperienceDetail {
  title: string;
  duration: string;
  location: string;
  responsibilities: {
    text: string;
    subResponsibilities?: SubResponsibilities[];
  }[];
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    videoSrc: string;
    placeholderSrc: string;
    features?: string[];
  }