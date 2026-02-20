"use client";

import { Leaf } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";

import navLinks from "@/constants/navLinks";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center flex-wrap gap-x-7 gap-y-1 xl:gap-x-10">
      {navLinks.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            "flex group items-center gap-1 !text-sm transition-all duration-300 xl:!text-base font-semibold leading-6 transition-colors relative hover:text-primary",
            pathname === item.href && "text-primary brightness-125"
          )}
        >
          <Leaf
            className={cn(
              "w-4 h-4 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100",
              pathname === item.href && "opacity-100"
            )}
          />
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;

