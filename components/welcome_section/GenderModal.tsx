import { useTranslations } from "next-intl";
import test from "@/images/test.png";
import Image from "next/image";

const GenderModal = ({ onClose }: { onClose: any }) => {
  const t = useTranslations("header.sex");

  const handleGenderSelect = (selectedGender: any) => {
    localStorage.setItem("gender", selectedGender);
    onClose();
  };

  return (
    <section className="z-20 absolute bg-primary w-full top-0 h-screen-45 tablet:h-screen-85 laptop:h-screen-111 desktop:h-screen-150 flex flex-col justify-center items-center gap-y-16 text-center tablet:flex-row gap-x-28 laptop:gap-x-44 desktop:gap-x-56">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => handleGenderSelect("woman")}
      >
        <Image
          src={test}
          alt={t("Women")}
          className="object-cover w-48 h-44 laptop:w-72 laptop:h-64 desktop:w-96 desktop:h-80"
          width={356}
          height={333}
        />
        <h1 className="text-sm tracking-wider font-medium mt-7 laptop:text-xl desktop:text-xl">
          {t("woman")}
        </h1>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => handleGenderSelect("man")}
      >
        <Image
          src={test}
          alt={t("Men")}
          className="object-cover w-48 h-44 laptop:w-72 laptop:h-64 desktop:w-96 desktop:h-80"
          width={356}
          height={333}
        />
        <h1 className="text-sm tracking-wider font-medium mt-7 laptop:text-xl desktop:text-xl">
          {t("man")}
        </h1>
      </div>
    </section>
  );
};

export default GenderModal;
