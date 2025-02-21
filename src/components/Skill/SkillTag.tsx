import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../state/isDarkAtom";

type TSkillTag = {
  text: string;
  posi: string;
};

const SkillTag = (props: TSkillTag) => {
  const { text, posi } = props;
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <div
      className={` ${
        isDark ? "bg-DBg" : "bg-LBg"
      } gap-2 flex flex-col justify-center min-w-[100px] min-h-[100px] max-w-[120px]  items-center w-auto h-full p-[10px] rounded-lg hover:border-[1px] hover:scale-105 duration-150 hover:ring-1 `}
    >
      <div className="h-[25px] w-[25px] overflow-hidden">
        <img
          src={`/Img/Skill_${posi}/${text}.svg`}
          alt="typescript"
          width={25}
          height={25}
        />
      </div>
      <span
        className={` w-full ${
          isDark ? "text-DText" : "text-LText"
        } text-center whitespace-break-space mobile:text-[14px] `}
      >
        {text !== "Styled" ? text : `${text} Components`}
      </span>
    </div>
  );
};

export default SkillTag;
