import React from "react";
import BlogCardComponent from "@/components/blog_page/BlogCardComponent";

const BlogPage = () => {
  const blogData = [
    {
      id: "1",
      title: "Топ-5 модних трендів весна-літо 2024 від AKOKO",
      text: "Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, ми розкажемо вам про все, що трендово цього сезону.",
      imageSrc: "https://deadline.com/wp-content/uploads/2023/12/angelina-jolie.jpg",
    },
    {
      id: "2",
      title: "Як обрати ідеальний образ: поради від стилістів AKOKO",
      text: "Отримайте поради від наших професійних стилістів про те, як підібрати ідеальний образ для будь-якої події. Наші експерти розкажуть вам, як виглядати стильно та впевнено в будь-якій ситуації.",
      imageSrc: "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "3",
      title: "За лаштунками: нова колекція AKOKO",
      text: "Поглибіться в атмосферу творчого процесу та дізнайтеся, як створюється нова колекція від AKOKO. Від ідеї до реалізації - кожна деталь має свою історію.",
      imageSrc: "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "4",
      title: "Аксесуари, які зроблять ваш образ неповторним",
      text: "Відкрийте для себе унікальні аксесуари від AKOKO, які додають шарму та стилю вашому образу. Намагаємося робити ваш стиль неповторним та вишуканим.",
      imageSrc: "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "5",
      title: "Весільна колекція від AKOKO: елегантність у кожній деталі",
      text: "Оголошуємо про нову весільну колекцію від AKOKO. Вишукані сукні, ексклюзивні дизайни та найкращі тканини - ми робимо кожен момент вашого весілля особливим.",
      imageSrc: "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "6",
      title: "Тренди взуття: виберіть ідеальні пари для будь-якого образу",
      text: "Погляньте на найгарячіші тренди взуття цього сезону від AKOKO. Від зручних кросівок до елегантних туфель - ми допоможемо вам знайти ідеальну пару для кожної обстановки.",
      imageSrc: "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
  ];
  
  

  return (
    <div className="grid grid-cols-1 gap-y-[60px] tablet:grid-cols-2 tablet:gap-y-[71px] tablet:gap-x-[64px] laptop:gap-y-[118px] laptop:gap-x-[108px] desktop:gap-y-[146px] desktop:gap-x-[134px]">
      {blogData.map((post) => (
        <BlogCardComponent
          key={post.id}
          blogId={post.id}
          title={post.title}
          imageSrc={post.imageSrc}
          text={post.text}
        />
      ))}
    </div>
  );
};

export default BlogPage;
