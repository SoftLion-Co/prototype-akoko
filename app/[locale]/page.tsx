import React from "react";
import MainProductCard from "@/components/MainProductCard";

interface ProductCardData {
  productImg: string;
  name: string;
  color: string[];
  price: string;
  availability: string;
}

const testProducts: ProductCardData[] = [
  {
    productImg:
      "https://content1.rozetka.com.ua/goods/images/original/301736389.jpg",
    name: "Sample Product 1",
    color: ["black", "blue"],
    price: "$29.99",
    availability: "11шт",
  },
  {
    productImg:
      "https://content1.rozetka.com.ua/goods/images/original/301736389.jpg",
    name: "Sample Product 2",
    color: ["red", "blue"],
    price: "$39.99",
    availability: "16шт",
  },
  {
    productImg:
      "https://content1.rozetka.com.ua/goods/images/original/301736389.jpg",
    name: "Sample Product 3",
    color: ["red", "blue"],
    price: "$26.99",
    availability: "25шт",
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

        <div className="flex flex-wrap gap-[55px]">
          {testProducts.map((product, index) => (
            <MainProductCard
              classNames="flex"
              key={index}
              productImg={product.productImg}
              name={product.name}
              color={product.color} 
              price={product.price}
              availability={product.availability}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
