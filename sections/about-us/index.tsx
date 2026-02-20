import Image from "next/image";
import Link from "next/link";

import Title from "@/components/title";
import { Button } from "@/components/ui/button";

import { Routes } from "@/constants/routes";

const features = [
  {
    title: "Reliable Service",
    description: "We show up on time and provide on-the-spot quotes.",
    icon: "/icons/lawn.svg",
  },
  {
    title: "Expert Care",
    description: "Specialized in brush clearing, invasive plant removal, and yard maintenance.",
    icon: "/icons/lawn-2.svg",
  },
  {
    title: "Affordable Solutions",
    description: "High-quality landscaping at competitive rates.",
    icon: "/icons/affordable.svg",
  },
];

const AboutUs = () => {
  return (
    <section
      className="padding-y relative"
      id="about-us"
    >
      <Image
        width={1000}
        height={1000}
        src="/images/about/shape-1.png"
        alt="Decorative background shape"
        className="absolute max-lg:opacity-20 right-0 bottom-0 w-fit max-w-[14rem] object-contain"
      />

      <div className="container">
        <div className="grid grid-col-1 lg:grid-cols-2 items-stretch gap-8 lg:gap-10">
          <div className="relative col-span-1 min-h-[16rem] w-full lg:h-auto">
            <div className="lg:w-[80%] relative h-full lg:before:bg-primary before:-left-3.5 before:-top-3.5 before:z-[-1] before:absolute before:w-full before:h-full before:rounded-md">
              <Image
                width={2000}
                height={2000}
                src="/images/about/image-227.jpg"
                alt="Professional landscaping service in action"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <div className="max-lg:hidden bg-primary flex-col rounded-full w-[200px] h-[200px] flex items-center justify-center absolute right-[5%] top-[130px]">
              <p className="text-white text-7xl font-bold">+22</p>
              <p className="text-white">Years of Experience</p>
            </div>

            <Image
              width={2000}
              height={2000}
              src="/images/about/image-44.jpg"
              alt="Landscaped yard with green lawn"
              className="max-lg:hidden object-cover rounded-md absolute bottom-[3%] left-[-8%] w-[50.5%] h-[12rem] border-4 border-white"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col col-span-1 max-w-full lg:max-w-[45rem] flex-grow h-full lg:pt-6 pb-8">
            <Title
              subTitle="About TAZ Landscaping"
              title="Expert Lawn Care and Yard Maintenance Solutions"
            />

            <div className="space-y-5 md:space-y-7 lg:space-y-10 flex flex-col h-full">
              <p className="text-sm sm:text-base flex-grow">
                At TAZ Landscaping, we take pride in delivering expert lawn care, brush clearing, and seasonal
                maintenance. With a commitment to quality and reliability, we ensure your outdoor space looks its best
                year-round.
              </p>

              <ul className="flex flex-col gap-8">
                {features.map((feature) => (
                  <li
                    className="flex gap-4 items-center"
                    key={feature.title}
                  >
                    <div className="shrink-0 w-16 h-16 flex items-center justify-center bg-primary rounded-md">
                      <Image
                        src={feature.icon}
                        alt={`${feature.title} icon`}
                        width={400}
                        height={400}
                        className="object-contain h-10 w-10"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg lg:text-xl font-bold">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-wrap flex-row gap-4">
                <Link href={Routes.CONTACT}>
                  <Button variant={"primary"}>Request Quote</Button>
                </Link>
                <Link href={Routes.OUR_WORK}>
                  <Button variant={"outline-primary"}>See Our Work</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
