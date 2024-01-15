"use client";
import React, { useEffect, useState } from "react";
import NavigationComponent from "@/components/NavigationComponent";
import { useTranslations } from "next-intl";
import CartSection from "./cart-section/CartSection";
import { data } from "./index";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import SidebarLinksComponent from "@/components/cart_page/SidebarLinksComponent";

const CartPage = () => {
  const t = useTranslations("cart-page");
  const [activeLink, setActiveLink] = useState("#cart-products");

  const sidebarLinks = [
    { href: "#cart-products", title: `${t("cart-section.sidebar.products")}` },
    {
      href: "#contact-information",
      title: `${t("cart-section.sidebar.contact-information")}`,
    },
    { href: "#delivery", title: `${t("cart-section.sidebar.delivery")}` },
    { href: "#payment", title: `${t("cart-section.sidebar.payment")}` },
  ];

  return (
    <section className="mt-[120px] flex flex-col gap-[50px] tablet:gap-[150px] laptop:gap-[200px]">
      <NavigationComponent
        links={[
          { title: `${t("breadcrums.card-items")}`, href: "/item" },
          { title: `${t("breadcrums.cart")}`, href: "/cart" },
        ]}
      />
      <div className="container scroll-smooth flex mb-[50px] tablet:justify-between tablet:mb-[100px] laptop:mb-[150px] desktop:mb-[200px]">
        <CartSection products={data} />
        <SidebarLinksComponent
          links={sidebarLinks}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      </div>
    </section>
  );
};

export default CartPage;
