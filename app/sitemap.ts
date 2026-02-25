import { MetadataRoute } from "next";
import { HOSTED_WEBSITE_URL } from "@/constants/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: HOSTED_WEBSITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}