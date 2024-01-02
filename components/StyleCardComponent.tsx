import React from "react";
import Image from "next/image";

interface CartProps {
  name: string;
  img?: string;
}

const StyleCardComponent: React.FC<CartProps> = ({ name, img }) => {
  return (
    <div className="flex flex-col justify-between !min-h-[210px]">
      <Image
        className="bg-blue w-full object-cover !min-w-[160px] !min-h-[200px]"
        src={""}
        alt="Collection"
      />
      <p className="w-full">{name}</p>
    </div>
  );
};

export default StyleCardComponent;
