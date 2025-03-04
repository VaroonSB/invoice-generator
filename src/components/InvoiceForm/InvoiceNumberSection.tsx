"use client";

import { useInvoice } from "@/context/InvoiceContext";
import { Input } from "../Input";

export const InvoiceNumberSection = () => {
  const { formData, handleChange, operation } = useInvoice();

  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Invoice Number
      </h3>
      <Input
        title="Invoice Number"
        name="invoiceNumber"
        type="text"
        value={formData.invoiceNumber}
        onChange={(e) => {
          if (operation === "create") {
            handleChange(e);
          }
        }}
        required
      />
      <Input
        title="Invoice Date"
        name="invoiceDate"
        type="text"
        value={formData.invoiceDate}
        onChange={(e) => {
          if (operation === "create") {
            handleChange(e);
          }
        }}
        required
      />
    </section>
  );
};
