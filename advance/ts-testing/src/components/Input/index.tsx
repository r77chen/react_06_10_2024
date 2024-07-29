import React from "react";

export interface InputProps {
  label: string;
  value?: string;
}

export default function Input(props: InputProps) {
  const { label, value } = props;
  return (
    <label role="label">
      <span>{label}</span>
      <input value={value} />
    </label>
  );
}
