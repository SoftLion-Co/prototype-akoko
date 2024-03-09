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
    <div className="cursor-pointer laptop:w-[30px] laptop:h-[30px] desktop:w-[35px] desktop:h-[35px]">
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
    <div className="cursor-pointer rotate-180 laptop:w-[30px] laptop:h-[30px] desktop:w-[35px] desktop:h-[35px]">
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

const DesktopSliderCollection: React.FC<{
  testProducts: ProductCardData[];
}> = ({ testProducts }) => {
  const shouldShowSlider = testProducts.length > 4;

  return (
    <div className="w-full h-full hidden tablet:hidden laptop:block">
      {shouldShowSlider ? (
        <Carousel
          loop
          slideSize="25%"
          slideGap="30px"
          align="start"
          slidesToScroll={1}
          className="mb-[10%]"
          styles={{
            controls: {
              display: "flex",
              left: "-4.5%",
              right: "-4.5%",
              top: "40%",
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
        </Carousel>
      ) : (
        <div className="flex flex-wrap justify-center mb-[10%] tablet:gap-[19px] laptop:gap-[40px] desktop:gap-[50px]">
          {testProducts.map((card, index) => (
            <MainProductCard key={index} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};
export default DesktopSliderCollection;
