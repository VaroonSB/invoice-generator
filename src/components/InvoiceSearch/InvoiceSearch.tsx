"use client";

import { useEffect, useState } from "react";
import { SearchInput } from "../Input";
import { Button } from "../Button";
import { InvoiceList } from "../InvoiceList.tsx";
import { useInvoice } from "@/context/InvoiceContext";

export const InvoiceSearch = () => {
  const [yearQuery, setYearQuery] = useState<string>("");
  const [monthQuery, setMonthQuery] = useState<string>("");
  const [customerQuery, setCustomerQuery] = useState<string>("");

  const [showYearSuggestion, setShowYearSuggestion] = useState<boolean>(false);
  const [showMonthSuggestion, setShowMonthSuggestion] =
    useState<boolean>(false);

  const { invoiceList, searchInvoice } = useInvoice();

  useEffect(() => {
    searchInvoice(yearQuery, monthQuery, customerQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterHandler = async (fetchAll?: boolean) => {
    await (fetchAll
      ? searchInvoice("", "", "")
      : searchInvoice(yearQuery, monthQuery, customerQuery));
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
    <div className="flex flex-col">
      <section id="Filters" className="flex flex-wrap bg-gray-100">
        <section id="Filter Input" className="flex gap-2 m-4 w-full">
          <SearchInput
            title="Year"
            value={yearQuery}
            onChange={(event) => {
              setYearQuery(event.target.value);
            }}
            onClick={() => {
              setShowYearSuggestion(true);
            }}
          />
          <SearchInput
            title="Month"
            value={monthQuery}
            onChange={(event) => {
              setMonthQuery(event.target.value);
            }}
            onClick={() => {
              setShowMonthSuggestion(true);
            }}
          />
          <SearchInput
            title="Customer"
            value={customerQuery}
            onChange={(event) => {
              setCustomerQuery(event.target.value);
            }}
          />
          <Button
            label="Filter"
            onClick={() => {
              filterHandler();
            }}
          />
        </section>
        <section id="Suggestions" className="flex w-full mx-4 my-2 gap-2">
          <div className="w-full">
            {showYearSuggestion && (
              <ul className="bg-white p-4 rounded-lg shadow-md">
                {Array.from(
                  new Set(invoiceList.map((invoice) => invoice.year))
                ).map((value, index) => (
                  <li
                    key={index}
                    className="p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => {
                      setYearQuery(value);
                      setShowYearSuggestion(false);
                    }}
                  >
                    <div className="font-bold text-lg">{value}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="w-full">
            {showMonthSuggestion && (
              <ul className="bg-white p-4 rounded-lg shadow-md">
                {Array.from(
                  new Set(invoiceList.map((invoice) => invoice.month))
                ).map((value, index) => (
                  <li
                    key={index}
                    className="p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => {
                      setMonthQuery(value);
                      setShowMonthSuggestion(false);
                    }}
                  >
                    <div className="font-bold text-lg">{value}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="w-full"></div>
          {(showMonthSuggestion ||
            showYearSuggestion ||
            yearQuery ||
            customerQuery ||
            monthQuery) && (
            <Button
              label="Clear"
              classNames="h-12"
              onClick={() => {
                setShowYearSuggestion(false);
                setShowMonthSuggestion(false);
                setCustomerQuery("");
                setMonthQuery("");
                setYearQuery("");
                filterHandler(true);
              }}
            />
          )}
        </section>
      </section>
      {invoiceList.length > 0 && renderInvoices()}
    </div>
  );
};
