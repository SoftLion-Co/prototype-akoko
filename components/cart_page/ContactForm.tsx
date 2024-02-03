import React from "react";
import InputComponent from "./InputComponent";

interface ContactProps {
  t: any;
}

const ContactForm: React.FC<ContactProps> = ({ t }) => {
  return (
    <>
      <InputComponent
        name="name"
        placeholder={t("contact-information-section.input.name")}
        type="text"
        title={t("contact-information-section.input.name")}
      />
      <InputComponent
        name="lastName"
        placeholder={t("contact-information-section.input.last-name")}
        type="text"
        title={t("contact-information-section.input.last-name")}
      />
      <InputComponent
        name="phoneNumber"
        placeholder={t("contact-information-section.input.phone-number")}
        type="number"
        title={t("contact-information-section.input.phone-number")}
      />
      <InputComponent
        name="email"
        placeholder={t("contact-information-section.input.e-mail")}
        type="text"
        title={t("contact-information-section.input.e-mail")}
      />
    </>
  );
};

export default ContactForm;
