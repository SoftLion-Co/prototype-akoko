"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import ButtonComponent from "../ButtonComponent";
import { products } from "@/sections/cart_page/index";

import CartCardComponent from "../cart_page/CartCardComponent";

const ModalImageSection = () => {
  const t = useTranslations("components.style-card");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section className="container">
      <Modal
        opened={opened}
        onClose={close}
        transitionProps={{ transition: "fade", duration: 400 }}
        size={800}
        centered
        overlayProps={{
          blur: 3,
        }}
        closeButtonProps={{
          size: "xl",
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-25 mb-[90px] text-center">{t("modal.title")}</h2>
          <div className="flex flex-col gap-[130px]">
            {products.slice(0, 2).map((item, index) => (
              <CartCardComponent
                key={index}
                isModal={true}
                img={item.img}
                name={item.name}
                selectColor={item.selectColor}
                selectSize={item.selectSize}
                colors={item.colors}
                sizes={item.size}
                translation={{
                  price: `${t("modal.card.price")}`,
                  color: `${t("modal.card.color")}`,
                  size: `${t("modal.card.size")}`,
                  measurement: `${t("modal.card.measurement")}`,
                }}
              />
            ))}
          </div>
          <div className="mb-[139px] mt-[130px] flex justify-center">
            <ButtonComponent
              title={t("modal.button")}
              className="flex justify-center items-center gap-[11px]"
              cartImage={true}
            />
          </div>
        </div>
      </Modal>

      <Button onClick={open} className="border-black">
        Open modal
      </Button>
    </section>
  );
};

export default ModalImageSection;
