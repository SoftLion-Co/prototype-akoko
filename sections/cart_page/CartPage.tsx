import React from "react";
import NavigationComponent from "@/components/NavigationComponent";
import { useTranslations } from "next-intl";
import DesktopCartSection from "./cart-section/CartSection";

const data = [
  {
    img: "",
    name: "FFF",
    selectColor: "grey",
    colors: ["grey", "black", "green"],
    selectSize: "M",
    size: ["S", "M", "L", "XL"],
    count: 9,
    price: 1500,
  },
  {
    img: "",
    name: "CC",
    selectColor: "pink",
    colors: ["pink", "white", "yellow"],
    selectSize: "L",
    size: ["S", "M", "L", "XL"],
    count: 1,
    price: 1500,
  },
  {
    img: "",
    name: "GG",
    selectColor: "green",
    colors: ["green", "red", "pink"],
    selectSize: "S",
    size: ["S", "M", "L", "XL"],
    count: 3,
    price: 1500,
  },
  {
    img: "",
    name: "AA",
    selectColor: "blue",
    colors: ["blue", "brown", "red"],
    selectSize: "L",
    size: ["S", "M", "L", "XL"],
    count: 4,
    price: 1500,
  },
  {
    img: "",
    name: "SS",
    selectColor: "red",
    colors: ["red", "purple", "yellow"],
    selectSize: "XL",
    size: ["S", "M", "L", "XL"],
    count: 2,
    price: 1500,
  },
];

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
      <div className="container flex tablet:flex-wrap tablet:justify-between mb-[50px] tablet:mb-[100px] laptop:mb-[150px] desktop:mb-[200px]">
        <DesktopCartSection products={data} />
        <aside className="hidden tablet:sticky tablet:right-0 tablet:top-[100px] tablet:block w-[200px] h-[200px] laptop:top-[170px] bg-red desktop:top-[200px]">
          Sidebar
        </aside>
      </div>
    </section>
  );
};

export default CartPage;
