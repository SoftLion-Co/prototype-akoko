import React from "react";
import NavigationComponent from "@/components/NavigationComponent";
import { useTranslations } from "next-intl";
import BlogPageSection from "@/sections/blog_page/BlogPageSection";

function Blog() {
  const t = useTranslations("home.blog-section");
  const links = [{ title: t("blog"), href: "" }];

  return (
    <section className="container mb-28 tablet:mb-40">
      <NavigationComponent links={links} />
      <BlogPageSection />
    </section>
  );
}

export default Blog;
