"use client"
import FilterButtonComponent from "@/components/FilterButtonComponent";
import { useState } from "react";
import { useTranslations } from "next-intl";

type Style = {
  name: string;
  isActive: boolean;
};

const initialStyles: Style[] = [
  { name: 'Demin', isActive: false },
  { name: 'Casual', isActive: false },
  { name: 'Party', isActive: false },
  { name: 'Leatherlook', isActive: false },
  { name: 'Streetwear', isActive: false },
];
export default function Home() {
const t = useTranslations("home")

  const [styles, setStyles] = useState(initialStyles);

  const handleButtonClick = (index: number) => {
    setStyles(prevStyles => {
      const updatedStyles = prevStyles.map((style, i) => ({
        ...style,
        isActive: i === index,
      }));
      return updatedStyles;
    });
  };
  return (
    <section className="w-full mt-[50px]">
      <div className="container">
        <h1 className="font-w-300">Hello world</h1>
        <h2>Для жІнок</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vel
          deserunt magnam! Perspiciatis corporis neque voluptatum, temporibus,
          placeat ea officiis cumque ipsa quibusdam animi aspernatur omnis
          facilis ad, expedita voluptate.
        </p>z
      </div>
    </section>
  );
}
