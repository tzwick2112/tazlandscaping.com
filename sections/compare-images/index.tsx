"use client";

import ReactCompareImage from "react-compare-image";

import Title from "@/components/title";

const images = [
  {
    left: "/images/compare/before-1.jpg",
    right: "/images/compare/after-1.jpg",
  },
  {
    left: "/images/work/krasner/1.jpg",
    right: "/images/work/krasner/2.jpg",
  },
];

const CompareImages = () => {
  return (
    <section className="padding-y">
      <div className="container text-center">
        <Title
          subTitle="Before & After Showcase"
          title="See the Transformation"
          center
        />
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden compare-image"
            >
              <ReactCompareImage
                aspectRatio="wider"
                leftImage={image.left}
                rightImage={image.right}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareImages;

