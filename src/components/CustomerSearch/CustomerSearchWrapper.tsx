"use client";

import { ReactNode } from "react";

interface CustomerSearchWrapperProps {
  children: ReactNode;
}

export const CustomerSearchWrapper = ({
  children,
}: CustomerSearchWrapperProps) => {
  return <div className="flex w-full p-4 bg-gray-100 min-h-screen">{children}</div>;
};
