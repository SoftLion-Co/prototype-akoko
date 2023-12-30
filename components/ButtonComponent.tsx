import React from "react";

interface ButtonProps {
  className: string;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      button
    </button>
  );
};

export default ButtonComponent;
