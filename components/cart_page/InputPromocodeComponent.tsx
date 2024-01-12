import React from "react";

interface InputProps {
  className: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPromoComponent: React.FC<InputProps> = ({
  className,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default InputPromoComponent;
