import React from "react";
import { Link } from "@/navigation";
import Image from "next/image";

type BlogCardComponentProps = {
  blogId: string;
  title: string;
  imageSrc: string;
};

const BlogCardComponent = ({
  blogId,
  title,
  imageSrc,
}: BlogCardComponentProps) => {
  return (
    <Link href={`/blog/${blogId}`}>
      <div className="relative">
        <Image
          src={imageSrc}
          alt="blog image"
          width={1000}
          height={1000}
          className="aspect-[53/55] object-cover"
        />
        <div className="absolute flex items-center h-10 bottom-[19%] bg-[#00000070] pr-3">
          <h2 className="text-primary text-lg font-extralight">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardComponent;
