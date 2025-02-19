"use client";

import { useEffect, useState } from "react";
import { SearchInput } from "../Input";
import { Button } from "../Button";
import { InvoiceList } from "../InvoiceList.tsx";

export const InvoiceSearch = () => {
  const [yearQuery, setYearQuery] = useState<string>("");
  const [monthQuery, setMonthQuery] = useState<string>("");
  const [customerQuery, setCustomerQuery] = useState<string>("");

  const [invoiceList, setInvoiceList] = useState<
    Array<{ year: string; month: string; name: string }>
  >([]);

  useEffect(() => {
    searchHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchHandler = async () => {
    try {
      const response = await fetch("api/invoice/search", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          yearInput: yearQuery,
          monthInput: monthQuery,
          customerInput: customerQuery,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        throw new Error("HTTP error!");
      }
      const data = await response.json();
      setInvoiceList(data.result);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while searching the invoices.");
    }
  };

  const renderInvoices = () => {
    const groupedInvoices = invoiceList.reduce((acc, invoice) => {
      if (!acc[invoice.year]) {
        acc[invoice.year] = {};
      }
      if (!acc[invoice.year][invoice.month]) {
        acc[invoice.year][invoice.month] = [];
      }
      acc[invoice.year][invoice.month].push(invoice.name);
      return acc;
    }, {} as Record<string, Record<string, string[]>>);

    return <InvoiceList invoices={groupedInvoices} />;
  };

  return (
    <div className="flex flex-wrap h-full bg-gray-100">
      <div className="flex gap-2 m-4 w-full">
        <SearchInput
          title="Year"
          value={yearQuery}
          onChange={(event) => {
            setYearQuery(event.target.value);
          }}
        />
        <SearchInput
          title="Month"
          value={monthQuery}
          onChange={(event) => {
            setMonthQuery(event.target.value);
          }}
        />
        <SearchInput
          title="Customer"
          value={customerQuery}
          onChange={(event) => {
            setCustomerQuery(event.target.value);
          }}
        />
        <Button label="Search" onClick={searchHandler} />
      </div>
      {invoiceList.length > 0 && renderInvoices()}
    </div>
  );
};
