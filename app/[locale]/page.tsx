import React from "react";
import MainProductCard from "@/components/MainProductCard";

interface ProductCardData {
  array?: {
    [color: string]: {
      image: string;
      size: string[];
    };
  };
  nameProduct: string;
  price?: string;
  showAvailability?: boolean;
  classNames?: string;
}

const testProducts: ProductCardData[] = [
  {
    nameProduct: "Sample Product 1",
    array: {
      "#B22222": {
        image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
        size: ["S", "M", "L"],
      },
      "#384442": {
        image: "https://content.rozetka.com.ua/goods/images/big/300702643.jpg",
        size: ["S", "M", "L"],
      },
    },
    price: "$29.99",
  },
  {
    nameProduct: "Sample Product 2",
    array: {
      "#3c3c54": {
        image: "https://content2.rozetka.com.ua/goods/images/big/218974949.jpg",
        size: ["S", "M", "L"],
      },
      "#161618": {
        image: "https://content.rozetka.com.ua/goods/images/big/241657054.jpg",
        size: ["S", "M", "L"],
      },
    },
    price: "$67.49",
  },
  {
    nameProduct: "Sample Product 3",
    array: {
      "#585139": {
        image: "https://content.rozetka.com.ua/goods/images/big/384059048.jpg",
        size: ["S", "M", "L"],
      },
      "#434347": {
        image: "https://content1.rozetka.com.ua/goods/images/big/384059158.jpg",
        size: ["S", "M", "L"],
      },
    },
    price: "$34.99",
  },
];

const Home: React.FC = () => {
  return (
    <section className="w-full mt-[50px]">
      <div className="container">
        {/* <h1 className="font-w-300">Hello world</h1>
        <h2>Для жінок</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vel
          deserunt magnam! Perspiciatis corporis neque voluptatum, temporibus,
          placeat ea officiis cumque ipsa quibusdam animi aspernatur omnis
          facilis ad, expedita voluptate.
        </p> */}

        <div className="flex justify-center flex-wrap gap-[55px] pt-[40px] pb-[80px] tablet:justify-start">
          {testProducts.map((product, index) => (
            <MainProductCard
              classNames="flex"
              key={index}
              // nameProduct={product.nameProduct}
              {...product}
              showAvailability={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
