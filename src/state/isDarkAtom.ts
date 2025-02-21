import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const Window: (Window & typeof globalThis) | undefined =
  typeof window !== "undefined" ? window : undefined;

const { persistAtom } = recoilPersist({
  key: "isDark",
  storage: Window?.sessionStorage,
});
export const isDarkAtom = atom<boolean>({
  key: "isDarkKey",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
