"use client";

import { faClock, faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";
import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";
import { footerNavigationItems } from "@/constants/navLinks";
import { Routes } from "@/constants/routes";
import services from "@/constants/services";
import socialLinks from "@/constants/socialLinks";

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === Routes.HOME;

  return (
    <footer className="bg-primary-dark/90 relative before:bg-[url('/images/footer/image-1.jpeg')] before:bg-cover before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:size-full before:opacity-5">
      <div className="relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-10 pt-14 lg:pt-20">
            <div className="col-span-1 md:mt-0 md:py-5 mx-0 xl:mx-auto md:text-left flex md:justify-start">
              <div className="space-y-7">
                <Link
                  href={Routes.HOME}
                  className="flex gap-2.5 pr-6 whitespace-nowrap flex-col"
                >
                  <h3 className="text-white text-2xl font-bold">{INFO.BUSINESS_NAME}</h3>
                </Link>
                <p className="text-sm+ text-left max-w-[18rem] text-white inline-flex mx-auto  mt-4 text-pretty">
                  Providing expert landscaping and yard services to transform your outdoor space. Contact us today for a
                  free consultation!
                </p>

                <Image
                  src="/images/hero/taz-cropped.png"
                  alt="taz logo"
                  width={1000}
                  height={1000}
                  className="w-56 object-contain"
                />
              </div>
            </div>

            <div className="col-span-1 mt-10 md:mt-0 md:py-5 mx-0 xl:mx-auto md:text-left flex  md:justify-start">
              <div className="inline-block">
                <h4 className="flex items-center font-bold gap-2 relative mb-8 text-white text-lg lg:text-2xl capitalize">
                  Quick Links
                </h4>
                <div className="flex flex-col gap-3.5">
                  {footerNavigationItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "leading-6 transition-colors duration-300 relative hover:text-primary-text text-white w-fit"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1 mt-10 md:mt-0 md:py-5 mx-0 md:text-left flex  md:justify-start">
              <div className="inline-block">
                <h4 className="flex items-center font-bold gap-2 relative mb-8 text-white text-lg lg:text-2xl capitalize">
                  Services
                </h4>
                <div className="flex flex-col gap-3.5">
                  {services.map((item) => (
                    <Link
                      key={item.title}
                      href={Routes.SERVICES}
                      className={cn(
                        "leading-6 transition-colors duration-300 relative hover:text-primary-text text-white w-fit"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1 mt-10 md:mt-0 md:py-5 mx-0 md:text-left flex md:justify-start">
              <div className="inline-block space-y-10">
                <div>
                  <h4 className="flex items-center font-bold gap-2 relative mb-8 text-white text-lg lg:text-2xl capitalize">
                    Get In Touch
                  </h4>
                  <ul className="flex gap-3.5 flex-col mb-2 mt-3">
                    <li>
                      <Link
                        href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}
                        target="_blank"
                        className="hover:text-primary-text text-sm+ sm:text-base text-white transition-colors duration-300 flex gap-3 items-start group break-all"
                      >
                        <FontAwesomeIcon
                          icon={faPhoneVolume}
                          className="w-5 text-gray-300 shrink-0 mt-1 group-hover:text-primary-text transition-all duration-300"
                        />
                        {INFO.PHONE_NUMBER}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={`mailto:${INFO.EMAIL_ADDRESS}`}
                        target="_blank"
                        className="hover:text-primary-text text-sm+ sm:text-base text-white transition-colors duration-300 flex gap-3 items-start group break-all"
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="w-5 text-gray-300 shrink-0 mt-1 group-hover:text-primary-text transition-all duration-300"
                        />
                        {INFO.EMAIL_ADDRESS}
                      </Link>
                    </li>

                    <li>
                      <div className="hover:text-primary-text text-sm+ sm:text-base text-white transition-colors duration-300 flex gap-3 items-start group break-all">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="w-5 text-gray-300 shrink-0 mt-1 group-hover:text-primary-text transition-all duration-300"
                        />
                        {INFO.PHYSICAL_ADDRESS}
                      </div>
                    </li>

                    <li>
                      <div className="hover:text-primary-text text-sm+ sm:text-base text-white transition-colors duration-300 flex gap-3 items-start group break-all">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="w-5 text-gray-300 shrink-0 mt-1 group-hover:text-primary-text transition-all duration-300"
                        />
                        {INFO.OPERATING_HOURS}
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center font-bold gap-2 relative mb-8 text-white text-lg lg:text-2xl capitalize">
                    Follow Us
                  </h4>
                  <div className="flex gap-5">
                    {socialLinks.map((socialLink) => (
                      <Link
                        href={socialLink.href}
                        key={socialLink.name}
                        target="_blank"
                        className="bg-white hover:bg-primary group p-2 flex items-center justify-center rounded-md transition-all duration-300"
                      >
                        <FontAwesomeIcon
                          icon={socialLink.icon}
                          className="text-primary-dark h-5 w-5 group-hover:text-white transition-all duration-300"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-line z-10 py-8">
            <div className="">
              <div className="flex flex-col xl:flex-row gap-y-2 md:gap-0 items-center justify-between text-white/50">
                <div className="text-center text-sm text-white">
                  {INFO.BUSINESS_NAME} © {new Date().getFullYear()}. All Rights Reserved
                </div>
                {isHomePage && (
                  <p className="text-center text-sm leading-5 text-gray-300">
                    Developed by{" "}
                    <Link
                      href="https://truesocialmarketing.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      TSM
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

