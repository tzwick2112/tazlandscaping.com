import { faArrowLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Routes } from "@/constants/routes";

const NotFound = () => {
  return (
    <div className="text-center my-auto py-24 relative">
      <h3>404</h3>
      <h1 className="text-3xl font-bold tracking-tightsm:text-5xl">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-8 flex items-center justify-center gap-x-6">
        <Link
          href={Routes.HOME}
          className=""
        >
          <Button
            variant="solid"
            icon={false}
          >
            Go Back Home
          </Button>
        </Link>
        <Link
          href={Routes.CONTACT}
          className="font-unbounded"
        >
          <Button
            variant="outline-primary"
            icon={false}
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
