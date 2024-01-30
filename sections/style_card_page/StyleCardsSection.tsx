"use client";
import FilterButtonComponent from "@/components/FilterButtonComponent";
import StyleCardComponent from "@/components/StyleCardComponent";

import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

import { Pagination } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

type CardProps = {
  id: string;
  title: string;
  image: string;
  link: string;
};

type Style = {
  id: string;
  name: string;
  isActive: boolean;
};

const cardItem: CardProps[] = [
  {
    id: "streetwear",
    title: "Стиль 1",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "streetwear",
    title: "Стиль 2",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "leatherlook",
    title: "Стиль 3",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "party",
    title: "Стиль 4",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "casual",
    title: "Стиль 5",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "casual",
    title: "Стиль 6",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "casual",
    title: "Стиль 7",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "demin",
    title: "Стиль 8",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "party",
    title: "Стиль 9",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "demin",
    title: "Стиль 10",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "party",
    title: "Стиль 11",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "demin",
    title: "Стиль 12",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "demin",
    title: "Стиль 13",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "party",
    title: "Стиль 14",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    id: "demin",
    title: "Стиль 15",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
];

const initialStyles: Style[] = [
  { id: "demin", name: "Demin", isActive: false },
  { id: "casual", name: "Casual", isActive: false },
  { id: "party", name: "Party", isActive: false },
  { id: "leatherlook", name: "Leatherlook", isActive: false },
  { id: "streetwear", name: "Streetwear", isActive: false },
];

const StyleCardsSection = () => {

  const [styles, setStyles] = useState(initialStyles);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const isTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1279.98px)"
  );
  const isDesktop = useMediaQuery(
    "(min-width: 1280px) and (max-width: 1660px)"
  );

  const cardsPerRow = isMobile ? 1 : isTablet ? 3 : isDesktop ? 4 : 4;
  const cardsPerPage = cardsPerRow * 3;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const filteredCardItems = cardItem.filter((card) => {
    const activeStyles = styles.filter((style) => style.isActive);
    if (activeStyles.length === 0) {
      return true;
    } else {
      const matches = activeStyles.every((activeStyle) =>
        card.id.toLowerCase().includes(activeStyle.id.toLowerCase())
      );
      return matches;
    }
  });

  const paginatedCardItems = filteredCardItems.slice(startIndex, endIndex);

  const handleButtonClick = (id: string) => {
    setStyles((prevStyles) => {
      const updatedStyles = prevStyles.map((style) => ({
        ...style,
        isActive: style.id === id ? !style.isActive : false,
      }));
      return updatedStyles;
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="container mt-[47px] mb-[109px] tablet:mt-[120px] tablet:mb-[160px]">
      <div className="flex flex-col gap-[70px] mb-[109px] tablet:gap-[120px] tablet:mb-[150px] ">
        <div className="flex justify-center">
          {isMobile ? (
            <div className="container">
              <Carousel
                className=""
                withControls={false}
                loop
                align="start"
                slideGap="xl"
              >
                {styles.map((item, index) => (
                  <div className="flex gap-[20px]">
                  <FilterButtonComponent
                    key={index}
                    text={item.name}
                    isActive={item.isActive}
                    onClick={() => handleButtonClick(item.id)}
                  />
                </div>
                ))}
              </Carousel>
            </div>
          ) : (
            styles.map((item, index) => (
                <FilterButtonComponent
                  key={index}
                  text={item.name}
                  isActive={item.isActive}
                  onClick={() => handleButtonClick(item.id)}
                />
            ))
          )}
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-[42px] tablet:gap-[50px] laptop:gap-[40px] desktop:gap-[51px] ">
          {paginatedCardItems.map((card, index) => (
            <div key={index}>
              <StyleCardComponent
                key={card.id}
                name={card.title}
                image={card.image}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-center ">
        <Pagination
          size="lg"
          withControls={false}
          total={12}
          color="rgba(255, 255, 255, 0)"
          onChange={handlePageChange}
          value={currentPage}
          
          styles={{
            control: {
              border: "none",
              backgroundColor: "transparent",
              "&[data-active]": {
                color: "black",
                fontWeight: 700,
                border: "1px solid #CECECE",
                backgroundColor: "transparent",
              },
            },
            dots: {
              color: "#8B8B8B",
            },
          }}
        />
      </div>
    </section>
  );
};

export default StyleCardsSection;
