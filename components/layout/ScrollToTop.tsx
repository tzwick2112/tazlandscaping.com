"use client";

import { useEffect, useState } from "react";

import { faLongArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleArrow = () => {
      setShowArrow(window.scrollY > 300);
    };

    if (window) {
      handleArrow();

      window.addEventListener("scroll", handleArrow);

      return () => {
        window.removeEventListener("scroll", handleArrow);
      };
    }
  }, []);

  return (
    <>
      {showArrow && (
        <FontAwesomeIcon
          icon={faLongArrowUp}
          className="fixed bottom-4 right-4 w-5 h-5 p-3 cursor-pointer rounded-md text-white bg-primary z-50"
          onClick={handleToTop}
        />
      )}
    </>
  );
};

export default ScrollToTop;

