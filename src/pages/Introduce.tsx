import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";

import { useEffect } from "react";
import SvgButton from "../components/SvgButton";

import { isTimeAtom } from "../state/isTimeAtom";

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText("ddj03104@gmail.com");
    alert("이메일이 복사되었습니다.");
  } catch (error) {
    console.error(error);
  }
};

const Introduce = () => {
  const isDark = useRecoilValue<boolean>(isDarkAtom);
  const isTime = useRecoilValue<boolean>(isTimeAtom);
  const setTheme = useSetRecoilState(isDarkAtom);

  useEffect(() => {
    const Window: (Window & typeof globalThis) | undefined =
      typeof window !== "undefined" ? window : undefined;
    if (Window) {
      let theme =
        Window && Window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(theme);
    }
  }, [setTheme]);
  return (
    <section
      className={`${
        isTime ? "flex" : "hidden"
      } justify-center items-center w-full h-full ${
        isDark ? "bg-DBg" : "bg-LBg"
      } animate-mainAppear py-[15px] tablet:flex-col relative `}
    >
      <aside className="flex h-[100vh] py-10 justify-between items-start flex-col min-w-[240px] p-[1rem] tablet:p-0 tablet:w-[100%] tablet:justify-between tablet:h-auto ">
        <div className=" w-full flex justify-center items-start gap-[2rem] flex-col tablet:flex-row tablet:justify-center ">
          <div className=" w-full tablet:w-auto">
            <h1
              className={` text-H font-bold  text-DText mb-3 ${
                isDark ? "text-DText" : "text-LText"
              } tablet:hidden `}
            >
              Contact
            </h1>
            <SvgButton btnType={"email"} size={"md"} onClick={copyToClipboard}>
              ddj03104@gmail.com
            </SvgButton>
          </div>
          <div className=" w-full tablet:flex tablet:w-auto">
            <h2
              className={` text-H text-DText mb-3 font-bold ${
                isDark ? "text-DText" : "text-LText"
              } tablet:hidden `}
            >
              My Link
            </h2>
            <div className=" flex justify-center items-start flex-col w-full gap-[2rem] tablet:flex-row tablet:justify-center tablet:w-auto ">
              <a
                href="https://github.com/nile27"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-auto"
              >
                <SvgButton btnType="git" size="SH">
                  Github
                </SvgButton>
              </a>
            </div>
          </div>
        </div>
        <span className="w-full text-center text-sm text-DNav_disable tablet:hidden ">
          최근 업데이트: 2025.03.01
        </span>
      </aside>
      <main className=" w-full h-full flex justify-center items-center tablet:justify-start tablet:pt-[calc(100vh-95vh)]  gap-[2rem] tablet:gap-[1rem] flex-col relative mb-[100px]  ">
        <h1
          className={`${isDark ? "text-DText" : "text-LText"} text-H font-bold`}
        >
          MinGyu’s Portfolio
        </h1>
        <img src="/Img/profile.png" alt="profile" width={280} height={300} />

        <div className="flex flex-col gap-2">
          <h2
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-H font-bold tablet:text-SH`}
          >
            Front-End Developer
          </h2>
          <span
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-sm font-bold`}
          >
            도전을 즐기는 개발자 임민규입니다.
          </span>
          <span
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-sm font-bold`}
          >
            새로운 것들에 대해 항상 도전하고 배우려고 노력합니다
          </span>
        </div>
        {/* <button
          className={` bottom-[3%] tablet:left-[45%] left-[47%] absolute z-[20]  cursor-pointer bg-transparent px-3 py-2 rounded-md ${
            isDark ? "text-white" : "text-LMainPurple"
          }  animate-bounce cursor-default`}
        >
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
          </svg>
        </button> */}
      </main>
    </section>
  );
};

export default Introduce;
