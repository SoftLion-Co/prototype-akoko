import { useEffect, useState, RefObject } from "react";

type RefType = {
  href: string;
  ref: RefObject<HTMLElement>;
};

const useScroll = (refs: RefType[]) => {
  const [activeSection, setActiveSection] = useState(refs[0].href);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      refs.forEach(({ href, ref }) => {
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          setActiveSection(href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  return activeSection;
};

export default useScroll;
