import React from "react";

type ButtonProps = {
  title: string;
  className: string;
  onClick?: () => void;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonComponent;
