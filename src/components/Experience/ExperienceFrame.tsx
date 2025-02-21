import React from "react";
import { isDarkAtom } from "../../state/isDarkAtom";
import { useRecoilValue } from "recoil";
import { experienceData } from "../../lib/dummyData";

const ExperienceFrame = () => {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <article className="flex flex-row justify-start gap-3 w-full tablet900:flex-col  ">
      <div
        className={`min-w-[160px] border-r-[5px] tablet900:border-r-0 tablet900:border-b-[1px]  ${
          isDark ? "border-DThirdColor" : "border-LThirdColor"
        } `}
      >
        <h2
          className={`text-SH  ${
            isDark ? "text-DThirdColor" : "text-LThirdColor"
          }  font-bold `}
        >
          Experience
        </h2>
      </div>
      <div className=" w-full h-full flex flex-col gap-5">
        {experienceData.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`w-full h-auto ${
                isDark ? "bg-DSecondBg " : "bg-LSecondBg border-LText"
              } p-[20px] flex flex-col gap-2 rounded-lg  `}
            >
              <span className={`${isDark ? "text-DText" : "text-LText"}`}>
                {item.date}
              </span>
              <div
                className={`bg-transparent mobile:flex-col flex gap-1 border-b-[1px] w-full pb-2 ${
                  isDark ? "text-DText border-DText" : "text-LText border-LText"
                } `}
              >
                <span
                  className={`text-SH font-bold ${
                    isDark ? "text-DText " : "text-LText"
                  } `}
                >
                  {item.header}
                </span>
                <span
                  className={`text-SH font-bold mobile:hidden ${
                    isDark ? "text-DText " : "text-LText"
                  } `}
                >
                  {" - "}
                </span>
                <span
                  className={`text-SH font-bold ${
                    isDark ? "text-DText " : "text-LText"
                  } `}
                >
                  {item.header2}
                </span>
              </div>
              <div className=" flex flex-col w-full h-auto mt-[10px] ">
                <h3
                  className={` text-SH font-bold ${
                    isDark ? "text-DThirdColor  " : "text-LThirdColor"
                  } text-left w-full`}
                >
                  Learn & Explanation
                </h3>
                <ul className="flex flex-col gap-2 list-disc pl-[15px] pt-2">
                  {item.Learn.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className={`${
                          isDark ? "text-DText" : "text-LText"
                        }  text-left w-full`}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className=" flex flex-col w-full h-auto mt-[10px] ">
                {item.team.length !== 0 && (
                  <h3
                    className={` text-SH font-bold ${
                      isDark ? "text-DThirdColor" : "text-LThirdColor"
                    } text-left w-full`}
                  >
                    Activity
                  </h3>
                )}
                <div className=" flex flex-col w-full h-auto p-[10px] gap-8">
                  {item.team.map((item, idx) => {
                    return (
                      <div key={idx} className="flex flex-col w-full h-auto">
                        <div className=" flex flex-row tablet:flex-col justify-start items-center tablet:items-start tablet:gap-3 gap-8">
                          <span
                            className={` bg-transparent font-bold ${
                              isDark
                                ? "text-[#2AB4E3] border-l-[5px] border-[#2AB4E3] pl-5"
                                : "text-[#0E6E96] border-l-[5px] border-[#0E6E96] pl-5"
                            } whitespace-nowrap `}
                          >
                            Team {idx + 1}
                          </span>
                          <h3
                            className={` text-[20px] bg-transparent font-bold ${
                              isDark ? "text-DText" : "text-LText"
                            }`}
                          >
                            {item.header}
                          </h3>
                        </div>
                        <span
                          className={`p-2 w-full text-left  ${
                            isDark
                              ? "text-DText border-b-DText"
                              : "text-LText border-b-LText"
                          } border-b-2 border-b-[] `}
                        >
                          {item.semiHeader}
                        </span>
                        <ul className=" mt-2 flex flex-col gap-2 p-3 list-disc ">
                          {item.list.map((item, idx) => {
                            return (
                              <li
                                key={idx}
                                className={` w-full text-left ${
                                  isDark
                                    ? "text-DText border-b-DText"
                                    : "text-LText border-b-LText"
                                } `}
                              >
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ExperienceFrame;
