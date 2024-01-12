"use client";
import React from "react";
import NavigationComponent from "@/components/NavigationComponent";
import { useTranslations } from "next-intl";
import DesktopCartSection from "./cart-section/CartSection";
import { data, sidebarLinks } from "./index";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";

const CartPage = () => {
  const t = useTranslations("cart-page");
  const pathname = usePathname();

  console.log(pathname);

  return (
    <section className="mt-[120px] flex flex-col gap-[50px] tablet:gap-[150px] laptop:gap-[200px]">
      <NavigationComponent
        links={[
          { title: `${t("breadcrums.card-items")}`, href: "/item" },
          { title: `${t("breadcrums.cart")}`, href: "/cart" },
        ]}
      />
      <div className="container scroll-smooth flex mb-[50px] tablet:justify-between tablet:mb-[100px] laptop:mb-[150px] desktop:mb-[200px]">
        <DesktopCartSection products={data} />
        <aside className="hidden tablet:w-auto tablet:h-min tablet:sticky tablet:top-[100px] tablet:block w-[200px] h-[200px] laptop:top-[170px] desktop:top-[200px]">
          <ul className="flex flex-col tablet:gap-[28px] laptop:gap-[35px] desktop:gap-[40px] w-max">
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className=" font-400 tablet:text-[18px] tablet:tracking-[0.735px] laptop:text-[20px] laptop:tracking-[0.887px] desktop:text-[25px] desktop:tracking-[1px]"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default CartPage;
