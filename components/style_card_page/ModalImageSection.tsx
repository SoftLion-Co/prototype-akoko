"use client";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import ButtonComponent from "../ButtonComponent";

import Image from "next/image";
import { Link } from "@/navigation";
import Close from "./../../images/icons/close.svg";

const ModalImageSection = () => {
  const t = useTranslations("components.style-card");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section>

      <Modal className="w-[100%] h-[100%]" opened={opened} onClose={close} closeButtonProps={{
          size: "xl"
        }}>
        <h2>{t("modal.title")}</h2>

        <ButtonComponent
          title={t("modal.button")}
          className="flex justify-center items-center gap-[11px]"
          cartImage={true}
        />
      </Modal>

      <Button onClick={open} className="border-black">
        Open modal
      </Button>
    </section>
  );
};

export default ModalImageSection;
