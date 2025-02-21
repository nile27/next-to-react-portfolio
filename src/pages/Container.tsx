import SideBar from "../components/SideBar";

import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { isTimeAtom } from "../state/isTimeAtom";
import { isModalAtom } from "../state/isModalAtom";
import DropDownNav from "../components/DropDownNav";
import { useEffect } from "react";

const Container = ({ children }: any) => {
  const isDark = useRecoilValue(isDarkAtom);
  const isTime = useRecoilValue(isTimeAtom);
  const isModal = useRecoilValue(isModalAtom);

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "#16161A";
    } else {
      document.body.style.backgroundColor = "#E7E7E9";
    }
  }, [isDark]);

  return (
    <div
      className={`${isTime ? "flex" : "hidden"} ${
        isDark ? "bg-[#16161a]" : "bg-[#e7e7e9]"
      } p-[20px]  flex-row tablet900:flex-col   w-[100vw] h-[auto] min-h-[100vh] relative ${
        isModal && "overflow-y-hidden "
      }`}
    >
      <aside className=" tablet900:sticky tablet900:top-0 tablet900:w-full tablet900:z-50">
        <SideBar isDark={isDark} />
        <DropDownNav />
      </aside>

      <div
        className={`w-full h-full flex flex-col justify-start items-start gap-[3rem] relative `}
      >
        {children}
        <div
          className={`w-full h-[10vh] flex justify-center pb-[50px] ${
            isDark ? "text-DText" : "text-LText"
          }`}
        >
          <span
            className={` text-[16px] tablet:text-[12px]  w-full h-full flex justify-center text-center ${
              isDark ? " text-DNav_disable  " : " text-LNav_disable"
            }  bg-[linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%]`}
          >
            현 사이트는 React, Tailwind CSS, Styled-Components로 제작이
            되었습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Container;
