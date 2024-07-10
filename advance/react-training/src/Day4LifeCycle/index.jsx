import React, { useState } from "react";
import ClassCounter from "./Counter";
import PostsList from "./PostsList";
import PostFetcher from "../projects/PostFetcher";

export default function Day4Lifecycle() {
  const [shown, setShown] = useState(true);
  const [count, setCount] = useState(0);

  // console.log("parent rerendering");

  return (
    <div>
      <h1>Day 4 Life Cycle</h1>
      <div>
        <button onClick={() => setShown((prev) => !prev)}>
          {shown ? "Hide Child" : "Show Child"}
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Re-render Parent Component
        </button>
      </div>
      {/* {shown ? <ClassCounter title={"Counter"} /> : null} */}

      {/* <PostsList /> */}
      <PostFetcher />
    </div>
  );
}
