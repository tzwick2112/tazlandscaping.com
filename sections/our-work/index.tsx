"use client";

import { useState } from "react";

import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import GalleryImageModal from "@/components/gallery-image-modal";
import Image from "@/components/image";
import Title from "@/components/title";

const gallery = [
  {
    imageSrc: "/images/about/image-9.jpg",
  },
  {
    imageSrc: "/images/work/ginsberg/1.jpg",
  },
  {
    imageSrc: "/images/work/ginsberg/3.jpg",
  },
  {
    imageSrc: "/images/about/image-7.jpg",
  },
  {
    imageSrc: "/images/about/image-22.jpg",
  },
  {
    imageSrc: "/images/about/image-25.jpg",
  },
  {
    imageSrc: "/images/about/image-28.jpg",
  },
  {
    imageSrc: "/images/about/image-97.jpg",
  },
  {
    imageSrc: "/images/about/image-30.jpg",
  },
];

const OurWork = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerVisible, setViewerVisible] = useState(false);

  const openImageViewer = (index: number) => {
    setCurrentImage(index);
    setViewerVisible(true);
  };

  const closeImageViewer = () => {
    setViewerVisible(false);
  };

  return (
    <section
      className="padding-y relative bg-bgPrimary"
      id="our-work"
    >
      <div className="container relative mb-10">
        <div className="relative flex justify-between items-start gap-10">
          <div className="">
            <Title
              subTitle="Latest Projects"
              title="Explore Our Recently Completed Landscaping Projects"
              className="text-white !mb-5"
            />
          </div>

          <div className="sm:flex hidden h-fit z-20 flex-row-reverse items-center gap-2 mt-10">
            <div className="relative flex h-12 w-12 items-center justify-center transition-all duration-300 group cursor-pointer rounded-md bg-primary hover:bg-secondary">
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="h-4 w-4 p-3 swiper-button-next  text-white !mt-0 !relative !top-0 !left-0"
              />
            </div>
            <div className="flex h-12 w-12 rounded-md items-center relative justify-center transition-all duration-300 group cursor-pointer bg-primary hover:bg-secondary">
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="h-4 w-4 swiper-button-prev !mt-0 !relative !top-0 !left-0 p-3 text-white"
              />
            </div>
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        speed={6000}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 2,
          },
          1199: {
            slidesPerView: 2,
          },
          1350: {
            slidesPerView: 3,
          },

          1480: {
            slidesPerView: 3,
          },

          1800: {
            slidesPerView: 4,
          },

          2160: {
            slidesPerView: 6,
          },
          2890: {
            slidesPerView: 7,
          },
        }}
        className="!pt-0 px-10"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {gallery.map((image, i) => {
          return (
            <SwiperSlide
              className="relative testimonial-block !h-auto px-0 group"
              key={i}
            >
              <Image
                src={image.imageSrc}
                className="w-full max-w-2xl h-[360px] sm:h-[400px] cursor-pointer md:h-[350px] lg:h-[400px] overflow-hidden rounded-md"
                imageClassName="object-cover hover:scale-[105%] transition-all duration-500 rounded-lg"
                alt={`image-${i + 1}`}
                onClick={() => openImageViewer(i)}
              />
              {/* <div className="absolute left-10 bottom-10 overflow-hidden">
                <div className="text-primary text-2xl bg-white px-5 py-3 -translate-x-[110%] transition-all duration-500 group-hover:translate-x-0">
                  {image.title}
                </div>
                <div className="font-roboto text-colorText text-base bg-white px-5 py-3 mt-1 inline-block -translate-x-[110%] transition-all duration-700 group-hover:translate-x-0">
                  {image.description}
                </div>
              </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <GalleryImageModal {...{ closeImageViewer, currentImage, gallery, viewerVisible }} />
    </section>
  );
};

export default OurWork;
