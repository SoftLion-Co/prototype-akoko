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
    <section className="w-full">
      <div className="container">
        {styles.map((item, index) => (
          <FilterButtonComponent
            key={index}
            text={t(`filterButton.${item.name.toLowerCase()}`)}
            isActive={item.isActive}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
