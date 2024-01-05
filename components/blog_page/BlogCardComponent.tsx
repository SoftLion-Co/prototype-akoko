"use client"
import React, { useRef, useEffect, useState } from "react";
import { Link } from "@/navigation";
import Image from "next/image";

type BlogCardComponentProps = {
  blogId: string;
  title: string;
  imageSrc: string;
  text: string;
};

const BlogCardComponent = ({ blogId, title, text, imageSrc }: BlogCardComponentProps) => {
  const titleRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const titleElement = titleRef.current;

    if (titleElement) {
      const lineHeight = parseInt(window.getComputedStyle(titleElement).lineHeight);
      const maxLines = 2;

      if (titleElement.offsetHeight > lineHeight * maxLines) {
        titleElement.classList.add("truncate");
      }
    }
  }, []);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={`/blog/${blogId}`}>
      <div className={`relative group overflow-hidden ${isHovered ? "whitespace-normal" : ""}`}onMouseEnter={handleHover}
          onMouseLeave={handleLeave}>
        <Image
          src={imageSrc}
          alt="blog image"
          width={1000}
          height={1000}
          className="aspect-[53/55] object-cover"
        />
        <div
          className={`absolute bottom-0 bg-primary/75 h-[28%] group-hover:h-[60%] w-full py-3 laptop:py-6 desktop:py-7 px-1 laptop:px-2 desktop:px-[10px] transition-all duration-300`}
          
        >
          <h2
            ref={titleRef}
            className={`text-xl font-extralight laptop:text-3xl desktop:text-4xl mb-2 ${isHovered ? "" : "whitespace-nowrap overflow-hidden max-h-[2.5em] truncate"}`}
          >
            {title}
          </h2>
          <p className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-0 right-0 px-1 laptop:px-2 desktop:px-[10px]">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardComponent;
