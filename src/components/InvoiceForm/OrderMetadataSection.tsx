"use client";

import { useInvoice } from "@/context/InvoiceContext";
import { Input } from "../Input";

export const OrderMetadataSection = () => {
  const { formData, handleChange } = useInvoice();
  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Order Metadata
      </h3>
      <Input
        title="Despatch Through"
        name="despatchThrough"
        type="text"
        value={formData.despatchThrough}
        onChange={handleChange}
      />
      <Input
        title="Order Through"
        name="orderThrough"
        type="text"
        value={formData.orderThrough}
        onChange={handleChange}
      />
      <Input
        title="Order Date"
        name="orderDate"
        type="date"
        value={formData.orderDate}
        onChange={handleChange}
      />
    </section>
  );
};
