export default interface CartProps {
  products: {
    img: string;
    name: string;
    colors: string[];
    selectColor: string;
    size: string[];
    selectSize: string;
    count: number;
    price: number;
  }[];
}

export const data = [
  {
    img: "https://content.rozetka.com.ua/goods/images/big/348968783.jpg",
    name: "FFF",
    selectColor: "grey",
    colors: ["grey", "black", "green"],
    selectSize: "M",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    count: 9,
    price: 1500,
  },
  {
    img: "",
    name: "CC",
    selectColor: "pink",
    colors: ["pink", "white", "yellow"],
    selectSize: "L",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    count: 1,
    price: 1500,
  },
  {
    img: "",
    name: "GG",
    selectColor: "green",
    colors: ["green", "red", "pink"],
    selectSize: "S",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    count: 3,
    price: 1500,
  },
  {
    img: "",
    name: "AA",
    selectColor: "blue",
    colors: ["blue", "brown", "red"],
    selectSize: "L",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    count: 4,
    price: 1500,
  },
  {
    img: "",
    name: "SS",
    selectColor: "red",
    colors: ["red", "purple", "yellow", "green"],
    selectSize: "XL",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    count: 2,
    price: 1500,
  },
];

