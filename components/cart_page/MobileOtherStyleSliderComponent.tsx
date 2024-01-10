import React from "react";
import { Carousel } from "@mantine/carousel";
import Arrow from "@/images/icons/vector.svg";
import Image from "next/image";
import StyleCardComponent from "./../StyleCardComponent";

type CardProps = {
  title: string;
  image: string;
  link: string;
};


const MobileOtherStyleSliderComponent: React.FC<{ cardItem: CardProps[] }> = ({
  cardItem,
}) => {
  return (
    <div className="w-full h-full tablet:hidden">
      <Carousel
        loop
        slideSize="50%"
        slideGap="sm"
        align="start"
        slidesToScroll={1}
        withIndicators
        withControls = {false}
        className="mb-[20%]"
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
        {cardItem.map((card, index) => (
          <Carousel.Slide className="text-center" key={index}>
            <div>
              <StyleCardComponent
                key={index}
                name={card.title}
                image={card.image}
                link={card.link}
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default MobileOtherStyleSliderComponent;
