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
      <div className="container flex flex-col gap-36 py-20">
        <div className="flex justify-between">
          <div className="flex gap-12">
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

          <div>
            <p className="text-primary text-base font-w-500 mb-10">
              Будь в курсі новинок
            </p>
            <div className="relative mb-20">
              <input
                className="w-96 h-16 w-full px-4 py-2 border-gray-300 focus:border-gray-500 focus:outline-none"
                placeholder="Пошта"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="absolute inset-y-0 right-2 flex items-center ">
                <div className="border border-gray-500 bg-black">
                  <button
                    className="w-14 h-11 rounded-md bg-gray-800 text-primary"
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

        <div className="flex gap-80">
          <p className="text-primary">© AKOKO 2024</p>
          <Image src={Logo} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
