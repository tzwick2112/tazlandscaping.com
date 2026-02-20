"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import motionVariants from "@/utils/motionVariants";

import ServiceCard from "@/sections/services/ServiceCard";

import Title from "@/components/title";

import { Routes } from "@/constants/routes";
import services from "@/constants/services";

const ServicesList = () => {
  return (
    <section className="relative padding-y pt-10">
      <div className="container flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <Title
                subTitle="Our Services"
                title="Expert Professional Landscaping & Yard Services"
                white
                center
              />
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              exit="exit"
              variants={motionVariants.fadeUp(40)}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {services.map((item) => (
                <ServiceCard
                  {...item}
                  key={item.slug}
                />
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              exit="exit"
              variants={motionVariants.fadeUp(40)}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mt-10"
            >
              <p className="text-white max-w-xl text-center mx-auto">
                Ready to transform your outdoor space?{" "}
                <Link
                  className="font-bold text-primary-light hover:text-white underline"
                  href={Routes.CONTACT}
                >
                  Contact Us Today
                </Link>{" "}
                or call for a free consultation and let's create your perfect yard!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

