import { atom } from "recoil";

export const isModalAtom = atom<boolean>({
  key: "isModalAtom",
  default: false,
});

export const modalIndex = atom<number>({
  key: "modalIndex",
  default: 0,
});
