"use client";
import React from "react";
import Link from "next/link";
import Arrow from "@/images/icons/vector.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import StyleSliderComponent from "@/components/StyleSliderComponent";
import MainProductCard from "@/components/MainProductCard";

type CartProps = {
  title: string;
  image: string;
};

const cartItem: CartProps[] = [
  {
    title: "Style 1",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
  },
  {
    title: "Style 2",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
  },
  {
    title: "Style 3",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
  },
  {
    title: "Style 4",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
  },
];

export const StyleSection = () => {
  const t = useTranslations("home");
  return (
    <section className="w-full h-auto">
      <div className="container w-full h-full flex flex-col gap-[45px] tablet:gap-[60px] laptop:gap-[95px] desktop:gap-[120px]">
        <h1 className="text-center ">{t("style-section.title")}</h1>
        {/* Cart for tablet, laptop and desktop */}
        <div className="hidden tablet:flex tablet:justify-between">
          {cartItem.map((cart, index) => (
            <MainProductCard key={index} name={cart.title} />
          ))}
        </div>
        {/* Mobile slider for cart */}
        <StyleSliderComponent cartItem={cartItem} />

        {/* Button */}
        <Link
          href=""
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
