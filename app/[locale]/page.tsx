import React from "react";
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
      "#B22222": {
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

const Home: React.FC = () => {
  return (
    <section className="w-full mt-[50px]">
      <div className="container">
        <h1 className="font-w-300">Hello world</h1>
        <h2>Для жінок</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vel
          deserunt magnam! Perspiciatis corporis neque voluptatum, temporibus,
          placeat ea officiis cumque ipsa quibusdam animi aspernatur omnis
          facilis ad, expedita voluptate.
        </p>
      </div>
    </section>
  );
};

export default Home;
