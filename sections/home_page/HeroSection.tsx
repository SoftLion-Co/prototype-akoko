"use client";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/images/icons/arrow-hero.svg";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const slides = [
  {
    id: 1,
    content:
      "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
  },
  {
    id: 2,
    content:
      "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
  },
  {
    id: 3,
    content:
      "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
  },
  {
    id: 4,
    content:
      "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
  },
  {
    id: 5,
    content:
      "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
  },
  {
    id: 6,
    content:
      "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
  },
];
const NextArrow = () => {
  return (
    <div className=" cursor-pointer w-[16px] h-[16px] tablet:w-[23px] tablet:h-[23px] laptop:w-[38px] laptop:h-[38px] desktop:w-[48px] desktop:h-[48px] absolute bottom-3 right-2 ">
      <Image className="w-full h-full" src={Arrow} alt="" />
    </div>
  );
};
const PrevArrow = () => {
  return (
    <div className="cursor-pointer rotate-180 w-[16px] h-[16px] tablet:w-[23px] tablet:h-[23px] laptop:w-[38px] laptop:h-[38px] desktop:w-[48px] desktop:h-[48px] absolute bottom-12 right-2">
      <Image className="w-full h-full" src={Arrow} alt="" />
    </div>
  );
};

const HeroSection = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <section className="">
      <Carousel
        className="h-[144px] tablet:h-[347px] laptop:h-[576px] desktop:h-[720px]"
        withIndicators
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
          indicators: {
            fontSize: "1em",
            alignItems: "center",
            bottom: "50%",
            transform: "translateY(50%)",
            gap: 0,
          },
          indicator: {
            zIndex: 10,
            fontSize: "1em",
            height: "1em",
            width: "1em",
            laptop: { height: "100px" },
            backgroundColor: "#0000006e !important",
            borderRadius: "50%",
            marginLeft: "0.5em",
            transition: "width 0.3s ease-in-out",
          },
          controls: {
            display: "flex ",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            gap: "10px",
            marginBottom: "192px",
          },
          control: {
            background: "none",
            border: "none",
            boxShadow: "none",
          },
          container: {
            alignItems: "center",
          },
        }}
        nextControlIcon={<NextArrow />}
        previousControlIcon={<PrevArrow />}
      >
        {slides.map((item, index) => (
          <Carousel.Slide key={item.id}>
            <img
              key={index}
              src={item.content}
              className="w-full h-[144px] tablet:h-[347px] laptop:h-[576px] desktop:h-[720px]  "
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
