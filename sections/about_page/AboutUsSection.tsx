import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Clothes from "@/images/about-us_section/clothes.jpg";

const AboutUsSection = () => {
  const t = useTranslations("about");
  return (
    <section className="container flex flex-col gap-[55px] mt-[70px] mb-[150px]  tablet:gap-[70px] tablet:mt-[50px] tablet:mb-[270px] laptop:gap-[113px] laptop:mt-[125px] laptop:mb-[252px] desktop:mt-[230px] desktop:mb-[198px] desktop:gap-[129px]">
      <h1 className="text-center block laptop:hidden ">{t("title")}</h1>
      <div className="flex flex-col items-center  gap-[50px] laptop:flex-row tablet:gap-[60px] laptop:gap-[150px] desktop:gap-[180px] ">
        <Image
          className="w-full h-[420px] tablet:w-[450px] tablet:h-[550px] laptop:mt-[100px] laptop:w-[376px] laptop:h-[501px] desktop:mt-[35px] desktop:w-[430px] desktop:h-[572px]"
          src={Clothes}
          alt="Clothes"
        />
        <div className="w-full flex laptop:flex-col laptop:gap-[60px] desktop:w-[55%] desktop:gap-[70px]">
          <h1 className="hidden laptop:block">{t("title")}</h1>
          <p className="mobile:text-center">{t("text")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
