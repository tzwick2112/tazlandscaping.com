import Image from "@/components/image";
import LinkRoute from "@/components/link-route";

import { Routes } from "@/constants/routes";

const CtaCard = () => {
  return (
    <div className="bg-primary-dark p-10 pb-[14rem] rounded-[10%] space-y-6 md:space-y-8 w-full md:w-[25rem]">
      <h3 className="text-white">Ready To Transform Your Outdoor Space?</h3>
      <Image
        src="/images/hero/fancy-divider.svg"
        alt="fancy divider"
        className="w-full h-4"
      />

      <p className="text-white">
        Contact us today for a free consultation and discover how we can turn your vision into reality.
      </p>

      <LinkRoute href={Routes.CONTACT}>Get Started Now</LinkRoute>
    </div>
  );
};

export default CtaCard;
