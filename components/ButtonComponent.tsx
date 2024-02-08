import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import Cart from "./../images/icons/cart.svg";

interface ButtonProps {
  title: string;
  className?: string;
  cartImage: boolean;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  className,
  cartImage,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        className,
        "bg-[#5B749A] text-primary w-[206px] h-[69px] rounded-md text-18"
      )}
      onClick={onClick}
    >
      {cartImage && <Image className="filter brightness-0 invert" src={Cart} alt="cart" />}
      {title}
    </button>
  );
};

export default ButtonComponent;
