"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ButtonComponent from "@/components/ButtonComponent";
import { Select } from "@mantine/core";

const SertificateSection = () => {
  const t = useTranslations("sertificate-page");
  return (
    <section className="container mb-[160px] mt-[120px]">
      <div className="flex flex-row-reverse gap-[45px] tablet:gap-[66px] laptop:gap-[155px]">
        <div className="flex flex-col gap-[20px] tablet:gap-[26px] laptop:gap-[43px] desktop:gap-[50px]">
          <h1>{t("sertificate-section.title")}</h1>
          <Select
            className="w-[110px] tablet:w-[140px] laptop:w-[210px] desktop:w-[250px]"
            data={["1 000 UAH", "2 000 UAH", "3 000 UAH", "5 000 UAH"]}
            defaultValue="1 000 UAH"
            variant="underline"
            styles={{
              dropdown: {
                maxHeight: 300,
                maxWidth: "220px",
              },
              input: {
                padding: "5px",
                height: "32px",
                width: "105px",
                fontSize: "14px",
                fontWeight: 500,
                borderBottom: "1px solid #000",
                "@media (min-width: 768px)": {
                  width: "135px",
                  fontSize: "18px",
                },
                "@media (min-width: 1280px)": {
                  padding: "10px",
                  height: "70px",
                  width: "205px",
                  fontSize: "30px",
                },
                "@media (min-width: 1600px)": {
                  width: "235px",
                  fontSize: "35px",
                },
              },
            }}
          />
          <p className="mb-[20px] text-[12px] tablet:text-[14px] laptop:text-[20px] desktop:text-[23px] tablet:mb-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </p>
          <ButtonComponent
            title="В кошик"
            cartImage={true}
            className="flex justify-center items-center gap-[11px] w-[126px] h-[40px] text-[14px] tablet:w-[145px] tablet:h-[45px] laptop:w-[226px] laptop:h-[75px] desktop:w-[259px] desktop:h-[86px] laptop:text-[20px] desktop:text-[23px]"
          />
        </div>
        <>
          <Image
            src="https://www.printrust.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/c/e/certificate_2-min.jpg"
            alt="card"
            className="w-full h-[320px] tablet:w-[299px] tablet:h-[377px] laptop:w-[493px] laptop:h-[622px] desktop:w-[566px] desktop:h-[715px]"
            width={566}
            height={715}
          />
        </>
      </div>
    </section>
  );
};

export default SertificateSection;
