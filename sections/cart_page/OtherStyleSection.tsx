import OtherStyleCardComponent from "@/components/OtherStyleCardComponent";
import { useTranslations } from "next-intl";

type CardProps = {
  title: string;
  image: string;
  link: string;
};

const cardItem: CardProps[] = [
  {
    title: "Стиль 1",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    title: "Стиль 2",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    title: "Стиль 3",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
  {
    title: "Стиль 4",
    image: "https://content.rozetka.com.ua/goods/images/big/300703138.jpg",
    link: "/style",
  },
];

const OtherStyleSection = () => {
  const t = useTranslations("home");
  return (
    <section className="w-full h-auto  ">
      <div className="container flex flex-col gap-[34px] tablet:gap-[56px] laptop:gap-[89px] desktop:gap-[120px]">
        <h1 className="text-center">{t("other-style-section.title")}</h1>
        <div className="flex flex-wrap gap-[20px] justify-center tablet:justify-between tablet:gap-[24px] laptop:gap-[40px] desktop:gap-[51px]">
          {cardItem.map((card, index) => (
            <OtherStyleCardComponent
              key={index}
              link={card.link}
              name={card.title}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherStyleSection;
