import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import type { Service } from "@/constants/types";

const ServiceCard = ({ imgSrc, title, description, bulletPoints }: Service) => {
  return (
    <div className="group flex flex-col w-full relative rounded-md bg-white transition-all duration-300 overflow-hidden shadow-feature overflow-hidden">
      <div className="service-card-mask aspect-[352/294] h-[200px] w-fit lg:h-[300px] relative">
        <Image
          width={2000}
          height={2000}
          className="text-white w-full h-full flex items-center justify-center shrink-0 group overflow-hidden !m-auto object-cover group-hover:scale-110 transition-all duration-500"
          src={imgSrc}
          alt={title}
        />
      </div>

      <div className="px-6 pb-6 pt-12">
        <h3 className="text-primary-dark mb-4 font-bold">{title}</h3>
        <p className="text-">{description}</p>
        <h4 className="text-lg text-black font-semibold mt-4 flex items-center gap-3 after:flex-1 after:h-[1px] after:bg-black/20 relative after:flex">
          What We Offer
        </h4>
        <ul className="flex flex-col gap-2.5 mt-4">
          {bulletPoints.map((item) => (
            <li
              className="flex items-center gap-2"
              key={item}
            >
              <FontAwesomeIcon
                icon={faCheck}
                className="w-4 h-4 text-primary-dark"
              />
              <h5 className="text-sm text-text">{item}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;

