import React from "react";
import InputComponent from "./InputComponent";

const ContactForm = () => {
  return (
    <>
      <InputComponent name="name" placeholder="Name" type="text" title="Name" />
      <InputComponent
        name="lastName"
        placeholder="Last name"
        type="text"
        title="Last name"
      />
      <InputComponent
        name="phoneNumber"
        placeholder="Phone number"
        type="number"
        title="Phone number"
      />
      <InputComponent
        name="email"
        placeholder="E-mail"
        type="text"
        title="E-mail"
      />
    </>
  );
};

export default ContactForm;
