"use client";

import { useInvoice } from "@/context/InvoiceContext";
import { Input } from "../Input";

export const TaxAndTotalSection = () => {
  const { formData, handleChange } = useInvoice();
  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Tax and Total
      </h3>
      <Input
        title="SGST"
        name="sgst"
        type="text"
        value={formData.sgst}
        onChange={handleChange}
      />
      <Input
        title="CGST"
        name="cgst"
        type="text"
        value={formData.cgst}
        onChange={handleChange}
      />
      <Input
        title="IGST"
        name="igst"
        type="text"
        value={formData.igst}
        onChange={handleChange}
      />
      <Input
        title="Round Off"
        name="roundOff"
        type="text"
        value={formData.roundOff}
        onChange={handleChange}
      />
      <Input
        title="Total"
        name="total"
        type="text"
        value={formData.total}
        onChange={handleChange}
        required
      />
      <Input
        title="Total In Words"
        name="totalInWords"
        type="text"
        value={formData.totalInWords}
        onChange={handleChange}
        required
      />
    </section>
  );
};
