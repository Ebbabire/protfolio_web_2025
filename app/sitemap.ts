import type { MetadataRoute } from "next";
import { baseUrl } from "@/metadata_config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
