"use client";
import SkillTag from "./SkillTag";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../state/isDarkAtom";

const SkillBox = (props: { dataArr: string[]; posi: string; h2: string }) => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <article
      className={` flex flex-col justify-start items-start p-[20px] bg-DSecondBg w-full h-auto rounded-lg gap-[20px] ${
        isDark ? "bg-DSecondBg" : "bg-LSecondBg"
      }`}
    >
      <h2
        className={`text-SH ${isDark ? "text-DText" : "text-LText"}  font-bold`}
      >
        {props.h2}
      </h2>

      <div className="w-full h-auto flex flex-wrap  gap-2 ">
        {props.dataArr.map((item, idx) => {
          return <SkillTag text={item} posi={props.posi} key={idx} />;
        })}
      </div>
    </article>
  );
};

export default SkillBox;
