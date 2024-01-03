"use client";
import { useState, useEffect } from "react";
import GenderModal from "@/components/welcome_page/GenderModal";

const WelcomeSection = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedGender = localStorage.getItem("gender");
    if (!storedGender) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "visible";
  };

  return showModal && <GenderModal onClose={handleCloseModal} />;
};


export default WelcomeSection;
