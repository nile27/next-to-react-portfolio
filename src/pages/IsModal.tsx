import { useEffect } from "react";
import { projectData } from "../lib/dummyData";
import { useRecoilValue, useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { isModalAtom, modalIndex } from "../state/isModalAtom";

import { CarouselBox } from "../components/Project/CarouselBox";
import ProjectSkillTag from "../components/Project/ProjectSkillTag";

import GitSvg from "../components/SvgComponents/GitSvg";

const IsModal = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const [isModal, setIsModal] = useRecoilState(isModalAtom);
  const idx = useRecoilValue<number>(modalIndex);
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModal]);
  return (
    <>
      {isModal && (
        <>
          <section className="fixed z-30 backdrop-blur-md bg-[rgba(255,255,192,0.1)] w-full h-[100vh]  inset-0 overflow-y-auto">
            <div className="flex  w-full flex-row justify-center items-start h-auto relative ">
              <article
                className={`  pb-[100px] ${
                  isDark
                    ? "bg-DBg border-DMainPurple"
                    : "bg-LBg border-DMainPurple"
                } border-[1px] w-[100vw]  rounded-lg z-30 t-[30%] flex flex-col justify-start items-center h-auto overflow-y-auto mt-10 tablet:mx-0 mx-16 pt-[60px] px-[5%]  gap-2 relative shadow-[0 4px 8px rgba(0, 0, 0, 0.2)] `}
              >
                <div className="flex flex-col justify-center items-center gap-[10px]"></div>
                <span
                  className={`${isDark ? "text-DText" : "text-LText"} p-[10px]`}
                >
                  {projectData[idx].date}
                </span>
                <span
                  className={`${
                    isDark ? "text-DMainPurple" : "text-LMainPurple"
                  } text-H font-bold p-[10px]  tablet:text-SH`}
                >
                  {projectData[idx].header}
                </span>
                <div className="flex flex-row flex-wrap justify-center gap-2 p-[10px]">
                  {projectData[idx].modalTag.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`${
                          isDark
                            ? "text-DText border-DMainPurple"
                            : "text-LText border-LMainPurple"
                        } gap-2 flex flex-col justify-center tablet:text-[12px] whitespace-nowrap items-center w-auto h-auto px-[15px] py-[5px] rounded-lg border-[1px] hover:scale-110 duration-150 hover:ring-1 `}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div
                  className={`flex rounded-xl px-[40px] tablet:px-[10px] justify-center w-full  max-w-[700px] h-auto border-[5px] border-b-[8px] ${
                    isDark ? " border-DText" : " border-LSecondBg"
                  }`}
                >
                  <CarouselBox idx={idx} width={700} height={350} />
                </div>
                <div
                  className={`flex flex-col justify-center items-center w-[80%] p-6 border-b-[1px] mb-5 ${
                    isDark ? "border-DSecondBg" : "border-LSecondBg"
                  }  `}
                >
                  {projectData[idx].testID?.id && (
                    <div
                      className={`flex flex-row w-full justify-start items-center gap-2 ${
                        isDark ? "text-DText" : "text-LText"
                      } text-SH font-bold pb-2 `}
                    >
                      ⭐️
                      <span
                        className={` items-center ${
                          isDark ? "text-DText" : "text-LText"
                        } text-Md `}
                      >
                        테스트 계정 -
                      </span>
                      <span
                        className={` items-center ${
                          isDark ? "text-DText" : "text-LText"
                        } text-Md `}
                      >
                        ID: {projectData[idx].testID?.id}
                      </span>
                      <span
                        className={`${
                          isDark ? "text-DText" : "text-LText"
                        } text-Md `}
                      >
                        PW: {projectData[idx].testID?.pw}
                      </span>
                    </div>
                  )}
                  <p className={` ${isDark ? "text-DText" : "text-LText"}`}>
                    {projectData[idx].modalP}
                  </p>
                </div>
                <div className="flex flex-col pt-6 gap-2 w-full mb-5 ">
                  <span
                    className={`${
                      isDark ? "text-DText" : "text-LText"
                    } text-H font-bold pl-[20px] pb-2 tablet:text-SH`}
                  >
                    🛠️ 사용 기술
                  </span>
                  <div className="flex gap-3 justify-start flex-wrap ">
                    {projectData[idx].skill.map((item, idx) => {
                      return (
                        <ProjectSkillTag key={idx} isDark={isDark}>
                          {item}
                        </ProjectSkillTag>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col pt-6 gap-2  w-full">
                  <span
                    className={`${
                      isDark ? "text-DText" : "text-LText"
                    } text-H font-bold px-[10px]  tablet:text-SH pl-[20px] tablet:pl-[0px]`}
                  >
                    🛠️ 사이트 기능
                  </span>
                  <ul
                    className={`h-auto w-full flex flex-col gap-2 tablet:pl-0 tablet:pt-2  pt-3 ${
                      isDark ? "border-white" : "border-black"
                    } list-disc `}
                  >
                    {projectData[idx].introText?.map((item, idx) => {
                      return (
                        <li
                          className={` ml-[10px] mobile:text-[14px] ${
                            isDark ? "text-DText" : "text-LText"
                          } `}
                          key={idx}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-col pt-6 gap-2  w-full">
                  <span
                    className={`${
                      isDark ? "text-DText" : "text-LText"
                    } text-H font-bold px-[10px]  tablet:text-SH pl-[20px] tablet:pl-[0px]`}
                  >
                    🛠️ 작업 기여도
                  </span>
                  <ul
                    className={`h-auto w-full flex flex-col gap-2 tablet:pl-0 tablet:pt-2  pt-3 ${
                      isDark ? "border-white" : "border-black"
                    } list-disc `}
                  >
                    {projectData[idx].modalFirstli?.map((item, idx) => {
                      return (
                        <li
                          className={` ml-[10px] mobile:text-[14px] ${
                            isDark ? "text-DText" : "text-LText"
                          } `}
                          key={idx}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {projectData[idx].modalSecondli && (
                  <div className="flex flex-col pt-6 gap-2 w-full  ">
                    <span
                      className={`${
                        isDark ? "text-DText" : "text-LText"
                      } text-H font-bold px-[10px] mb-3 tablet:text-SH pl-[20px] tablet:pl-[0px]`}
                    >
                      ⛔️ Trouble Shooting
                    </span>
                    <ul
                      className={` h-auto w-full flex flex-col gap-2 tablet:pl-[0px]  ${
                        isDark ? "border-white" : "border-black"
                      } `}
                    >
                      {projectData[idx].modalSecondli?.map((item, idx) => {
                        return (
                          <div key={idx}>
                            <li
                              className={`mobile:text-[14px], mb-3 ${
                                isDark
                                  ? "text-DText bg-DSecondBg"
                                  : "text-LText bg-LSecondBg"
                              }  p-2 whitespace-pre-line`}
                            >
                              {item.troble}
                            </li>
                            <li
                              className={`mobile:text-[14px] whitespace-pre-line ${
                                isDark ? "text-DText" : "text-LText"
                              } p-2`}
                            >
                              {item.fix}
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </article>
            </div>
          </section>
          <aside className=" tablet:flex-row tablet:left-[5%] tablet:top-[50px] tablet:right-[auto] tablet:h-auto tablet:w-full tablet:justify-start  tablet:gap-2  min-w-[60px] z-50 h-auto gap-4  fixed  flex flex-col justify-start items-center right-[9%] top-[70px]">
            <button
              onClick={() => setIsModal(!isModal)}
              className="bg-DMainPurple  hover:text-DMainPurple hover:border-DMainPurple cursor-pointer flex justify-center items-center rounded-full w-[40px] h-[40px] text-white tracking-wider shadow-xl hover:border-[1px] hover:scale-105 duration-300 hover:ring-1 "
            >
              <img
                src="/Img/close.svg"
                alt="close"
                width={15}
                height={15}
                style={{ width: 15, height: 15 }}
              />
            </button>

            {projectData[idx].Link.gitLink && (
              <a
                href={projectData[idx].Link.gitLink}
                target="_blank"
                className="w-auto h-auto tablet:w-auto"
              >
                <GitSvg style={"git"}>Github</GitSvg>
              </a>
            )}
            {projectData[idx].Link.figmaLink && (
              <a
                href={projectData[idx].Link.figmaLink}
                target="_blank"
                className="w-auto h-auto tablet:w-auto"
              >
                <GitSvg style={"figma"}>Figma</GitSvg>
              </a>
            )}
            {projectData[idx].Link.siteLink &&
              projectData[idx].header !== "Mingyu's Portfolio" && (
                <a
                  href={projectData[idx].Link.siteLink}
                  target="_blank"
                  className="w-auto h-auto tablet:w-auto"
                >
                  <GitSvg style={"link"}>배포 사이트</GitSvg>
                </a>
              )}
          </aside>
        </>
      )}
    </>
  );
};

export default IsModal;
