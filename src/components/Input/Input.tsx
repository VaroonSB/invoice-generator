"use client";

import { Invoice } from "@/utils/mapper";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProps {
  title: string;
  name?: keyof Invoice;
  type: HTMLInputTypeAttribute;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  required?: boolean;
}

export const Input = ({
  title,
  type,
  name,
  value,
  onChange,
  required = false,
}: InputProps) => {
  return (
    <div className="flex w-full justify-between items-center px-8 py-4 bg-gray-100 rounded-2xl shadow-md">
      <label className="w-2/6 text-gray-700 font-semibold" htmlFor={title}>
        {title}
      </label>
      <span className="w-1/6 text-gray-500">:</span>
      <input
        className="w-3/6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        id={title}
        name={name}
        placeholder={`Enter ${title}`}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
