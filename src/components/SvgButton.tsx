import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";

type TMainButton = React.ComponentProps<"button"> & {
  children: string;
  btnType: "email" | "git" | "velog";
  size?: "SH" | "md";
};
type TBtnStyle = {
  [key: string]: string;
};

const SvgButton = (props: TMainButton) => {
  const { children, btnType, size, ...restBtnProps } = props;
  const isDark = useRecoilValue(isDarkAtom);
  const btnStyle: TBtnStyle = {
    email:
      "M5 25C4.3125 25 3.72417 24.7554 3.235 24.2663C2.74583 23.7771 2.50083 23.1883 2.5 22.5V7.5C2.5 6.8125 2.745 6.22417 3.235 5.735C3.725 5.24583 4.31333 5.00083 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2563 6.225 27.5008 6.81333 27.5 7.5V22.5C27.5 23.1875 27.2554 23.7763 26.7663 24.2663C26.2771 24.7563 25.6883 25.0008 25 25H5ZM15 16.25L25 10V7.5L15 13.75L5 7.5V10L15 16.25Z",
    git: "M15 3C13.3585 3 11.733 3.32332 10.2165 3.95151C8.69989 4.57969 7.3219 5.50043 6.16117 6.66116C3.81696 9.00537 2.5 12.1848 2.5 15.5C2.5 21.025 6.0875 25.7125 11.05 27.375C11.675 27.475 11.875 27.0875 11.875 26.75V24.6375C8.4125 25.3875 7.675 22.9625 7.675 22.9625C7.1 21.5125 6.2875 21.125 6.2875 21.125C5.15 20.35 6.375 20.375 6.375 20.375C7.625 20.4625 8.2875 21.6625 8.2875 21.6625C9.375 23.5625 11.2125 23 11.925 22.7C12.0375 21.8875 12.3625 21.3375 12.7125 21.025C9.9375 20.7125 7.025 19.6375 7.025 14.875C7.025 13.4875 7.5 12.375 8.3125 11.4875C8.1875 11.175 7.75 9.875 8.4375 8.1875C8.4375 8.1875 9.4875 7.85 11.875 9.4625C12.8625 9.1875 13.9375 9.05 15 9.05C16.0625 9.05 17.1375 9.1875 18.125 9.4625C20.5125 7.85 21.5625 8.1875 21.5625 8.1875C22.25 9.875 21.8125 11.175 21.6875 11.4875C22.5 12.375 22.975 13.4875 22.975 14.875C22.975 19.65 20.05 20.7 17.2625 21.0125C17.7125 21.4 18.125 22.1625 18.125 23.325V26.75C18.125 27.0875 18.325 27.4875 18.9625 27.375C23.925 25.7 27.5 21.025 27.5 15.5C27.5 13.8585 27.1767 12.233 26.5485 10.7165C25.9203 9.19989 24.9996 7.8219 23.8388 6.66116C22.6781 5.50043 21.3001 4.57969 19.7835 3.95151C18.267 3.32332 16.6415 3 15 3Z",
    velog:
      "M3.75 0.5C1.6725 0.5 0 2.1725 0 4.25V26.75C0 28.8275 1.6725 30.5 3.75 30.5H26.25C28.3275 30.5 30 28.8275 30 26.75V4.25C30 2.1725 28.3275 0.5 26.25 0.5H3.75ZM12.3538 8.3125C13.1413 8.3125 13.61 8.6875 13.76 9.4375L15.5887 19.8162C16.1696 19.0471 16.6471 18.4 17.0212 17.875C17.6431 16.9799 18.1801 16.0287 18.625 15.0337C19.1317 13.9646 19.385 13.0083 19.385 12.165C19.385 11.6592 19.2442 11.2562 18.9625 10.9562C18.7 10.6379 18.2029 10.235 17.4713 9.7475C18.2213 8.79083 19.1587 8.3125 20.2837 8.3125C20.8837 8.3125 21.3808 8.49083 21.775 8.8475C22.1875 9.20333 22.3933 9.72833 22.3925 10.4225C22.3925 11.585 21.905 13.0383 20.93 14.7825C19.9742 16.5075 18.1279 19.1042 15.3912 22.5725L12.6075 22.7675L10.4688 10.7325H7.65625V9.55C8.40625 9.30583 9.2875 9.04333 10.3 8.7625C11.3125 8.4625 11.9971 8.3125 12.3538 8.3125Z",
  };

  return (
    <button
      {...restBtnProps}
      className={`w-full tablet:w-auto h-auto flex justify-between items-center gap-3 ease-in-out duration-300 relative  isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-DMainPurple before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 px-4 py-3 text-sm font-semibold text-black ${
        isDark ? "text-DBg" : "text-LBg"
      }  border-b-[1px] ${
        isDark ? "border-gray-200" : "border-gray-900"
      } rounded-lg shadow-sm gap-x-2 ${
        isDark ? "text-DBg" : "text-LBg"
      } disabled:opacity-50 disabled:pointer-events-none`}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={btnStyle[btnType]} fill={`${isDark ? "#ffff" : "#16161A"}`} />
      </svg>
      <span
        className={`inline-block align-text-bottom h-[30px] ${
          size === "SH" ? "text-[24px] tablet:text-[2.5vw]" : "text-[14px]"
        } h-full ${isDark ? "text-DText" : "text-LText"} tablet:hidden`}
      >
        {children}
      </span>
    </button>
  );
};

export default SvgButton;
