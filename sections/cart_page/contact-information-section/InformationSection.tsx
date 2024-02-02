import ContactForm from "@/components/cart_page/ContactForm";
import React, { RefObject } from "react";

const InformationSection: React.FC = () => {
  return (
    <>
      <h3>Конактна інформація</h3>
      {/* <ContactForm /> */}
      <form
        action=""
        className="flex flex-col gap-[40px] tablet:gap-[60px] laptop:gap-[90px]"
      >
        <ContactForm />
      </form>
    </>
  );
};

export default InformationSection;
