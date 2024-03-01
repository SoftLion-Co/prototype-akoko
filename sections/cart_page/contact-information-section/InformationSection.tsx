import ContactForm from "@/components/cart_page/ContactForm";
import React from "react";

interface InformationProps {
  t: any;
}

const InformationSection: React.FC<InformationProps> = ({ t }) => {
  return (
    <>
      <h3>{t("contact-information-section.title")}</h3>
      {/* <ContactForm /> */}
      <form
        action=""
        className="flex flex-col gap-[40px] tablet:gap-[60px] laptop:gap-[90px]"
      >
        <ContactForm t={t} />
      </form>
    </>
  );
};

export default InformationSection;
