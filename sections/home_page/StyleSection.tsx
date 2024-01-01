import { useTranslations } from "next-intl";
import React from "react";

export const StyleSection = () => {
  const t = useTranslations("home");
  return (
    <section className="container text-center">
      <h1>{t("style-section.title")}</h1>
    </section>
  );
};
