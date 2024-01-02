"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/images/icons/cart.svg";
import Wish from "@/images/icons/wish.svg";
import WishRed from "@/images/icons/wish-red.svg";

interface ProductCardData {
  productImg?: string;
  name: string;
  color?: string[];
  price?: string;
  availability?: string;
  classNames?: string;
}

const MainProductCard: React.FC<ProductCardData> = ({
  productImg,
  name,
  color,
  price,
  availability,
  classNames,
  ...restProps
}) => {
  const hasAdditionalContent = color && color.length > 0 && price;
  const showAvailability = availability !== undefined && availability !== null;

  const [isWishActive, setIsWishActive] = useState(false);

  const handleWishClick = () => {
    setIsWishActive(!isWishActive);
  };

  return (
    <div className={`flex flex-col  ${classNames}`} {...restProps}>
      <div className="relative">
        <Image
          className="bg-blue mb-[20px] max-w-[270px] tablet:w-[240px] tablet:mb-[18px] desktop:min-w-[315px] desktop:mb-[24px]"
          src={""}
          alt="Product"
          width={325}
          height={420}
        />
        {showAvailability && (
          <div className="absolute w-full flex items-center h-[64px] bottom-[18px] bg-[#272727] pl-[8px] tablet:h-[58px] desktop:h-[70px] desktop:bottom-[24px]">
            <p className="flex gap-[20px] text-primary text-[16px] tablet:text-[14px] laptop:text-[16px] desktop:text-[18px]">
              Наявність:<span>{availability}</span>
            </p>
          </div>
        )}
      </div>

      <p
        className={`font-medium text-[16px] min-h-[48px] mb-[22px] tablet:mb-[10px] min-h-[42px] tablet:text-[14px] laptop:mb-[12px] laptop:text-[16px] min-h-[48px] desktop:mb-[16px] desktop:text-[18px] min-h-[54px] ${
          !hasAdditionalContent && "flex justify-center text-center"
        }`}
      >
        {name}
      </p>

      {hasAdditionalContent && (
        <div>
          <div className="flex justify-between mb-[16px] tablet:mb-[14px] laptop:mb-[12px] desktop:mb-[18px]">
            <ul className="flex gap-[10px] ">
              {color.map((c, index) => (
                <li
                  className="border-[1px] border-black rounded-[50%]"
                  key={index}
                >
                  <Link href="">
                    <span>{c}</span>
                  </Link>
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
