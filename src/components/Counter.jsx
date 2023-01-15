import React from "react";
import { useRecoilState } from "recoil";
import countAtom from "./recoil/CountAtom";

function Counter() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div className="counterBox">
      <button onClick={() => setCount(count + 1)} className="countBtn">
        +
      </button>
      <span className="count">{count}</span>
      <button onClick={() => setCount(count - 1)} className="countBtn">
        -
      </button>
    </div>
  );
}

export default Counter;
