import React from "react";
import NavigationComponent from "@/components/NavigationComponent";
import { useTranslations } from "next-intl";
import CartSection from "./cart-section/CartSection";

const CartPage = () => {
  const t = useTranslations("cart-page");
  return (
    <section className="mt-[120px] flex flex-col gap-[50px] tablet:gap-[150px] laptop:gap-[200px]">
      <NavigationComponent
        links={[
          { title: `${t("breadcrums.card-items")}`, href: "/item" },
          { title: `${t("breadcrums.cart")}`, href: "/cart" },
        ]}
      />
      <CartSection />
    </section>
  );
};

export default CartPage;
