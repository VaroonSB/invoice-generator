"use client";

import { RefObject } from "react";
import { Input } from "../Input";

interface InvoiceNumberSectionProps {
  refs: { invoiceNumberRef: RefObject<HTMLInputElement | null> };
}

export const InvoiceNumberSection = ({ refs }: InvoiceNumberSectionProps) => {
  const { invoiceNumberRef } = refs;
  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Invoice Number
      </h3>
      <Input
        title="Invoice Number"
        type="text"
        ref={invoiceNumberRef}
        required
      />
    </section>
  );
};
