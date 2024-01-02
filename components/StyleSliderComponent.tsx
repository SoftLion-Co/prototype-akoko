import React from "react";
import { Carousel } from "@mantine/carousel";
import StyleCardComponent from "./StyleCardComponent";

type CartProps = {
  title: string;
  image: string;
};

const StyleSliderComponent: React.FC<{ cartItem: CartProps[] }> = ({
  cartItem,
}) => {
  return (
    <div className="block tablet:hidden">
      <Carousel
        slideSize="49%"
        slideGap={"xl"}
        loop
        withControls={false}
        withIndicators
        align="start"
        slidesToScroll={2}
        className="mb-[10%] text-[2vw]"
        styles={{
          indicators: {
            fontSize: "1em",
            alignItems: "center",
            bottom: "-15%",
            gap: 0,
          },
          indicator: {
            zIndex: 10,
            fontSize: "1em",
            height: "1em",
            width: "3em",
            backgroundColor: "#0000006e !important",
            borderRadius: 0,
          },
        }}
      >
        {cartItem.map((cart, index) => (
          <Carousel.Slide className="text-center">
            <StyleCardComponent key={index} name={cart.title} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default StyleSliderComponent;
