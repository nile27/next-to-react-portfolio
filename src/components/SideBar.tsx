import { useEffect, useState } from "react";
import NavBtn from "./NavBtn";
import { projectData, Pricearr } from "../lib/dummyData";
import { useRecoilValue } from "recoil";
import { contentRefsState } from "../state/ContentRefs";

const SideBar: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const contentRefs = useRecoilValue<(HTMLElement | null)[]>(contentRefsState);

  const navText = [
    { text: "Skill" },
    { text: "Project", length: `${projectData.length}` },
    { text: "Experience" },
    { text: "Price", length: `${Pricearr.length}` },
  ];
  const [activeSection, setActiveSection] = useState<boolean[]>(
    Array.from({ length: 4 }, () => false)
  );

  function scrollFunc(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ): void {
    const name: string = text;
    const menu: { [key: string]: number } = {
      Skill: 0,
      Project: 1,
      Experience: 2,
      Price: 3,
    };

    const targetIndex = menu[name];
    if (typeof targetIndex === "number" && contentRefs[targetIndex]) {
      const targetElement = contentRefs[targetIndex];
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  useEffect(() => {
    const changeNavBtnStyle = () => {
      contentRefs.forEach((ref, idx) => {
        if (
          typeof ref?.offsetTop === "number" &&
          Math.floor(document.documentElement.scrollTop) >
            Math.floor(ref?.offsetTop) + Math.floor(window.innerHeight * 0.6)
        ) {
          let changeArr = Array.from({ length: 4 }, () => false);
          changeArr[idx] = true;
          setActiveSection([...changeArr]);
        }
      });
    };

    window.addEventListener("scroll", changeNavBtnStyle);
    return () => {
      window.removeEventListener("scroll", changeNavBtnStyle);
    };
  }, [contentRefs]);

  useEffect(() => {}, []);

  return (
    <section
      className={` tablet900:hidden   flex flex-col justify-start items-start min-w-[180px] max-w-[200px] h-full  relative ${
        isDark ? "tablet900:bg-DBg" : "tablet900:bg-LBg"
      }`}
    >
      <div
        className={`pt-[4rem]  flex flex-col  justify-start items-start gap-3 w-full left-1  sticky top-8 min-h-[100vh]  ${
          isDark ? "bg-DBg" : "bg-LBg"
        }`}
      >
        <div className="flex w-full flex-col justify-start items-start gap-3 ">
          {navText.map((item, idx) => (
            <NavBtn
              text={item.text}
              key={idx}
              length={item.length}
              onClick={(e) => scrollFunc(e, item.text)}
              isActive={activeSection[idx]}
            />
          ))}
        </div>
        <div className="flex flex-col w-full absolute bottom-[100px] tablet900:hidden">
          <h2
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-H font-bold`}
          >
            Contact
          </h2>
          <h2 className={`${isDark ? "text-DText" : "text-LText"} font-bold`}>
            ddj03104@gmail.com
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
