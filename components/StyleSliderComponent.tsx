import React from "react";
import { Carousel } from "@mantine/carousel";
import StyleCardComponent from "./StyleCardComponent";

type CartProps = {
  title: string;
  image: string;
  link: string;
};

const StyleSliderComponent: React.FC<{ cartItem: CartProps[] }> = ({
  cartItem,
}) => {
  return (
    <div className="tablet:hidden">
      <Carousel
        slideSize="91%"
        slideGap={"sm"}
        loop
        withControls={false}
        withIndicators
        align="center"
        slidesToScroll={1}
        className="mb-[10%] text-[2vw]"
        styles={{
          indicators: {
            fontSize: "1em",
            alignItems: "center",
            bottom: "-9%",
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
          <Carousel.Slide className="text-center" key={index}>
            <StyleCardComponent
              key={index}
              name={cart.title}
              image={cart.image}
              link={cart.link}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default StyleSliderComponent;
