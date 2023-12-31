"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/images/logo/Akoko.svg";
import ArrowButton from "@/images/icons/arrow-button.svg";

import Instagram from "@/images/social-networks/instagram.svg";
import Facebook from "@/images/social-networks/facebook.svg";

type Category = {
  name: string;
  href: string;
  social?: string;
};

const WomenItems: Category[] = [
  { name: "Куртки", href: "" },
  { name: "Спідниці", href: "" },
  { name: "Жакети", href: "" },
  { name: "Блузи", href: "" },
  { name: "Светри", href: "" },
  { name: "Піджаки", href: "" },
  { name: "Шапки", href: "" },
  { name: "Джинси", href: "" },
  { name: "Топи", href: "" },
  { name: "Костюми", href: "" },
  { name: "Шорти", href: "" },
  { name: "Футболки", href: "" },
];

const MenItems: Category[] = [
  { name: "Куртки", href: "" },
  { name: "Джинси", href: "" },
  { name: "Штани", href: "" },
  { name: "Піджаки", href: "" },
  { name: "Сорочки", href: "" },
  { name: "Светри", href: "" },
  { name: "Жилети", href: "" },
  { name: "Футболки", href: "" },
  { name: "Худі", href: "" },
];

const StyleItems: Category[] = [
  { name: "Denim", href: "" },
  { name: "Casual", href: "" },
  { name: "Party", href: "" },
  { name: "Leather look", href: "" },
  { name: "Streetwear", href: "" },
];

const ListOfCategories: Category[] = [
  { name: "Блог", href: "" },
  { name: "Оплата та доставка", href: "" },
  { name: "Таблиця розмірів", href: "" },
  { name: "Подарункові карти", href: "" },
  { name: "Відгуки", href: "" },
  { name: "Про нас", href: "" },
  { name: "Подарункові сертифікати", href: "" },
  { name: "Відгуки", href: "" },
  { name: "Доставка", href: "" },
];

const SocialNetworks: Category[] = [
  { social: Instagram, name: "Instagram", href: "https://www.instagram.com/" },
  { social: Facebook, name: "Facebook", href: "https://www.facebook.com/" },
];

const FooterComponent = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubscribeClick = () => {
    const serverEndpoint = "https://mail.google.com/mail/u/0/?pli=1#inbox";

    fetch(serverEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <footer className="bg-primary-footer">
      <div className="container flex flex-col gap-[50px] py-20 tablet:gap-[200px] laptop:gap-[110px] desktop:gap-[156px]">
        <div className="flex flex-wrap laptop:flex-nowrap justify-between">
          <div className="flex mobile:flex-wrap gap-[40px] mobile:justify-between mb-[60px] tablet:gap-[76px] laptop:gap-[40px] laptop:mb-[0]">
            <div className="flex flex-col gap-9">
              <p className="text-primary text-[18px] tablet:text-[22px] laptop:text-[18px] desktop:text-[22px]">
                Women
              </p>
              <div className="flex flex-col gap-1">
                {WomenItems.map((item, index) => (
                  <Link
                    className="text-primary text-[14px] tablet:text-[18px] laptop:text-[16px] desktop:text-[18px]"
                    key={index}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <p className="text-primary text-[18px] tablet:text-[22px] laptop:text-[18px] desktop:text-[22px]">
                Men
              </p>
              <div className="flex flex-col gap-1">
                {MenItems.map((item, index) => (
                  <Link
                    className="text-primary text-[14px] tablet:text-[18px] laptop:text-[16px] desktop:text-[18px]"
                    key={index}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <p className="text-primary text-[18px] tablet:text-[22px] laptop:text-[18px] desktop:text-[22px]">
                Style
              </p>
              <div className="flex flex-col gap-1">
                {StyleItems.map((item, index) => (
                  <Link
                    className="text-primary text-[14px] tablet:text-[18px] laptop:text-[16px] desktop:text-[18px]"
                    key={index}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <p className="text-primary text-primary-footer text-[18px] mobile:hidden tablet:text-[22px] laptop:text-[18px] desktop:text-[22px]">
                /
              </p>
              <div className="flex flex-col gap-1">
                {ListOfCategories.map((item, index) => (
                  <Link
                    className="text-primary text-[14px] tablet:text-[18px] laptop:text-[16px] desktop:text-[18px]"
                    key={index}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-col-reverse items-start tablet:gap-[370px] tablet:flex-row tablet:items-end laptop:items-start">
            <p className="text-primary mobile:block tablet:block tablet:text-[16px] laptop:hidden text-[12px]">
              © AKOKO 2024
            </p>

            <div className="mobile:mb-[50px]">
              <p className="text-primary text-base font-w-500 mb-[20px] text-[14px] tablet:mb-[28px] tablet:text-[16px] laptop:mb-[32px] laptop:text-[20px] desktop:mb-[38px] desktop:text-[26px]">
                Будь в курсі новинок
              </p>
              <div className="relative mobile:mb-[46px] tablet:mb-[60px] laptop:mb-[68px] desktop:mb-[86px]">
                <input
                  className="border-gray-300 focus:border-gray-500 focus:outline-none w-[200px] py-[8px] pl-[14px] text-[12px] tablet:w-[254px] tablet:py-[6px] tablet:pl-[22px] tablet:h-[42px] laptop:w-[304px] laptop:py-[26px]
                  laptop:pl-[26px] laptop:text-[14px] desktop:w-[362px] desktop:py-[30px] desktop:pl-[32px] desktop:text-[16px]"
                  placeholder="Пошта"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="absolute inset-y-0 right-1 flex items-center ">
                  <div className="border border-gray-500 bg-black">
                    <button
                      className="flex items-center justify-center rounded-md bg-gray-800 text-primary w-[32px] h-[24px] tablet:w-[40px] tablet:h-[30px] laptop:w-[48px] laptop:h-[36px] desktop:w-[56px] desktop:h-[44px]"
                      onClick={handleSubscribeClick}
                    >
                      <Image
                        className="rotate-[270deg]"
                        src={ArrowButton}
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                {SocialNetworks.map((item, index) => (
                  <Link key={index} href={item.href} target="_blank">
                    <Image
                      className="w-[28px] tablet:w-[36px] laptop:w-[42px] desktop:w-[50px]"
                      src={item.social || ""}
                      alt={item.name}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex mobile:flex-col items-center justify-center gap-[110px] tablet:gap-[200px] laptop:gap-[240px] laptop:items-end laptop:justify-start desktop:gap-[364px]">
          <p className="text-primary hidden laptop:block text-[14px] desktop:text-[16px]">
            © AKOKO 2024
          </p>
          <Image
            className="w-[252px] tablet:w-[482px] laptop:w-[408px] desktop:w-[484px]"
            src={Logo}
            alt="Logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
