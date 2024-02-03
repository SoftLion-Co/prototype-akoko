"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "@/images/header/Akoko.svg";
import User from "@/images/icons/user.svg";
import Menu from "@/images/icons/burger-menu.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Heart from "@/images/icons/heart.svg";
import Search from "@/images/icons/search.svg";
import { IoIosArrowUp } from "react-icons/io";
import classNames from "classnames";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/navigation";
import { motion, AnimatePresence } from "framer-motion";

type ProductProps = {
  title: string;
  link: string;
};

const productLinks: ProductProps[][] = [
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

const HeaderComponent = () => {
  const [isLanguage, setLanguage] = useState(false);
  const [isModal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState<"down" | "up" | "default">(
    "default"
  );
  const [searchValue, setSearchValue] = useState("");
  const prevScroll = useRef(0);
  const t = useTranslations("header");
  const locales = useLocale();
  const pathname = usePathname();

  const handleOpenModal = () => {
    setModal(!isModal);
    document.body.classList.toggle("overflow-hidden", !isModal);
    setLanguage(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClickSearch = () => {
    searchValue.length != 0 ? console.log(searchValue) : null;
    setSearchValue("");
  };

  const handleClickLanguage = () => {
    setLanguage(!isLanguage);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY < 40) {
        setIsVisible("default");
      } else if (scrollY > prevScroll.current) {
        setIsVisible("down");
      } else if (scrollY < prevScroll.current) {
        setIsVisible("up");
      }
      prevScroll.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains("open")) {
        setModal(false);
        document.body.classList.remove("overflow-hidden");
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header
      className={classNames(
        "fixed w-full h-auto bg-primary tablet:h-[76px] laptop:h-[120px] desktop:h-[150px] z-50 transition-transform",
        isVisible == "down"
          ? "fixed tablet:translate-y-[-76px] laptop:translate-y-[-120px] desktop:translate-y-[-150px]"
          : isVisible !== "default"
          ? "shadow-xl"
          : null
      )}
    >
      <div className="container w-screen flex justify-between items-baseline gap-[10px] py-[10px] tablet:gap-0 tablet:py-[15px] laptop:py-[24px] desktop:py-[30px]">
        {/* Menu and search */}
        <div className="flex-1">
          <div className="flex items-center gap-[20px] tablet:gap-[55px] laptop:gap-[85px] desktop:gap-[120px]">
            {/* Burger */}
            <Image
              src={Menu}
              className="min-w-[15px] min-h-[15px] w-[17px] h-[17px] cursor-pointer tablet:w-[23px] tablet:h-[23px] laptop:w[32px] laptop:h-[32px] desktop:w-[37px] desktop:h-[37px]"
              onClick={handleOpenModal}
              alt="Menu"
            />
            {/* Search */}
            <div className="hidden tablet:pb-[3px] tablet:flex tablet:h-[20px] tablet:w-[140px] tablet:border-b laptop:pb-[5px] laptop:items-center  laptop:w-[200px] laptop:h-[25px]  desktop:w-[250px] ">
              <input
                placeholder={t("search")}
                type="text"
                className="tablet: w-full h-full outline-none pl-[5px]"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <div
                onClick={handleClickSearch}
                className={
                  searchValue.length != 0
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                }
              >
                <Image
                  src={Search}
                  alt="Search"
                  className="tablet:pb-[3px] laptop: w-[19px] laptop:h-[19px] laptop:pb-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 laptop:pr-[45px] desktop:pr-[70px]">
          <div className="flex items-end gap-[5px]">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => {
                setModal(false);
              }}
            >
              <Image
                className="min-w-[55px] min-h-[23px] w-[78px] tablet:w-[120px] tablet:h-[45px] laptop:w-[190px] laptop:h-[71px] desktop:w-[290px] desktop:h-[89px]"
                src={Logo}
                alt="AKOKO"
              />
            </Link>
            {/* Language */}
            <div className="flex items-center gap-[3px] cursor-pointer relative">
              <ul>
                <li className="text-[#000000B2] font-400 text-[8px] laptop:text-[12px] desktop:text-[16px]">
                  {locales.toUpperCase()}
                </li>
                {isLanguage && (
                  <li className="absolute top-[20%] w-auto h-auto laptop:top-[90%]">
                    {locales == "ua" ? (
                      <Link
                        href={`${pathname}`}
                        locale="en"
                        className="text-[#000000B2] font-400 text-[8px] laptop:text-[12px] desktop:text-[16px]"
                      >
                        EN
                      </Link>
                    ) : (
                      <Link
                        href={`${pathname}`}
                        locale="ua"
                        className="text-[#000000B2] font-400 text-[8px] laptop:text-[12px] desktop:text-[16px]"
                      >
                        UA
                      </Link>
                    )}
                  </li>
                )}
              </ul>
              <IoIosArrowUp
                className={classNames(
                  !isLanguage ? "rotate-180" : "rotate-0",
                  "text-[#000000B2] w-[10px] h-[10px] laptop:w-[14px] laptop:h-[18px] desktop:w-[16px] desktop:h-[20px]"
                )}
                onClick={() => handleClickLanguage()}
              />
            </div>
          </div>
        </div>
        {/* Icons - cart wishlist and user */}
        <div className="flex-none">
          <div className="flex gap-[15px] tablet:gap-[40px] laptop:gap-[55px] desktop:gap-[70px]">
            <div className="flex gap-[5px] tablet:gap-[7px] desktop:gap-[10px]">
              <Link href="/cart">
                <HiOutlineShoppingBag
                  className={classNames(
                    "min-w-[15px] min-h-[15px] w-[17px] h-[17px]  cursor-pointer tablet:w-[23px] tablet:h-[23px] laptop:w[32px] laptop:h-[32px] desktop:w-[37px] desktop:h-[37px]"
                  )}
                />
              </Link>
              <Link href="/wishlist">
                <Image
                  src={Heart}
                  alt="Cart"
                  className="min-w-[15px] min-h-[15px] w-[17px] h-[17px]  cursor-pointer tablet:w-[23px] tablet:h-[23px] laptop:w[32px] laptop:h-[32px] desktop:w-[37px] desktop:h-[37px]"
                />
              </Link>
            </div>
            <Link href="/login">
              <Image
                src={User}
                alt="User"
                className="min-w-[15px] min-h-[15px] w-[17px] h-[17px] cursor-pointer tablet:w-[23px] tablet:h-[23px] laptop:w[32px] laptop:h-[32px] desktop:w-[37px] desktop:h-[37px]"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Search mobile */}
      <motion.div
        animate={isVisible == "down" ? "hidden" : "block"}
        exit="hidden"
        variants={{
          hidden: { opacity: 0, y: "-30%" },
          block: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
        className={classNames(
          "absolute bg-primary top-[98%]",
          isVisible == "up" && "shadow-xl"
        )}
      >
        <div
          className={classNames(
            "block w-screen h-[50px] px-[12px] pb-[9px] pt-[12px] tablet:hidden"
          )}
        >
          <div className="w-full h-full border-b flex px-[12px]">
            <input
              type="text"
              placeholder={t("search")}
              className="grow h-full w-[55%]  outline-none pl-[5px]"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <div
              className="flex justify-center items-center"
              onClick={handleClickSearch}
            >
              <Image src={Search} alt="Search" className="" />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Modal */}
      <AnimatePresence>
        {isModal && (
          <motion.nav
            animate={isModal ? "open" : "closed"}
            initial="default"
            exit="closed"
            variants={{
              closed: { opacity: 0, left: "-200%" },
              default: { opacity: 0, left: "-200%" },
              open: { opacity: 1, left: 0 },
            }}
            transition={{ duration: 0.3 }}
            className={classNames(
              "open",
              "absolute top-[98%] bg-transparent h-screen w-full"
            )}
          >
            <div className="bg-primary w-full h-auto shadow-xl pt-[10px] pb-[40px]">
              <div className="container flex gap-[30px]">
                <div className="flex gap-[10px] pl-[15px]">
                  {productLinks.map((productLink, index) => (
                    <div className="flex flex-col gap-[10px]" key={index}>
                      <Link
                        href=""
                        className="text-[14px] font-500 tablet:text-[16px] laptop:text-[18px]"
                        onClick={() => {
                          setModal(false);
                        }}
                      >
                        {t(`sex.${index === 0 ? "woman" : "man"}`)}
                      </Link>
                      <ul className="flex flex-col gap-[5px]">
                        {productLink.map((item, keys) => (
                          <li key={keys}>
                            <Link
                              href={item.link}
                              className="text-[14px] font-400 tablet:text-[16px] laptop:text-[18px]"
                              onClick={() => {
                                setModal(false);
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderComponent;
