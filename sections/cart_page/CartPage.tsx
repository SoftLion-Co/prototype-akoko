"use client";
import React, { useRef } from "react";
import NavigationComponent from "@/components/NavigationComponent";
import { useTranslations } from "next-intl";
import CartSection from "./cart-section/CartSection";
import { products } from "./index";
import SidebarLinksComponent from "@/components/cart_page/SidebarLinksComponent";
import InformationSection from "./contact-information-section/InformationSection";
import useScroll from "@/hooks/useScroll";

type RefType = {
  href: string;
  title?: string;
  ref: React.RefObject<HTMLElement>;
};

const CartPage: React.FC = () => {
  const t = useTranslations("cart-page");
  const cartProductsRef = useRef<HTMLDivElement>(null);
  const contactInformationRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const paymentRef = useRef<HTMLDivElement>(null);

  const sidebarLinks: RefType[] = [
    {
      href: "cart-products",
      title: `${t("cart-section.sidebar.products")}`,
      ref: cartProductsRef,
    },
    {
      href: "contact-information",
      title: `${t("cart-section.sidebar.contact-information")}`,
      ref: contactInformationRef,
    },
    {
      href: "delivery",
      title: `${t("cart-section.sidebar.delivery")}`,
      ref: deliveryRef,
    },
    {
      href: "payment",
      title: `${t("cart-section.sidebar.payment")}`,
      ref: paymentRef,
    },
  ];

  const activeSection = useScroll(sidebarLinks);

  return (
    <div className="mt-[120px] flex flex-col gap-[50px] tablet:gap-[150px] laptop:gap-[200px]">
      <NavigationComponent
        links={[
          { title: `${t("breadcrums.card-items")}`, href: "/item" },
          { title: `${t("breadcrums.cart")}`, href: "/cart" },
        ]}
      />
      <div className="container scroll-smooth flex mb-[50px] tablet:justify-between tablet:mb-[100px] laptop:mb-[150px] desktop:mb-[200px]">
        {products.length !== 0 ? (
          <>
            <div className="w-full flex flex-col gap-[100px] tablet:gap-[150px] laptop:gap-[150px] desktop:gap-[160px]">
              <section
                className="w-full border-b pb-[80px] tablet:h-auto pt-[20px]"
                id="cart-products"
                ref={cartProductsRef}
              >
                <CartSection />
              </section>
              <section
                className="w-full border-b pb-[80px] flex flex-col items-center gap-[80px] tablet:gap-[90px] laptop:gap-[95px]"
                id="contact-information"
                ref={contactInformationRef}
              >
                <InformationSection />
              </section>
            </div>
            <SidebarLinksComponent
              links={sidebarLinks}
              activeSection={activeSection}
            />
          </>
        ) : (
          <>
            <div>Ваш кошик порожній</div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
