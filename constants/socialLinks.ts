import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import type { SocialLink } from "@/constants/types";

export default [
  {
    name: "Facebook",
    href: "https://www.facebook.com/tazlandscaping",
    icon: faFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: faInstagram,
  },
] as SocialLink[];

