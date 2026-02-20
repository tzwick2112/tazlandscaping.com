"use client";

import { motion } from "framer-motion";

import { cn } from "@/utils";
import motionVariants from "@/utils/motionVariants";

import FAQ from "@/components/faq";
import Image from "@/components/image";
import Title from "@/components/title";

import faqs from "@/constants/faqs";

const Faq = ({ className }: { className?: string }) => {
  return (
    <section className={cn("bg-primary-dark/5 padding-y relative", className)}>
      <div className="container relative">
        <Title
          subTitle={"We’re Here to Help"}
          title={"FAQs About Our Services"}
          description={
            "Have questions about our landscaping solutions? Explore our FAQs for quick and helpful answers."
          }
          center
        />
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-12 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <FAQ {...{ faqs: faqs.slice(0, 6) }} />
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 relative order-1 lg:order-2"
          >
            <Image
              alt={"FAQ"}
              className="min-h-[300px] h-full lg:min-h-[470px] rounded-md overflow-hidden"
              src="/images/about/image-28.jpg"
              imageClassName="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

