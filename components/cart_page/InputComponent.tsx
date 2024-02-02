import { time } from "console";
import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  title: string;
}

const InputComponent: React.FC<InputProps> = ({
  placeholder,
  type,
  name,
  title,
}) => {
  return (
    <div className="flex flex-col tablet:gap-[20px] laptop:gap-[25px]">
      <label className="text-[15px] font-600 tracking-[0.6px] ps-[20px] tablet:text-[18px] tablet:tracking-[0.72px]">
        {title}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border-b border-[#CECECE] pe-[10px] py-[15px] ps-[30px] rounded-none focus:border-b-black"
      />
    </div>
  );
};

export default InputComponent;
