"use client";
import { useRecoilValue, useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { isTimeAtom } from "../state/isTimeAtom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const isDark = useRecoilValue<boolean>(isDarkAtom);
  const [isTime, setIsTime] = useRecoilState<boolean>(isTimeAtom);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setIsTime(true);
      document.body.style.overflow = "unset";
    }, 2500);
  }, []);

  return (
    <div
      className={` w-[100vw] h-[100vh] relative overflow-hidden ${
        !isTime ? "flex " : "hidden"
      } z-50`}
    >
      <section
        className={`flex justify-center items-center fixed z-50 w-full h-full ${
          isDark ? "bg-DBg" : "bg-LBg"
        } animate-disappear `}
      >
        <div className=" w-full h-full flex justify-center items-center flex-col ">
          <span
            className={`animate-trackingInContract text-[5vw] ${
              isDark ? "text-DText" : "text-[#7F5AF0]"
            } text-shadow-light  bg-[linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%]`}
          >
            Welcome
          </span>
          <span
            className={`animate-appear text-[3vw] font-semibold ${
              isDark ? "text-DText" : "text-LText"
            }`}
          >
            프론트엔드 개발자 임민규입니다.
          </span>
        </div>
      </section>
    </div>
  );
}

export default Intro;
