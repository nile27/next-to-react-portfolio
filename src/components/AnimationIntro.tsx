import { useRecoilValue, useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { isTimeAtom } from "../state/isTimeAtom";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroAnimation() {
  const [isTime, setIsTime] = useRecoilState<boolean>(isTimeAtom);
  const isDark = useRecoilValue<boolean>(isDarkAtom);
  useEffect(() => {
    console.log("hidden");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setIsTime(true);
      console.log("unset");
      document.body.style.overflow = "unset";
    }, 3000);
  }, [isTime]);

  return (
    <div
      className={` w-[100vw] h-[100vh] relative justify-center items-center  overflow-hidden ${
        !isTime ? "flex" : "hidden"
      } z-50`}
    >
      {!isTime && (
        <>
          <div className="flex flex-col items-center gap-10">
            <motion.h1
              className={`text-7xl font-bold ${
                !isDark ? "text-DMainPurple" : "text-LMainPurple"
              }`}
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: "-150%", opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            >
              Front-End Develover
            </motion.h1>

            <motion.h1
              className={`${
                !isDark ? "text-DBg" : "text-LBg"
              } text-4xl font-bold`}
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: "150%", opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            >
              안녕하세요. 프론트엔드 개발자 임민규입니다.
            </motion.h1>
          </div>
        </>
      )}
    </div>
  );
}
