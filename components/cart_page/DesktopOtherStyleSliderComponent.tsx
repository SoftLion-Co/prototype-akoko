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

const DesktopOtherStyleSliderComponent: React.FC<{ cardItem: CardProps[] }> = ({
  cardItem,
}) => {
  const shouldShowSlider = cardItem.length > 4;
  return (
    <div className="w-full h-full mobile:hidden">
      {shouldShowSlider ? (
        <Carousel
          loop
          slideSize="25%"
          slideGap="xl"
          align="start"
          slidesToScroll={1}
          className="mb-[20%]"
          styles={{
            controls: {
                display: "flex",
                left: "-7%",
                right: "-7%",
                top: "40%"

            },
            control: {
              background: "none",
              border: "none",
              boxShadow: "none",
            },
          }}
          nextControlIcon={
            <NextArrow  />
          }
          previousControlIcon={
            <PrevArrow />
          }
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
      ) : (
        <div className="flex flex-wrap justify-center mb-[10%] tablet:gap-[19px] laptop:gap-[40px] desktop:gap-[50px]">
          {" "}
          {/* Показуємо всі карточки без слайдера */}
          {cardItem.map((card, index) => (
            <StyleCardComponent
              key={index}
              name={card.title}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopOtherStyleSliderComponent;
