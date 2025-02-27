import { MouseEventHandler } from "react";

interface ButtonProps {
  type?: "submit" | "button";
  label: string;
  classNames?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  type = "button",
  label,
  classNames = "",
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={
        "px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 text-white font-semibold rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 " +
        classNames
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
};
