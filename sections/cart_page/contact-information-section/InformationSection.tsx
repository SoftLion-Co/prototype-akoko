import ContactForm from "@/components/cart_page/ContactForm";
import React from "react";

interface InformationProps {
  t: any;
}

const InformationSection: React.FC<InformationProps> = ({ t }) => {
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
