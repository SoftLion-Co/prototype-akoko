"use client";
import Link from "next/link";
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

interface ArrowProps {
  className: string;
}

const NextArrow: React.FC<ArrowProps> = ({ className }) => {
  return (
    <div className={className}>
      <Image src={Arrow} alt="Next slide" className="w-full h-full" />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className }) => {
  return (
    <div className={className}>
      <Image src={Arrow} alt="Previous slide" className="w-full h-full" />
    </div>
  );
};

const HeroSection = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <section>
      <div className="relative h-[100%] tablet:h-[347px] laptop:h-[576px] desktop:h-[720px]">
        <Carousel
          withIndicators
          loop
          height="100%"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          styles={{
            viewport: {
              width: "100vw",
              height: "70vh",
              "@media (min-width: 768px)": {
                height: "100%",
              },
            },

            indicators: {
              fontSize: "1em",
              alignItems: "center",
              bottom: "50%",
              left: "60%",
              transform: "translateY(50%)",
              gap: "2px",

              "@media (min-width: 768px)": {
                maxWidth: "660px",
                padding: "0 35px",
                gap: "6px",
              },
              "@media (min-width: 1280px)": {
                maxWidth: "1150px",
                padding: "0 65px",
                gap: "9px",
              },
              "@media (min-width: 1600px)": {
                maxWidth: "1410px",
                gap: "12px",
              },
            },

            indicator: {
              zIndex: 10,
              height: "7px",
              width: "7px",
              backgroundColor: "#000000 !important",
              borderRadius: "50%",

              "@media (min-width: 768px)": {
                height: "9px",
                width: "9px",
              },
              "@media (min-width: 1280px)": {
                height: "15px",
                width: "15px",
              },
              "@media (min-width: 1600px)": {
                height: "18px",
                width: "18px",
              },

              "&[data-active]": {
                marginLeft: "10px",
                width: "9px",
                height: "9px",
                "@media (min-width: 768px)": {
                  height: "15px",
                  width: "15px",
                },
                "@media (min-width: 1280px)": {
                  height: "25px",
                  width: "25px",
                },
                "@media (min-width: 1600px)": {
                  height: "32px",
                  width: "31px",
                },
              },
            },
            
            controls: {
              display: "none",

              "@media (min-width: 768px)": {
                display: "block",
                position: "absolute",
                width: "100%",
                margin: "0 auto",
                maxWidth: "768px",
                padding: "0 35px",
              },
              "@media (min-width: 1280px)": {
                maxWidth: "1280px",
                padding: "0 65px",
              },
              "@media (min-width: 1600px)": {
                maxWidth: "1600px",
              },
            },

            control: {
              position: "absolute",
              right: "0",
              marginRight: "5px",

              "@media (min-width: 768px)": {
                right: "25px",
              },
              "@media (min-width: 1280px)": {
                right: "50px",
              },

              "&:first-of-type": {
                position: "absolute",
                top: "60px",
                "@media (min-width: 768px)": {
                  top: "30px",
                },
                "@media (min-width: 1280px)": {
                  top: "55px",
                },
              },
              "&:last-of-type": {
                position: "absolute",
                top: "80px",
                "@media (min-width: 768px)": {
                  top: "55px",
                },
                "@media (min-width: 1280px)": {
                  top: "100px",
                },
              },
              background: "none",
              border: "none",
              boxShadow: "none",
            },
          }}
          nextControlIcon={
            <NextArrow className="cursor-pointer w-[16px] h-[16px] tablet:w-[23px] tablet:h-[23px] laptop:w-[38px] laptop:h-[38px] desktop:w-[48px] desktop:h-[48px] " />
          }
          previousControlIcon={
            <PrevArrow className="cursor-pointer  rotate-180 w-[16px] h-[16px] tablet:w-[23px] tablet:h-[23px] laptop:w-[38px] laptop:h-[38px] desktop:w-[48px] desktop:h-[48px]" />
          }
        >
          {slides.map((item, index) => (
            <Carousel.Slide key={index} className="relative">
              <div className="flex">
                <Image
                  key={index}
                  src={item.content}
                  alt="Slide"
                  width={400}
                  height={720}
                  className="w-screen object-cover h-[70vh] tablet:h-[347px] laptop:h-[576px] desktop:h-[720px] "
                />
                <div className="w-screen absolute top-[80%] tablet:top-[60%]">
                  <div className="container relative">
                    <Link
                      href={item.link}
                      key={item.id}
                      className="ml-[40px] w-[41px] h-[41px] bg-[#5F5F5F66] flex justify-center items-center rounded-full  tablet:w-[54px] tablet:h-[54px] laptop:w-[90px] laptop:h-[90px] desktop:w-[112px] desktop:h-[112px]"
                    >
                      <Image
                        src={ArrowUp}
                        alt="Click link"
                        className="w-[17px] h-[17px] tablet:w-[23px] tablet:h-[23px] laptop:w-[38px] laptop:h-[38px] desktop:w-[48px] desktop:h-[48px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
