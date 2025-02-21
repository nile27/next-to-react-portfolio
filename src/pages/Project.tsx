import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { useRef, useEffect } from "react";
import { CarouselBox } from "../components/Project/CarouselBox";
import TextBox from "../components/Project/TextBox";
import { projectData } from "../lib/dummyData";
import { contentRefsState } from "../state/ContentRefs";

const Project = () => {
  const content1Ref = useRef(null);
  const isDark = useRecoilValue(isDarkAtom);
  const setContentRefs = useSetRecoilState(contentRefsState);

  useEffect(() => {
    setContentRefs((prevRefs) => {
      const newRefs = [...prevRefs];
      newRefs[1] = content1Ref.current;
      return newRefs;
    });
  }, []);
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
        Project
      </h1>

      {projectData.map((item, idx) => {
        return (
          <article
            className={`flex justify-start items-center p-[30px] bg-DSecondBg w-full h-auto rounded-lg gap-[20px] textBoxHalf:flex-col ${
              isDark ? "bg-DSecondBg" : "bg-LSecondBg"
            }`}
            key={item.header}
          >
            <CarouselBox idx={idx} width={400} height={305} />
            <TextBox idx={idx} />
          </article>
        );
      })}
    </section>
  );
};

export default Project;
