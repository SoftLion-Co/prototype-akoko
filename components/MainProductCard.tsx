"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/images/icons/cart.svg";
import Wish from "@/images/icons/wish.svg";
import WishRed from "@/images/icons/wish-red.svg";

interface ProductCardData {
  arrayColection?: {
    nameProduct: string;
    collectionImage?: string;
  };

  array?: {
    [color: string]: {
      nameProduct: string;
      image: string;
      size: string[];
      price: string;
    };
  };

  className?: string;
}

const MainProductCard: React.FC<ProductCardData> = ({
  arrayColection = {},
  array = {},
  className,
  ...restProps
}) => {
  const hasAdditionalContent = Object.keys(array).length > 0;
  const isCollection = Object.keys(arrayColection).length > 0;
  const [isWishActive, setIsWishActive] = useState(false);
  const [selectedColor, setSelectedColor] = useState(Object.keys(array)[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isAvailabilityVisible, setIsAvailabilityVisible] = useState(false);

  const handleWishClick = () => {
    setIsWishActive(!isWishActive);
  };

  const handleColorClick = (selectedColor: string) => {
    setSelectedColor(selectedColor);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1280) {
      setIsHovered(true);
      setIsAvailabilityVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1280) {
      setIsHovered(false);
      setIsAvailabilityVisible(false);
    }
  };

  return (
    <div
      className={`flex flex-col ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      <div className="relative transition-opacity duration-300 ease-in-out">
        <Link href={""}>
          <img
            className={`object-cover bg-blue mb-[20px] w-[100%] h-[380px] tablet:h-[340px] tablet:mb-[18px] laptop:h-[360px] desktop:h-[420px] desktop:mb-[24px] ${
              isHovered
                ? "opacity-80 transition-opacity duration-300 ease-in-out"
                : ""
            }`}
            src={
              isCollection
                ? arrayColection.collectionImage
                : array[selectedColor]?.image || ""
            }
            alt="Product"
            width={325}
            height={420}
          />
        </Link>

        {isAvailabilityVisible && array && hasAdditionalContent && (
          <div
            className={`absolute transition-all duration-300 ease-in-out justify-center w-full flex items-center h-[64px] bottom-[18px] bg-[#ffffff80] pl-[8px] tablet:h-[58px] desktop:h-[70px] desktop:bottom-[24px]`}
          >
            <ul className="flex gap-[34px]">
              {array[selectedColor]?.size.map((size, index) => (
                <li
                  className="rounded-[50%] border-solid border-inherit"
                  key={index}
                >
                  <Link className="text-[24px] font-medium" href={""}>
                    {size}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link href={""}>
        <p
          className={`font-medium text-[16px] mb-[22px] tablet:mb-[10px] tablet:text-[14px] laptop:mb-[12px] laptop:text-[16px] desktop:mb-[16px] desktop:text-[18px] ${
            !hasAdditionalContent && "flex justify-center text-center"
          }`}
        >
          {isCollection
            ? arrayColection.nameProduct
            : array[selectedColor]?.nameProduct || ""}
        </p>
      </Link>

      {hasAdditionalContent && (
        <div>
          <div className="flex justify-between mb-[16px] tablet:mb-[14px] laptop:mb-[12px] desktop:mb-[18px]">
            <ul className="flex gap-[10px]">
              {Object.keys(array).map((a, index) => (
                <li key={index} onClick={() => handleColorClick(a)}>
                  <span
                    className={`inline-block w-6 h-6 rounded-full cursor-pointer`}
                    style={{
                      backgroundColor: a,
                      border: `1px solid #d1d5db`,
                    }}
                  ></span>
                </li>
              ))}
            </ul>

            <div className="flex gap-[10px]">
              <button type="button">
                <Image src={Cart} alt="Cart" height={25} />
              </button>

              <button type="button" onClick={handleWishClick}>
                {isWishActive ? (
                  <Image src={WishRed} alt="WishRed" height={30} />
                ) : (
                  <Image src={Wish} alt="Wish" height={30} />
                )}
              </button>
            </div>
          </div>

          <p className="flex gap-[20px] text-[16px] tablet:text-[14px] laptop:text-[16px] desktop:text-[18px]">
            Ціна:<span>{array[selectedColor]?.price}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MainProductCard;
