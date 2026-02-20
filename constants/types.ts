import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type Service = {
  title: string;
  slug: string;
  description: string;
  icon: string;
  imgSrc: string;
  bulletPoints: string[];
  descriptions: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: IconDefinition;
};

export type Testimonial = {
  name: string;
  testimonial: string;
  date: string;
  imgSrc: string;
};

export type NavLink = {
  id: string;
  title: string;
  href: string;
  children?: any[];
};
