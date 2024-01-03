"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/images/icons/cart.svg";
import Wish from "@/images/icons/wish.svg";
import WishRed from "@/images/icons/wish-red.svg";

interface ProductCardData {
  nameProduct: string;
  array?: {
    [color: string]: {
      image: string;
      size: string[];
    };
  };
  price?: string;
  showAvailability?: boolean;
  classNames?: string;
}

const MainProductCard: React.FC<ProductCardData> = ({
  array = {},
  nameProduct,
  price,
  classNames,
  ...restProps
}) => {
  const hasAdditionalContent = Object.keys(array).length > 0 && price;
  const showAvailability =
    restProps.showAvailability !== undefined &&
    restProps.showAvailability !== null;
  const [isWishActive, setIsWishActive] = useState(false);

  const handleWishClick = () => {
    setIsWishActive(!isWishActive);
  };

  const [selectedColor, setSelectedColor] = useState(Object.keys(array)[0]);

  const handleColorClick = (selectedColor: string) => {
    const newIndex = Object.keys(array).indexOf(selectedColor);
    setSelectedColor(selectedColor);
  };

  const [isAvailabilityVisible, setIsAvailabilityVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsAvailabilityVisible(true);
  };

  const handleMouseLeave = () => {
    setIsAvailabilityVisible(false);
  };

  return (
    <div
      className={`flex flex-col ${classNames}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      <div className="relative group">
        <Link href={""}>
          <img
            className="object-cover bg-blue mb-[20px] max-w-[270px] h-[380px] tablet:w-[240px] tablet:h-[340px] tablet:mb-[18px] laptop:h-[360px] desktop:min-w-[315px] desktop:h-[420px] desktop:mb-[24px] transition-opacity duration-300 ease-in-out group-hover:opacity-80"
            src={
              array && array[selectedColor] ? array[selectedColor].image : ""
            }
            alt="Product"
            width={325}
            height={420}
          />
        </Link>

        {isAvailabilityVisible && array && (
          <div className="absolute w-full flex items-center h-[64px] bottom-[18px] bg-[#272727] pl-[8px] tablet:h-[58px] desktop:h-[70px] desktop:bottom-[24px] transition-opacity duration-300 ease-in-out">
            <p
              style={{ color: "#FFECEC" }}
              className="flex gap-[20px] text-[16px] tablet:text-[14px] laptop:text-[16px] desktop:text-[18px]"
            >Наявність:
              <ul className="flex gap-[20px]">
                {array[selectedColor].size.map((size, index) => (
                  <li
                    className="rounded-[50%] border-solid	border-inherit"
                    key={index}
                  >
                    <Link href={""}>{size}</Link>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        )}
      </div>

      <Link href={""}>
        <p
          className={`font-medium text-[16px] min-h-[48px] mb-[22px] tablet:mb-[10px] min-h-[42px] tablet:text-[14px] laptop:mb-[12px] laptop:text-[16px] min-h-[48px] desktop:mb-[16px] desktop:text-[18px] min-h-[54px] ${
            !hasAdditionalContent && "flex justify-center text-center"
          }`}
        >
          {nameProduct}
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
            Ціна:<span>{price}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MainProductCard;
