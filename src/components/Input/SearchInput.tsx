import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface SearchInputProps {
  title: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const SearchInput = ({
  title,
  type = "text",
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      id={title}
      value={value}
      placeholder={title}
      onChange={onChange}
    />
  );
};
