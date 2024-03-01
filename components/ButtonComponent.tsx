import React from "react";
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
      className={classNames(className, "bg-[#5B749A] text-primary rounded-md")}
      onClick={onClick}
    >
      {cartImage && (
        <Image
          className="filter brightness-0 invert w-[15px] h-[15px] tablet:w-[19px] tablet:h-[19px] laptop:w-[30px] laptop:h-[30px] desktop:w-[35px] desktop:h-[35px]"
          src={Cart}
          alt="cart"
        />
      )}
      {title}
    </button>
  );
};

export default ButtonComponent;
