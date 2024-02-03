"use client";
import React, { useState, useEffect } from "react";
import CartCardComponent from "@/components/cart_page/CartCardComponent";
import { IoIosArrowForward } from "react-icons/io";
import InputPromoCodeComponent from "@/components/cart_page/InputPromoCodeComponent";
import { useTranslations } from "next-intl";
import { products } from "@/sections/cart_page/index";

interface InformationProps {
  t: any;
}

const CartSection: React.FC<InformationProps> = ({ t }) => {
  const [promoCode, setPromoCode] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedTotalPrice = products.reduce((acc, product) => {
      return acc + product.price * product.count;
    }, 0);

    setTotalPrice(calculatedTotalPrice);
  }, [products, promoCode]);

  const checkPromoCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const handleClickPromoCode = () => {
    console.log(promoCode);
    setPromoCode("");
  };

  return (
    <>
      <div className="flex flex-col gap-[40px] h-full w-full tablet:relative tablet:gap-[70px] laptop:gap-[90px] desktop:gap-[130px]">
        {products.map((product, index) => (
          <CartCardComponent
            key={index}
            img={product.img}
            name={product.name}
            selectColor={product.selectColor}
            colors={product.colors}
            selectSize={product.selectSize}
            sizes={product.size}
            count={product.count}
            price={product.price}
            translation={{
              price: `${t("cart-section.card.price")}`,
              color: `${t("cart-section.card.color")}`,
              size: `${t("cart-section.card.size")}`,
            }}
          />
        ))}
        {/* Total price promo */}
        <div className="flex flex-col h-auto w-auto gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <p className="font-500">{t("cart-section.input.title")}</p>
            <div className="h-auto w-[180px] flex items-center py-[5px] border-b border-[#CECECE] pl-[18px] tablet:pl-[20px] tablet:gap-[5px] tablet:w-[65%] laptop:w-[37%] desktop:w-[35%] desktop:pl-[30px]">
              <InputPromoCodeComponent
                placeholder={t("cart-section.input.placeholder")}
                className="outline-none text-[10px] tablet:text-[12px] laptop:text-[13px] desktop:text-[15px]"
                onChange={checkPromoCode}
                value={promoCode}
              />
              <IoIosArrowForward
                className="cursor-pointer bg-black text-primary w-[23px] h-[20px] tablet:w-[31px] tablet:h-[28px] desktop:w-[41px] desktop:h-[41px]"
                onClick={handleClickPromoCode}
              />
            </div>
          </div>
          <p>{t("cart-section.discount")} : </p>
          <p>
            {t("cart-section.total-price")} : {totalPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartSection;
