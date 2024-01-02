import React from "react";
import MainProductCard from "@/components/MainProductCard";

interface ProductCardData {
  productImg: string;
  name: string;
  color: string[];
  price: string;
}

const testProducts: ProductCardData[] = [
  {
    productImg:
      "https://content1.rozetka.com.ua/goods/images/original/301736389.jpg",
    name: "Sample Product 1 Sample Product 1 Sample Product 1",
    color: ["#00", "#00"],
    price: "$29.99",
  },
  {
    productImg:
      "https://content1.rozetka.com.ua/goods/images/original/301736389.jpg",
    name: "Sample Product 2",
    color: ["#00", "#00"],
    price: "$39.99",
  },
  {
    productImg:
      "https://content1.rozetka.com.ua/goods/images/original/301736389.jpg",
    name: "Sample Product 3",
    color: ["#00", "#00"],
    price: "$26.99",
  },
];

const Home: React.FC = () => {
  return (
    <section className="w-full">
      <div className="container">
        <h1 className="font-w-300">Hello world</h1>
        <h2>Для жінок</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vel
          deserunt magnam! Perspiciatis corporis neque voluptatum, temporibus,
          placeat ea officiis cumque ipsa quibusdam animi aspernatur omnis
          facilis ad, expedita voluptate.
        </p>

        <div className="flex gap-[55px] flex-basis-[calc(100%/3)] w-[calc(100%/3)]">
          {testProducts.map((product, index) => (
            <MainProductCard
              classNames="flex"
              key={index}
              productImg={product.productImg}
              name={product.name}
              color={product.color}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
