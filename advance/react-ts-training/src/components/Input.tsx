import { forwardRef } from "react";
import "./input.css";

export interface InputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, value, onChange } = props;

  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input value={value} onChange={onChange} ref={ref} />
    </div>
  );
});

export default Input;
