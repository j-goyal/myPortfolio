import { MetadataRoute } from "next";
import { HOSTED_WEBSITE_URL } from "@/constants/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${HOSTED_WEBSITE_URL}/sitemap.xml`,
  };
}