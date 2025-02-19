"use client";

import { useState } from "react";
import { SearchInput } from "../Input";
import { Button } from "../Button";
import { useCustomer } from "@/hooks/useCustomer";
import { useInvoice } from "@/context/InvoiceContext";
import { CustomerSuggestion } from "./CustomerSuggestion";

export const CustomerSearch = () => {
  const [customerQuery, setCustomerQuery] = useState<string>("");

  const { customerList, setCustomerList, searchCustomer } = useCustomer();
  const { setCustomerForm } = useInvoice();

  const searchHandler = async () => {
    await searchCustomer(customerQuery);
    setCustomerQuery("");
  };

  return (
    <>
      <div className="flex gap-2">
        <SearchInput
          title="Search Customer"
          value={customerQuery}
          onChange={(event) => {
            setCustomerQuery(event.target.value);
            setCustomerList([]);
          }}
        />
        <Button label="Search" onClick={searchHandler} />
      </div>
      {customerList.length > 0 && (
        <CustomerSuggestion
          customerList={customerList}
          onSelectCustomer={(customer) => {
            setCustomerForm(customer);
            setCustomerList([]);
          }}
        />
      )}
    </>
  );
};
