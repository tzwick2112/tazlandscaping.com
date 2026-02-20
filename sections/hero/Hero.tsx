"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Routes } from "@/constants/routes";

const Hero = () => {
  return (
    <section className="relative group">
      <div className="relative overflow-hidden min-h-[40rem] h-auto lg:h-[calc(100vh-153px)] flex flex-col">
        <Image
          src="/images/hero/image-1.jpeg"
          alt="cartoon lawn background"
          width={2000}
          height={2000}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 bottom-0 z-0 w-full max-lg:bg-primary-dark/60 lg:bg-hero" />

        <div className="grid -mt-10 gap-y-10 lg:grid-cols-2 h-full relative z-[1] container pt-24">
          <div className="relative flex flex-col justify-center h-full gap-5 ">
            <h2 className="bg-white/20 py-1.5 px-4 rounded-md w-fit text-white text-base backdrop-blur-md">
              Reliable. Affordable. Professional
            </h2>
            <h1 className="text-white max-w-screen-md text-pretty">TAZ Landscaping Your Trusted Yard Care Experts</h1>
            <p className="text-white max-w-screen-lg">
              From brush clearing and invasive plant removal to full yard renovations and seasonal cleanups, TAZ
              Landscaping delivers top-quality service with a personal touch. We show up on time, provide on-the-spot
              quotes, and handle everything—so you don't have to. Get started today and see the difference!
            </p>
            <div className="flex flex-wrap gap-5 pt-7">
              <Link href={Routes.CONTACT}>
                <Button className="before:bg-white hover:text-primary">Get Started</Button>
              </Link>
              <Link href={Routes.ABOUT}>
                <Button
                  className="before:bg-white hover:text-primary"
                  variant={"outline"}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative min-h-[20rem] lg:min-h-[30rem]">
            <Image
              src="/images/hero/taz-cropped.png"
              alt="taz logo cropped"
              width={1000}
              height={1000}
              className="w-[90%] mx-auto h-full left-1/2 -translate-x-1/2 object-contain bottom-0 absolute"
            />
          </div>
        </div>
        <div>
          <Image
            src="/images/hero/lawn.png"
            alt="grass clip art"
            width={1000}
            height={1000}
            className="w-full h-fit bottom-0 absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
