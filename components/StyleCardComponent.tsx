import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import classNames from "classnames";

interface CartProps {
  name: string;
  image: string;
  link: string;
}

const StyleCardComponent: React.FC<CartProps> = ({ name, image, link }) => {
  return (
    <div className="w-full h-full flex flex-col gap-[8px] justify-between items-center tablet:w-auto tablet:h-auto">
      <Link href={link} className="h-full w-full">
        <Image
          className="object-cover w-full h-[380px] tablet:w-[160px] tablet:h-[210px] laptop:w-[240px] laptop:h-[360px] desktop:min-w-[315px] desktop:h-[420px]"
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
