"use client";
import React, { useEffect, useState } from "react";
import BlogCardComponent from "@/components/blog_page/BlogCardComponent";
import { Pagination } from "@mantine/core";
import PaginationComponent from "@/components/PaginationComponent";

const BlogPage = () => {
  const blogData = [
    {
      id: "1",
      title:
        "1. Топ-5 модних трендів весна-літо 2024 від AKOKO Топ-5 модних трендів весна-літо 2024 від AKOKO",
      text: "Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів,Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, ми розкажемо вам про все, що трендово цього сезону.",
      imageSrc:
        "https://deadline.com/wp-content/uploads/2023/12/angelina-jolie.jpg",
    },
    {
      id: "2",
      title: "2. Як обрати ідеальний образ: поради від стилістів AKOKO",
      text: "Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, Отримайте поради від наших професійних стилістів про те, як підібрати ідеальний образ для будь-якої події. Отримайте поради від наших професійних стилістів про те, як підібрати ідеальний образ для будь-якої події. Отримайте поради від наших професійних стилістів про те, як підібрати ідеальний образ для будь-якої події. Отримайте поради від наших професійних стилістів про те, як підібрати ідеальний образ для будь-якої події. Наші експерти розкажуть вам, як виглядати стильно та впевнено в будь-якій ситуації.",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "3",
      title: "3. За лаштунками: нова колекція AKOKO",
      text: "Поглибіться в атмосферу творчого процесу та дізнайтеся, як створюється нова колекція від AKOKO. Від ідеї до реалізації Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, - кожна деталь має свою історію.",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "4",
      title: "4. Аксесуари, які зроблять ваш образ неповторним",
      text: "Відкрийте для себе унікальні аксесуари від AKOKO, які додають шарму та стилю вашому образу. Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, Намагаємося робити ваш стиль неповторним та вишуканим.",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "5",
      title: "5. Весільна колекція від AKOKO: елегантність у кожній деталі",
      text: "Оголошуємо про нову весільну колекцію від AKOKO.  Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, Вишукані сукні, ексклюзивні дизайни та найкращі тканини - ми робимо кожен момент вашого весілля особливим.",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "6",
      title: "6. Тренди взуття: виберіть ідеальні пари для будь-якого образу",
      text: "Погляньте на найгарячіші тренди взуття цього сезону від AKOKO. Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, Від зручних кросівок до елегантних туфель - ми допоможемо вам знайти ідеальну пару для кожної обстановки.",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "7",
      title: "7. Тренди взуття: виберіть ідеальні пари для будь-якого образу",
      text: "Погляньте на найгарячіші тренди взуття цього сезону від AKOKO.  Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, Від зручних кросівок до елегантних туфель - ми допоможемо вам знайти ідеальну пару для кожної обстановки.",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "8",
      title: "8. Тренди взуття: виберіть ідеальні пари для будь-якого образу",
      text: "Погляньте на найгарячіші тренди взуття цього сезону від AKOKO. Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, Від зручних кросівок до елегантних туфель - ми допоможемо вам знайти ідеальну пару для кожної обстановки.",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "9",
      title: "9. Тренди взуття: виберіть ідеальні пари для будь-якого образу",
      text: "Погляньте на найгарячіші тренди взуття цього сезону від AKOKO. Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, Від зручних кросівок до елегантних туфель - ми допоможемо вам знайти ідеальну пару для кожної обстановки.",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    },
    {
      id: "10",
      title: "10. Тренди взуття: виберіть ідеальні пари для будь-якого образу",
      text: "Погляньте на найгарячіші тренди взуття цього сезону від AKOKO. Дізнайтеся про найгарячіші модні тренди сезону весна-літо 2024 від AKOKO. Від барвистих кольорів до елегантних фасонів, Від зручних кросівок до елегантних туфель - ми допоможемо вам знайти ідеальну пару для кожної обстановки.",
      imageSrc:
        "https://png.pngtree.com/background/20230513/original/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-picture-image_2507152.jpg",
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const items = blogData
    .reverse()
    .slice(startIndex, startIndex + itemsPerPage)
    .map((post) => (
      <BlogCardComponent
        key={post.id}
        blogId={post.id}
        title={post.title}
        imageSrc={post.imageSrc}
        text={post.text}
      />
    ));

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 gap-y-[60px] tablet:grid-cols-2 tablet:gap-y-[71px] tablet:gap-x-[64px] laptop:gap-y-[118px] laptop:gap-x-[108px] desktop:gap-y-[146px] desktop:gap-x-[134px] mb-16 tablet:mb-24 laptop:mb-32 desktop:mb-48">
        {items}
      </div>
      <PaginationComponent
        totalItems={blogData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default BlogPage;
