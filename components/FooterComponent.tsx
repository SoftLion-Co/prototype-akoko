"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/images/logo/Akoko.svg";

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
      <div className="container flex flex-col gap-[50px] py-20 tablet:gap-[200px]">
        <div className="flex flex-wrap laptop:flex-nowrap justify-between">
          <div className="flex mobile:flex-wrap gap-[40px] mobile:justify-between mb-[60px] tablet:gap-[84px] laptop:gap-[40px]">
            <div className="flex flex-col gap-9">
              <p className="text-primary">Women</p>
              <div className="flex flex-col gap-1">
                {WomenItems.map((item, index) => (
                  <Link className="text-primary" key={index} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <p className="text-primary">Men</p>
              <div className="flex flex-col gap-1">
                {MenItems.map((item, index) => (
                  <Link className="text-primary" key={index} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <p className="text-primary">Style</p>
              <div className="flex flex-col gap-1">
                {StyleItems.map((item, index) => (
                  <Link className="text-primary" key={index} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <p className="text-primary text-primary-footer">/</p>
              <div className="flex flex-col gap-1">
                {ListOfCategories.map((item, index) => (
                  <Link className="text-primary" key={index} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-col-reverse items-start tablet:gap-[370px] tablet:flex-row tablet:items-end laptop:items-start">
            <p className="text-primary mobile:block tablet:block laptop:hidden">
              © AKOKO 2024
            </p>

            <div className="mobile:mb-[50px]">
              <p className="text-primary text-base font-w-500 mobile:mb-[20px] tablet:mb-[28px] laptop:mb-[32px] desktop:mb-[38px]">
                Будь в курсі новинок
              </p>
              <div className="relative mobile:mb-[46px] tablet:mb-[60px] laptop:mb-[68px] desktop:mb-[86px]">
                <input
                  className="px-4 py-2 border-gray-300 focus:border-gray-500 focus:outline-none mobile:w-[200px] h-[34px] tablet:w-[254px] tablet:h-[42px] laptop:w-[304px] laptop:h-[50px] desktop:w-[362px] desktop:h-[60px]"
                  placeholder="Пошта"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="absolute inset-y-0 right-2 flex items-center ">
                  <div className="border border-gray-500 bg-black">
                    <button
                      className="rounded-md bg-gray-800 text-primary w-[32px] h-[24px] tablet:w-[40px] tablet:h-[30px] laptop:w-[48px] laptop:h-[36px] desktop:w-[56px] desktop:h-[44px]"
                      onClick={handleSubscribeClick}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                {SocialNetworks.map((item, index) => (
                  <Link key={index} href={item.href} target="_blank">
                    <Image src={item.social || ""} alt={item.name} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex mobile:flex-col items-center justify-center gap-[110px] tablet:gap-[200px] laptop:gap-[240px] laptop:items-start laptop:justify-start desktop:gap-[345px]">
          <p className="text-primary hidden laptop:block">© AKOKO 2024</p>
          <Image src={Logo} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
