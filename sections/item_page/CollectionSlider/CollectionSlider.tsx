"use client";

import React, { FC } from "react";
import MobileCollection from "./MobileCollection";
import DesktopCollection from "./DesktopCollection";
import { useTranslations } from "next-intl";

const CollectionSlider: FC = () => {
  const t = useTranslations("home");
  return (
    <section>
      <h1 className="my-[15px] tablet:my-[10px] laptop:my-[20px] desktop:my-[25px] container text-center">
        {t("new-collection")}
      </h1>
      <MobileCollection />
      <DesktopCollection />
    </section>
  );
};

export default CollectionSlider;
