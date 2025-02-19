"use client";

import { RefObject } from "react";
import { Input } from "../Input";

interface OrderMetadataSectionProps {
  refs: {
    despatchThroughRef: RefObject<HTMLInputElement | null>;
    orderThroughRef: RefObject<HTMLInputElement | null>;
    orderDateRef: RefObject<HTMLInputElement | null>;
  };
}

export const OrderMetadataSection = ({ refs }: OrderMetadataSectionProps) => {
  const { despatchThroughRef, orderThroughRef, orderDateRef } = refs;
  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Order Metadata
      </h3>
      <Input title="Despatch Through" type="text" ref={despatchThroughRef} />
      <Input title="Order Through" type="text" ref={orderThroughRef} />
      <Input title="Invoice Date" type="date" ref={orderDateRef} />
    </section>
  );
};
