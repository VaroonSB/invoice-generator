"use client";

import { useEffect, useState } from "react";
import { SearchInput } from "../Input";
import { Button } from "../Button";
import { useCustomer } from "@/hooks/useCustomer";
import { useInvoice } from "@/context/InvoiceContext";
import { CustomerSuggestion } from "./CustomerSuggestion";
import { CustomerTab } from "./CustomerTab";

export const CustomerSearch = ({
  page,
}: {
  page: "customer-page" | "invoice-search" | "invoice-form";
}) => {
  const [customerQuery, setCustomerQuery] = useState<string>("");

  const { customerList, setCustomerList, searchCustomer } = useCustomer();
  const { setCustomerForm } = useInvoice();

  const isCustomerPage = page === "customer-page";

  useEffect(() => {
    if (isCustomerPage) {
      searchCustomer(customerQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerQuery]);

  const searchHandler = async () => {
    await searchCustomer(customerQuery);
    if (page === "invoice-form" || page === "invoice-search") {
      setCustomerList((prev) => prev.slice(0, 3));
    }
    setCustomerQuery("");
  };

  return isCustomerPage ? (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-4 bg-white p-4 min-h-[5.4rem] rounded-3xl shadow-xl text-lg">
        <SearchInput
          title="Search Customer"
          value={customerQuery}
          onChange={(event) => {
            setCustomerQuery(event.target.value);
          }}
        />
        {customerQuery.length ? (
          <Button
            label="Clear"
            onClick={() => {
              setCustomerQuery("");
            }}
          />
        ) : null}
      </div>
      {customerList.length > 0 && <CustomerTab customerList={customerList} />}
    </div>
  ) : (
    <div className="flex flex-col gap-4 w-full">
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
    </div>
  );
};
