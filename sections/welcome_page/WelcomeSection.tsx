import { useTranslations } from "next-intl";
import test from "@/images/test.png";
import Image from "next/image";


function WelcomeSection() {
  const t = useTranslations("WelcomePage");
  
  return (
    
    <section className="w-full flex flex-col justify-center items-center gap-y-16 text-center tablet:flex-row gap-x-28 laptop:gap-x-44 desktop:gap-x-56">     
    <div className="flex flex-col items-center">
        <Image src={test} alt={t("Women")} className="object-cover w-48 h-44 laptop:w-72 laptop:h-64 desktop:w-96 desktop:h-80" width={356} height={333} />
        <h1 className="text-sm tracking-wider font-medium mt-7 laptop:text-xl desktop:text-xl">{t("Women")}</h1>
      </div>
      <div className="flex flex-col items-center">
        <Image src={test} alt={t("Men")} className="object-cover w-48 h-44 laptop:w-72 laptop:h-64 desktop:w-96 desktop:h-80" width={356} height={333} />
        <h1 className="text-sm tracking-wider font-medium mt-7 laptop:text-xl desktop:text-xl">{t("Men")}</h1>
      </div>
    </section>
  );
}

export default WelcomeSection;
