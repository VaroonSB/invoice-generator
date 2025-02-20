"use client";

import { Input } from "../Input";
import { CustomerSearch } from "../CustomerSearch";
import { useInvoice } from "@/context/InvoiceContext";

export const CustomerSection = () => {
  const { formData, handleNestedChange } = useInvoice();

  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Customer Details
      </h3>
      <CustomerSearch page="invoice-form" />
      <Input
        title="Customer Name"
        type="text"
        value={formData.customer.customerName}
        onChange={(e) => handleNestedChange(e, "customerName")}
        required
      />
      <Input
        title="Address Line 1"
        type="text"
        value={formData.customer.addressLine1}
        onChange={(e) => handleNestedChange(e, "addressLine1")}
      />
      <Input
        title="Address Line 2"
        type="text"
        value={formData.customer.addressLine2}
        onChange={(e) => handleNestedChange(e, "addressLine2")}
      />
      <Input
        title="Address Line 3"
        type="text"
        value={formData.customer.addressLine3}
        onChange={(e) => handleNestedChange(e, "addressLine3")}
      />
      <Input
        title="Customer GST"
        type="text"
        value={formData.customer.customerGst}
        onChange={(e) => handleNestedChange(e, "customerGst")}
      />
    </section>
  );
};
