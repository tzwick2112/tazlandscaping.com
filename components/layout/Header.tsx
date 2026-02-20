"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";
import socialLinks from "@/constants/socialLinks";

import { Button } from "../ui/button";
import NavMenu from "./NavMenu";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header>
      <div className="max-sm:hidden bg-primary-dark relative">
        <Image
          className="w-full h-full absolute bottom-0 left-0"
          width={1000}
          height={1000}
          alt="Turf"
          src="/images/header/top-shape.png"
        />

        <div className="flex justify-between flex-wrap gap-2 items-center container py-4 relative z-[1]">
          <div>
            <div className="flex justify-between items-center gap-1.5">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <p className="text-white text-sm+">{INFO.PHYSICAL_ADDRESS}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <div className="flex justify-between items-center gap-1.5">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <p className="text-white text-sm+">{INFO.OPERATING_HOURS}</p>
              </div>
            </div>
            <div className="hidden lg:flex gap-4 pl-8 ml-8 border-l border-white/50">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900 flex items-start gap-1.5"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-4 h-4 rounded-full text-white hover:text-primary text-top_nav-text transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-between items-center py-3 container">
        <div className="uppercase">
          <Image
            src="/logo-4.png"
            alt="Logo"
            className="w-24 lg:w-32"
            width={1000}
            height={500}
          />
          {/* <span className="text-primary font-bold"> TAZ</span> Landscaping */}
        </div>

        <NavMenu />

        <div className="flex lg:hidden">
          <Sidebar />
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <Link href={Routes.CONTACT}>
            <Button
              className="uppercase"
              variant="neutral"
              size="sm"
            >
              Get A Quote
            </Button>
          </Link>
          <Link
            href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}
            className="flex items-center gap-2.5 group"
          >
            <Image
              width={100}
              height={100}
              alt="Quote"
              className="w-14 h-14 group-hover:scale-105 transition-all duration-400"
              src="/images/header/quote-2.png"
            />

            <div>
              <p className="text-sm ">Emergency call</p>
              <p className="text-primary font-extrabold">{INFO.PHONE_NUMBER}</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

