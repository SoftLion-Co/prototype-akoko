"use client"
import { useTranslations } from "next-intl";
import test from "@/images/test.png";
import Image from "next/image";
import { useState, useEffect } from "react";

type Sex = "man" | "woman";

interface WelcomeSectionProps {
  sex?: Sex;
}

function WelcomeSection({ sex }: WelcomeSectionProps) {
  const t = useTranslations("WelcomePage");
  const [selectedSex, setSelectedSex] = useState<Sex | null>(sex || null);

  const handleSexSelection = (selectedSex: Sex) => {
    localStorage.setItem("sex", selectedSex);
    setSelectedSex(selectedSex);
  };

  // Перевірка чи sex вже встановлено
  if (selectedSex) {
    // Якщо sex встановлено, можливо, ви хочете відобразити іншу частину вашого інтерфейсу або нічого не робити тут
    return null; // або відповідний компонент для вже вибраного статусу
  }

  // Якщо sex не встановлено, відображаємо секцію вибору статусу
  return (
    <section className="absolute bg-primary w-full flex flex-col justify-center items-center gap-y-16 text-center tablet:flex-row gap-x-28 laptop:gap-x-44 desktop:gap-x-56">
      <div className={`flex flex-col items-center ${selectedSex === 'woman' ? 'selected' : ''}`} onClick={() => handleSexSelection('woman')}>
        <Image src={test} alt={t("Women")} className="object-cover w-48 h-44 laptop:w-72 laptop:h-64 desktop:w-96 desktop:h-80" width={356} height={333} />
        <h1 className="text-sm tracking-wider font-medium mt-7 laptop:text-xl desktop:text-xl">{t("Women")}</h1>
      </div>
      <div className={`flex flex-col items-center ${selectedSex === 'man' ? 'selected' : ''}`} onClick={() => handleSexSelection('man')}>
        <Image src={test} alt={t("Men")} className="object-cover w-48 h-44 laptop:w-72 laptop:h-64 desktop:w-96 desktop:h-80" width={356} height={333} />
        <h1 className="text-sm tracking-wider font-medium mt-7 laptop:text-xl desktop:text-xl">{t("Men")}</h1>
      </div>
    </section>
  );
}

export default WelcomeSection;