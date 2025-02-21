import { useRef, useEffect } from "react";
import SkillBox from "../components/Skill/SkillBox";
import { frontTagArr, BackTagArr, EtcTagArr, DBTagArr } from "../lib/dummyData";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { contentRefsState } from "../state/ContentRefs";

const Skill: React.FC = () => {
  const content1Ref = useRef<HTMLElement | null>(null);
  const isDark = useRecoilValue(isDarkAtom);
  const setContentRefs = useSetRecoilState(contentRefsState);

  useEffect(() => {
    setContentRefs((prevRefs) => {
      const newRefs = [...prevRefs];
      newRefs[0] = content1Ref.current;
      return newRefs;
    });
  }, []);
  return (
    <section
      className={`w-full  h-auto bg-transparent flex justify-start items-start flex-col gap-[1rem] p-[20px]`}
      ref={content1Ref}
    >
      <h1
        className={`text-H ${
          isDark ? "text-DMainPurple" : "text-LMainPurple"
        }  font-bold`}
      >
        Skill
      </h1>
      <SkillBox dataArr={frontTagArr} posi={"front"} h2={"Front-End"} />
      <SkillBox dataArr={BackTagArr} posi={"Back"} h2={"Back-End"} />
      <SkillBox dataArr={DBTagArr} posi={"DB"} h2={"DB"} />
      <SkillBox dataArr={EtcTagArr} posi={"Etc"} h2={"ETC"} />
    </section>
  );
};

export default Skill;
