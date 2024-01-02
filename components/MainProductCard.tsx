import React from "react";
import Image from "next/image";
import Cart from "@/images/icons/cart.svg";
import Wish from "@/images/icons/wish.svg";

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

  return (
    <div className={`flex flex-col ${classNames}`} {...restProps}>
      <Image
        className="border-[1px] border-black mb-[24px]"
        src={""}
        alt="Product"
        width={315}
        height={420}
      />
      <div className="h-[66px] bg-[#272727]"></div>

      <p
        className={`text-[18px] h-[60px] mb-[20px] ${
          !hasAdditionalContent && "flex justify-center text-center"
        }`}
      >
        {name}
      </p>

      {hasAdditionalContent && (
        <div>
          <div className="flex justify-between mb-[24px]">
            <div className="flex gap-[10px] ">
              {color.map((c, index) => (
                <div
                  className="border-[1px] border-black rounded-[50%]"
                  key={index}
                >
                  {c}
                </div>
              ))}
            </div>

            <div className="flex gap-[10px]">
              <Image src={Cart} alt="Cart" height={25} />
              <Image src={Wish} alt="Wish" height={30} />
            </div>
          </div>

          <p>Ціна: {price}</p>
        </div>
      )}
    </div>
  );
};

export default MainProductCard;
