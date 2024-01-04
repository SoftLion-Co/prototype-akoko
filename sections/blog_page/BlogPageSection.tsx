import React from "react";
import BlogCardComponent from "@/components/blog_page/BlogCardComponent";

const BlogPage = () => {
  const blogPosts = [
    {
      id: "234",
      title: "Назва статті",
      imageSrc:
        "https://deadline.com/wp-content/uploads/2023/12/angelina-jolie.jpg",
    },
    {
      id: "567",
      title: "Sample Blog Title 2",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "234",
      title: "Назва статті",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "567",
      title: "Sample Blog Title 2",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "234",
      title: "Назва статті",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "567",
      title: "Sample Blog Title 2",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-y-[68px] tablet:gap-y-[76px] tablet:gap-x-[84px] laptop:gap-y-[128px] laptop:gap-x-[141px] desktop:gap-y-[161px] desktop:gap-x-[178px]">
      {blogPosts.map((post) => (
        <BlogCardComponent
          key={post.id}
          blogId={post.id}
          title={post.title}
          imageSrc={post.imageSrc}
        />
      ))}
    </div>
  );
};

export default BlogPage;
