import { useRef, useState } from "react";
import Input from "../../components/Input";

export default function OurUI() {
  //   const [firstName, setFirstName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
  };

  const handleGetPosition = () => {
    const input = inputRef.current;
    // console.log(input?.getBoundingClientRect().top);
    // console.log(input?.getBoundingClientRect().left);

    // console.log(input?.offsetTop);
    // console.log(input?.offsetLeft);
  };

  return (
    <div>
      {/* <Input
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      /> */}

      <Input ref={inputRef} label="First Name" />

      <button onClick={handleClick}>Show Value</button>
      <button onClick={handleGetPosition}>Get Position</button>
    </div>
  );
}
