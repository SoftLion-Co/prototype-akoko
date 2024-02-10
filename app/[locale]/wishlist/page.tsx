import CartCardComponent from "@/components/cart_page/CartCardComponent";
import React from "react";
import { products } from "@/sections/cart_page";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("cart-page");
  return (
    <div className="container">
      {products.map((product, index) => (
        <CartCardComponent
          key={index}
          img={product.img}
          name={product.name}
          selectColor={product.selectColor}
          colors={product.colors}
          selectSize={product.selectSize}
          sizes={product.size}
          translation={{
            price: `${t("cart-section.card.price")}`,
            color: `${t("cart-section.card.color")}`,
            size: `${t("cart-section.card.size")}`,
            measurement: `${t("cart-section.card.measurement")}`,
          }}
          isModal={true}
        />
      ))}
    </div>
  );
};

export default page;
