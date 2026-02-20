import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "@/components/image";

const GoogleReviewBadge = () => {
  return (
    <div className="absolute z-10 w-fit bottom-5 right-1/2 translate-x-1/2 bg-white !rounded-xl flex shadow-lg">
      {/* Left Section - Google Logo & Text */}
      <div className="flex items-center gap-3 p-5">
        <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center w-full">
          <Image
            src="/icons/google-color.png"
            alt="Google logo"
            className="h-5 w-5"
          />
        </div>
        <div className="">
          <p className="text-sm font-bold text-gray-900">Google</p>
          <p className="text-xs uppercase text-gray-500 font-medium w-full whitespace-nowrap">Reviewed By</p>
        </div>
      </div>

      {/* Right Section - Rating & Stars */}
      <div className="bg-primary-dark p-5 rounded-r-xl flex flex-col justify-center items-start">
        <div className="flex items-center gap-2">
          <h3 className="text-white text-2xl font-bold">4.8</h3>
          <div className="flex items-center gap-[2px]">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={i}
                  className="h-3.5 w-3.5 text-[#9acd30]"
                />
              ))}
          </div>
        </div>
        <p className="text-xs text-gray-300 uppercase mt-1">20+ Reviews</p>
      </div>
    </div>
  );
};

export default GoogleReviewBadge;
