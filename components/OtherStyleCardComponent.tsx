import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";

interface CardProps {
  name: string;
  image: string;
  link: string;
  className?:string;
}

const OtherStyleCardComponent: React.FC<CardProps> = ({ name, image, link }) => {
  return (
    <div className="flex flex-col mobile:w-[35%] gap-[8px] justify-between items-center ">
      <Link href={link}>
        <Image
          className="object-cover w-[135px] h-[170px] tablet:w-[156px] tablet:h-[196px] laptop:w-[257px] laptop:h-[362px] desktop:w-[324px] desktop:h-[407px]"
          width={324}
          height={407}
          src={image}
          alt="Collection"
        />
      </Link>
      <p className="w-auto text-[8px] text-center tablet:text-[16px]  desktop:text-[20px]">
        {name}
      </p>
    </div>
  );
};

export default OtherStyleCardComponent;
