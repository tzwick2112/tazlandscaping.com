import Image from "next/image";

import ServicesList from "@/sections/services/ServicesList";

const Services = () => {
  return (
    <section
      className="bg-primary-dark/80 relative before:bg-[url('/images/services/bg.jpeg')] before:bg-cover before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:size-full before:opacity-5"
      id="services"
    >
      <ServicesList />
      <Image
        src="/images/hero/lawn.png"
        alt="grass clip art"
        width={1000}
        height={1000}
        className="w-full bottom-0 absolute"
      />
    </section>
  );
};

export default Services;
