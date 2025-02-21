/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
      colors: {
        DBg: "#16161A",
        DMainPurple: "#7F5AF0",
        DSecondBg: "#242629",
        DText: "#FFFFFE",
        DThirdColor: "#2CB67D",
        DNav_disable: "#4a4c53",
        LBg: "#E7E7E9",
        LMainPurple: "#5E41B4",
        LSecondBg: "#D1D1E9",
        LText: "#16161A",
        LThirdColor: "#67A78E",
        LNav_disable: "#AAABB1",
      },
      fontFamily: {
        sans: ["var(--noto_sans)"],
      },
      fontSize: {
        BigH: "50px",
        H: "36px",
        SH: "24px",
        Md: "16px",
        Sm: "12px",
      },
      keyframes: {
        blur: {
          "0%": { filter: "blur(0)" },
          "25%": { filter: "blur(2px)" },
          "50%": { filter: "blur(5px)" },
          "75%": { filter: "blur(2px)" },
          "100%": { filter: "blur(0)" },
        },
        zoomOutDown: {
          "40%": {
            opacity: "1",
            transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
            "animation-timing-function":
              "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          },
          to: {
            opacity: "0",
            transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
            "animation-timing-function": "cubic-bezier(0.175, 0.885, 0.32, 1)",
          },
        },
        slideBckTop: {
          "0%": {
            transform: "translateZ(-200px) translateY(-200px)",
          },
          "100%": {
            transform: "translateZ(0) translateY(0)",
          },
        },
        trackingInContract: {
          "0%": {
            letterSpacing: "1em",
            opacity: "0",
          },
          "40%": {
            opacity: "0.6",
          },
          "100%": {
            letterSpacing: "normal",
            opacity: "1",
          },
        },
        appear: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        mainAppear: {
          "0%": { opacity: "0" },

          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        disappear: {
          "0%": { visibility: "visible" },
          "100%": { visibility: "hidden" },
        },
        slide: {},
      },
      animation: {
        blur: "blur 4s infinite",
        zoomOutDown: "zoomOutDown 3s",
        slideBckTop: "slideBckTop 3s",
        trackingInContract: "trackingInContract 2s",
        appear: "appear 3.2s",
        disappear: "disappear 3.4s",
        mainAppear: "mainAppear 1s",
      },
      textShadow: {
        sm: "0 8px 9px #c4b59d, 0px -2px 1px #fff",
        light: "0 8px 9px #5E41B4, 0px -2px 1px #16161A",
      },
      screens: {
        mobile: { max: "600px" },
        tablet: { max: "800px" },
        tablet900: { max: "900px" },
        textBoxHalf: { max: "1170px" },
      },
    },
    gridTemplateColumns: {
      "auto-fill-100": "repeat(auto-fill, minmax(100px))",
      "auto-fit-100": "repeat(auto-fit, minmax(100px))",
    },
    gridTemplateRows: {
      "auto-fill-row-100": "repeat(auto-fill, minmax(100px))",
      "auto-fit-row-100": "repeat(auto-fit, minmax(100px))",
    },
  },
  plugins: [],
};
export default config;
