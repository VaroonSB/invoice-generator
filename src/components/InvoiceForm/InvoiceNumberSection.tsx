"use client";

import { RefObject } from "react";
import { Input } from "../Input";

interface InvoiceNumberSectionProps {
  refs: {
    invoiceNumberRef: RefObject<HTMLInputElement | null>;
    invoiceDateRef: RefObject<HTMLInputElement | null>;
  };
}

export const InvoiceNumberSection = ({ refs }: InvoiceNumberSectionProps) => {
  const { invoiceNumberRef, invoiceDateRef } = refs;
  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Invoice Number
      </h3>
      <Input
        title="Invoice Number"
        type="text"
        ref={invoiceNumberRef}
        required
      />
      <Input
        title="Invoice Date"
        type="date"
        defaultValue={new Date().toISOString().split("T")[0]}
        ref={invoiceDateRef}
        required
      />
    </section>
  );
};
