"use client";
import { Link } from "@/navigation";
import { useRef } from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Arrow from "@/images/icons/arrow-hero.svg";
import ArrowUp from "@/images/icons/arrow-up-hero.svg";

const slides = [
  {
    id: 1,
    content:
      "https://i.pinimg.com/originals/c4/8c/f2/c48cf20e2d35c95670c98fc733684d04.jpg",
    link: "https://translate.google.com/",
  },

  {
    id: 2,
    content:
      "https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg",
    link: "https://www.google.com/",
  },
  {
    id: 3,
    content:
      "https://i.pinimg.com/originals/97/9d/24/979d24ebf3f36d897a1b021d3e3a8ca5.jpg",
    link: "https://www.edu.goit.global/",
  },
  {
    id: 4,
    content: "https://cutewallpaper.org/23/hd-wallpaper-dump/3121712865.jpg",
    link: "https://github.com/",
  },
  {
    id: 5,
    content:
      "https://i.pinimg.com/originals/fd/b4/3e/fdb43e6fac1c51d183d4696349686d74.jpg",
    link: "https://translate.google.com/",
  },
  {
    id: 6,
    content:
      "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
    link: "https://open.spotify.com/",
  },
];
const NextArrow = () => {
  return (
    <div className="cursor-pointer  rotate-180 w-[16px] h-[16px] tablet:w-[23px] tablet:h-[23px] laptop:w-[38px] laptop:h-[38px] desktop:w-[48px] desktop:h-[48px] ">
      <Image className="w-full h-full" src={Arrow} alt="" />
    </div>
  );
};

const PrevArrow = () => {
  return (
    <div className="cursor-pointer w-[16px] h-[16px] tablet:w-[23px] tablet:h-[23px] laptop:w-[38px] laptop:h-[38px] desktop:w-[48px] desktop:h-[48px] ">
      <Image className="w-full h-full" src={Arrow} alt="" />
    </div>
  );
};

const HeroSection = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <section>
      <div className=" relative h-[144px] tablet:h-[347px] laptop:h-[576px] desktop:h-[720px]">
        <Carousel
          className=""
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
              left: "60%",
              transform: "translateY(50%)",
              gap: "2px",
              "@media (min-width: 768px)": {},
              //laptop
              "@media (min-width: 1280px)": {},
              //desktop
              "@media (min-width: 1600px)": {},
            },
            indicator: {
              zIndex: 10,
              fontSize: "1em",
              height: "4px !important",
              width: "4px !important",
              backgroundColor: "#000000 !important",
              borderRadius: "50%",

              "&[data-active]": {
                width: "6px !important",
                height: "6px !important",
                // tablet
                "@media (min-width: 768px)": {
                  height: "15px !important",
                  width: "15px !important",
                },
                //laptop
                "@media (min-width: 1280px)": {
                  height: "25px !important",
                  width: "25px !important",
                },
                //desktop
                "@media (min-width: 1600px)": {
                  height: "32px !important",
                  width: "32px !important",
                },
              },
              // tablet
              "@media (min-width: 768px)": {
                height: "9px !important",
                width: "9px !important",
              },
              //laptop
              "@media (min-width: 1280px)": {
                height: "15px !important",
                width: "15px !important",
              },
              //desktop
              "@media (min-width: 1600px)": {
                height: "18px !important",
                width: "18px !important",
              },
            },
            control: {
              "&:first-of-type": {
                maxWidth: "320px",
                position: "absolute",
                right: "5px",
                top: "60px",
                // tablet
                "@media (min-width: 768px)": {
                  maxWidth: "738px",
                  right: "30px",
                  top: "70px",
                },
                //laptop
                "@media (min-width: 1280px)": {},
                //desktop
                "@media (min-width: 1600px)": {},
              },
              "&:last-of-type": {
                position: "absolute",
                right: "5px",
                top: "45px",
                "@media (min-width: 768px)": {
                  right: "30px",
                  top: "50px",
                },
                //laptop
                "@media (min-width: 1280px)": {},
                //desktop
                "@media (min-width: 1600px)": {},
              },
              background: "none",
              border: "none",
              boxShadow: "none",
            },
          }}
          nextControlIcon={<PrevArrow />}
          previousControlIcon={<NextArrow />}
        >
          {slides.map((item, index) => (
            <Carousel.Slide>
              <img
                key={index}
                src={item.content}
                className="w-screen h-[144px] tablet:h-[347px] laptop:h-[576px] desktop:h-[720px]"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        {slides.map((item, index) => (
          <Link href={item.link} target="_blank" key={item.id}>
            <button key={index} className="absolute top-[60%] left-[15%] bg-[#5F5F5F66] w-[25px] h-[25px] flex justify-center items-center rounded-full tablet:w-[54px] tablet:h-[54px] laptop:w-[90px] laptop:h-[90px] desktop:w-[112px] desktop:h-[112px] ">
              <Image
                src={ArrowUp}
                alt="arrow"
                className="w-[11px] h-[11px] tablet:w-[23px] tablet:h-[23px] laptop:w-[38px] laptop:h-[38px] desktop:w-[48px] desktop:h-[48px]"
              />
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
