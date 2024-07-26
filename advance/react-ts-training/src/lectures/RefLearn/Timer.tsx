import { useRef, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef<number | undefined>();

  const startTimer = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
  };

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}
