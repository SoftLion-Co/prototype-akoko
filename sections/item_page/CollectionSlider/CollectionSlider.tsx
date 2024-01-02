"use client";

import React, { FC } from "react";
import MobileCollection from "./MobileCollection";
import DesktopCollection from "./DesktopCollection";
import { useTranslations } from "next-intl";

const CollectionSlider: FC = () => {
  const t = useTranslations("home");
  return (
    <section>
      <h1 className="my-[40px] laptop:my-[60px] desktop:my-[70px] container text-center">
        {t("new-collection")}
      </h1>
      <MobileCollection />
      <DesktopCollection />
    </section>
  );
};

export default CollectionSlider;
