import React from "react";

interface ButtonProps {
  disabled?: boolean;
  children: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

export default function Button(props: ButtonProps) {
  const { children, disabled, onClick } = props;

  const randomFunction = () => {
    console.log("This is a random function");
  };

  return (
    <button role="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
