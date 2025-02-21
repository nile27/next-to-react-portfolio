import { atom } from "recoil";

export const contentRefsState = atom<(HTMLElement | null)[]>({
  key: "contentRefsState",
  default: [],
});
