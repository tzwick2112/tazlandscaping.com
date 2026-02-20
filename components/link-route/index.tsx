import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LinkProps } from "next/link";
import Link from "next/link";

import { cn } from "@/utils";

interface Props extends LinkProps {
  children: string;
}

const LinkRoute = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="relative flex items-center gap-2 hover:gap-3 group/link transition-all duration-300"
    >
      <p className="text-white font-semibold relative before:w-0 before:h-px before:bg-white before:-bottom-0.5 before:absolute before:left-0 hover:before:w-full before:transition-all before:duration-500">
        {children}
      </p>
      <div className={cn("p-1.5 flex items-center justify-center bg-white rounded-full transition-all duration-300")}>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className={cn("text-primary-dark h-3 w-3 transition-all duration-300")}
        />
      </div>
    </Link>
  );
};

export default LinkRoute;
