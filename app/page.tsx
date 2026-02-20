import AboutUs from "@/sections/about-us";
import CompareImages from "@/sections/compare-images";
import ContactUs from "@/sections/contact-us";
import Cta from "@/sections/cta";
import Faq from "@/sections/faq";
import HeroSection from "@/sections/hero";
import OurWork from "@/sections/our-work";
import Services from "@/sections/services/ServicesPage";

import { INFO } from "@/constants";
import { JSONLD } from "@/constants/meta";

const jsonLd = {
  ...JSONLD,
  name: INFO.BUSINESS_NAME,
};

export default async function home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutUs />
      <Services />
      <OurWork />
      <Cta />
      <CompareImages />
      <Faq />
      <ContactUs />
    </>
  );
}

