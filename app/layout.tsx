import type { Metadata } from "next";
import "./global.css";
import {
  GITHUB_PROFILE_LINK,
  LINKEDIN_PROFILE_LINK,
  HOSTED_WEBSITE_URL,
} from "@/constants/constants";

export const metadata: Metadata = {
  metadataBase: new URL(HOSTED_WEBSITE_URL),
  title: {
    default: "Jatin's Portfolio",
    template: "%s | Jatin Portfolio",
  },
  description:
    "Jatin Goyal is a Full Stack Developer with 4+ years of experience in .NET, React, Next.js, and scalable web application development. Explore projects, skills, and professional experience.",
  keywords: [
    "Jatin Goyal",
    "Jatin Portfolio",
    "Full Stack Developer India",
    ".NET Developer",
    "React Developer",
    "Next.js Developer",
    "SQL Developer",
    "Software Engineer Portfolio",
  ],
  alternates: {
    canonical: HOSTED_WEBSITE_URL,
  },
  applicationName: "Jatin Portfolio",
  creator: "Jatin Goyal",
  openGraph: {
    title: "Jatin's Portfolio",
    description:
      "Explore Jatin's skills, experience, projects, and achievements.",
    url: HOSTED_WEBSITE_URL,
    siteName: "Jatin's Portfolio",
    type: "website",
  },
  icons: {
    icon: "/portfolio.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jatin Goyal",
              url: HOSTED_WEBSITE_URL,
              jobTitle: "Full Stack Developer",
              sameAs: [GITHUB_PROFILE_LINK, LINKEDIN_PROFILE_LINK],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
