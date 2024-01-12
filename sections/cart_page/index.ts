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
