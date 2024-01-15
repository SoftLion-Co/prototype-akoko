import React from "react";
import { Link } from "@/navigation";
import classNames from "classnames";

interface SidebarLinkProps {
  links: {
    href: string;
    title: string;
  }[];
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarLinksComponent: React.FC<SidebarLinkProps> = ({
  links,
  activeLink,
  setActiveLink,
}) => {
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };
  return (
    <aside className="hidden tablet:w-auto tablet:h-min tablet:sticky tablet:top-[100px] tablet:block w-[200px] h-[200px] laptop:top-[170px] desktop:top-[200px]">
      <ul className="flex flex-col tablet:gap-[28px] laptop:gap-[35px] desktop:gap-[40px] w-max">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={classNames(
                link.href == activeLink ? "font-500" : null,
                "font-400 tablet:text-[18px] tablet:tracking-[0.735px] laptop:text-[20px] laptop:tracking-[0.887px] desktop:text-[25px] desktop:tracking-[1px]"
              )}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarLinksComponent;
