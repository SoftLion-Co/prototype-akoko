"use client"
import { useState, useEffect } from 'react';
import GenderModal from "@/components/welcome_page/GenderModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Перевірка чи вже визначено значення статі в local storage
    const storedGender = localStorage.getItem('gender');
    if (!storedGender) {
      setShowModal(true);

      // Додаємо обробник подій для блокування прокрутки
      const handleScroll = () => {
        document.documentElement.style.overflow = 'hidden';
      };

      // Встановлюємо обробник подій при відкритті модалки
      window.addEventListener('scroll', handleScroll);

      // Повертаємо функцію з вибором
      return () => {
        // Видаляємо обробник подій та повертаємо прокрутку
        window.removeEventListener('scroll', handleScroll);
        document.documentElement.style.overflow = 'auto';
      };
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <GenderModal onClose={handleCloseModal} />}
      {/* Додайте ваш вміст */}
    </div>
  );
};

export default Home;
