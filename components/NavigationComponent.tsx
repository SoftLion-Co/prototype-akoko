"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import vector from "@/images/icons/vector.svg";
import { useRouter } from "next/navigation";

interface NavigationComponentProps {
  links: { title: string; href: string }[];
}

const NavigationComponent = ({ links }: NavigationComponentProps) => {
  const router = useRouter();

  const t = useTranslations("components");

  const allLinks = [
    {
      title: t("home"),
      href: "//",
    },
    ...links,
  ];

  const separator = "-";

  const handleImageClick = () => {
    if (router && router.back) {
      router.back();
    }
  };

  const items = allLinks.map(({ title, href }, index) => {
    // Видаляємо "/" на початку href, якщо він присутній
    const cleanHref = href.startsWith("/") ? href.substring(1) : href;

    return index === allLinks.length - 1 ? (
      // Останній елемент не огорнюється Link
      <span className="cursor-not-allowed text-black/[.65]" key={index}>
        {title}
      </span>
    ) : (
      // Всі інші елементи огорнюються Link
      <Link href={cleanHref} key={index}>
        {title}
      </Link>
    );
  });

  return (
    <div className="container flex gap-2.5 text-sm tablet:text-lg items-center">
      <button className="rotate-180 mr-9" onClick={handleImageClick}>
        <Image src={vector} alt="<" className="h-5 w-9 text-black" />
      </button>
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <span className="pointer-events-none">{separator}</span>
          )}
          {item}
        </Fragment>
      ))}
    </div>
  );
};

export default NavigationComponent;
