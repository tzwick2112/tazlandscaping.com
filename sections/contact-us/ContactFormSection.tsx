"use client";

import Image from "next/image";

import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section
      className="padding-y relative -scroll-mt-20"
      id="contact-us"
    >
      <div className="container relative z-[2]">
        <div className="grid lg:grid-cols-4 items-center gap-4">
          <div className="max-lg:hidden lg:col-span-1 h-full py-10">
            <div className="lg:w-[200%] z-[50] h-full relative">
              <Image
                width={2000}
                height={2000}
                src="/images/about/image-217.jpg"
                alt="beautiful yard with short grass"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="lg:col-span-3 bg-primary-dark/90 rounded-lg">
            <div className="lg:pl-[35%] py-10 lg:py-24 px-4 md:px-6 lg:pr-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
