import React from "react";
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

  classNames?: string;
}


const MobileSliderCollection: React.FC<{
    testProducts: ProductCardData[];
  }> = ({ testProducts }) => {
    return (
        <div className="w-full h-full block tablet:hidden" >
        <Carousel
          loop
          slideSize="50%"
          slideGap="30px"
          align="start"
          slidesToScroll={1}
          withIndicators
          withControls={false}
          className="mb-[20%] text-[2vw] "
          styles={{
            indicators: {
              fontSize: "1em",
              alignItems: "center",
              bottom: "-13%",
              gap: 0,
            },
            indicator: {
              fontSize: "1em",
              height: "1em",
              width: "3em",
              backgroundColor: "#0000006e !important",
              borderRadius: 0,
            },
          }}
        >
          {testProducts.map((card, index) => (
            <Carousel.Slide key={index}>
                <MainProductCard key={index} {...card} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
     );
}
 
export default MobileSliderCollection;