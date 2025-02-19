"use client";

import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { useInvoice } from "@/context/InvoiceContext";

export const ItemSection = () => {
  const [itemCount, setItemCount] = useState(1);
  const { formData, handleItemChange } = useInvoice();
  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">Items</h3>
      <Input
        title="HSN Code"
        type="text"
        value={formData.items[0].hsnCode}
        onChange={(e) => handleItemChange(e, 0, "hsnCode")}
        required
      />
      <Input
        title="Particular"
        type="text"
        value={formData.items[0].particular}
        onChange={(e) => handleItemChange(e, 0, "particular")}
        required
      />
      <Input
        title="KG"
        type="text"
        value={formData.items[0].kg}
        onChange={(e) => handleItemChange(e, 0, "kg")}
        required
      />
      <Input
        title="Rate"
        type="text"
        value={formData.items[0].rate}
        onChange={(e) => handleItemChange(e, 0, "rate")}
        required
      />
      <Input
        title="Amount"
        type="text"
        value={formData.items[0].amount}
        onChange={(e) => handleItemChange(e, 0, "amount")}
        required
      />

      {itemCount >= 2 && (
        <div className="flex flex-col bg-white gap-4 p-4 rounded-2xl">
          <Input
            title="HSN Code"
            type="text"
            value={formData.items[1].hsnCode}
            onChange={(e) => handleItemChange(e, 1, "hsnCode")}
          />
          <Input
            title="Particular"
            type="text"
            value={formData.items[1].particular}
            onChange={(e) => handleItemChange(e, 1, "particular")}
          />
          <Input
            title="KG"
            type="text"
            value={formData.items[1].kg}
            onChange={(e) => handleItemChange(e, 1, "kg")}
          />
          <Input
            title="Rate"
            type="text"
            value={formData.items[1].rate}
            onChange={(e) => handleItemChange(e, 1, "rate")}
          />
          <Input
            title="Amount"
            type="text"
            value={formData.items[1].amount}
            onChange={(e) => handleItemChange(e, 1, "amount")}
          />
        </div>
      )}

      {itemCount >= 3 && (
        <>
          <Input
            title="HSN Code"
            type="text"
            value={formData.items[2].hsnCode}
            onChange={(e) => handleItemChange(e, 2, "hsnCode")}
          />
          <Input
            title="Particular"
            type="text"
            value={formData.items[2].particular}
            onChange={(e) => handleItemChange(e, 2, "particular")}
          />
          <Input
            title="KG"
            type="text"
            value={formData.items[2].kg}
            onChange={(e) => handleItemChange(e, 2, "kg")}
          />
          <Input
            title="Rate"
            type="text"
            value={formData.items[2].rate}
            onChange={(e) => handleItemChange(e, 2, "rate")}
          />
          <Input
            title="Amount"
            type="text"
            value={formData.items[2].amount}
            onChange={(e) => handleItemChange(e, 2, "amount")}
          />
        </>
      )}

      {itemCount >= 4 && (
        <div className="flex flex-col bg-white gap-4 p-4 rounded-2xl">
          <Input
            title="HSN Code"
            type="text"
            value={formData.items[3].hsnCode}
            onChange={(e) => handleItemChange(e, 3, "hsnCode")}
          />
          <Input
            title="Particular"
            type="text"
            value={formData.items[3].particular}
            onChange={(e) => handleItemChange(e, 3, "particular")}
          />
          <Input
            title="KG"
            type="text"
            value={formData.items[3].kg}
            onChange={(e) => handleItemChange(e, 3, "kg")}
          />
          <Input
            title="Rate"
            type="text"
            value={formData.items[3].rate}
            onChange={(e) => handleItemChange(e, 3, "rate")}
          />
          <Input
            title="Amount"
            type="text"
            value={formData.items[3].amount}
            onChange={(e) => handleItemChange(e, 3, "amount")}
          />
        </div>
      )}

      <div className="flex gap-4 mt-4">
        <Button
          label="+"
          onClick={() => setItemCount((prev) => prev + 1)}
          classNames="rounded-full px-3 py-1 bg-gradient-to-r from-green-500 to-green-700"
        />
        <Button
          label="-"
          onClick={() => setItemCount((prev) => prev - 1)}
          classNames="rounded-full px-3 py-1 bg-gradient-to-r from-red-500 to-red-700"
        />
      </div>
    </section>
  );
};
