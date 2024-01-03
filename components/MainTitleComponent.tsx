import React from "react";

interface TitleComponent {
  title: string;
  levelTitle: 1 | 2 | 3 | 4 | 5 | 6;
  classNames?: string;
}

const MainTitleComponent: React.FC<TitleComponent> = ({
  title,
  levelTitle,
  classNames,
}) => {
  const HeadingTag = `h${levelTitle}` as const;

  let fontSizeClass: string;
  switch (levelTitle) {
    case 1:
      fontSizeClass =
        "text-[20px] tracking-[1.1px] tablet:text-[26px] tablet:tracking-[1.4px] laptop:text-[42px] laptop:tracking-[2.2px] desktop:text-[54px] desktop:tracking-[2.7px]";
      break;
    case 2:
      fontSizeClass =
        "text-[20px] tracking-[1.1px] tablet:text-[26px] tablet:tracking-[1.4px] laptop:text-[42px] laptop:tracking-[2.2px] desktop:text-[54px] desktop:tracking-[2.7px]";
      break;
    case 3:
      fontSizeClass = "";
      break;
    case 4:
      fontSizeClass = "";
      break;
    case 5:
      fontSizeClass = "";
      break;
    case 6:
      fontSizeClass = "";
      break;
    default:
      fontSizeClass = "text-base";
      break;
  }

  return (
    <HeadingTag
      className={`font-bold text-black text-center ${classNames} ${fontSizeClass}`}
    >
      {title}
    </HeadingTag>
  );
};

export default MainTitleComponent;
