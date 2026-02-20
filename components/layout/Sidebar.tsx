import { faBarsStaggered, faClose, faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";
import navLinks from "@/constants/navLinks";
import { Routes } from "@/constants/routes";
import socialLinks from "@/constants/socialLinks";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const CustomSheetClose = (props: any) => {
  return (
    <SheetClose
      asChild
      {...props}
    >
      <FontAwesomeIcon
        icon={faClose}
        className="transition-all duration-300 text-xl  text-black cursor-pointer w-6 border-1 p-1 border-black top-4 right-4 absolute"
      />
    </SheetClose>
  );
};

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-primary-dark w-10 h-10 flex items-center rounded justify-center cursor-pointer">
          <FontAwesomeIcon
            icon={faBarsStaggered}
            className="w-4 h-4 text-white"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="sheetContent !overflow-auto">
        <SheetHeader className="mt-4">
          <SheetTitle className="text-left">
            <Link href={Routes.HOME}>
              <h3>{INFO.BUSINESS_NAME}</h3>
            </Link>
          </SheetTitle>

          <SheetDescription className="text-xs+ text-left max-w-xs inline-flex !mt-3 mx-0">
            Transforming Outdoor Spaces, Cultivating Lasting Beauty. Your Vision, Our Expertise, Nature&apos;s Craft.
          </SheetDescription>
        </SheetHeader>
        <CustomSheetClose />
        <div className="flex flex-col py-8 gap-3">
          <h6>Quick Links</h6>
          {navLinks.map((item) => (
            <SheetTrigger
              asChild
              key={item.id}
            >
              <Link
                href={item.href}
                className="text-sm font-normal leading-6 text-gray-900 transition-all duration-300 hover:text-primary z-20"
              >
                {item.title}
              </Link>
            </SheetTrigger>
          ))}

          <div className="flex flex-col py-6">
            <h6 className="mb-4">Get In Touch</h6>

            <ul className="flex flex-col gap-3">
              <SheetTrigger asChild>
                <Link
                  href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}
                  className="flex items-start gap-2 group"
                  target="_blank"
                  id="btn-call-us"
                >
                  <div className={`inline-flex font-semibold items-center text-sm gap-2 justify-center`}>
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      className="w-4 text-primary shrink-0 mt-1"
                    />
                  </div>
                  <p
                    className={` font-medium break-all text-sm transition-colors duration-300 group-hover:text-primary`}
                  >
                    {INFO.PHONE_NUMBER} <span className="font-poppins"> (Local) </span>
                  </p>
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  href={`mailto:${INFO.EMAIL_ADDRESS}`}
                  className="flex items-start gap-2 group"
                  target="_blank"
                  id="btn-email-us"
                >
                  <div className={`inline-flex font-semibold items-center text-sm gap-2 justify-center`}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-4 text-primary shrink-0 mt-1"
                    />
                  </div>
                  <p
                    className={` font-medium break-all text-sm transition-colors duration-300 group-hover:text-primary`}
                  >
                    {INFO.EMAIL_ADDRESS}
                  </p>
                </Link>
              </SheetTrigger>
              <Link
                href={`${INFO.MAP_LOCATION_URL}`}
                className="flex items-start gap-2 group"
                target="_blank"
              >
                <div className={`inline-flex font-semibold items-center text-sm gap-2 justify-center`}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 text-primary shrink-0 mt-1"
                  />
                </div>
                <p className={` font-medium break-all text-sm transition-colors duration-300 group-hover:text-primary`}>
                  {INFO.PHYSICAL_ADDRESS}
                </p>
              </Link>
            </ul>
          </div>
          <div>
            <div className="flex gap-3 mt-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900 flex items-start gap-1.5"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-4 h-4 p-2 rounded-md bg-primary-dark text-white hover:text-primary hover:bg-transparent border border-transparent hover:border-primary text-top_nav-text transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default Sidebar;

