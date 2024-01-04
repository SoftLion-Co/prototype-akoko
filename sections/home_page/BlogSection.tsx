import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import instagram from "@/images/blog_section/instagram.jpg";
import blog from "@/images/blog_section/blog.png";
import { Link } from "@/navigation";

type Props = {};

const BlogSection = (props: Props) => {
  const t = useTranslations("home.blog-section");
  return (
    <section className="container flex flex-col tablet:flex-row gap-20 justify-center items-center mb-24 tablet:mb-[150px] laptop:max-w-[1130px] laptop:gap-[120px] laptop:mb-[160px] desktop:max-w-[1364px] desktop:gap-[150px]">
      <Link
        href="/blog"
        className="flex flex-col gap-5 text-center laptop:gap-[32px] desktop:gap-10"
      >
        <h2 className="text-20 font-medium tablet:text-28 laptop:text-40 desktop:text-50">
          {t("blog")}
        </h2>
        <Image
          src={blog}
          alt="Blog"
          width={1000}
          height={590}
          className="object-cover h-[282px] tablet:h-80 laptop:h-[480px] desktop:h-[590px] desktop:w-[542px]"
        />
      </Link>
      <Link
        href="/blog"
        className="flex flex-col gap-5 text-center laptop:gap-[32px] desktop:gap-10"
      >
        <h2 className="text-20 font-medium tablet:text-28 laptop:text-40 desktop:text-50">
          {t("instagram")}
        </h2>
        <Image
          src={instagram}
          alt="Instagram"
          width={1000}
          height={590}
          className="object-cover h-[282px] tablet:h-80 laptop:h-[480px] desktop:h-[590px] desktop:w-[542px]"
        />
      </Link>
    </section>
  );
};

export default BlogSection;
