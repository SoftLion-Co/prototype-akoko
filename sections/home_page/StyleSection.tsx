"use client";
import React from "react";
import { Link } from "@/navigation";
import Arrow from "@/images/icons/vector.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import StyleSliderComponent from "@/components/StyleSliderComponent";
import StyleCardComponent from "@/components/StyleCardComponent";

type CartProps = {
  title: string;
  image: string;
  link: string;
};

const cartItem: CartProps[] = [
  {
    title: "Style 1",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    title: "Style 2",
    image: "https://content2.rozetka.com.ua/goods/images/big/218974949.jpg",
    link: "/style",
  },
  {
    title: "Style 3",
    image: "https://content2.rozetka.com.ua/goods/images/big/218974949.jpg",
    link: "/style",
  },
  {
    title: "Style 4",
    image: "https://content2.rozetka.com.ua/goods/images/big/218974949.jpg",
    link: "/wishlist",
  },
];

const StyleSection = () => {
  const t = useTranslations("home");
  return (
    <section className="w-full h-auto">
      <div className="container w-full h-full flex flex-col gap-[45px] tablet:gap-[60px] laptop:gap-[95px] desktop:gap-[120px]">
        <h1 className="text-center ">{t("style-section.title")}</h1>
        {/* Cart for tablet, laptop and desktop */}
        <div className="hidden tablet:flex tablet:justify-between">
          {cartItem.map((cart, index) => (
            <StyleCardComponent
              key={index}
              link={cart.link}
              name={cart.title}
              image={cart.image}
            />
          ))}
        </div>
        {/* Mobile slider for cart */}
        <StyleSliderComponent cartItem={cartItem} />

        {/* Button */}
        <Link
          href="/style"
          className="flex justify-center border-b border-t py-[20px] laptop:py-[35px] desktop:py-[40px]"
        >
          <div className="flex items-center gap-[14px]">
            <p className="font-500 laptop:text-[18px] desktop:text-[20px]">
              {t("style-section.button")}
            </p>
            <Image
              src={Arrow}
              alt="More style"
              className="w-[12px] h-[22px] tablet:w-[22px] tablet:h-[45px] laptop:w-[35px] laptop:h-[70px] desktop:w-[45px] desktop:h-[90px]"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default StyleSection;
