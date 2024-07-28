import { useRef, useState } from "react";
import OurUI from "./OurUI";
import PersistedData from "./PersistedData";
import Timer from "./Timer";

export default function RefLearn() {
  return (
    <div>
      <h1>Ref Learn</h1>
      {/* <input /> */}
      {/* <RefInput /> */}
      {/* <OurUI /> */}
      {/* <PersistedData /> */}
      <Timer />
    </div>
  );
}

// Recommended way to control input value
function RefInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  // const randomRef = useRef("Qweoiqwdjoqwdoqwkdoqw");

  const handleClick = () => {
    const input = inputRef.current;
    console.log(input?.getBoundingClientRect().width);
    console.log(input?.getBoundingClientRect().top);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus on the input</button>
    </>
  );
}
