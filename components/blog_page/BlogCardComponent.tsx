import React from "react";
import { Link } from "@/navigation";
import Image from "next/image";

type BlogCardComponentProps = {
  blogId: string;
  title: string;
  imageSrc: string;
  text: string;
};

const BlogCardComponent = ({
  blogId,
  title,
  text,
  imageSrc,
}: BlogCardComponentProps) => {
  return (
    <Link href={`/blog/${blogId}`}>
      <div className="relative group overflow-hidden max-h-[300px] tablet:max-h-none">
        <Image
          src={imageSrc}
          alt="blog image"
          width={1000}
          height={1000}
          className="aspect-[53/55] object-cover"
        />
        <div className="absolute bottom-0 bg-primary/75 h-[28%] group-hover:h-[65%] tablet:group-hover:h-[60%] laptop:group-hover:h-[50%] desktop:group-hover:h-[40%] w-full py-3 laptop:py-6 desktop:py-7 px-1 laptop:px-2 desktop:px-[10px] transition-all duration-300">
          <h2 className="text-xl font-extralight laptop:text-3xl desktop:text-4xl mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-sm tablet:text-md laptop:text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-0 right-0 px-1 laptop:px-2 desktop:px-[10px] line-clamp-5">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardComponent;
