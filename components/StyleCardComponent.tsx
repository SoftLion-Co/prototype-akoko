import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";

interface CartProps {
  name: string;
  image: string;
  link: string;
}

const StyleCardComponent: React.FC<CartProps> = ({ name, image, link }) => {
  return (
    <div className="flex flex-col gap-[8px] justify-between items-center">
      <Link href={link}>
        <Image
          className="border min-w-[160px] w-[220px] bg-center object-cover h-[200px] tablet:w-[160px] tablet:h-[210px] laptop:w-[240px] laptop:h-[360px] desktop:min-w-[315px] desktop:h-[420px]"
          src={image}
          width={325}
          height={420}
          alt="Collection"
        />
      </Link>
      <p className="w-auto text-[14px] text-center laptop:text-[16px] desktop:text-[20px]">
        {name}
      </p>
    </div>
  );
};

export default StyleCardComponent;
