import { HTMLInputTypeAttribute, RefObject } from "react";

interface InputProps {
  title: string;
  type: HTMLInputTypeAttribute;
  ref: RefObject<HTMLInputElement | null>;
}

export const Input = ({ title, type, ref }: InputProps) => {
  return (
    <div className="flex flex-row">
      <label htmlFor={title}>{title}</label>
      :
      <input type={type} id={title} ref={ref} placeholder={`Enter ${title}`} />
    </div>
  );
};
