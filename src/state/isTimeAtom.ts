import { atom } from "recoil";

export const isTimeAtom = atom<boolean>({
  key: "isTimeAtom",
  default: false,
});
