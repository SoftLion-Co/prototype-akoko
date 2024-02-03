"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { LuTrash2 } from "react-icons/lu";
import { usePathname } from "next/navigation";

interface CardProps {
  img: string;
  name: string;
  selectColor: string;
  colors: string[];
  selectSize: string;
  sizes: string[];
  count: number;
  price: number;
  translation: {
    price: string;
    color: string;
    size: string;
  };
}

const CartCardComponent: React.FC<CardProps> = ({
  img,
  name,
  selectColor,
  colors,
  selectSize,
  sizes,
  count,
  price,
  translation,
}) => {
  const [clickColor, setClickColor] = useState(false);
  const [clickSize, setClickSize] = useState(false);
  const [counter, setCounter] = useState(count);
  const [isColor, setColor] = useState(selectColor);
  const [isSize, setSize] = useState(selectSize);
  const pathname = usePathname();

  const handleAddCountClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleMinusCountClick = () => {
    counter <= 0 ? setCounter(0) : setCounter((prev) => prev - 1);
  };

  const handleClickRemoveProduct = () => {
    console.log("click remove");
  };

  const handleOpenSelectColor = () => {
    setClickColor(!clickColor);
    setClickSize(false);
  };

  const handleClickSelectColor = (color: string) => {
    setColor(color);
    setClickSize(false);
    setClickColor(false);
  };

  const handleClickSelectSize = (size: string) => {
    setSize(size);
    setClickSize(false);
    setClickColor(false);
  };

  const handleOpenSelectSize = () => {
    setClickSize(!clickSize);
    setClickColor(false);
  };

  return (
    <div className="flex justify-start gap-[30px] tablet:justify-start tablet:items-start tablet:gap-[30px] desktop:gap-[35px]">
      <Image
        src={img}
        alt={name}
        width={320}
        height={420}
        className="object-cover bg-blue h-[240px] min-w-[150px] w-[220px] tablet:w-[220px] laptop:w-[240px]"
      />
      <div className="flex flex-col gap-[15px] tablet:gap-[20px] desktop:gap-[25px]">
        {/* Information about product */}
        <div className="flex flex-col gap-[10px]">
          {/* Name and Price product */}
          <div className="flex flex-col gap-[10px] tablet:w-max laptop:flex-row laptop:gap-[135px] desktop:gap-[165px]">
            <p className="font-600 text-[22px] tracking-0.885 tablet:text-[28px] tablet:tracking-1.148 laptop:text-[30px] desktop:text-[35px] desktop:tracking-1.4 ">
              {name}
            </p>
            <p className="font-500 laptop:mt-[15px]">
              {translation.price}: {price}
            </p>
          </div>

          {/* Color */}
          <div
            className={classNames(
              pathname.startsWith("/ua")
                ? "gap-[14px] tablet:gap-[14px] laptop:gap-[15px] desktop:gap-[22px]"
                : "gap-[5px] desktop:gap-[8px]",
              "flex justify-start laptop:items-center"
            )}
          >
            <p>{translation.color}:</p>
            <div
              className={classNames(
                colors.length > 3 ? "tablet:flex-col" : "tablet:flex-row",
                "cursor-pointer flex flex-col gap-[6px] tablet:items-center tablet:gap-[10px] laptop:flex-row laptop:gap-[15px]"
              )}
            >
              <div
                className="border border-[#CECECE] rounded-full w-[25px] h-[25px] tablet:w-[33px] tablet:h-[32px] laptop:w-[34px] laptop:h-[34px] desktop:w-[41px] desktop:h-[40px]"
                style={{ background: isColor }}
                onClick={handleOpenSelectColor}
              ></div>
              {clickColor && (
                <div
                  className={classNames(
                    colors.length > 3 ? "tablet:flex-col" : "tablet:flex-row",
                    "cursor-pointer flex flex-col gap-[3px] laptop:flex-row tablet:gap-[10px] laptop:gap-[15px]"
                  )}
                >
                  {colors
                    .filter((item) => item !== isColor)
                    .map((item, index) => (
                      <div
                        key={index}
                        className={
                          "border border-[#CECECE] rounded-full w-[25px] h-[25px] tablet:w-[33px] tablet:h-[32px] laptop:w-[34px] laptop:h-[34px] desktop:w-[41px] desktop:h-[40px]"
                        }
                        style={{ background: item }}
                        onClick={() => handleClickSelectColor(item)}
                      ></div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Size */}
          <div
            className={classNames(
              pathname.startsWith("/ua")
                ? "gap-[4px] desktop:gap-[10px]"
                : "gap-[14px] tablet:gap-[14px] laptop:gap-[15px] desktop:gap-[20px]",
              "flex justify-start laptop:items-center"
            )}
          >
            <p>{translation.size}:</p>
            <div
              className={classNames(
                sizes.length > 3 ? "tablet:flex-col" : "tablet:flex-row",
                "cursor-pointer flex flex-col gap-[6px] laptop:items-center laptop:flex-row laptop:gap-[10px]"
              )}
            >
              <p
                className="rounded-full flex justify-center items-center text-primary font-500 text-[12px] bg-black w-[25px] h-[25px] tablet:w-[33px] tablet:h-[32px] tablet:text-[16px] laptop:text-[18px] laptop:w-[34px] laptop:h-[34px] desktop:text-[20px] desktop:w-[41px] desktop:h-[40px]"
                onClick={handleOpenSelectSize}
              >
                {isSize}
              </p>
              {clickSize && (
                <div
                  className={classNames(
                    sizes.length > 2 ? "tablet:flex-col" : "tablet:flex-row",
                    "cursor-pointer flex gap-[3px] flex-col laptop:flex-row laptop:gap-[10px]"
                  )}
                >
                  {sizes
                    .filter((item) => item !== isSize)
                    .map((item, index) => (
                      <div
                        key={index}
                        className={
                          "rounded-full flex justify-center items-center text-primary font-500 text-[12px] bg-black w-[25px] h-[25px] tablet:w-[33px] tablet:h-[32px] tablet:text-[16px] laptop:text-[18px] laptop:w-[34px] laptop:h-[34px] desktop:text-[20px] desktop:w-[41px] desktop:h-[40px]"
                        }
                        onClick={() => handleClickSelectSize(item)}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Select count */}
        <div className="flex items-center gap-[12px] tablet:gap-[15px] laptop:gap-[15px] desktop:gap-[19px]">
          <p className="cursor-pointer" onClick={handleMinusCountClick}>
            -
          </p>
          <div className="flex justify-center items-center border border-[#CECECE] rounded-[5px] w-[27px] py-[7px] tablet:w-[37px] tablet:py-[10px] desktop:w-[44px] desktop:py-[12px] desktop:text-[15px] desktop:tracking-[0.6px]">
            {counter}
          </div>
          <p className="cursor-pointer" onClick={handleAddCountClick}>
            +
          </p>
        </div>

        {/* Trash */}
        <LuTrash2
          className="w-[18px] h-[19px] bg-primary cursor-pointer hover:text-red tablet:w-[23px] tablet:h-[25px] laptop:w-[24px] laptop:h-[26px] desktop:w-[29] desktop:h-[31px]"
          onClick={handleClickRemoveProduct}
        />
      </div>
    </div>
  );
};

export default CartCardComponent;
