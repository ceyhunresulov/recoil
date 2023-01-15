import { atom, selector } from "recoil";

const characterAtom = atom({
  key: "characterAtom",
  default: "",
});

const characterCount = selector({
  key: "characterCount",
  get: ({ get }) => {
    const chars = get(characterAtom);
    return chars.length;
  },
});

export default characterAtom;
export { characterCount };
