import React from "react";
import { characterCount } from "./recoil/CharacterAtom";
import characterAtom from "./recoil/CharacterAtom";
import { useRecoilState, useRecoilValue } from "recoil";

function Characters() {
  const textLength = useRecoilValue(characterCount);
  const [, setCharacter] = useRecoilState(characterAtom);
  return (
    <form action="">
      <input
        onChange={(e) => setCharacter(e.target.value)}
        type="text"
        placeholder="Add Text"
      />
      <span className="textLength">Text length:{textLength}</span>
    </form>
  );
}

export default Characters;
