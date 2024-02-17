import ButtonComponent from "@/components/ButtonComponent";
import { Carousel } from "@mantine/carousel";
import { useTranslations } from "next-intl";

const StylishImageSection = () => {
    const t = useTranslations("style");
  return (
    <section className="container">
      <h1 className="text-center">Підбери свій образ</h1>

      <ButtonComponent title="" className="desktop:w-[268px] h-[61px]"/>
    </section>
  );
};

export default StylishImageSection;
