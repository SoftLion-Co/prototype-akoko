import React from "react";
import NavigationComponent from "@/components/NavigationComponent";
import MainProductCard from "@/components/MainProductCard";

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

const page = () => {
  const links = [{ title: "Список Бажань", href: "/page" }];

  return (
    <section>
      <div className="mt-[80px] mb-[80px]">
        <NavigationComponent links={links} />
      </div>

      <div className="container">
        <div className="flex justify-between gap-y-[100px] flex-wrap w-[calc(100%-400px)]">
          {testProducts.map((item, index) => (
            <MainProductCard key={index} array={item.array} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
