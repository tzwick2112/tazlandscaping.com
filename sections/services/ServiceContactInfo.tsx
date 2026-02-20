import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/utils";

import { INFO } from "@/constants";

const contactInfo = [
  {
    icon: faPhoneVolume,
    altText: "phone-icon",
    title: "Phone Number",
    value: INFO.PHONE_NUMBER,
  },
  {
    icon: faEnvelope,
    altText: "email-icon",
    title: "Email Address",
    value: INFO.EMAIL_ADDRESS,
  },
];

const ServiceContactInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {contactInfo.map((item, index: number) => (
        <div
          key={index}
          className={cn(" transition-all duration-300 flex items-center gap-3")}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="w-5 h-5 p-4 rounded-full border border-black"
          />
          <div className="flex-1 flex flex-col gap-1">
            <p className="leading-4 mb-1 text-black text-lg font-semibold">{item.title}</p>
            <div className="text-base  text-gray-500">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceContactInfo;
