import formatPhone from "@/utils/formatPhone";

import { INFO } from ".";

const META_TITLE = "TAZ Landscaping";
const META_DESCRIPTION =
  "Transforming Outdoor Spaces, Cultivating Lasting Beauty. Your Vision, Our Expertise, Nature's Craft.";

export const META_DATA = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: INFO.WEBSITE_URL,
    siteName: INFO.BUSINESS_NAME,
    phoneNumbers: [INFO.PHONE_NUMBER],
    images: ["/opengraph-image.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    card: "summary_large_image",
    site: "@",
    images: ["/twitter-image.jpg"],
  },
};

export const JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  mainEntity: {
    "@type": "Organization",
    "@id": `${INFO.WEBSITE_URL}/#organization`,
    name: INFO.BUSINESS_NAME,
    url: INFO.WEBSITE_URL,
    logo: `${INFO.WEBSITE_URL}/logo-4.png`,
    email: INFO.EMAIL_ADDRESS,
    telephone: `${formatPhone(INFO.PHONE_NUMBER)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: INFO.PHYSICAL_ADDRESS || "",
      addressLocality: "",
      addressRegion: "",
      postalCode: "",
      addressCountry: "US",
    },
    description: META_DESCRIPTION,
  },
  publisher: {
    "@type": "Organization",
    name: INFO.BUSINESS_NAME,
  },
};
