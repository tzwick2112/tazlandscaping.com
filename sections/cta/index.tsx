"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import motionVariants from "@/utils/motionVariants";

import Title from "@/components/title";
import { Button } from "@/components/ui/button";

import { Routes } from "@/constants/routes";

const Cta = () => {
  return (
    <section className="bg-primary-dark relative mt-10">
      <Image
        width={2000}
        height={2000}
        alt="small leaf overlay"
        className="w-full h-fit absolute top-[-10px] lg:top-[-40px]"
        src="/images/cta/shape-5.png"
      />

      <Image
        width={1000}
        height={1000}
        src="/images/cta/shape-3.png"
        alt="Decorative background shape"
        className="absolute max-lg:opacity-20 right-0 bottom-0 w-fit max-w-[20rem] object-contain"
      />

      <Image
        width={1000}
        height={1000}
        src="/images/cta/shape-2.png"
        alt="Decorative background shape"
        className="absolute max-lg:opacity-20 left-0 top-0 w-fit max-w-[20rem] object-contain"
      />

      <div className="relative">
        <motion.div
          className="container py-10 z-10 relative flex flex-col "
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          exit="exit"
          variants={motionVariants.fadeUp(40)}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center flex-col mx-auto max-w-3xl text-center space-y-8 py-5">
            <Title
              title="Are You Ready for a Stunning Yard?"
              subTitle="Expert Landscaping & Lawn Care"
              white
              center
              className="!mb-0"
            />
            <p className="text-white">
              Transform your outdoor space with professional landscaping and lawn care. Whether you need a full
              redesign, seasonal maintenance, or expert planting, we bring your vision to life with precision and care.
              Contact us today for a free consultation and let’s create a beautiful yard together!
            </p>
            <div className="w-fit mx-auto sm:mx-0">
              <Link href={Routes.CONTACT}>
                <Button
                  variant={"primary"}
                  className="before:bg-white hover:text-primary-dark"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
