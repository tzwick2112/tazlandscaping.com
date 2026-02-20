import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";

export default async function sitemap() {
  return [
    {
      url: INFO.WEBSITE_URL + Routes.HOME,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
