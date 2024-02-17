"use client";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Carousel } from "@mantine/carousel";

import Wish from "@/images/icons/heart.svg";

import ButtonComponent from "@/components/ButtonComponent";

const slides = [
  {
    id: 1,
    content: "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    link: "",
  },

  {
    id: 2,
    content: "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    link: "",
  },
  {
    id: 3,
    content: "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    link: "",
  },
  {
    id: 4,
    content: "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    link: "",
  },
  {
    id: 5,
    content: "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    link: "",
  },
  {
    id: 6,
    content: "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    link: "",
  },
];

const StylishImageSection = () => {
  const t = useTranslations("style.stylish-image-section");
  return (
    <section className="container">
        <div>
            
        </div>
      <div>
        <div>
          <h1 className="text-center">{t("title")}</h1>
          <Image src={Wish} alt="Heart" />
        </div>
        <Carousel>
          {slides.map((item, index) => (
            <Carousel.Slide key={index}>
              <div className="flex">
                <Image
                  key={index}
                  src={item.content}
                  alt="Slide"
                  width={400}
                  height={720}
                  className=" object-cover h-[70vh] tablet:h-[347px] laptop:h-[576px] desktop:h-[720px] "
                />
                <div className="w-screen absolute top-[80%] tablet:top-[60%]">
                  <div className="container relative">
                    <Link
                      href={item.link}
                      key={item.id}
                      className="ml-[40px] w-[41px] h-[41px] bg-[#5F5F5F66] flex justify-center items-center rounded-full  tablet:w-[54px] tablet:h-[54px] laptop:w-[90px] laptop:h-[90px] desktop:w-[112px] desktop:h-[112px]"
                    >
                      <Image
                        src=""
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
        <ButtonComponent
          title={t("button")}
          className="desktop:w-[268px] h-[61px] bg-[#5B749A] text-primary rounded"
        />
      </div>
    </section>
  );
};

export default StylishImageSection;
