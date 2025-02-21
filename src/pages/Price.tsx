import { useRef, useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { contentRefsState } from "../state/ContentRefs";
import PriceCarousel from "../components/Price/PriceCarousel";
const Price: React.FC = () => {
  const content1Ref = useRef<HTMLElement | null>(null);
  const isDark = useRecoilValue(isDarkAtom);
  const setContentRefs = useSetRecoilState(contentRefsState);

  useEffect(() => {
    setContentRefs((prevRefs) => {
      const newRefs = [...prevRefs];
      newRefs[3] = content1Ref.current;
      return newRefs;
    });
  }, []);
  return (
    <section
      className={`w-full overflow-x-hidden   h-auto bg-transparent flex justify-start items-start flex-col gap-[1rem] p-[20px] `}
      ref={content1Ref}
    >
      <h1
        className={`text-H ${
          isDark ? "text-DMainPurple" : "text-LMainPurple"
        }  font-bold`}
      >
        Price
      </h1>

      <main className="flex flex-col gap-2 w-full h-auto items-center justify-center relative p-[20px] ">
        <PriceCarousel />
      </main>
    </section>
  );
};

export default Price;
