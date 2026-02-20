import CtaCard from "@/sections/hero/CtaCard";

const HeroBanner = () => {
  return (
    <div className="w-full h-[34rem] sm:h-[30rem] md:h-[17rem] lg:h-[10rem] py-10 md:py-0 bg-secondary-light">
      <div className="relative container flex flex-col gap-10 md:gap-0 md:flex-row h-full items-center lg:space-x-14 xl:space-x-20">
        <div className="flex flex-col lg:flex-row justify-between gap-5 items-center w-full">
          <div className="relative flex h-fit items-center gap-5">
            <span className="text-primary-dark text-6xl">22+</span>
            <h6 className="text-primary-dark h-full">
              Years of
              <br />
              Experience
            </h6>
          </div>

          <p className="max-w-lg md:max-w-[18rem] sm:text-sm md:text-sm lg:text-base lg:max-w-sm xl:max-w-md text-center lg:text-left">
            Let's bring your dream garden to life! Whether you're looking for a complete landscape overhaul or simple
            garden maintenance.
          </p>
        </div>

        <div className="pt-0 px-0 sm:px-12 md:px-0 md:pt-10 lg:mt-0 lg:mb-16">
          <CtaCard />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

