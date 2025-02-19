import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 text-white font-semibold rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
