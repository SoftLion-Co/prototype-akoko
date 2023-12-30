"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import User from "@/images/icons/user.svg";
import Menu from "@/images/icons/burger-menu.svg";
import Cart from "@/images/icons/cart.svg";
import Heart from "@/images/icons/heart.svg";
import Search from "@/images/icons/search.svg";
import { IoIosArrowUp } from "react-icons/io";
import classNames from "classnames";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/navigation";

const HeaderComponent = () => {
  const [isLanguage, setLanguage] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const t = useTranslations("header");
  const locales = useLocale();
  const pathname = usePathname();

  const productLink = [
    [
      { title: "Куртки", link: "" },
      { title: "Спідниці", link: "" },
      { title: "Жакети", link: "" },
      { title: "Блузки", link: "" },
      { title: "Светри", link: "" },
      { title: "Піджаки", link: "" },
      { title: "Шапки", link: "" },
      { title: "Джинси", link: "" },
      { title: "Топи", link: "" },
      { title: "Котюми", link: "" },
      { title: "Шорти", link: "" },
      { title: "Фудболки", link: "" },
    ],
    [
      { title: "Штани", link: "" },
      { title: "Джинси", link: "" },
      { title: "Куртка", link: "" },
      { title: "Піджаки", link: "" },
      { title: "Сорочки", link: "" },
      { title: "Светри", link: "" },
      { title: "Жилет", link: "" },
      { title: "Джинси", link: "" },
      { title: "Фудболки", link: "" },
      { title: "Худі", link: "" },
    ],
  ];

  const handleOpenModal = () => {
    setOpenModal(!isOpenModal);
    !isOpenModal
      ? document.body.classList.add(classNames("overflow-hidden"))
      : document.body.classList.remove(classNames("overflow-hidden"));
    setLanguage(false);
  };

  const handleClickLanguage = () => {
    setLanguage(!isLanguage);
    setOpenModal(false);
  };

  const searchProducts = (e: any) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains("open")) {
        setOpenModal(false);
        document.body.classList.remove(classNames("overflow-hidden"));
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header className="w-full h-[80px] bg-primary flex items-center tablet:h-[76px] laptop:h-[120px] desktop:h-[150px] relative">
      <div className="container flex justify-between items-baseline gap-[5px]">
        {/* Menu and search */}
        <div className="flex items-center gap-[20px] tablet:gap-[55px] laptop:gap-[85px] desktop:gap-[120px]">
          {/* Burger */}
          <Image
            src={Menu}
            className="w-[17px] h-[17px] cursor-pointer tablet:w-[23px] tablet:h-[23px] laptop:w[32px] laptop:h-[32px] desktop:w-[37px] desktop:h-[37px]"
            onClick={handleOpenModal}
            alt="Menu"
          />
          {/* Search */}
          <div className="hidden tablet:block tablet:relative">
            <input
              placeholder="Search"
              type="text"
              className="tablet:w-[140px] ps-[5px] pe-[18px] outline-none border-b-[1px] rounded-none h-[18px] laptop:w-[200px] laptop:h-[34px] desktop:w-[250px] desktop:ps-[10px] desktop:pe-[25px] "
              onChange={searchProducts}
            />
            <Image
              src={Search}
              alt="Search"
              className="tablet:absolute right-0 top-0 laptop:top-[20%] laptop:w-[18px] laptop:h-[18px] desktop:top-0 desktop:w-[24px] desktop:h-[24px]"
            />
          </div>

          {/* Mobile search */}
          <div className="tablet:hidden">
            <Image src={Search} alt="Search" className="w-[17px] h-[17px]" />
          </div>
        </div>
        {/* Logo and switch language*/}
        <div className="flex items-end gap-[5px] ml-[20px]  tablet:mr-[50px] tablet:ml-0  desktop:mr-[85px]">
          {/* Logo */}
          <Link href="/">
            <Image
              className="w-[78px] h-[28px] tablet:w-[120px] tablet:h-[45px] laptop:w-[190px] laptop:h-[71px] desktop:w-[290px] desktop:h-[89px]"
              src={Logo}
              alt="AKOKO"
            />
          </Link>
          {/* Language */}
          <div
            className="flex items-center cursor-pointer relative"
            onClick={handleClickLanguage}
          >
            <Link
              href={`${pathname}`}
              className="text-[#000000B2] font-400 text-[8px] laptop:text-[12px] desktop:text-[16px]"
            >
              {locales.toUpperCase()}
            </Link>
            {isLanguage && (
              <ul className="absolute top-[20%] w-auto h-auto laptop:top-[80%]">
                {locales === "ua" ? (
                  <li>
                    <Link
                      href={`${pathname}`}
                      locale="en"
                      className="text-[#000000B2] font-400 text-[8px] laptop:text-[12px] desktop:text-[16px]"
                    >
                      EN
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={`${pathname}`}
                      locale="ua"
                      className="text-[#000000B2] font-400 text-[8px] laptop:text-[12px] desktop:text-[16px]"
                    >
                      UA
                    </Link>
                  </li>
                )}
              </ul>
            )}
            <IoIosArrowUp
              className={classNames(
                !isLanguage ? "rotate-180" : "rotate-0",
                "text-[#000000B2] w-[10px] h-[10px] laptop:w-[14px] laptop:h-[18px] desktop:w-[16px] desktop:h-[20px]"
              )}
            />
          </div>
        </div>
        {/* Icons - cart wishlist and user */}
        <div className="flex gap-[15px] tablet:gap-[40px] laptop:gap-[55px] desktop:gap-[70px]">
          <div className="flex gap-[5px] tablet:gap-[7px] desktop:gap-[10px]">
            <Link href="/cart">
              <Image
                src={Cart}
                alt="Cart"
                className="w-[17px] h-[17px] cursor-pointer tablet:w-[23px] tablet:h-[23px] laptop:w[32px] laptop:h-[32px] desktop:w-[37px] desktop:h-[37px]"
              />
            </Link>
            <Link href="/wishlist">
              <Image
                src={Heart}
                alt="Cart"
                className="w-[17px] h-[17px] cursor-pointer tablet:w-[23px] tablet:h-[23px] laptop:w[32px] laptop:h-[32px] desktop:w-[37px] desktop:h-[37px]"
              />
            </Link>
          </div>
          <Link href="/login">
            <Image
              src={User}
              alt="User"
              className="w-[17px] h-[17px] cursor-pointer tablet:w-[23px] tablet:h-[23px] laptop:w[32px] laptop:h-[32px] desktop:w-[37px] desktop:h-[37px]"
            />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {isOpenModal && (
        <div
          className={classNames(
            "open",
            "bg-transparent w-full h-screen absolute top-[96%]"
          )}
        >
          <div className="bg-primary w-full h-auto shadow-xl pt-[10px] pb-[40px] pl-[15px]">
            <div className="container flex gap-[30px]">
              <div className="flex flex-col gap-[10px]">
                <div className="text-[14px] font-500 tablet:text-[16px] laptop:text-[18px]">
                  {t("sex.woman")}
                </div>
                <ul className="flex flex-col gap-[5px]">
                  {productLink[0].map((item, keys) => (
                    <li key={keys}>
                      <Link
                        href={item.link}
                        className="text-[14px] font-400 tablet:text-[16px] laptop:text-[18px]"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="text-[14px] font-500 tablet:text-[16px] laptop:text-[18px]">
                  {t("sex.man")}
                </div>
                <ul className="flex flex-col gap-[5px]">
                  {productLink[1].map((item, keys) => (
                    <li key={keys}>
                      <Link
                        href={item.link}
                        className="text-[14px] font-400 tablet:text-[16px] laptop:text-[18px]"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
