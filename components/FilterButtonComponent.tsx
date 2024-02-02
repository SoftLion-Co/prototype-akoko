"use client";
import React from "react";

interface MainButtonProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const FilterButtonComponent: React.FC<MainButtonProps> = ({
  text,
  isActive,
  onClick,
  className
}) => {
  return (
    <button
    className={`w-[128px] h-[34px] rounded-full p-[11px] font-normal text-center text-[11px] leading-14 tablet:w-[190px] tablet:h-[55px] tablet:text-[18px] laptop:w-[275px] laptop:h-[73px] laptop:text-25  laptop:p-[23px] laptop:leading-8 ${
      isActive ? "bg-gray text-primary" : "bg-light-gray"
    }`}
      onClick={onClick}
    
    >
      {text}
    </button>
  );
};

export default FilterButtonComponent;
