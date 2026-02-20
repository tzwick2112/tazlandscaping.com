"use client";

import type { ReactNode } from "react";

import { cn } from "@/utils";

import Image from "@/components/image";

type TitleProps = {
  title?: string;
  customTitle?: ReactNode;
  subTitle: string;
  className?: string;
  center?: boolean;
  white?: boolean;
  description?: string;
  titleClassName?: string;
  subTitleClassName?: string;
};

const Title = ({
  title,
  customTitle,
  subTitle,
  className,
  center,
  white,
  subTitleClassName = "",
  titleClassName = "",
  description = "",
}: TitleProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-2.5 lg:gap-3 mb-4 md:mb-6 h-fit",
        center && "items-center xs:flex-col",
        white && "text-white",
        className
      )}
    >
      {subTitle && (
        <div className="flex items-center gap-2">
          <Image
            src={cn("/icons/leaf-4.png")}
            alt="leaf icon"
            className="h-6 w-6"
          />
          <h4
            className={cn(
              "text-primary text-base font-black text-sm sm:text-lg font-semibold rounded-sm flex items-center gap-2 w-fit",
              !center && "whitespace-nowrap",
              center && "sm:text-center",
              white && "text-gray-100",
              subTitleClassName
            )}
          >
            {subTitle}
          </h4>
        </div>
      )}

      {title && (
        <h2
          className={cn(
            `relative font-bold w-fit max-w-2xl xl:text-4xl+ !leading-[110%]`,
            center && "sm:text-center",
            white && "text-white",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}
      {customTitle && <div className="mt-2">{customTitle}</div>}
      {description && (
        <p className={cn("max-w-3xl", center && "text-center mx-auto", white && "text-gray-200")}>{description}</p>
      )}
    </div>
  );
};

export default Title;

