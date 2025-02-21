import { useRef, useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { contentRefsState } from "../state/ContentRefs";
import ExperienceFrame from "../components/Experience/ExperienceFrame";

const Experience: React.FC = () => {
  const content1Ref = useRef<HTMLElement | null>(null);
  const isDark = useRecoilValue(isDarkAtom);
  const setContentRefs = useSetRecoilState(contentRefsState);

  useEffect(() => {
    setContentRefs((prevRefs) => {
      const newRefs = [...prevRefs];
      newRefs[2] = content1Ref.current;
      return newRefs;
    });
  }, [setContentRefs]);
  return (
    <section
      className="w-full h-auto bg-transparent flex justify-start items-start flex-col gap-[1rem] p-[20px]"
      ref={content1Ref}
    >
      <h1
        className={`text-H ${
          isDark ? "text-DMainPurple" : "text-LMainPurple"
        }  font-bold`}
      >
        Education & Experience
      </h1>
      <main className="flex flex-col gap-2 w-full ">
        <article className="flex flex-row justify-start gap-3 w-full tablet900:flex-col ">
          <div
            className={`min-w-[160px] border-r-[5px] tablet900:border-r-0 tablet900:border-b-[1px]  border-${
              isDark ? "DMainPurple" : "LMainPurple"
            }`}
          >
            <h2
              className={`text-SH ${
                isDark ? "text-DMainPurple" : "text-LMainPurple"
              }  font-bold`}
            >
              Education
            </h2>
          </div>
          <div
            className={`w-full h-auto ${
              isDark ? "bg-DSecondBg" : "bg-LSecondBg"
            } p-[20px] flex flex-col gap-2 rounded-lg`}
          >
            <span
              className={`${
                isDark ? "text-DText" : "text-LText"
              } text-left w-full`}
            >
              2015.03 ~ 2022.08
            </span>
            <div className=" bg-transparent flex gap-1 flex-col">
              <span
                className={`text-[20px] font-bold whitespace-nowrap text-left w-full ${
                  isDark ? "text-DText" : "text-LText"
                }`}
              >
                한남대학교 (졸업)
              </span>

              <div className="flex justify-start gap-[10px] mobile:flex-col">
                <span
                  className={`text-[20px] font-bold whitespace-nowrap   ${
                    isDark ? "text-DText" : "text-LText"
                  }`}
                >
                  {"컴퓨터통신무인기술학과 "}
                </span>
                <span
                  className={`text-[20px] font-bold  ${
                    isDark ? "text-DText" : "text-LText"
                  }`}
                >
                  {"(컴퓨터 트랙)"}
                </span>
              </div>
            </div>
          </div>
        </article>
        <ExperienceFrame />
      </main>
    </section>
  );
};

export default Experience;
