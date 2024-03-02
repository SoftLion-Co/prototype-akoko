import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import MainProductCard from "@/components/MainProductCard";

interface ProductCardData {
  arrayColection?: {
    nameProduct: string;
    collectionImage: string;
  };

  array?: {
    [color: string]: {
      nameProduct: string;
      image: string;
      size: string[];
      price: string;
    };
  };

  className?: string;
}

const NextArrow = () => {
  return (
    <div className="cursor-pointer tablet:w-[30px] tablet:h-[45px] laptop:w-[40px] laptop:h-[60px] desktop:w-[50px] desktop:h-[70px]">
      <Image
        className="w-full h-full"
        width={50}
        height={50}
        src={"https://www.svgrepo.com/show/257704/right-chevron-chevron.svg"}
        alt=">"
      ></Image>
    </div>
  );
};
const PrevArrow = () => {
  return (
    <div className="cursor-pointer rotate-180 tablet:w-[30px] tablet:h-[45px] laptop:w-[40px] laptop:h-[60px] desktop:w-[50px] desktop:h-[70px]">
      <Image
        className="w-full h-full"
        width={50}
        height={50}
        src={"https://www.svgrepo.com/show/257704/right-chevron-chevron.svg"}
        alt=">"
      ></Image>
    </div>
  );
};
const TabletSliderColection: React.FC<{
  testProducts: ProductCardData[];
}> = ({ testProducts }) => {
    const shouldShowSlider = testProducts.length > 3;
  return (
    <div className="w-full h-full hidden tablet:block laptop:hidden ">
        {shouldShowSlider ? (
      <Carousel
        loop
        slideSize="33.3%"
        slideGap="20px"
        align="start"
        slidesToScroll={1}
        className="mb-[10%] "
        styles={{
          controls: {
            top: "40%",
            left: "-5.4%",
            right: "-5.2%",
          },
          control: {
            background: "none",
            border: "none",
            boxShadow: "none",
          },
        }}
        nextControlIcon={<NextArrow />}
        previousControlIcon={<PrevArrow />}
      >
        {testProducts.map((card, index) => (
          <Carousel.Slide key={index}>
            <MainProductCard key={index} {...card} />
          </Carousel.Slide>
        ))}
      </Carousel>) : (
        <div className="flex flex-wrap justify-center mb-[10%] tablet:gap-[19px]">
          {testProducts.map((card, index) => (
            <MainProductCard key={index} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabletSliderColection;
