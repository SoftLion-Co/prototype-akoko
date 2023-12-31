import Image from "next/image";

import Cart from "@/images/icons/cart.svg";
import Wish from "@/images/icons/wish.svg";

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
    name: "Sample Product 1",
    color: ["#ff0000", "#ff0000"],
    price: "$29.99",
  },
  {
    productImg:
      "https://content1.rozetka.com.ua/goods/images/original/301736389.jpg",
    name: "Sample Product 2",
    color: ["#0000ff", "#ff0000"],
    price: "$39.99",
  },
];

const MainProductCard: React.FC<ProductCardData> = ({
  productImg,
  name,
  color,
  price,
}) => {
  return (
    <div className="">
      <Image className="" src={productImg} alt="Product" />

      <p>{name}</p>

      <div>
        {}
        <div className="color"></div>

        <div className="flex">
          <Image src={Cart} alt="Cart" />
          <Image src={Wish} alt="Wish" />
        </div>
      </div>

      <p>{price}</p>
    </div>
  );
};

export default MainProductCard;
