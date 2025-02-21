type TProjectData = {
  header: string;
  date: string;
  skill: string[];
  imgSrc: string[];
  introText: string[];
  team: string;
  modalP?: string;
  testID?: { id: string; pw: string };
  modalFirstli?: string[];
  modalSecondli?: { troble: string; fix: string }[];
  Link: {
    gitLink: string;
    figmaLink?: string;
    siteLink?: string;
  };
  modalTag: string[];
};
interface ITeam {
  header: string;
  semiHeader: string;
  list: string[];
}

type TexperienceData = {
  header: string;
  date: string;
  Learn: string[];
  team: ITeam[];
  header2: string;
};

export const frontTagArr: string[] = [
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "NextJS",
  "Recoil",
  "Styled",
  "TailwindCSS",
  "SCSS",
];

export const BackTagArr: string[] = ["Express", "Mongoose"];
export const DBTagArr: string[] = ["Mongo", "Firebase"];

export const EtcTagArr: string[] = ["Figma", "Github"];

export const projectData: TProjectData[] = [
  {
    header: "Aight Now - AI기반 주식분석플랫폼 ",
    date: "2024.06.24 ~ 2024.08.02 (5주)",
    team: "3명",
    skill: [
      "NextJS",

      "TypeScript",
      "Zustand",
      "Next-Auth",
      "Tailwind CSS",
      "Firebase",
      "DeepL",
      "Puppeteer",
      "Tavily",
      "Together AI",
      "LangChain",
    ],
    imgSrc: [
      "https://github.com/user-attachments/assets/bf3334a6-19a6-4918-b35e-94f34f25914a",
      "https://github.com/user-attachments/assets/cae3cf9d-b764-45ad-9ece-71f01672148c",
      "https://github.com/user-attachments/assets/d5556c28-d93b-4958-bdc2-d6e1663cd6d0",
      "https://github.com/user-attachments/assets/9d7c3830-351e-4da8-ab07-0b5fdadd2d02",
      "https://github.com/user-attachments/assets/00a527c8-9618-43e6-a189-4e37983058f0",
      "https://github.com/user-attachments/assets/d92951f8-22af-4d16-b98d-abd88c9ea981",
      "https://github.com/user-attachments/assets/685092f1-d969-4689-bb0e-afe118acd2f0",
    ],
    introText: [
      "해외 주식 정보 조회 - ( 애플, 아마존, 구글, MS, 테슬라 )",
      "AI 분석을 리포트를 통해 그래프와 수치를 확인할 수 있습니다. - (수익성, 성장성, 관심, 전체적 평가 등)",
      "각 종목들의 최신 뉴스 제공 - ( 네이버 뉴스 크롤링 )",
      "뉴스 기사를 사용자가 원하는 언어로 번역 - ( 영어, 일본어, 중국어, 프랑스어 )",
      "ChatBot을 통해 간단한 주식 종목에 설명을 볼 수 있습니다.",
    ],
    testID: { id: "test1234", pw: "test1234" },
    modalP: `"스나이퍼 팩토리 - 프로젝트 캠프:Next.js" 라는 Next.js 교육 프로그램을 통해 제작하였습니다. "스팩 스페이스" 라는 기업을 통해 "AI기반 주식분석플랫폼" 이라는 과제를 받고 6개의 기업 주식을, AI를 통해 분석하고 보여주는, 기업 분석 리포트 사이트를 제작하였습니다.`,
    modalFirstli: [
      "Login, Sign Up, 번역 기능 담당",
      "Firebase를 이용하여 일반 로그인 & 회원가입, Google 소셜 로그인 구현",
      "이메일을 통한 본인 인증 & 비밀번호 찾기",
      "Next-Auth를 이용하여 Kakao, Naver의 소셜 로그인 구현",
      "DeepL Open API를 이용하여 뉴스 기사 번역 기능 구현",
      "Firebase을 이용한 자동 로그인",
    ],
    modalSecondli: [
      {
        troble: "Firebase-Admin 서비스 키 인증 문제",
        fix: "Firebase-Admin 키인 json 파일을 base64로 인코딩 한 후 직접 env에 추가하여 디코딩 후 사용",
      },
      {
        troble:
          "Next-Auth 세션으로 인한 자동 로그인 문제 - (자동 로그인을 체크하지 않아도 자동 로그인 기능 활성화)",
        fix: "Next-Auth의 세션 유효기간을 짧게 설정하고, Firebase의 로그인 유지 기능으로 변경하여 문제 해결",
      },
      {
        troble: "뉴스 기사 크롤링 태그 형식 저장으로 인한 문자열 번역 문제",
        fix: "jsdom 라이브러리를 이용하여 태그들의 텍스트 값만 추출하여 번역하고, 번역된 문자로 대처하여 다시 보내는 백엔드 기능으로 문제 해결",
      },
      {
        troble: "본인 인증 리다이렉트 Page 문제",
        fix: "회원가입, 비밀번호 찾기 등 이메일을 이용한 본인 인증 시, Firebase의 한 가지의 redirect 페이지만 설정이 가능하여 자체 redirect 페이지에서 param을 이용해서 원하는 페이지로 redirect 할 수 있는 redirect Page 제작하여 문제 해결",
      },
    ],
    Link: {
      gitLink: "https://github.com/nile27/Spacspace_AightNow",
      siteLink: "https://spacspace-aight-now.vercel.app/",
    },
    modalTag: ["팀 프로젝트", "Sniper-Factory", "Sfac-Space", "AI", "주식"],
  },
  {
    header: "Mingyu's Portfolio",
    date: "2024.06.01 ~ 2024.06.06 (6일)",
    team: "개인",
    skill: [
      "NextJS",
      "Figma",
      "TypeScript",
      "Recoil",
      "Styled-Components",
      "Tailwind CSS",
    ],
    imgSrc: [
      "https://github.com/nile27/Next_Portfolio/assets/114140840/1a6ee811-59f3-4376-90fc-f8895552c315",
      "https://github.com/nile27/Next_Portfolio/assets/114140840/520466fa-d2e2-4bc0-a0a8-de35e262c6dd",
      "https://github.com/nile27/Next_Portfolio/assets/114140840/e258b5a3-2f0b-4f07-9c5c-a69429cc8406",
      "https://github.com/nile27/Next_Portfolio/assets/114140840/f4ba4813-e5f5-4fbf-aeaa-32d9d1409ae5",
      "https://github.com/nile27/Next_Portfolio/assets/114140840/4e1ab3cc-7417-4436-9837-9e959388bb46",
      "https://github.com/nile27/Next_Portfolio/assets/114140840/23d21330-33c5-45df-ae37-b919907288a1",
      "https://github.com/nile27/Next_Portfolio/assets/114140840/59c8f42b-4610-4b26-83c9-bf6e3f3e2a08",
    ],
    introText: [
      "저 만의 양식으로 만든 포트폴리오입니다.",
      "다크/라이트 모드 구현",
      "Modal 창을 사용해 가독성 향상 (자세히 보기)",
      "UI가 이전 버전보다 더 눈에 잘 띄도록 애니메이션 효과를 사용",
    ],
    modalP: `"가독성이 매우 부족하고", "눈에 잘 띄지 않는다"라는 피드백을 받고 새로 제작한 포트폴리오입니다.`,
    modalFirstli: [
      "figma를 이용한 화면 설계",
      "shadcn/UI를 이용하여, 개발하는 시간 단축 (캐러셀, 드롭다운 메뉴)",
      "Button, Intro 등 애니메이션 효과를 통해 눈에 더 띄도록 제작",
      "Tailwind CSS를 통해 다크/라이트 모드 구현",
      "Modal 창을 이용해 너무 많은 글을 방지하여 가독성 향상",
      "Vercel의 자동화 배포 기능을 통해 유지 보수 향상",
    ],
    modalSecondli: [
      {
        troble:
          "브라우저의 호환성 문제로 인해 버그 발생 - grid-template-columns",
        fix: "사파리에서 grid 부분이 깨지는 현상이 있어, flex와 flex-wrap을 이용해서 버그 수정",
      },
      {
        troble: "브라우저의 호환성 문제로 인해 버그 발생 - font",
        fix: "버튼의 글자를 조금 더 눈에 잘 띄게 만들기 위해 폰트를 따로 사용했지만 Edge 웹 브라우저에서 폰트를 지원하지 않아, Noto Sans KR로 변경",
      },
    ],
    Link: {
      gitLink: "https://github.com/nile27/Next_Portfolio",
      figmaLink:
        "https://www.figma.com/design/qZze2sAfNDqL95ranIaSfr/Untitled?node-id=0-1&t=slBmJx0GDgf6fumO-0",
      siteLink: "https://mingyu-portfolio.vercel.app/",
    },
    modalTag: ["솔로", "New_Portfolio", "사이드 프로젝트"],
  },
  {
    header: "My_Todo_Calender",
    date: "2024.02 ~ 2024.03 (5주)",
    team: "개인",
    skill: [
      "React",
      "Figma",
      "TypeScript",
      "Redux-toolkit",
      "Styled-Components",

      "ExpressJS",
      "Mongo DB",
    ],
    imgSrc: [
      "https://github.com/nile27/My-Calender/assets/114140840/97d04e13-d75a-460d-b4ef-b424cb442a6e",
      "https://github.com/nile27/My-Calender/assets/114140840/1f56e936-25ae-4ee2-8f06-025d6f3818a6",
      "https://github.com/nile27/My-Calender/assets/114140840/ec3691f3-0145-4f1f-8c83-d973c665fcb9",
      "https://github.com/nile27/My-Calender/assets/114140840/3c667c13-a69a-4642-b582-49c18566a437",
    ],
    introText: [
      "일정 CRUD와 태그 기능을 통해 일정을 관리할 수 있습니다.",
      "일정을 시간 별, 월 별로 한눈에 볼 수가 있습니다.",
      "검색 기능을 통해 일정 이름과 태그를 검색할 수 있습니다.",
    ],
    modalP:
      "Back-End와 Front-End를 같이 제작한 프로젝트입니다. Front-End 실력을 키우기 위해서는 백엔드에서도 어떤 식으로 작업을 하는지에 대한 이해가 필요하다고 생각해서 ExpressJS를 이용하여 프로젝트를 진행하였습니다.",
    modalFirstli: [
      "figma를 이용한 화면 설계",
      "Date-fns와 Date-picker 라이브러리를 이용한 날짜 선택 기능",
      "Redux-tookit을 이용한 전역상태관리 및  태그별 필터링 기능",
      "반응형 웹",
      "공공데이터포털의 공휴일 OPEN API를 이용하여 공휴일 처리",
      "Date 객체를 이용하여 월 별 일정을 확인 할 수 있는 달력 개발",
      "Mongoose 라이브러리를 통해 CRUD 구현",
      "ExpressJS를 이용하여 일정, 검색 API 개발",
    ],
    modalSecondli: [
      {
        troble:
          "Todo-list 페이지에서 새로 고침 시 메인 페이지로 바뀌는 현상 (컴포넌트 재사용 버그 - 오늘의 Todo-list page & day’s Todo-list page)",
        fix: "useParams와 useEffect를 이용하여 특정 일의 Todo-list 페이지로 들어왔을 때에 엔드 포인트를 통해 해당되는 날짜의 Todo-list만 보일 수 있도록 수정",
      },
      {
        troble:
          "한 태그의 모든 일정이 삭제되었을 때, 태그가 아직 남는 버그 현상",
        fix: "태그 자체에 일정 count 객체를 추가하여 count가 0이 되면 태그 삭제 ",
      },
    ],
    Link: {
      gitLink: "https://github.com/nile27/My-Calender",
      figmaLink:
        "https://www.figma.com/design/xTzUSN4KQhBr6LU5IobyZ9/Calender?node-id=0-1&t=Q1zDg41vWQs5A3dD-0",
      siteLink: "https://cheery-moonbeam-28829d.netlify.app/",
    },
    modalTag: ["솔로", "풀스택 프로젝트", "사이드 프로젝트"],
  },
  {
    header: "Portfolio_(구 버전)",
    date: "2023.08 ~ 2023.08 (2주)",
    team: "개인",
    skill: [
      "React",
      "Figma",
      "TypeScript",
      "Recoil",
      "SCSS",
      "react-responsive",
    ],
    imgSrc: [
      "https://user-images.githubusercontent.com/114140840/275229229-ffcd075f-c8bd-4525-8c16-bf36a4e6fa1d.gif",
      "https://user-images.githubusercontent.com/114140840/275229447-d65d0a1f-830c-468c-aa14-e8e5383065fb.gif",
      "https://user-images.githubusercontent.com/114140840/275229641-1fea8946-26bc-4322-9c9b-90d8e15d489c.gif",
    ],
    introText: [
      "반응형 웹 사이트 입니다.",
      "Tap, Modal 등의 UI을 구현하였습니다.",
      "메뉴를 통해 해당 위치로 Scroll이 가능합니다.",
    ],
    modalP:
      "이전 버전의 포트폴리오 사이트이고, 노션, PPT 등 제한적인 양식이 아닌 저만의 양식을 가진 포트폴리오를 가지기 위해 제작하였습니다.",
    modalFirstli: [
      "figma를 이용한 화면 설계",
      "나만의 포트폴리오를 만들어 보기 위해서 제작",
      "새로운 css 툴을 사용해보기 위해 SCSS를 이용하여 제작",
      "keyframe을 통해 애니메이션 효과 제작 (Fade-in/out, DropDown 등)",
      "react-responsive 라이브러리를 통해 Dom Selector들 보다 쉽게 box의 사이즈 조절을 하여 반응형 웹 제작",
      "글, 이미지 등을 따로 관리하여 유지보수를 쉽게 제작",
    ],

    Link: {
      gitLink: "https://github.com/nile27/Portfolio_nile27",
      figmaLink:
        "https://www.figma.com/file/g0fMpeE9IiQ8Ww1Vd37qBd/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4(UI)?type=design&node-id=0-1&mode=design&t=oLZkiFIQhixAqGtt-0",
      siteLink: "https://nile27.github.io/",
    },
    modalTag: ["솔로", "Portfolio_Old-version"],
  },
  {
    header: "잇츠_(맛집 탐색 사이트)",
    date: "2023.05 ~ 2024.05 (4주)",
    team: "팀 (FE: 4명 BE: 3명)",
    skill: [
      "React",
      "styled-component",
      "Recoil",
      "Axios",
      "Kakao Map API",
      "Figma",
    ],
    imgSrc: [
      "https://user-images.githubusercontent.com/118884127/240876205-8526ffcd-84a9-48aa-a49e-7f36252d5e2a.gif",
      "https://user-images.githubusercontent.com/118884127/240876213-8a1fc9cd-ac09-4efe-baf8-0c6035199baf.gif",

      "https://user-images.githubusercontent.com/118884127/240876220-2d012f0b-fb86-4f9d-8242-1c225cc88eb9.gif",
    ],
    introText: [
      "사용자 주변에 어떤 식당들이 있는지 지도를 통해 알려줍니다.",
      "가게 이름, 태그 등을 통해 맛집들을 검색을 할 수가 있습니다.",
      "리뷰, 평점을 통해 가게의 평가 및 평점을 매길 수 있습니다.",
      "사장님 계정을 통해 자신의 가게 등록 및 수정 등을 할 수가 있습니다.",
    ],
    Link: {
      gitLink: "https://github.com/nile27/Eaaaaaaats_refectoring",
      figmaLink: undefined,
      siteLink: undefined,
    },
    modalP:
      "Front-end & Back-end 협업 프로젝트이며, 한 달 정도의 시간을 걸쳐 제작하였고, 첫 OpenAPI를 사용하여 만든 프로젝트입니다. 현재는 유지 비용이 많이 들어 배포사이트는 중단된 상태입니다.",
    modalFirstli: [
      "Front-end & Back-end 협업 프로젝트",
      "figma를 이용한 화면 설계",
      "카카오 지도 API와 가게 위치 자체 API를 이용하여 내 주변 가게 위치 지도 개발",
      "JWT를 이용한 회원 관련 기능 담당 (로그인/ 회원가입/ 회원정보 CRUD/ 사장님 계정, 일반 회원 계정)",
      "Recoil을 이용하여 전역상태관리",
      "ReactJS 개발환경부터 S3 Bucket 환경까지 구성 및 개발 진행",
    ],
    modalSecondli: [
      {
        troble:
          "AWS 과금이 예상보다 많아, 데이터 흐름을 재조정하는 리펙토링 진행 ",
        fix: "어떤 정보를 불러올 때, 데이터를 여러번 불러오는 현상 때문에 과금이 많이 발생이 되어서, 데이터 호출 함수를 기존 보다 상단 위치의 컴포넌트에 작성하여 데이터 호출을 줄이고, 재사용한 데이터을 세션 스토리지에 저장하여 중복 호출을 줄인 경험이 있습니다.",
      },
    ],
    modalTag: ["협업 프로젝트", "맛집 탐색 사이트"],
  },
];

export const experienceData: TexperienceData[] = [
  {
    header: "스나이퍼팩토리 _ 프로젝트 캠프:Next.js 1기",
    header2: "수료",
    date: "2024.06 ~ 2024.08",
    Learn: [
      "Next.js 기반 프론트엔드 과정",
      "TypeScript, Next.js를 통한 웹 개발",
      "Next.js API Routes를 이용한 백엔드 교육",
      "기업 연계 팀 프로젝트",
    ],

    team: [
      {
        header: "AightNow _ (AI기반 주식분석플랫폼)",
        semiHeader: "프로젝트 캠프:Next.js - Team Project",
        list: [
          "담당: 로그인/회원 가입, 소셜 로그인, 뉴스 기사 번역",
          "Next.js를 이용한 Full-Stack 프로젝트",
        ],
      },
    ],
  },
  {
    header: "코드스테이츠 _ FrontEnd 과정",
    header2: "수료",
    date: "2022.12 ~ 2023.06",
    Learn: [
      "JavaScript 기반 프론트엔드 과정",
      "HTML5 / CSS3를 이용한 웹 개발",
      "React 프레임워크를 통한 웹 개발",
      "약 200개 정도의 JavaScript 알고리즘 문제 풀이",
    ],

    team: [
      {
        header: "잇츠 _ (맛집 탐색 사이트)",
        semiHeader: "코드스테이츠 Final Team Project",
        list: [
          "담당: 로그인/회원 가입, 공통 컴포넌트 제작, 맛집 탐색 지도 (Kakao Map)",
          "Front & Back 협업 프로젝트",
        ],
      },
      {
        header: "Stack OverFlow Clone 코딩",
        semiHeader: "코드스테이츠 Pre Team Project",
        list: [
          "담당: 로그인/회원 가입, 공통 컴포넌트 제작, 게시판 제작",
          "Front & Back 첫 협업 프로젝트",
          "디자인, 화면 설계 등 개발 외 기술에 집중도를 줄이고, API 통신, 협업 의사소통 등 협업 프로젝트에 필요한 스킬 위주의 실습 프로젝트 ",
        ],
      },
    ],
  },

  {
    header: "Hannam Design Factory 트랙",
    header2: "수료",
    date: "2019.03 ~ 2020.06",
    Learn: [
      "다양한 학과들과 협업하여 브레인스토밍을 통해 아이디어를 만들어 ProtoType을 제작하는 교내 프로젝트 ",
      "참여 학과 : 디자인 전공, 경영학 전공, 기계공학 전공, 컴퓨터 전공 등",
    ],

    team: [
      {
        header: "물 절약 플랫폼 개발 프로젝트",
        semiHeader:
          "물의 사용량이 평균보다 얼마나 사용하는지를 불빛을 통해 인식을 주는 물 절약 제품",
        list: [
          "K-Water 산학 협력 캡스톤",
          "Arduino & 앱 인벤터 개발 담당",
          "교내 산학 협력 페스티벌 캡스톤 디자인 경진대회 장려상 - 2019.12",
          "학생 창업유망팀 300 경진대회 300팀 최종 선정 - 2020.08",
        ],
      },
      {
        header: "부유형 녹조 제거기 개발 프로젝트 ",
        semiHeader: "수면 위를 떠다니며 녹조를 빨아드려 필터로 걸러내는 제품",
        list: [
          "K-Water 산학 협력 캡스톤",
          "제품 아이디어 개발 담당 (총 7명)",
          "교내 산학 협력 페스티벌 캡스톤 디자인 경진대회 장려상 - 2019.12",
          "학생 창업유망팀 300 경진대회 300팀 최종 선정 - 2020.08",
        ],
      },
      {
        header: "반려동물 구강 건강 장난감 개발 프로젝트",
        semiHeader:
          "반려견과 줄다리기 놀이를 통해 반려견의 구강에서 나는 구취를 통해 건강 상태를 확인하는 제품",
        list: [
          "Arduino 개발 담당",
          "학생 창업유망팀 300 경진 대회 300팀 최종 선정 - 2019.08",
          "WTA(대전 하이테크 페어 아디이어) 공모전 장려상 - 2019.10",
        ],
      },
    ],
  },
];

interface price {
  img: string;
  name: string;
  date: string;
  mainfrom: string;
  from: string | null;
}

export const Pricearr: price[] = [
  {
    img: "/PriceImg/졸업 작품.jpeg",
    name: "2022 컴퓨터공학과 학술제 장려상",
    date: "2022.06",
    mainfrom: "주최: 한남대학교",
    from: "주관: 컴퓨터 공학과",
  },
  {
    img: "/PriceImg/WM_창엄300.jpeg",
    name: "학생 창업유망팀 300 경진대회 300팀 최종 선정",
    date: "2020.08",
    mainfrom: "주최: 교육부, 과학기술정보 통신부",
    from: "주관: 한국연구재단, 한국청년기업가정신 재단",
  },

  {
    img: "/PriceImg/WM_캡스톤 장려상.jpeg",
    name: "2019 산학협력 페스티벌 캡스톤 디자인 경진대회 장려상",
    date: "2019.12",
    mainfrom: "주최,주관: 한남대학교, 한남대 창업지원단",
    from: null,
  },
  {
    img: "/PriceImg/HSV.jpg",
    name: "2019 Hannam Star Venture 상상창업경진대회 최우수상",
    date: "2019.12",
    mainfrom: "주최,주관: 한남대학교, 한남대 창업지원단",
    from: null,
  },
  {
    img: "/PriceImg/WTA.jpeg",
    name: "WTA 대전 하이테크 페어 아이디어 공모전 장려상",
    date: "2019.10",
    mainfrom: "주최,주관: 대전광역시, 세계과학도시연합",
    from: null,
  },
  {
    img: "/PriceImg/CAP_창업300.jpeg",
    name: "학생 창업유망팀 300 경진대회 300팀 최종 선정",
    date: "2019.08",
    mainfrom: "주최: 교육부, 과학기술정보 통신부",
    from: "주관: 한국연구재단, 한국청년기업가정신 재단",
  },
];
