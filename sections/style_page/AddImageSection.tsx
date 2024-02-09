"use client";
import MainProductCard from "@/components/MainProductCard";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface ProductCardData {
  arrayColection?: {
    nameProduct: string;
    collectionImage: string;
  };

  array?: {
    [color: string]: {
      nameProduct: string;
      image: string;
      size: string[];
      price: string;
    };
  };

  classNames?: string;
}

const testProducts: ProductCardData[] = [
  {
    arrayColection: {
      nameProduct: "Colection Product 1",
      collectionImage:
        "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    },

    array: {
      "#161618": {
        nameProduct: "Colection Product 1 Rad",
        image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
        size: ["S", "M", "L"],
        price: "$29.99",
      },

      "#384442": {
        nameProduct: "Colection Product 1 Green",
        image: "https://content.rozetka.com.ua/goods/images/big/300702643.jpg",
        size: ["S", "M", "L"],
        price: "$29.99",
      },
    },
  },
  {
    arrayColection: {
      nameProduct: "Colection Product 1",
      collectionImage:
        "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    },

    array: {
      "#161618": {
        nameProduct: "Colection Product 1 Rad",
        image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
        size: ["S", "M", "L"],
        price: "$29.99",
      },

      "#384442": {
        nameProduct: "Colection Product 1 Green",
        image: "https://content.rozetka.com.ua/goods/images/big/300702643.jpg",
        size: ["S", "M", "L"],
        price: "$29.99",
      },
    },
  },
  {
    arrayColection: {
      nameProduct: "Colection Product 1",
      collectionImage:
        "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    },

    array: {
      "#161618": {
        nameProduct: "Colection Product 1 Rad",
        image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
        size: ["S", "M", "L"],
        price: "$29.99",
      },

      "#384442": {
        nameProduct: "Colection Product 1 Green",
        image: "https://content.rozetka.com.ua/goods/images/big/300702643.jpg",
        size: ["S", "M", "L"],
        price: "$29.99",
      },
    },
  },
  {
    arrayColection: {
      nameProduct: "Colection Product 1",
      collectionImage:
        "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    },

    array: {
      "#161618": {
        nameProduct: "Colection Product 1 Rad",
        image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
        size: ["S", "M", "L"],
        price: "$29.99",
      },

      "#384442": {
        nameProduct: "Colection Product 1 Green",
        image: "https://content.rozetka.com.ua/goods/images/big/300702643.jpg",
        size: ["S", "M", "L"],
        price: "$29.99",
      },
    },
  },

  {
    arrayColection: {
      nameProduct: "Colection Product 2",
      collectionImage:
        "https://content.rozetka.com.ua/goods/images/big/377597554.jpg",
    },
    array: {
      "#3c3c54": {
        nameProduct: "Colection Product 2 Blue",
        image: "https://content2.rozetka.com.ua/goods/images/big/218974949.jpg",
        size: ["S", "M", "L"],
        price: "$67.49",
      },
      "#161618": {
        nameProduct: "Colection Product 2 Dark Gray",
        image: "https://content.rozetka.com.ua/goods/images/big/241657054.jpg",
        size: ["S", "M", "L"],
        price: "$67.49",
      },
    },
  },
  {
    arrayColection: {
      nameProduct: "Colection Product 3",
      collectionImage:
        "https://content2.rozetka.com.ua/goods/images/big/244060267.jpg",
    },
    array: {
      "#585139": {
        nameProduct: "Colection Product 3 Khaki",
        image: "https://content.rozetka.com.ua/goods/images/big/384059048.jpg",
        size: ["S", "M", "L"],
        price: "$34.99",
      },
      "#434347": {
        nameProduct: "Colection Product 3 Gray",
        image: "https://content1.rozetka.com.ua/goods/images/big/384059158.jpg",
        size: ["S", "M", "L"],
        price: "$34.99",
      },
    },
  },
];

const AddImageSection = () => {
  const t = useTranslations("style");

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1279.98);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="container mb-[70px] tablet:mb-[84px] laptop:mb-[154px] desktop:mb-[130px]">
      <div className="flex flex-col gap-[43px] tablet:gap-[60px] laptop:gap-[86px] desktop:gap-[120px] ">
        <h1>{t("add-image-section.title")}</h1>
        <div className="flex flex-wrap justify-center tablet:justify-between laptop:gap-[147px] desktop:gap-[164px]">
          {testProducts
            .filter((_, index) => index < (isTablet ? testProducts.length - 2 : 6))
            .map((data, index) => (
              <MainProductCard key={index} {...data} classNames="" />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AddImageSection;
