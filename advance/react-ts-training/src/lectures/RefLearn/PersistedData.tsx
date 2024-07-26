import React, { useEffect, useRef, useState } from "react";

export default function PersistedData() {
  const [theme, setTheme] = useState("dark");
  const [count, setCount] = useState(0);

  // ref value will persist/survive between re-renders
  // ref value change will not trigger re-render
  const timesRef = useRef(0);

  timesRef.current++;

  const showRenderTimes = () => {
    // console.log("Rendered for", timesRef.current, "times");
    console.log("Rendered for", timesRef.current, "times");
  };

  return (
    <div>
      <h1>Persisted Data</h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Theme: {theme}</div>
      <div>Count: {count}</div>
      <button onClick={showRenderTimes}>
        Show How Many Times Components Re-rendered
      </button>
    </div>
  );
}
