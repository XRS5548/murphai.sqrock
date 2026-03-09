import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://murph.sqrock.cloud/sitemap.xml",
    host: "https://murph.sqrock.cloud",
  };
}